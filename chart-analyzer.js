// ============================================
// CHART ANALYZER - 와인스틴 스테이지 분석기
// Yahoo Finance 데이터 기반 차트 + 매수/매도 신호
// ============================================

const CHART_CONFIG = {
    canvasWidth: 900,
    canvasHeight: 420,
    volumeHeight: 80,
    padding: { top: 20, right: 60, bottom: 30, left: 10 },
    candleColors: { up: '#34d399', down: '#ef4444', wick: '#888' },
    maColors: { ma30w: '#f59e0b', ma10w: '#8b5cf6', ma50d: '#3b82f6' }
};

// ── Yahoo Finance 데이터 가져오기 ──
async function fetchChartData(ticker) {
    const endDate = Math.floor(Date.now() / 1000);
    const startDate = endDate - (2 * 365 * 24 * 60 * 60); // 2년치
    
    // 주봉 데이터 (와인스틴은 주봉 기반)
    const url = `https://query1.finance.yahoo.com/v8/finance/chart/${ticker}?period1=${startDate}&period2=${endDate}&interval=1wk&includePrePost=false`;
    
    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error(`HTTP ${response.status}`);
        const data = await response.json();
        
        const result = data.chart.result[0];
        const quotes = result.indicators.quote[0];
        const timestamps = result.timestamp;
        
        return timestamps.map((t, i) => ({
            date: new Date(t * 1000),
            open: quotes.open[i],
            high: quotes.high[i],
            low: quotes.low[i],
            close: quotes.close[i],
            volume: quotes.volume[i]
        })).filter(d => d.close !== null && d.open !== null);
    } catch (err) {
        // Fallback: CORS proxy 사용
        try {
            const proxyUrl = `https://corsproxy.io/?${encodeURIComponent(`https://query1.finance.yahoo.com/v8/finance/chart/${ticker}?period1=${startDate}&period2=${endDate}&interval=1wk&includePrePost=false`)}`;
            const response = await fetch(proxyUrl);
            if (!response.ok) throw new Error(`Proxy HTTP ${response.status}`);
            const data = await response.json();
            
            const result = data.chart.result[0];
            const quotes = result.indicators.quote[0];
            const timestamps = result.timestamp;
            
            return timestamps.map((t, i) => ({
                date: new Date(t * 1000),
                open: quotes.open[i],
                high: quotes.high[i],
                low: quotes.low[i],
                close: quotes.close[i],
                volume: quotes.volume[i]
            })).filter(d => d.close !== null && d.open !== null);
        } catch (err2) {
            throw new Error('데이터를 가져올 수 없습니다. 티커를 확인하세요.');
        }
    }
}

// ── 이동평균 계산 ──
function calcMA(data, period) {
    return data.map((_, i) => {
        if (i < period - 1) return null;
        let sum = 0;
        for (let j = i - period + 1; j <= i; j++) sum += data[j].close;
        return sum / period;
    });
}

// ── 와인스틴 스테이지 자동 판별 ──
function analyzeStage(data, ma30w) {
    if (data.length < 35) return { stage: '판별 불가', signal: 'NONE', details: '데이터 부족' };
    
    const lastIdx = data.length - 1;
    const price = data[lastIdx].close;
    const ma = ma30w[lastIdx];
    const maPrev5 = ma30w[lastIdx - 5];
    const maPrev10 = ma30w[lastIdx - 10];
    
    if (!ma || !maPrev5) return { stage: '판별 불가', signal: 'NONE', details: 'MA 데이터 부족' };
    
    const priceAboveMa = price > ma;
    const maSlope5 = ma - maPrev5;
    const maSlope10 = maPrev10 ? ma - maPrev10 : maSlope5;
    const maRising = maSlope5 > 0;
    const maFlat = Math.abs(maSlope5 / ma) < 0.005;
    const maFalling = maSlope5 < 0;
    
    // 최근 거래량 vs 평균
    const recentVol = data.slice(-4).reduce((s, d) => s + (d.volume || 0), 0) / 4;
    const avgVol = data.slice(-30).reduce((s, d) => s + (d.volume || 0), 0) / 30;
    const volExpansion = recentVol > avgVol * 1.5;
    
    // 52주 고점/저점
    const last52 = data.slice(-52);
    const high52 = Math.max(...last52.map(d => d.high));
    const low52 = Math.min(...last52.map(d => d.low));
    const pctFromHigh = ((high52 - price) / high52) * 100;
    const pctFromLow = ((price - low52) / low52) * 100;
    
    // 최근 주가가 30주선을 몇 주째 위/아래에 있는지
    let weeksAbove = 0, weeksBelow = 0;
    for (let i = lastIdx; i >= Math.max(0, lastIdx - 10); i--) {
        if (ma30w[i] && data[i].close > ma30w[i]) weeksAbove++;
        else break;
    }
    for (let i = lastIdx; i >= Math.max(0, lastIdx - 10); i--) {
        if (ma30w[i] && data[i].close < ma30w[i]) weeksBelow++;
        else break;
    }
    
    let stage, signal, details, signalColor, action;
    
    if (priceAboveMa && maRising) {
        // Stage 2 - 상승 추세
        stage = 'Stage 2 (상승)';
        signalColor = '#34d399';
        if (pctFromHigh < 5 && volExpansion) {
            signal = 'STRONG_BUY';
            action = '🟢 적극 매수';
            details = `30주선 위 (${weeksAbove}주 연속), 30주선 상승 중, 신고가 근접 (${pctFromHigh.toFixed(1)}% 아래), 거래량 확인✅`;
        } else if (pctFromHigh < 15) {
            signal = 'BUY';
            action = '🟢 매수 적합';
            details = `30주선 위 (${weeksAbove}주 연속), 30주선 상승 중. 52주 고점 대비 ${pctFromHigh.toFixed(1)}% 아래. 건전한 Stage 2 진행 중.`;
        } else {
            signal = 'HOLD';
            action = '🟡 보유/관찰';
            details = `30주선 위이나 고점 대비 ${pctFromHigh.toFixed(1)}% 하락. 조정 구간 - 30주선 터치 시 매수 기회 또는 이탈 시 매도.`;
        }
    } else if (priceAboveMa && maFlat) {
        // Stage 1→2 전환 가능 또는 Stage 3 초기
        stage = 'Stage 1→2 전환 관찰';
        signalColor = '#f0c040';
        signal = 'WATCH';
        action = '🟡 관찰 대기';
        details = `주가가 30주선 위이나 30주선이 아직 평탄. 30주선이 상승 전환되면 Stage 2 진입 매수 신호. 거래량 폭증 주시.`;
    } else if (!priceAboveMa && maFlat) {
        // Stage 1 또는 Stage 3
        stage = pctFromHigh > 25 ? 'Stage 1 (바닥)' : 'Stage 3 (분배 경고)';
        signalColor = pctFromHigh > 25 ? '#64748b' : '#f97316';
        signal = pctFromHigh > 25 ? 'WAIT' : 'SELL';
        action = pctFromHigh > 25 ? '⏸️ 대기 (매수/매도 금지)' : '🔴 매도 권고';
        details = pctFromHigh > 25 
            ? `30주선 평탄 + 주가 아래. 바닥 형성 중 (Stage 1). Stage 2 돌파까지 대기. 52주 고점 대비 ${pctFromHigh.toFixed(1)}% 하락.`
            : `30주선 평탄 + 주가 아래. Stage 3 분배구간 가능성! 보유 중이라면 매도 고려. 30주선 하향 전환 시 즉시 매도!`;
    } else if (!priceAboveMa && maFalling) {
        // Stage 4 - 하락
        stage = 'Stage 4 (하락)';
        signalColor = '#ef4444';
        signal = 'STRONG_SELL';
        action = '🔴 즉시 매도 / 매수 금지';
        details = `30주선 하락 중 + 주가 아래 (${weeksBelow}주 연속). 전형적 Stage 4. 절대 매수 금지! 보유 중이면 즉시 매도. 52주 고점 대비 ${pctFromHigh.toFixed(1)}% 하락.`;
    } else {
        stage = '판별 중';
        signalColor = '#64748b';
        signal = 'NEUTRAL';
        action = '⏸️ 추가 관찰 필요';
        details = `혼합 신호. 다음 1~2주 30주선 방향과 거래량을 관찰.`;
    }
    
    return { stage, signal, signalColor, action, details, 
             price: price.toFixed(2), 
             ma30wValue: ma.toFixed(2),
             pctFromHigh: pctFromHigh.toFixed(1),
             pctFromLow: pctFromLow.toFixed(1),
             volExpansion, weeksAbove, weeksBelow };
}

// ── 차트 렌더링 (Canvas) ──
function renderChart(canvas, data, ma30w, ma10w, analysis) {
    const ctx = canvas.getContext('2d');
    const dpr = window.devicePixelRatio || 1;
    const W = canvas.clientWidth;
    const H = canvas.clientHeight;
    canvas.width = W * dpr;
    canvas.height = H * dpr;
    ctx.scale(dpr, dpr);
    
    const p = CHART_CONFIG.padding;
    const chartW = W - p.left - p.right;
    const priceH = H - p.top - p.bottom - CHART_CONFIG.volumeHeight - 10;
    const volH = CHART_CONFIG.volumeHeight;
    const volTop = p.top + priceH + 10;
    
    // 최근 80주만 표시
    const visibleData = data.slice(-80);
    const visibleMa30 = ma30w.slice(-80);
    const visibleMa10 = ma10w.slice(-80);
    const startIdx = data.length - 80;
    
    // 가격 범위
    let minPrice = Infinity, maxPrice = -Infinity, maxVol = 0;
    visibleData.forEach((d, i) => {
        minPrice = Math.min(minPrice, d.low, visibleMa30[i] || Infinity, visibleMa10[i] || Infinity);
        maxPrice = Math.max(maxPrice, d.high, visibleMa30[i] || -Infinity, visibleMa10[i] || -Infinity);
        maxVol = Math.max(maxVol, d.volume || 0);
    });
    const priceRange = maxPrice - minPrice;
    minPrice -= priceRange * 0.05;
    maxPrice += priceRange * 0.05;
    
    const xScale = chartW / visibleData.length;
    const yScale = (price) => p.top + priceH - ((price - minPrice) / (maxPrice - minPrice)) * priceH;
    const volYScale = (vol) => volTop + volH - (vol / maxVol) * volH;
    
    // 배경
    ctx.fillStyle = '#0f1117';
    ctx.fillRect(0, 0, W, H);
    
    // 가격 그리드
    ctx.strokeStyle = 'rgba(255,255,255,0.06)';
    ctx.lineWidth = 1;
    const gridLines = 5;
    for (let i = 0; i <= gridLines; i++) {
        const y = p.top + (priceH / gridLines) * i;
        ctx.beginPath(); ctx.moveTo(p.left, y); ctx.lineTo(W - p.right, y); ctx.stroke();
        const val = maxPrice - ((maxPrice - minPrice) / gridLines) * i;
        ctx.fillStyle = '#555';
        ctx.font = '10px Inter';
        ctx.textAlign = 'right';
        ctx.fillText('$' + val.toFixed(val > 100 ? 0 : 2), W - 5, y + 4);
    }
    
    // 거래량 바
    visibleData.forEach((d, i) => {
        const x = p.left + i * xScale + xScale * 0.15;
        const w = xScale * 0.7;
        const barH = (d.volume / maxVol) * volH;
        ctx.fillStyle = d.close >= d.open ? 'rgba(52,211,153,0.3)' : 'rgba(239,68,68,0.3)';
        ctx.fillRect(x, volTop + volH - barH, w, barH);
    });
    
    // 캔들스틱
    visibleData.forEach((d, i) => {
        const x = p.left + i * xScale + xScale / 2;
        const w = Math.max(xScale * 0.6, 2);
        const isUp = d.close >= d.open;
        
        // 심지
        ctx.strokeStyle = '#888';
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(x, yScale(d.high));
        ctx.lineTo(x, yScale(d.low));
        ctx.stroke();
        
        // 몸통
        const top = yScale(Math.max(d.open, d.close));
        const bot = yScale(Math.min(d.open, d.close));
        ctx.fillStyle = isUp ? CHART_CONFIG.candleColors.up : CHART_CONFIG.candleColors.down;
        ctx.fillRect(x - w/2, top, w, Math.max(bot - top, 1));
    });
    
    // 30주 이동평균선
    ctx.strokeStyle = CHART_CONFIG.maColors.ma30w;
    ctx.lineWidth = 2.5;
    ctx.setLineDash([]);
    ctx.beginPath();
    let started = false;
    visibleMa30.forEach((val, i) => {
        if (val === null) return;
        const x = p.left + i * xScale + xScale / 2;
        const y = yScale(val);
        if (!started) { ctx.moveTo(x, y); started = true; }
        else ctx.lineTo(x, y);
    });
    ctx.stroke();
    
    // 10주 이동평균선
    ctx.strokeStyle = CHART_CONFIG.maColors.ma10w;
    ctx.lineWidth = 1.5;
    ctx.setLineDash([4, 3]);
    ctx.beginPath();
    started = false;
    visibleMa10.forEach((val, i) => {
        if (val === null) return;
        const x = p.left + i * xScale + xScale / 2;
        const y = yScale(val);
        if (!started) { ctx.moveTo(x, y); started = true; }
        else ctx.lineTo(x, y);
    });
    ctx.stroke();
    ctx.setLineDash([]);
    
    // 범례
    ctx.font = '11px Inter';
    const legendY = p.top + 14;
    ctx.fillStyle = CHART_CONFIG.maColors.ma30w;
    ctx.fillRect(p.left + 5, legendY - 8, 20, 3);
    ctx.fillText('30주 MA (와인스틴)', p.left + 30, legendY);
    
    ctx.fillStyle = CHART_CONFIG.maColors.ma10w;
    ctx.setLineDash([4, 3]);
    ctx.beginPath(); ctx.moveTo(p.left + 175, legendY - 6); ctx.lineTo(p.left + 195, legendY - 6); ctx.strokeStyle = CHART_CONFIG.maColors.ma10w; ctx.stroke();
    ctx.setLineDash([]);
    ctx.fillText('10주 MA', p.left + 200, legendY);
    
    // 날짜 레이블 (하단)
    ctx.fillStyle = '#555';
    ctx.font = '9px Inter';
    ctx.textAlign = 'center';
    visibleData.forEach((d, i) => {
        if (i % 10 === 0) {
            const x = p.left + i * xScale + xScale / 2;
            ctx.fillText(`${d.date.getFullYear()}.${(d.date.getMonth()+1).toString().padStart(2,'0')}`, x, H - 5);
        }
    });
}

// ── 차트 분석기 초기화 ──
function initChartAnalyzer() {
    const section = document.getElementById('chartAnalyzer');
    if (!section) return;
    
    const input = document.getElementById('tickerInput');
    const btn = document.getElementById('analyzeBtn');
    const quickBtns = document.querySelectorAll('.quick-ticker');
    
    btn.addEventListener('click', () => analyzeStock(input.value.trim().toUpperCase()));
    input.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') analyzeStock(input.value.trim().toUpperCase());
    });
    
    quickBtns.forEach(b => {
        b.addEventListener('click', () => {
            input.value = b.dataset.ticker;
            analyzeStock(b.dataset.ticker);
        });
    });
}

async function analyzeStock(ticker) {
    if (!ticker) return;
    
    const resultArea = document.getElementById('chartResult');
    const canvas = document.getElementById('chartCanvas');
    const signalPanel = document.getElementById('signalPanel');
    
    resultArea.style.display = 'block';
    signalPanel.innerHTML = `<div style="text-align:center; padding: 3rem; color: var(--text-muted);">⏳ ${ticker} 데이터를 불러오는 중...</div>`;
    
    // Canvas 초기화
    const ctx = canvas.getContext('2d');
    const dpr = window.devicePixelRatio || 1;
    canvas.width = canvas.clientWidth * dpr;
    canvas.height = canvas.clientHeight * dpr;
    ctx.scale(dpr, dpr);
    ctx.fillStyle = '#0f1117';
    ctx.fillRect(0, 0, canvas.clientWidth, canvas.clientHeight);
    ctx.fillStyle = '#555';
    ctx.font = '14px Inter';
    ctx.textAlign = 'center';
    ctx.fillText('차트 로딩 중...', canvas.clientWidth/2, canvas.clientHeight/2);
    
    try {
        const data = await fetchChartData(ticker);
        if (data.length < 35) throw new Error('데이터가 부족합니다 (최소 35주 필요)');
        
        // 이동평균 계산
        const ma30w = calcMA(data, 30);
        const ma10w = calcMA(data, 10);
        
        // 스테이지 분석
        const analysis = analyzeStage(data, ma30w);
        
        // 차트 렌더링
        renderChart(canvas, data, ma30w, ma10w, analysis);
        
        // 신호 패널 업데이트
        signalPanel.innerHTML = `
            <div class="signal-header" style="border-left: 4px solid ${analysis.signalColor}; padding-left: 1rem; margin-bottom: 1.5rem;">
                <div style="font-size: 1.6rem; font-weight: 900; color: ${analysis.signalColor};">${analysis.action}</div>
                <div style="font-size: 1.1rem; font-weight: 700; margin-top: 0.3rem;">${ticker} — ${analysis.stage}</div>
            </div>
            
            <div class="signal-metrics">
                <div class="signal-metric">
                    <span class="signal-metric-label">현재가</span>
                    <span class="signal-metric-value">$${analysis.price}</span>
                </div>
                <div class="signal-metric">
                    <span class="signal-metric-label">30주 MA</span>
                    <span class="signal-metric-value" style="color: ${CHART_CONFIG.maColors.ma30w}">$${analysis.ma30wValue}</span>
                </div>
                <div class="signal-metric">
                    <span class="signal-metric-label">52주 고점 대비</span>
                    <span class="signal-metric-value" style="color: ${parseFloat(analysis.pctFromHigh) < 10 ? '#34d399' : '#ef4444'}">-${analysis.pctFromHigh}%</span>
                </div>
                <div class="signal-metric">
                    <span class="signal-metric-label">52주 저점 대비</span>
                    <span class="signal-metric-value" style="color: #34d399">+${analysis.pctFromLow}%</span>
                </div>
                <div class="signal-metric">
                    <span class="signal-metric-label">30주선 위</span>
                    <span class="signal-metric-value">${analysis.weeksAbove}주 연속</span>
                </div>
                <div class="signal-metric">
                    <span class="signal-metric-label">거래량 확대</span>
                    <span class="signal-metric-value">${analysis.volExpansion ? '✅ 예' : '❌ 아니오'}</span>
                </div>
            </div>
            
            <div class="signal-detail">
                <div class="signal-detail-title">📝 와인스틴 분석 상세</div>
                <p>${analysis.details}</p>
            </div>
            
            <div class="signal-rules">
                <div class="signal-rules-title">📐 와인스틴 체크리스트</div>
                <div class="checklist-item ${analysis.weeksAbove > 0 ? 'pass' : 'fail'}">
                    ${analysis.weeksAbove > 0 ? '✅' : '❌'} 주가가 30주 이동평균선 위에 있는가?
                </div>
                <div class="checklist-item ${analysis.signal === 'STRONG_BUY' || analysis.signal === 'BUY' ? 'pass' : 'fail'}">
                    ${analysis.signal === 'STRONG_BUY' || analysis.signal === 'BUY' ? '✅' : '❌'} 30주 이동평균선이 상승 중인가?
                </div>
                <div class="checklist-item ${analysis.volExpansion ? 'pass' : 'fail'}">
                    ${analysis.volExpansion ? '✅' : '❌'} 최근 거래량이 평균 대비 1.5배 이상인가?
                </div>
                <div class="checklist-item ${parseFloat(analysis.pctFromHigh) < 25 ? 'pass' : 'fail'}">
                    ${parseFloat(analysis.pctFromHigh) < 25 ? '✅' : '❌'} 52주 고점 대비 25% 이내인가?
                </div>
            </div>
        `;
        
    } catch (err) {
        signalPanel.innerHTML = `
            <div style="text-align: center; padding: 2rem; color: var(--accent-red);">
                <div style="font-size: 2rem; margin-bottom: 0.5rem;">⚠️</div>
                <div style="font-weight: 700;">${err.message}</div>
                <div style="color: var(--text-muted); margin-top: 0.5rem; font-size: 0.85rem;">
                    미국 주식 티커를 입력하세요 (예: AAPL, MSFT, GOOGL)
                </div>
            </div>
        `;
    }
}
