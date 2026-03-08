// ============================================
// LEGENDARY TRADERS STRATEGY DATABASE
// Interactive Application Logic
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    initChartAnalyzer();
    initMarketDashboard();
    initStockPicks();
    initWeinsteinTable();
    initTraderCards();
    initFilters();
    initComparisonMatrix();
    initCommonRules();
    initModal();
});

// ============================================
// WEINSTEIN STAGE ANALYSIS TABLE
// ============================================
function initWeinsteinTable() {
    const table = document.getElementById('weinsteinTable');
    if (!table || typeof WEINSTEIN_STAGE_DATA === 'undefined') return;
    
    const headers = ['종목', '현재 스테이지', '30주선 방향', '가격 vs 30주선', '거래량 신호', '상대강도', '진단'];
    
    let html = '<thead><tr>';
    headers.forEach(h => { html += `<th>${h}</th>`; });
    html += '</tr></thead><tbody>';
    
    WEINSTEIN_STAGE_DATA.forEach(stock => {
        html += `<tr>
            <td class="trader-name-cell">
                <strong style="font-size: 1.1rem;">${stock.ticker}</strong><br>
                <span style="font-size: 0.75rem; color: var(--text-muted);">${stock.nameKr}</span>
            </td>
            <td><span style="color: ${stock.stageColor}; font-weight: 700;">${stock.currentStage}</span></td>
            <td>${stock.ma30w}</td>
            <td style="font-weight: 600; color: #34d399;">${stock.priceVsMa}</td>
            <td>${stock.volumeSignal}</td>
            <td>${stock.relativeStrength}</td>
            <td style="max-width: 250px; font-size: 0.8rem; line-height: 1.4;">${stock.verdict}</td>
        </tr>`;
    });
    
    html += '</tbody>';
    table.innerHTML = html;
}

// ============================================
// MARKET STATUS DASHBOARD
// ============================================
function initMarketDashboard() {
    const container = document.getElementById('marketDashboard');
    const m = MARKET_STATUS;
    const aboveMa200 = m.sp500.price > m.sp500.ma200;
    const aboveMa50 = m.sp500.price > m.sp500.ma50;
    
    container.innerHTML = `
        <div class="market-card highlight">
            <div class="market-card-label">S&P 500</div>
            <div class="market-card-value">${m.sp500.price.toLocaleString()}</div>
            <div class="market-card-note">ATH ${m.sp500.allTimeHigh.toLocaleString()} 대비 -${((1 - m.sp500.price/m.sp500.allTimeHigh)*100).toFixed(1)}%</div>
        </div>
        <div class="market-card">
            <div class="market-card-label">200일 이동평균</div>
            <div class="market-card-value ${aboveMa200 ? 'bullish' : 'bearish'}">${aboveMa200 ? '⬆ 위' : '⬇ 아래'}</div>
            <div class="market-card-note">${m.sp500.ma200.toLocaleString()} ${aboveMa200 ? '(장기 상승추세)' : '(장기 약세)'}</div>
        </div>
        <div class="market-card">
            <div class="market-card-label">50일 이동평균</div>
            <div class="market-card-value ${aboveMa50 ? 'bullish' : 'bearish'}">${aboveMa50 ? '⬆ 위' : '⬇ 아래'}</div>
            <div class="market-card-note">${m.sp500.ma50.toLocaleString()} ${aboveMa50 ? '(단기 강세)' : '(단기 조정)'}</div>
        </div>
        <div class="market-card">
            <div class="market-card-label">RSI (14)</div>
            <div class="market-card-value ${m.sp500.rsi < 30 ? 'bullish' : m.sp500.rsi < 40 ? 'caution' : ''}">${m.sp500.rsi}%</div>
            <div class="market-card-note">${m.sp500.rsi < 30 ? '과매도 (반등 가능)' : m.sp500.rsi < 40 ? '과매도 근접' : m.sp500.rsi > 70 ? '과매수' : '중립'}</div>
        </div>
        <div class="market-card">
            <div class="market-card-label">YTD 수익률</div>
            <div class="market-card-value ${m.sp500.ytd >= 0 ? 'bullish' : 'bearish'}">${m.sp500.ytd > 0 ? '+' : ''}${m.sp500.ytd}%</div>
            <div class="market-card-note">2026년 누적</div>
        </div>
        <div class="market-card">
            <div class="market-card-label">Fed 기준금리</div>
            <div class="market-card-value caution">${m.fedRate}</div>
            <div class="market-card-note">완화 사이클 전환 예상</div>
        </div>
        <div class="market-verdict">
            📋 <strong>시장 진단:</strong> ${m.verdict}
        </div>
    `;
}

// ============================================
// STOCK PICKS
// ============================================
function initStockPicks() {
    const container = document.getElementById('picksGrid');
    
    SCREENER_DATA.forEach((pick, index) => {
        const card = document.createElement('div');
        card.className = 'pick-card';
        card.style.animationDelay = `${index * 0.08}s`;
        
        const sig = SIGNAL_STYLES[pick.signal];
        
        const metricsHtml = Object.entries(pick.keyMetrics)
            .map(([k, v]) => `<span class="pick-metric">${k}: ${v}</span>`)
            .join('');
        
        card.innerHTML = `
            <div class="pick-card-signal" style="background: ${sig.bg}; color: ${sig.color}; border-bottom: 1px solid ${sig.border};">
                ${sig.icon} ${pick.signalText}
            </div>
            <div class="pick-card-body">
                <div class="pick-header">
                    <div class="pick-ticker" style="color: ${sig.color}">${pick.ticker}</div>
                    <div class="pick-info">
                        <div class="pick-name">${pick.nameKr}</div>
                        <div class="pick-sector">${pick.name} · ${pick.sector}</div>
                    </div>
                    <div class="pick-price">${pick.price}</div>
                </div>
                
                <div class="pick-strategies">
                    ${pick.strategyNames.map(s => `<span class="pick-strategy-tag">${s}</span>`).join('')}
                </div>
                
                <ul class="pick-reasons">
                    ${pick.reasoning.map(r => `<li class="pick-reason">${r}</li>`).join('')}
                </ul>
                
                <div class="pick-actions-grid">
                    <div class="pick-action">
                        <div class="pick-action-label">🟢 매수 포인트</div>
                        <div class="pick-action-value buy-point">${pick.buyPoint}</div>
                    </div>
                    <div class="pick-action">
                        <div class="pick-action-label">🔴 손절 기준</div>
                        <div class="pick-action-value stop-loss">${pick.stopLoss}</div>
                    </div>
                    <div class="pick-risk-reward">
                        <div class="pick-action-label">📊 리스크/보상 평가</div>
                        <div class="pick-action-value">${pick.riskReward}</div>
                    </div>
                </div>
                
                <div class="pick-metrics">${metricsHtml}</div>
            </div>
        `;
        
        container.appendChild(card);
    });
}

// ============================================
// TRADER CARDS
// ============================================
function initTraderCards() {
    const grid = document.getElementById('tradersGrid');
    
    TRADERS_DATA.forEach((trader, index) => {
        const card = document.createElement('div');
        card.className = 'trader-card';
        card.dataset.style = trader.style;
        card.dataset.id = trader.id;
        card.style.animationDelay = `${index * 0.05}s`;
        
        const styleColor = STYLE_COLORS[trader.style];
        
        // Get top 2 buy rules and top 1 sell rule for preview
        const topBuyRules = trader.buyRules.filter(r => r.priority === '핵심').slice(0, 2);
        const topSellRules = trader.sellRules.filter(r => r.priority === '핵심').slice(0, 1);
        
        card.innerHTML = `
            <div class="card-header">
                <div class="card-photo">${trader.photo}</div>
                <div class="card-info">
                    <div class="card-name">${trader.name}</div>
                    <div class="card-name-en">${trader.nameEn} · ${trader.era}</div>
                </div>
                <span class="card-style-badge" style="background: ${styleColor.bg}">${styleColor.label}</span>
            </div>
            <div class="card-philosophy">"${trader.philosophy}"</div>
            <div class="card-meta">
                <div class="meta-item">
                    <div class="meta-label">투자 방식</div>
                    <div class="meta-value">${trader.styleName}</div>
                </div>
                <div class="meta-item">
                    <div class="meta-label">최고 수익</div>
                    <div class="meta-value">${trader.peakReturn.split(' ').slice(0,3).join(' ')}</div>
                </div>
                <div class="meta-item">
                    <div class="meta-label">투자 기간</div>
                    <div class="meta-value">${trader.timeframe}</div>
                </div>
                <div class="meta-item">
                    <div class="meta-label">리스크/거래</div>
                    <div class="meta-value">${trader.riskPerTrade}</div>
                </div>
            </div>
            <div class="card-rules-preview">
                ${topBuyRules.map(r => `<span class="rule-tag buy">🟢 ${r.rule}</span>`).join('')}
                ${topSellRules.map(r => `<span class="rule-tag sell">🔴 ${r.rule}</span>`).join('')}
            </div>
            <div class="card-cta">
                전략 상세 보기 <span class="card-cta-arrow">→</span>
            </div>
        `;
        
        card.addEventListener('click', () => openModal(trader));
        grid.appendChild(card);
    });
}

// ============================================
// FILTERS
// ============================================
function initFilters() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            const filter = btn.dataset.filter;
            const cards = document.querySelectorAll('.trader-card');
            
            cards.forEach((card, index) => {
                if (filter === 'all' || card.dataset.style === filter) {
                    card.style.display = '';
                    card.style.animation = 'none';
                    card.offsetHeight; // trigger reflow
                    card.style.animation = `fadeInUp 0.5s ease ${index * 0.05}s both`;
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });
}

// ============================================
// COMPARISON MATRIX
// ============================================
function initComparisonMatrix() {
    const table = document.getElementById('comparisonMatrix');
    
    const headers = ['트레이더', '스타일', '투자 기간', '핵심 매수 규칙', '핵심 손절 규칙', '리스크/거래', '주요 지표'];
    
    let html = '<thead><tr>';
    headers.forEach(h => { html += `<th>${h}</th>`; });
    html += '</tr></thead><tbody>';
    
    TRADERS_DATA.forEach(trader => {
        const topBuy = trader.buyRules.find(r => r.priority === '핵심');
        const topSell = trader.sellRules.find(r => r.priority === '핵심');
        const styleColor = STYLE_COLORS[trader.style];
        
        html += `<tr>
            <td class="trader-name-cell">
                <span style="margin-right: 6px">${trader.photo}</span>
                ${trader.name}
            </td>
            <td><span style="color: ${styleColor.bg}; font-weight: 600;">${styleColor.label}</span></td>
            <td>${trader.timeframe}</td>
            <td style="color: #34d399; max-width: 220px;">${topBuy ? topBuy.rule : '-'}</td>
            <td style="color: #ef4444; max-width: 220px;">${topSell ? topSell.rule : '-'}</td>
            <td>${trader.riskPerTrade}</td>
            <td style="max-width: 200px;">${trader.indicators.slice(0, 3).join(', ')}</td>
        </tr>`;
    });
    
    html += '</tbody>';
    table.innerHTML = html;
}

// ============================================
// COMMON RULES
// ============================================
function initCommonRules() {
    const container = document.getElementById('commonRules');
    
    COMMON_RULES.forEach(rule => {
        const card = document.createElement('div');
        card.className = 'rule-card';
        
        let dots = '';
        for (let i = 0; i < 10; i++) {
            dots += `<div class="importance-dot ${i < rule.importance ? '' : 'empty'}"></div>`;
        }
        
        card.innerHTML = `
            <div class="rule-card-header">
                <span class="rule-icon">${rule.icon}</span>
                <span class="rule-title">${rule.title}</span>
                <div class="rule-importance">${dots}</div>
            </div>
            <p class="rule-description">${rule.description}</p>
            <p class="rule-traders">👤 ${rule.traders.join(', ')}</p>
        `;
        
        container.appendChild(card);
    });
}

// ============================================
// MODAL
// ============================================
function initModal() {
    const overlay = document.getElementById('modalOverlay');
    const closeBtn = document.getElementById('modalClose');
    
    closeBtn.addEventListener('click', closeModal);
    overlay.addEventListener('click', (e) => {
        if (e.target === overlay) closeModal();
    });
    
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closeModal();
    });
}

function openModal(trader) {
    const overlay = document.getElementById('modalOverlay');
    const content = document.getElementById('modalContent');
    const styleColor = STYLE_COLORS[trader.style];
    
    content.innerHTML = `
        <div class="modal-header">
            <div class="modal-photo">${trader.photo}</div>
            <div>
                <div class="modal-name">${trader.name}</div>
                <div class="modal-name-en">${trader.nameEn} · ${trader.era}</div>
                <div class="modal-nickname">${trader.nickname}</div>
            </div>
            <span class="card-style-badge" style="background: ${styleColor.bg}; margin-left: auto;">${styleColor.label}</span>
        </div>
        
        <div class="modal-philosophy">"${trader.philosophy}"</div>
        
        <div class="modal-meta-grid">
            <div class="modal-meta-card">
                <div class="modal-meta-label">투자 접근법</div>
                <div class="modal-meta-value">${trader.approach}</div>
            </div>
            <div class="modal-meta-card">
                <div class="modal-meta-label">투자 기간</div>
                <div class="modal-meta-value">${trader.timeframe}</div>
            </div>
            <div class="modal-meta-card">
                <div class="modal-meta-label">최고 수익</div>
                <div class="modal-meta-value">${trader.peakReturn}</div>
            </div>
            <div class="modal-meta-card">
                <div class="modal-meta-label">리스크/거래</div>
                <div class="modal-meta-value">${trader.riskPerTrade}</div>
            </div>
        </div>
        
        <h3 class="modal-section-title">🟢 매수 규칙 (Buy Rules)</h3>
        <ul class="modal-rules-list">
            ${trader.buyRules.map(r => `
                <li class="modal-rule-item buy">
                    <div class="modal-rule-header">
                        <span class="modal-rule-name">${r.rule}</span>
                        <span class="priority-badge ${r.priority}">${r.priority}</span>
                    </div>
                    <div class="modal-rule-detail">${r.detail}</div>
                </li>
            `).join('')}
        </ul>
        
        <h3 class="modal-section-title">🔴 매도 규칙 (Sell Rules)</h3>
        <ul class="modal-rules-list">
            ${trader.sellRules.map(r => `
                <li class="modal-rule-item sell">
                    <div class="modal-rule-header">
                        <span class="modal-rule-name">${r.rule}</span>
                        <span class="priority-badge ${r.priority}">${r.priority}</span>
                    </div>
                    <div class="modal-rule-detail">${r.detail}</div>
                </li>
            `).join('')}
        </ul>
        
        <h3 class="modal-section-title">📊 사용 지표 (Indicators)</h3>
        <div class="modal-tags">
            ${trader.indicators.map(i => `<span class="modal-tag">${i}</span>`).join('')}
        </div>
        
        <h3 class="modal-section-title">📖 추천 도서</h3>
        <ul class="modal-books">
            ${trader.keyBooks.map(b => `<li class="modal-book">${b}</li>`).join('')}
        </ul>
        
        <h3 class="modal-section-title">⚠️ 흔한 실수 (Mistakes to Avoid)</h3>
        <div class="modal-mistakes">
            ${trader.commonMistakes.map(m => `<span class="modal-mistake">❌ ${m}</span>`).join('')}
        </div>
    `;
    
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    document.getElementById('modalOverlay').classList.remove('active');
    document.body.style.overflow = '';
}
