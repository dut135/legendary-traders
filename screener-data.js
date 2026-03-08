// ============================================
// REAL MARKET SCREENER DATA
// 2026년 3월 8일 기준 실전 데이터
// ============================================

const MARKET_STATUS = {
    date: "2026-03-08",
    sp500: {
        price: 6740.02,
        ma200: 6582.53,
        ma50: 6902.45,
        rsi: 38.5,
        allTimeHigh: 6977.26,
        ytd: -1.54,
        trend: "장기 상승추세 (200일선 위), 단기 조정 중 (50일선 아래)",
        signal: "CAUTION"
    },
    fedRate: "4.25-4.50% (인하 전망)",
    marketPhase: "단기 조정 구간 (RSI 38.5, 과매도 근접)",
    verdict: "장기 상승추세는 유효하나 단기 조정 중. 신규 매수 시 신중한 접근 필요. 조정 완료 후 진입 기회 탐색."
};

const SCREENER_DATA = [
    // ── 오닐 CAN SLIM / 미너비니 SEPA ──
    {
        ticker: "MU",
        name: "Micron Technology",
        nameKr: "마이크론 테크놀로지",
        sector: "반도체/메모리",
        price: "~$108",
        strategies: ["oneil", "minervini", "weinstein"],
        strategyNames: ["CAN SLIM", "SEPA", "와인스틴 Stage 2"],
        signal: "BUY_WATCH",
        signalText: "매수 관찰",
        reasoning: [
            "C ✅ 분기 매출 131% 폭증, AI 메모리 수요 폭발",
            "A ✅ 연간 EPS 고성장 (메모리 슈퍼사이클)",
            "N ✅ HBM3E 신제품, AI 데이터센터용 신규 수요",
            "L ✅ 메모리 섹터 선도주, YTD +37%",
            "VCP 패턴 관찰: 조정 후 변동성 수축 중"
        ],
        buyPoint: "110~115 저항선 돌파 + 거래량 확인 시",
        stopLoss: "매수가 -7~8% (약 $100~102)",
        riskReward: "보통 (단기 조정 진행 중 - 조정 완료 후 진입 권장)",
        keyMetrics: { epsGrowth: "131%↑", revenueGrowth: "131%↑", rs: "90+", stage: "Stage 2" }
    },
    {
        ticker: "STRL",
        name: "Sterling Infrastructure",
        nameKr: "스털링 인프라스트럭처",
        sector: "인프라/건설",
        price: "~$185",
        strategies: ["oneil", "minervini", "weinstein"],
        strategyNames: ["CAN SLIM", "SEPA", "와인스틴 Stage 2"],
        signal: "BUY_WATCH",
        signalText: "매수 관찰",
        reasoning: [
            "C ✅ 분기 EPS 80%+ 증가",
            "A ✅ 연간 실적 지속 성장",
            "N ✅ 데이터센터·제조 인프라 건설 신규 수요",
            "S ✅ 기관 매집 확인, 유통주식 적정",
            "YTD +41%, 강한 상대강도"
        ],
        buyPoint: "전고점 돌파 + 평균 이상 거래량 시",
        stopLoss: "매수가 -7% (약 $172)",
        riskReward: "양호 (AI 인프라 테마 수혜)",
        keyMetrics: { epsGrowth: "80%↑", revenueGrowth: "25%↑", rs: "95+", stage: "Stage 2" }
    },
    {
        ticker: "WDC",
        name: "Western Digital",
        nameKr: "웨스턴 디지털",
        sector: "반도체/스토리지",
        price: "~$72",
        strategies: ["oneil", "minervini", "darvas", "weinstein"],
        strategyNames: ["CAN SLIM", "SEPA", "다르바스 박스", "와인스틴 Stage 2"],
        signal: "BUY_WATCH",
        signalText: "매수 관찰",
        reasoning: [
            "C ✅ 메모리 시장 회복으로 실적 반등",
            "N ✅ 고용량 HDD 신제품, AI 스토리지 수요",
            "L ✅ YTD +58.4%, 섹터 내 최강 모멘텀",
            "다르바스 박스 상단 돌파 패턴 관찰"
        ],
        buyPoint: "박스 상단 돌파 + 강한 거래량 확인 시",
        stopLoss: "이전 박스 하단 또는 매수가 -8%",
        riskReward: "양호 (메모리 사이클 초입)",
        keyMetrics: { epsGrowth: "흑전", revenueGrowth: "50%↑", rs: "92+", stage: "Stage 2" }
    },
    {
        ticker: "GRMN",
        name: "Garmin",
        nameKr: "가민",
        sector: "전자기기/웨어러블",
        price: "~$240",
        strategies: ["oneil", "minervini", "weinstein"],
        strategyNames: ["CAN SLIM", "SEPA", "와인스틴 Stage 2"],
        signal: "BUY_WATCH",
        signalText: "매수 관찰",
        reasoning: [
            "C ✅ 조정 EPS 32% 성장 (FY24)",
            "A ✅ 연간 실적 지속 성장 (FY25 +16%)",
            "N ✅ 신고가 근접, 사상최고가 돌파 임박",
            "I ✅ 기관 보유 증가, 배당금 24.64% 수익"
        ],
        buyPoint: "사상최고가 돌파 + 거래량 확인 시",
        stopLoss: "매수가 -7% (약 $223)",
        riskReward: "양호 (안정적 성장 + 신고가 돌파 임박)",
        keyMetrics: { epsGrowth: "32%", revenueGrowth: "18%", rs: "88+", stage: "Stage 2" }
    },

    // ── 버핏 가치투자 ──
    {
        ticker: "GOOGL",
        name: "Alphabet Inc.",
        nameKr: "알파벳 (구글)",
        sector: "빅테크/AI",
        price: "~$182",
        strategies: ["buffett"],
        strategyNames: ["가치투자 (버핏)"],
        signal: "BUY",
        signalText: "매수 적합",
        reasoning: [
            "해자 ✅ 검색/클라우드/AI 독점적 경쟁우위",
            "경영진 ✅ Sundar Pichai 체제 안정적 성장",
            "재무 ✅ 높은 ROE, 막대한 FCF, 낮은 부채",
            "가격 ✅ 애널리스트 Strong Buy, 상승여력 존재",
            "Berkshire가 지분 보유 중 (확인된 가치)"
        ],
        buyPoint: "현재가 근처 분할 매수 또는 조정 시 매집",
        stopLoss: "투자 논거 훼손 시 (AI 경쟁력 상실 등)",
        riskReward: "양호 (AI 슈퍼사이클 + 클라우드 성장)",
        keyMetrics: { per: "22x", roe: "30%+", fcf: "막대", moat: "Wide" }
    },
    {
        ticker: "DPZ",
        name: "Domino's Pizza",
        nameKr: "도미노피자",
        sector: "외식/프랜차이즈",
        price: "~$436",
        strategies: ["buffett"],
        strategyNames: ["가치투자 (버핏)"],
        signal: "BUY",
        signalText: "매수 적합",
        reasoning: [
            "해자 ✅ 글로벌 #1 피자 브랜드, 기술주도 배달",
            "경영진 ✅ 글로벌 확장 가속",
            "Morningstar '매수' 판정, 적정가치 $436",
            "Berkshire Q4 2025 추가 매수 확인",
            "이해 가능한 사업 (능력 범위 내)"
        ],
        buyPoint: "현재가 수준 (Morningstar 적정가치 근접)",
        stopLoss: "투자 논거 훼손 시 (브랜드 경쟁력 약화 등)",
        riskReward: "양호 (경기방어적, 글로벌 확장)",
        keyMetrics: { per: "26x", roe: "매우높음", fcf: "강함", moat: "Wide" }
    },
    {
        ticker: "CVX",
        name: "Chevron Corp.",
        nameKr: "쉐브론",
        sector: "에너지/정유",
        price: "~$171",
        strategies: ["buffett"],
        strategyNames: ["가치투자 (버핏)"],
        signal: "BUY_WATCH",
        signalText: "매수 관찰",
        reasoning: [
            "해자 ✅ 글로벌 에너지 메이저, 규모의 경제",
            "Berkshire TOP5 보유 (7.24%), Q4 추가 매수",
            "Morningstar '적정가치' 평가 ($171)",
            "배당수익률 매력적, 지정학 리스크 헤지",
            "YTD +23.5%, 에너지 섹터 강세"
        ],
        buyPoint: "현재가 근접 (적정가치 수준)",
        stopLoss: "투자 논거 훼손 시 (에너지 수요 구조적 하락)",
        riskReward: "보통 (적정가에 근접, 배당 중심 전략)",
        keyMetrics: { per: "15x", dividendYield: "4%+", fcf: "강함", moat: "Wide" }
    },

    // ── 소로스/드러켄밀러 매크로 ──
    {
        ticker: "COPX",
        name: "Global X Copper Miners ETF",
        nameKr: "글로벌X 구리 광산 ETF",
        sector: "원자재/구리",
        price: "~$48",
        strategies: ["soros", "druckenmiller"],
        strategyNames: ["매크로 (소로스/드러켄밀러)"],
        signal: "BUY",
        signalText: "매수 적합",
        reasoning: [
            "드러켄밀러 롱 포지션 보유 중",
            "AI 데이터센터 전력 수요 → 구리 수요 폭증 전망",
            "향후 8년 공급-수요 갭 확대 예상",
            "거시경제: 글로벌 인프라 투자 확대 사이클",
            "반사성 이론: 공급부족 → 가격상승 → 투자증가 자기강화"
        ],
        buyPoint: "현재가 수준, 조정 시 분할 매수",
        stopLoss: "핵심 지지선 하회 시 (-10%)",
        riskReward: "양호 (구조적 수급 불균형, 멀티년 테마)",
        keyMetrics: { theme: "AI 인프라", horizon: "중장기", position: "드러켄밀러 롱" }
    },
    {
        ticker: "UDN",
        name: "Invesco DB US Dollar Bearish",
        nameKr: "달러 약세 ETF",
        sector: "통화/달러 숏",
        price: "~$18",
        strategies: ["druckenmiller"],
        strategyNames: ["매크로 (드러켄밀러)"],
        signal: "BUY_WATCH",
        signalText: "매수 관찰",
        reasoning: [
            "드러켄밀러 달러 약세 전망 포지션",
            "달러 역사적 고점 + 외국인 달러자산 과다 보유",
            "미국 재정적자 확대 → 달러 약세 촉매",
            "Fed 금리 인하 전망 → 달러 약세 압력",
            "매크로 불균형 기반 역추세 기회"
        ],
        buyPoint: "달러인덱스 약세 전환 확인 시",
        stopLoss: "달러 강세 추세 지속 시 (-5%)",
        riskReward: "보통 (타이밍 불확실, 중기 전망)",
        keyMetrics: { theme: "달러 약세", horizon: "중기", position: "드러켄밀러 숏달러" }
    },
    {
        ticker: "GLD",
        name: "SPDR Gold Trust",
        nameKr: "금 ETF",
        sector: "원자재/금",
        price: "~$268",
        strategies: ["soros", "druckenmiller", "tudor_jones"],
        strategyNames: ["매크로 (소로스/드러켄밀러/튜더존스)"],
        signal: "BUY_WATCH",
        signalText: "매수 관찰",
        reasoning: [
            "드러켄밀러: 지정학적 헤지 수단으로 보유",
            "이란 군사 긴장 → 지정학 리스크 프리미엄 확대",
            "Fed 금리인하 전망 → 금 우호적 환경",
            "중앙은행 금 매입 지속 (탈달러화 흐름)",
            "포트폴리오 헤지: 불확실성 대비 자산배분"
        ],
        buyPoint: "지정학 긴장 고조 시 또는 포트폴리오 5~10% 배분",
        stopLoss: "금리 급등 시 재평가",
        riskReward: "보통 (헤지 목적, 변동성 완충재)",
        keyMetrics: { theme: "지정학 헤지", horizon: "중장기", position: "포트폴리오 보험" }
    },

    // ── 터틀/추세추종 ──
    {
        ticker: "MPC",
        name: "Marathon Petroleum",
        nameKr: "마라톤 페트롤리엄",
        sector: "에너지/정유",
        price: "~$200",
        strategies: ["dennis", "seykota", "livermore"],
        strategyNames: ["터틀 트레이딩", "추세추종", "리버모어"],
        signal: "BUY",
        signalText: "매수 적합",
        reasoning: [
            "20일/55일 최고가 돌파 시스템 매수 신호",
            "$200 강한 저항선 돌파 + 확인 거래량",
            "에너지 섹터 상승 추세: 이란 지정학 리스크",
            "추세 확인 후 매수 원칙 충족",
            "Big Base Breakout 패턴 형성 완료"
        ],
        buyPoint: "$200 레벨 돌파 확인 (완료)",
        stopLoss: "10일 최저가 이탈 또는 2N ATR (~$185)",
        riskReward: "양호 (에너지 섹터 추세 + 돌파 확인)",
        keyMetrics: { system: "20일 돌파", atr: "적용", trend: "상승추세" }
    },
    {
        ticker: "PLTR",
        name: "Palantir Technologies",
        nameKr: "팔란티어",
        sector: "AI/국방",
        price: "~$95",
        strategies: ["livermore", "darvas"],
        strategyNames: ["리버모어 모멘텀", "다르바스 박스"],
        signal: "BUY_WATCH",
        signalText: "매수 관찰 (고변동성 주의)",
        reasoning: [
            "3월 첫주 +14.25%, 강한 모멘텀",
            "AI + 국방 테마: 군사 AI 통합 계약 확대",
            "선도주 특성: 섹터 내 최강 모멘텀",
            "신고가 영역 거래 중 (다르바스 박스 상단 돌파)",
            "⚠️ 고 밸류에이션, 변동성 큼 - 소규모 포지션"
        ],
        buyPoint: "박스 상단 재돌파 + 거래량 확인 시",
        stopLoss: "이전 박스 하단 진입 시 즉시 손절 (-8%)",
        riskReward: "고위험/고수익 (AI 국방 테마, 밸류에이션 부담)",
        keyMetrics: { momentum: "극강", volatility: "고", theme: "AI 국방" }
    },

    // ── 튜더 존스 스타일 ──
    {
        ticker: "SPY",
        name: "SPDR S&P 500 ETF",
        nameKr: "S&P 500 ETF (풋옵션 헤지)",
        sector: "지수/헤지",
        price: "~$674",
        strategies: ["tudor_jones", "druckenmiller"],
        strategyNames: ["방어적 헤지 (튜더존스/드러켄밀러)"],
        signal: "HEDGE",
        signalText: "헤지 포지션",
        reasoning: [
            "RSI 38.5: 과매도 근접, 추가 하락 가능성",
            "50일선 이탈: 단기 약세 신호",
            "드러켄밀러 QQQ 풋옵션 15% 배치 중",
            "비대칭 리스크/보상: 하방 보호 + 상방 참여",
            "튜더존스 규칙: '훌륭한 수비가 먼저'"
        ],
        buyPoint: "포트폴리오의 5~10% 풋옵션 또는 인버스 ETF",
        stopLoss: "시장 강한 반등 시 헤지 해제",
        riskReward: "보험 기능 (프리미엄만큼 제한된 손실)",
        keyMetrics: { rsi: "38.5", signal: "단기 약세", defense: "포트폴리오 보험" }
    },

    // ── 그레이엄 딥밸류 ──
    {
        ticker: "BRK.B",
        name: "Berkshire Hathaway B",
        nameKr: "버크셔 해서웨이 B",
        sector: "복합금융/보험",
        price: "~$530",
        strategies: ["graham", "munger", "buffett"],
        strategyNames: ["그레이엄 안전마진", "멍거 품질", "버핏 가치"],
        signal: "BUY",
        signalText: "매수 적합",
        reasoning: [
            "PBR 1.6x, 역사적 저평가 영역",
            "현금 보유 $330B+, 순유동자산 대비 할인",
            "보험+에너지+철도 등 다각화된 수익원",
            "그레이엄 안전마진 ✅ 자산가치 대비 할인",
            "멍거 기준 ✅ 최고 품질 경영진"
        ],
        buyPoint: "현재가 수준 분할 매수",
        stopLoss: "투자 논거 훼손 시 (장기 보유 전제)",
        riskReward: "양호 (방어적 + 현금 풍부)",
        keyMetrics: { pbr: "1.6x", cash: "$330B+", moat: "Wide", quality: "최상" }
    },

    // ── 피터 린치 텐배거 ──
    {
        ticker: "DECK",
        name: "Deckers Outdoor",
        nameKr: "데커스 아웃도어 (UGG/HOKA)",
        sector: "소비재/신발",
        price: "~$180",
        strategies: ["lynch"],
        strategyNames: ["피터 린치 텐배거"],
        signal: "BUY_WATCH",
        signalText: "매수 관찰",
        reasoning: [
            "PEG 0.8 ✅ 린치 기준 매력적",
            "HOKA 브랜드 폭발적 성장 (일상에서 발견 가능한 제품)",
            "EPS 성장률 25%+ 지속",
            "2분 스토리 ✅ '운동화 시장에서 HOKA가 나이키를 위협'",
            "기관 보유 증가 중이나 아직 저평가"
        ],
        buyPoint: "조정 시 $170 근처 또는 실적 발표 후",
        stopLoss: "HOKA 성장 둔화 시 (스토리 변화)",
        riskReward: "양호 (PEG 1 이하, 브랜드 가치 성장)",
        keyMetrics: { peg: "0.8", epsGrowth: "25%+", brand: "HOKA 🔥", category: "고성장" }
    },
    {
        ticker: "CAVA",
        name: "CAVA Group",
        nameKr: "카바 그룹 (지중해 레스토랑)",
        sector: "외식/레스토랑",
        price: "~$95",
        strategies: ["lynch"],
        strategyNames: ["피터 린치 텐배거"],
        signal: "BUY_WATCH",
        signalText: "매수 관찰",
        reasoning: [
            "린치의 '일상에서 투자 발굴' ✅ 식당에서 줄 서는 경험",
            "Same-store sales 14%+ 성장",
            "치폴레 초기 성장 궤적과 유사",
            "매장 확장 초기 단계 (350+ → 1000+ 가능)",
            "⚠️ PEG 높음 - 밸류에이션 부담"
        ],
        buyPoint: "조정 시 $85 근처 분할 매수",
        stopLoss: "매장 확장 속도 둔화 시 -15%",
        riskReward: "고위험/고수익 (초기 성장주 프리미엄)",
        keyMetrics: { sssGrowth: "14%+", stores: "350+", potential: "텐배거 후보", category: "고성장" }
    },

    // ── 필 피셔 질적 성장 ──
    {
        ticker: "ASML",
        name: "ASML Holdings",
        nameKr: "ASML (반도체 장비)",
        sector: "반도체 장비",
        price: "~$730",
        strategies: ["fisher", "munger"],
        strategyNames: ["필 피셔 질적 성장", "멍거 품질"],
        signal: "BUY_WATCH",
        signalText: "매수 관찰",
        reasoning: [
            "피셔 15가지 기준 거의 충족 ✅",
            "EUV 독점 → R&D 효율 최상, 진입장벽 극대",
            "경쟁사 없음 (유일한 EUV 공급), Wide Moat",
            "AI 반도체 수요 → 구조적 장기 성장",
            "조정 중 - 적정가 매수 기회 관찰"
        ],
        buyPoint: "$700 이하 조정 시 분할 매수",
        stopLoss: "피셔 기준 거의 안 팜 (논거 훼손 시만)",
        riskReward: "양호 (독점적 경쟁우위, 장기 보유)",
        keyMetrics: { moat: "독점", rnd: "매출 15%", margin: "매우높음", horizon: "5~10년+" }
    },

    // ── 마이클 버리 역발상 ──
    {
        ticker: "BABA",
        name: "Alibaba Group",
        nameKr: "알리바바 그룹",
        sector: "중국 빅테크",
        price: "~$135",
        strategies: ["burry"],
        strategyNames: ["마이클 버리 역발상"],
        signal: "BUY_WATCH",
        signalText: "매수 관찰 (고위험)",
        reasoning: [
            "버리 13F: 중국 주식 롱 포지션 보유 중",
            "PER 10x 이하 ✅ 극단적 저평가",
            "군중 심리: 시장이 중국을 완전히 외면 → 역발상 기회",
            "클라우드+AI 사업 성장 본격화",
            "⚠️ 지정학 리스크 (미중 관계, 규제)"
        ],
        buyPoint: "현재가 분할 매수 (지정학 리스크 소규모 포지션)",
        stopLoss: "지정학 이벤트로 투자 논거 훼손 시",
        riskReward: "고위험/고수익 (극단적 저평가 vs 지정학 리스크)",
        keyMetrics: { per: "~10x", pbr: "~1.5x", position: "버리 롱", risk: "지정학" }
    },

    // ── 캐시 우드 파괴적 혁신 ──
    {
        ticker: "TSLA",
        name: "Tesla Inc.",
        nameKr: "테슬라",
        sector: "전기차/AI/로봇",
        price: "~$280",
        strategies: ["wood"],
        strategyNames: ["캐시 우드 파괴적 혁신"],
        signal: "BUY_WATCH",
        signalText: "매수 관찰 (고변동성)",
        reasoning: [
            "ARK 1위 보유. 2029년 목표가 $2,600",
            "FSD + 로보택시 = 라이트 법칙 적용 중",
            "옵티머스 로봇 → $10T TAM (혁신 S-커브 초기)",
            "에너지 저장 사업 100%+ 성장",
            "⚠️ 현재 밸류에이션 매우 높음, 변동성 극심"
        ],
        buyPoint: "조정 시 $250 이하 분할 매수",
        stopLoss: "FSD/로보택시 상용화 실패 시",
        riskReward: "극고위험/극고수익 (혁신 테마 집중)",
        keyMetrics: { target: "ARK $2,600", tam: "$10T+", innovation: "FSD+로봇", volatility: "극고" }
    },
    {
        ticker: "ROKU",
        name: "Roku Inc.",
        nameKr: "로쿠 (스트리밍 플랫폼)",
        sector: "스트리밍/광고",
        price: "~$85",
        strategies: ["wood"],
        strategyNames: ["캐시 우드 파괴적 혁신"],
        signal: "BUY_WATCH",
        signalText: "매수 관찰",
        reasoning: [
            "ARK 대량 보유 종목",
            "TV 광고 → CTV(커넥티드TV) 전환 S-커브 초기",
            "미국 #1 CTV OS 플랫폼 점유율",
            "광고 매출 가속 (전통TV 대체)",
            "현재 흑자 전환 달성"
        ],
        buyPoint: "$80 지지선 확인 후 매수",
        stopLoss: "시장 점유율 상실 시 -15%",
        riskReward: "보통 (CTV 전환 테마, 경쟁 심화 리스크)",
        keyMetrics: { marketShare: "#1 CTV", adGrowth: "가속", disruption: "TV광고→CTV" }
    },

    // ── 빌 애크먼 행동주의 ──
    {
        ticker: "HLT",
        name: "Hilton Worldwide",
        nameKr: "힐튼 호텔",
        sector: "호텔/숙박",
        price: "~$260",
        strategies: ["ackman"],
        strategyNames: ["빌 애크먼 행동주의"],
        signal: "BUY",
        signalText: "매수 적합",
        reasoning: [
            "Pershing Square 핵심 보유 종목",
            "에셋라이트 모델 → 높은 FCF, 낮은 자본집약",
            "글로벌 여행 수요 구조적 성장",
            "독점적 브랜드 파워 (진입장벽 높음) ✅",
            "배당 + 자사주 매입 = 주주환원"
        ],
        buyPoint: "현재가 수준 또는 조정 시 $240",
        stopLoss: "투자 논거 훼손 시 (여행 구조적 하락)",
        riskReward: "양호 (안정적 FCF, 브랜드 경쟁우위)",
        keyMetrics: { fcf: "강함", roic: "높음", moat: "브랜드", position: "애크먼 핵심" }
    },

    // ── 다모다란 DCF ──
    {
        ticker: "UBER",
        name: "Uber Technologies",
        nameKr: "우버",
        sector: "모빌리티/배달",
        price: "~$72",
        strategies: ["damodaran"],
        strategyNames: ["다모다란 DCF 밸류에이션"],
        signal: "BUY_WATCH",
        signalText: "매수 관찰",
        reasoning: [
            "다모다란 최근 밸류에이션 분석 대상",
            "스토리: '글로벌 모빌리티 플랫폼 독점'",
            "FCF 흑자 전환 → DCF 모델 적용 가능해짐",
            "넘버: 매출 +20%, FCF 마진 확대 중",
            "네트워크 효과 → 경쟁우위 강화"
        ],
        buyPoint: "DCF 내재가치 이하 ($65~70)",
        stopLoss: "자율주행 차량에 의한 사업 위협 시",
        riskReward: "보통 (성장스토리 vs 자율주행 리스크)",
        keyMetrics: { fcf: "흑자전환", growth: "20%+", story: "모빌리티 독점", dcf: "적용중" }
    },

    // ── 파브라이 단도투자 ──
    {
        ticker: "OXY",
        name: "Occidental Petroleum",
        nameKr: "옥시덴탈 (버핏 보유)",
        sector: "에너지/석유",
        price: "~$52",
        strategies: ["pabrai", "buffett"],
        strategyNames: ["파브라이 단도", "버핏 가치"],
        signal: "BUY_WATCH",
        signalText: "매수 관찰",
        reasoning: [
            "파브라이 클로닝 전략 ✅ 버핏 28% 지분 보유",
            "하방 제한: 버핏이 계속 매수 = 바닥 지지",
            "상방: 탄소포집(DAC) 사업 → 에너지 전환 옵션",
            "체크리스트 ✅ 단순한 사업, 자산 기반",
            "배당 + 부채 축소 진행 중"
        ],
        buyPoint: "$50 이하 조정 시 분할 매수",
        stopLoss: "버핏 매도 시 즉시 재평가",
        riskReward: "양호 (버핏 보유 = 안전마진 + DAC 옵션)",
        keyMetrics: { buffettStake: "28%", dividend: "지급중", dac: "성장옵션", dhandho: "비대칭" }
    },

    // ── 준준왈라 인도 성장 ──
    {
        ticker: "INDA",
        name: "iShares MSCI India ETF",
        nameKr: "인도 ETF (iShares)",
        sector: "인도 시장/ETF",
        price: "~$55",
        strategies: ["jhunjhunwala"],
        strategyNames: ["준준왈라 인도 성장"],
        signal: "BUY",
        signalText: "매수 적합",
        reasoning: [
            "준준왈라 핵심: 인도 경제 성장에 베팅",
            "인도 GDP 6%+ 성장, 세계 최고 성장률",
            "인구 14억, 중산층 폭발적 확대",
            "디지털화 + 제조업 이전(차이나+1) 수혜",
            "강세장 의심하지 마라 → 인도 시장 상승 추세"
        ],
        buyPoint: "현재가 분할 매수 (장기 투자)",
        stopLoss: "인도 구조적 성장 논거 훼손 시만",
        riskReward: "양호 (구조적 메가트렌드, 장기 투자)",
        keyMetrics: { gdp: "6%+", population: "14억", trend: "메가트렌드", horizon: "장기" }
    },

    // ── 🤖 Antigravity AI 크로스 시그널 ──
    {
        ticker: "NVDA",
        name: "NVIDIA Corp.",
        nameKr: "엔비디아",
        sector: "반도체/AI",
        price: "~$120",
        strategies: ["ai_antigravity"],
        strategyNames: ["🤖 AI 크로스 시그널 (5개 전략 동시 부합)"],
        signal: "BUY_WATCH",
        signalText: "매수 관찰 (크로스 시그널)",
        reasoning: [
            "🤖 AI 분석: 5개 전략 동시 충족 → 최고 신뢰도",
            "✅ 오닐 CAN SLIM: C(분기EPS 40%↑), A(연간성장), N(AI칩 신제품), S(기관 매집)",
            "✅ 미너비니 SEPA: Stage 2 추세, 10주선 위, MA 정배열",
            "✅ 와인스틴: Stage 2 상승, 30주선 상승 중",
            "✅ 캐시우드: AI 파괴적 혁신 S-커브 초기",
            "✅ 피셔: R&D 효율 최상, 경쟁우위(CUDA 생태계)",
            "⚠️ 밸류에이션 부담 → 조정 시 매수 권장"
        ],
        buyPoint: "10주선/50일선 터치 시 분할 매수 ($110~115)",
        stopLoss: "30주선 이탈 시 매도 (와인스틴 규칙)",
        riskReward: "양호 (5개 전략 교차 확인 = 높은 신뢰도)",
        keyMetrics: { crossSignal: "5/21", confidence: "최상", stage: "Stage 2", aiVerdict: "매수 대기" }
    },
    {
        ticker: "COST",
        name: "Costco Wholesale",
        nameKr: "코스트코",
        sector: "유통/소매",
        price: "~$960",
        strategies: ["ai_antigravity"],
        strategyNames: ["🤖 AI 크로스 시그널 (6개 전략 동시 부합)"],
        signal: "BUY",
        signalText: "매수 적합 (최고 크로스)",
        reasoning: [
            "🤖 AI 분석: 6개 전략 동시 충족 → 역대급 신뢰도!",
            "✅ 버핏: Wide Moat (회원제 독점), 높은 ROE, 단순한 사업",
            "✅ 멍거: 훌륭한 기업을 적정가에 (품질 최상)",
            "✅ 린치: 아는 것에 투자 (일상 소비, PEG 합리적)",
            "✅ 피셔: 탁월한 경영진, 고객 충성도 극대",
            "✅ 와인스틴: Stage 2 진행 중, 30주선 상승",
            "✅ 그레이엄: 20년+ 배당 지급, 재무 안정"
        ],
        buyPoint: "조정 시 $920 근처 또는 현재가 분할 매수",
        stopLoss: "30주선 이탈 시 매도",
        riskReward: "양호 (6개 전략 교차 = 역대급 안전마진)",
        keyMetrics: { crossSignal: "6/21", confidence: "역대급", moat: "Wide", aiVerdict: "적극 매수" }
    },
    {
        ticker: "V",
        name: "Visa Inc.",
        nameKr: "비자",
        sector: "핀테크/결제",
        price: "~$340",
        strategies: ["ai_antigravity"],
        strategyNames: ["🤖 AI 크로스 시그널 (5개 전략 동시 부합)"],
        signal: "BUY",
        signalText: "매수 적합 (크로스 시그널)",
        reasoning: [
            "🤖 AI 분석: 5개 전략 동시 충족",
            "✅ 버핏/멍거: 최고 품질 해자 (결제 네트워크 독점)",
            "✅ 린치: 단순한 사업 (거래마다 수수료), 꾸준한 성장",
            "✅ 피셔: R&D 투자, 디지털 결제 트렌드",
            "✅ 와인스틴: Stage 2, 30주선 위",
            "✅ 애크먼: 독점적 위치 + 높은 FCF"
        ],
        buyPoint: "조정 시 $320 근처 분할 매수",
        stopLoss: "30주선 이탈 시 매도",
        riskReward: "양호 (독점적 네트워크, 디지털 결제 성장)",
        keyMetrics: { crossSignal: "5/21", confidence: "최상", moat: "독점", aiVerdict: "매수" }
    },
    {
        ticker: "LLY",
        name: "Eli Lilly",
        nameKr: "일라이 릴리 (비만치료제)",
        sector: "제약/바이오",
        price: "~$850",
        strategies: ["ai_antigravity"],
        strategyNames: ["🤖 AI 크로스 시그널 (4개 전략 동시 부합)"],
        signal: "BUY_WATCH",
        signalText: "매수 관찰 (크로스 시그널)",
        reasoning: [
            "🤖 AI 분석: 4개 전략 동시 충족",
            "✅ 캐시우드: GLP-1 비만치료제 = 파괴적 혁신 (S-커브 초기)",
            "✅ 오닐 CAN SLIM: EPS 폭증 + 신제품 + 신고가",
            "✅ 피셔: R&D 파이프라인 독보적, 경영진 비전",
            "✅ 와인스틴: Stage 2, 강한 상승 추세",
            "⚠️ 밸류에이션 PER 60x+ → 조정 시 진입"
        ],
        buyPoint: "10주선 터치 시 ($800 근처)",
        stopLoss: "30주선 이탈 또는 GLP-1 경쟁 심화 시",
        riskReward: "보통 (혁신 약물 vs 높은 밸류에이션)",
        keyMetrics: { crossSignal: "4/21", confidence: "높음", innovation: "GLP-1", aiVerdict: "관찰" }
    }
];

// ── 와인스틴 스테이지 분석 전용 종목 ──
const WEINSTEIN_STAGE_DATA = [
    {
        ticker: "MPC",
        name: "Marathon Petroleum",
        nameKr: "마라톤 페트롤리엄",
        currentStage: "Stage 2 초기",
        stageColor: "#34d399",
        ma30w: "상승 전환 확인",
        priceVsMa: "위 (+8%)",
        volumeSignal: "돌파 시 거래량 폭증 \u2705",
        relativeStrength: "강함 (\uc5d0\ub108\uc9c0 \uc139\ud130 \uc120\ub3c4)",
        verdict: "\ud074\ub798\uc2dd Stage 2 \ub3cc\ud30c. $200 \uc2e0\uace0\uac00 \uae30\uc900 Stage 1 \ubc14\ub2e5 \uc0c1\ub2e8 \ub3cc\ud30c + \uac70\ub798\ub7c9 \ud655\uc778."
    },
    {
        ticker: "STRL",
        name: "Sterling Infrastructure",
        nameKr: "스털링 인프라",
        currentStage: "Stage 2 중기",
        stageColor: "#34d399",
        ma30w: "상승 중 (4개월+)",
        priceVsMa: "위 (+15%)",
        volumeSignal: "돌파 시 거래량 확인 \u2705",
        relativeStrength: "극강 (YTD +41%)",
        verdict: "\ud655\uc778\ub41c Stage 2. 30\uc8fc\uc120 \uc5d4\uc2b8 \ucf54\uc774 \uc0c1\uc2b9 \uc911. \uc870\uc815 \uc2dc 30\uc8fc\uc120 \ud130\uce58 \ub9e4\uc218 \uae30\ud68c."
    },
    {
        ticker: "MU",
        name: "Micron Technology",
        nameKr: "마이크론",
        currentStage: "Stage 2 (\uc870\uc815 \uc911)",
        stageColor: "#f0c040",
        ma30w: "상승 \uc911",
        priceVsMa: "\uc704 (+5%)",
        volumeSignal: "\uc870\uc815 \uc911 \uac70\ub798\ub7c9 \uac10\uc18c \u2705",
        relativeStrength: "\uac15\ud568",
        verdict: "Stage 2 \ub0b4 \uac74\uc804\ud55c \uc870\uc815. 30\uc8fc\uc120 \uc9c0\uc9c0 \uc5ec\ubd80 \uc8fc\uc2dc. \uc774\ud0c8 \uc2dc Stage 3 \uacbd\uace0."
    },
    {
        ticker: "CVX",
        name: "Chevron",
        nameKr: "\uc250\ube0c\ub860",
        currentStage: "Stage 2 \ucd08\uae30",
        stageColor: "#34d399",
        ma30w: "\uc0c1\uc2b9 \uc804\ud658",
        priceVsMa: "\uc704 (+6%)",
        volumeSignal: "\uac70\ub798\ub7c9 \uc99d\uac00 \ud655\uc778 \u2705",
        relativeStrength: "\uac15\ud568 (\uc5d0\ub108\uc9c0 \uc139\ud130 \uac15\uc138)",
        verdict: "Stage 1 \ubc14\ub2e5\uc5d0\uc11c Stage 2 \uc804\ud658 \ucd08\uae30. 30\uc8fc\uc120 \uc0c1\ud5a5 \uc804\ud658 + YTD +23.5%."
    },
    {
        ticker: "GRMN",
        name: "Garmin",
        nameKr: "\uac00\ubbfc",
        currentStage: "Stage 2 \uc911\uae30",
        stageColor: "#34d399",
        ma30w: "\uc0c1\uc2b9 \uc911 (6\uac1c\uc6d4+)",
        priceVsMa: "\uc704 (+12%)",
        volumeSignal: "\uc2e0\uace0\uac00 \uadfc\uc811 \uc2dc \uac70\ub798\ub7c9 \ud655\uc778 \u2705",
        relativeStrength: "\uac15\ud568",
        verdict: "\uc548\uc815\uc801 Stage 2 \uc9c4\ud589 \uc911. \uc0ac\uc0c1\ucd5c\uace0\uac00 \ub3cc\ud30c \uc784\ubc15 - \ub3cc\ud30c \uc2dc \ucd94\uac00 \uc0c1\uc2b9 \uae30\ub300."
    }
];

const STRATEGY_SCREENER_MAP = {
    oneil: { name: "윌리엄 오닐", method: "CAN SLIM", emoji: "📈" },
    minervini: { name: "마크 미너비니", method: "SEPA + VCP", emoji: "🏆" },
    buffett: { name: "워런 버핏", method: "가치투자", emoji: "🦉" },
    soros: { name: "조지 소로스", method: "반사성 이론", emoji: "🦅" },
    druckenmiller: { name: "드러켄밀러", method: "매크로", emoji: "🎰" },
    tudor_jones: { name: "튜더 존스", method: "매크로+기술", emoji: "🎯" },
    dennis: { name: "리처드 데니스", method: "터틀 시스템", emoji: "🐢" },
    seykota: { name: "에드 세이코타", method: "추세추종", emoji: "🖥️" },
    livermore: { name: "리버모어", method: "모멘텀", emoji: "🐻" },
    darvas: { name: "다르바스", method: "박스 이론", emoji: "📦" },
    weinstein: { name: "와인스틴", method: "스테이지 분석", emoji: "📐" },
    graham: { name: "벤 그레이엄", method: "안전마진", emoji: "📚" },
    munger: { name: "찰리 멍거", method: "품질 가치", emoji: "🧓" },
    lynch: { name: "피터 린치", method: "텐배거", emoji: "🔟" },
    fisher: { name: "필 피셔", method: "질적 성장", emoji: "🔬" },
    burry: { name: "마이클 버리", method: "역발상", emoji: "👁️" },
    wood: { name: "캐시 우드", method: "파괴적 혁신", emoji: "🚀" },
    ackman: { name: "빌 애크먼", method: "행동주의", emoji: "⚔️" },
    damodaran: { name: "다모다란", method: "DCF", emoji: "🎓" },
    pabrai: { name: "파브라이", method: "단도 투자", emoji: "🗡️" },
    jhunjhunwala: { name: "준준왈라", method: "인도 성장", emoji: "🐃" },
    ai_antigravity: { name: "Antigravity AI", method: "크로스 시그널", emoji: "🤖" }
};

const SIGNAL_STYLES = {
    BUY: { bg: "rgba(52, 211, 153, 0.15)", color: "#34d399", border: "rgba(52, 211, 153, 0.3)", icon: "🟢" },
    BUY_WATCH: { bg: "rgba(240, 192, 64, 0.15)", color: "#f0c040", border: "rgba(240, 192, 64, 0.3)", icon: "🟡" },
    HEDGE: { bg: "rgba(139, 92, 246, 0.15)", color: "#8b5cf6", border: "rgba(139, 92, 246, 0.3)", icon: "🟣" },
    SELL: { bg: "rgba(239, 68, 68, 0.15)", color: "#ef4444", border: "rgba(239, 68, 68, 0.3)", icon: "🔴" }
};
