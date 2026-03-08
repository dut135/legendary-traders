const TRADERS_DATA = [
    {
        id: "livermore",
        name: "제시 리버모어",
        nameEn: "Jesse Livermore",
        era: "1877–1940",
        nickname: "월스트리트의 곰",
        photo: "🐻",
        style: "momentum",
        styleName: "모멘텀/추세추종",
        peakReturn: "1929년 공매도로 $100M 수익",
        philosophy: "시장은 결코 틀리지 않는다. 틀리는 것은 의견이다.",
        approach: "가격 움직임과 시장 심리를 읽는 투기적 트레이딩",
        timeframe: "중기 (수주~수개월)",
        riskPerTrade: "10% 이하",
        buyRules: [
            { rule: "추세 확인 후 매수", detail: "시장이 상승 추세를 확인한 후에만 매수. 반드시 시장 움직임이 자신의 판단을 확인할 때까지 대기", priority: "핵심" },
            { rule: "신고가 돌파 매수", detail: "주가가 새로운 고점을 돌파할 때 매수 진입. 상승하는 주식을 사고, 하락하는 주식을 매도", priority: "핵심" },
            { rule: "피봇 포인트 활용", detail: "가격이 특정 전환점(피봇 포인트)에 도달했을 때 진입 시점으로 활용", priority: "주요" },
            { rule: "선도주 집중", detail: "각 섹터에서 가장 강한 추세를 보이는 선도주에 집중 투자", priority: "주요" },
            { rule: "인내심 최우선", detail: "명확한 시장 추세가 나타날 때까지 매일 거래하지 않고 인내심 있게 대기", priority: "보조" }
        ],
        sellRules: [
            { rule: "손절 즉시 실행", detail: "손실이 발생하면 즉시 매도. 절대 평균 매입단가를 낮추지 않는다 (물타기 금지)", priority: "핵심" },
            { rule: "마진콜 전 매도", detail: "마진콜을 받기 전에 반드시 포지션을 정리", priority: "핵심" },
            { rule: "이익 실현 보호", detail: "수익은 계속 보유하되, 추세가 반전되면 즉시 매도하여 이익 보호", priority: "주요" },
            { rule: "비자발적 투자자 금지", detail: "단기 매매로 들어갔다가 물려서 장기 투자자가 되는 것을 절대 금지", priority: "보조" }
        ],
        indicators: ["가격 움직임 (Price Action)", "피봇 포인트", "거래량", "시장 심리"],
        keyBooks: ["Reminiscences of a Stock Operator", "How to Trade in Stocks"],
        commonMistakes: ["물타기 (평균 매입단가 낮추기)", "의견에 따른 매매", "인내심 부족"]
    },
    {
        id: "buffett",
        name: "워런 버핏",
        nameEn: "Warren Buffett",
        era: "1930–현재",
        nickname: "오마하의 현인",
        photo: "🦉",
        style: "value",
        styleName: "가치투자",
        peakReturn: "연평균 20%+ (60년간)",
        philosophy: "남들이 탐욕스러울 때 두려워하고, 남들이 두려워할 때 탐욕스러워라.",
        approach: "내재가치 대비 저평가된 우량기업 장기보유",
        timeframe: "장기 (수년~영구보유)",
        riskPerTrade: "집중 투자 (소수 확신 종목)",
        buyRules: [
            { rule: "내재가치 대비 할인 매수", detail: "기업의 내재가치를 분석하고, 시장가격이 내재가치보다 충분히 낮을 때(안전마진) 매수", priority: "핵심" },
            { rule: "경제적 해자 확인", detail: "강력한 브랜드, 비용 우위, 네트워크 효과 등 지속 가능한 경쟁우위(경제적 해자)를 가진 기업만 매수", priority: "핵심" },
            { rule: "이해 가능한 사업 (능력 범위)", detail: "자신이 완전히 이해할 수 있는 사업 분야의 기업에만 투자. 능력 범위(Circle of Competence) 내에서만 투자", priority: "핵심" },
            { rule: "우수한 경영진", detail: "정직하고 능력 있으며, 주주 이익을 우선시하는 경영진이 운영하는 기업", priority: "주요" },
            { rule: "재무 건전성 검증", detail: "높은 ROE, 낮은 부채비율, 꾸준한 현금흐름, 지속적인 매출/이익 성장 확인", priority: "주요" },
            { rule: "훌륭한 기업을 적정가에", detail: "적정 기업을 훌륭한 가격에 사는 것보다, 훌륭한 기업을 적정한 가격에 사는 것이 낫다", priority: "보조" }
        ],
        sellRules: [
            { rule: "투자 논거 훼손 시 매도", detail: "당초 매수 이유(투자 논거)가 더 이상 유효하지 않을 때 - 경쟁우위 상실, 사업 구조 악화", priority: "핵심" },
            { rule: "더 좋은 기회 발견 시", detail: "현재 보유 종목보다 훨씬 매력적인 투자 기회가 나타났을 때 자본 재배치", priority: "주요" },
            { rule: "경영진 신뢰 상실", detail: "경영진의 역량이나 도덕성에 대한 신뢰가 무너졌을 때", priority: "주요" },
            { rule: "극단적 고평가 시", detail: "주가가 내재가치를 크게 초과하여 거래될 때 (드문 경우)", priority: "보조" }
        ],
        indicators: ["ROE (자기자본이익률)", "부채비율", "FCF (잉여현금흐름)", "EPS 성장률", "PER/PBR"],
        keyBooks: ["The Intelligent Investor (벤저민 그레이엄)", "Buffett's Annual Letters"],
        commonMistakes: ["시장 타이밍 시도", "이해 못하는 기업 투자", "단기 변동에 흔들림"]
    },
    {
        id: "soros",
        name: "조지 소로스",
        nameEn: "George Soros",
        era: "1930–현재",
        nickname: "영란은행을 무너뜨린 남자",
        photo: "🦅",
        style: "macro",
        styleName: "글로벌 매크로",
        peakReturn: "1992년 파운드 공매도로 $1B 수익",
        philosophy: "시장가격은 항상 틀려있다 - 미래에 대한 편향된 시각을 반영할 뿐이다.",
        approach: "반사성 이론에 기반한 글로벌 매크로 투기",
        timeframe: "단기~중기 (수일~수개월)",
        riskPerTrade: "대형 레버리지 집중 베팅",
        buyRules: [
            { rule: "반사성 이론 적용", detail: "시장 참여자의 인식과 현실이 상호 피드백하며 자기강화 사이클을 만드는 시점을 포착. 버블 형성 초기 진입", priority: "핵심" },
            { rule: "거시경제 불균형 포착", detail: "GDP, 금리, 환율, 중앙은행 정책 등 거시경제의 구조적 불균형을 분석하여 투자 기회 발견", priority: "핵심" },
            { rule: "역발상 매수", detail: "군중 심리에 반대 방향으로 포지션. 공포가 극대화된 시점에서 매수", priority: "주요" },
            { rule: "가설 수립 후 테스트", detail: "시장에 대한 가설(thesis)을 세우고, 소규모 포지션으로 시장 반응을 테스트한 후 확신이 생기면 공격적 매수", priority: "주요" }
        ],
        sellRules: [
            { rule: "가설 오류 인정 즉시 매도", detail: "자신의 가설이 잘못되었음을 인지하면 즉시 포지션 정리. 빠른 실수 인정과 수정", priority: "핵심" },
            { rule: "손절라인 엄수", detail: "스톱로스를 설정하고 엄격히 준수하여 자본 보전", priority: "핵심" },
            { rule: "반사성 사이클 꼭대기 이탈", detail: "자기강화 사이클이 정점에 도달하여 자기파괴 사이클로 전환될 징후 시 매도", priority: "주요" },
            { rule: "군중이 낙관적일 때 매도", detail: "다수가 지나치게 낙관적일 때 포지션 정리", priority: "보조" }
        ],
        indicators: ["거시경제 지표 (GDP, 금리, 환율)", "중앙은행 정책", "시장 심리/센티먼트", "자금 흐름"],
        keyBooks: ["The Alchemy of Finance", "Soros on Soros"],
        commonMistakes: ["가설 고집", "과도한 레버리지", "시장 심리 무시"]
    },
    {
        id: "tudor_jones",
        name: "폴 튜더 존스",
        nameEn: "Paul Tudor Jones",
        era: "1954–현재",
        nickname: "매크로의 마에스트로",
        photo: "🎯",
        style: "macro",
        styleName: "글로벌 매크로",
        peakReturn: "1987년 블랙먼데이로 62% 수익",
        philosophy: "가장 중요한 규칙은 공격이 아니라 훌륭한 수비를 하는 것이다.",
        approach: "거시경제 분석 + 기술적 분석의 결합, 시장 전환점 포착",
        timeframe: "단기~중기 (수일~수주)",
        riskPerTrade: "자본의 1% 이하",
        buyRules: [
            { rule: "비대칭 리스크/보상 5:1", detail: "잠재 수익이 잠재 손실의 최소 5배 이상인 기회에만 진입", priority: "핵심" },
            { rule: "거시경제 + 기술적 분석 결합", detail: "거시경제 트렌드를 분석하되, 기술 지표(200일 이평선, RSI, MACD)로 진입 타이밍 확인", priority: "핵심" },
            { rule: "시장 전환점 포착", detail: "시장의 천장과 바닥을 식별하는 '탑&보텀 트레이더'. 200일 이동평균선을 핵심 반전 신호로 활용", priority: "주요" },
            { rule: "역추세 기회 포착", detail: "시장이 과도하게 반응한 시점에서 역추세 포지션 진입", priority: "보조" }
        ],
        sellRules: [
            { rule: "1% 손실제한 엄수", detail: "한 번의 거래에서 총 자본의 약 1%를 초과하는 손실 절대 불가", priority: "핵심" },
            { rule: "절대 물타기 금지", detail: "손실 포지션에 추가 매수 절대 금지. 즉시 손절", priority: "핵심" },
            { rule: "매일 포지션 재평가", detail: "'매일 모든 포지션이 틀렸다고 가정'하며 지속적으로 재평가", priority: "주요" },
            { rule: "패배 시 축소, 승리 시 확대", detail: "연패 중일 때 포지션 규모 축소, 연승 중일 때 포지션 확대", priority: "주요" }
        ],
        indicators: ["200일 이동평균선", "RSI", "MACD", "거래량", "ATR"],
        keyBooks: ["Market Wizards (인터뷰)"],
        commonMistakes: ["자만심", "리스크 관리 무시", "물타기"]
    },
    {
        id: "oneil",
        name: "윌리엄 오닐",
        nameEn: "William O'Neil",
        era: "1933–2023",
        nickname: "CAN SLIM의 창시자",
        photo: "📈",
        style: "growth",
        styleName: "성장주 투자",
        peakReturn: "IBD 선정 종목 연평균 40%+",
        philosophy: "시장의 역사적 패턴을 연구하면, 사실상 모든 대형주는 같은 특성을 공유한다.",
        approach: "CAN SLIM 방법론 - 펀더멘털과 기술적 분석의 결합",
        timeframe: "중기 (수주~수개월)",
        riskPerTrade: "매수가 대비 7-8% 손절",
        buyRules: [
            { rule: "C - 현재 분기 EPS 25%↑", detail: "Current Quarterly Earnings - 전년 동기 대비 주당순이익(EPS)이 최소 25% 이상 증가, 매출 가속 확인", priority: "핵심" },
            { rule: "A - 연간 EPS 25%↑ (3~5년)", detail: "Annual Earnings Growth - 최근 3~5년 연간 EPS가 매년 25% 이상 성장", priority: "핵심" },
            { rule: "N - 새로운 것 (신제품/경영/신고가)", detail: "New Products, Management, Highs - 혁신적 신제품, 새 경영진, 또는 신고가 돌파 중인 기업", priority: "핵심" },
            { rule: "S - 수급 (유통주식/거래량)", detail: "Supply and Demand - 유통주식 수가 적고, 저항선 돌파 시 거래량이 평균 이상으로 급증", priority: "주요" },
            { rule: "L - 선도주 (RS 80+)", detail: "Leader or Laggard - 상대강도(RS) 등급 80 이상, 가급적 85 이상인 시장 선도주에 투자", priority: "주요" },
            { rule: "I - 기관투자자 매집", detail: "Institutional Sponsorship - 기관투자자의 보유 비중이 증가하는 종목", priority: "주요" },
            { rule: "M - 시장 방향 확인", detail: "Market Direction - 전체 시장이 확인된 상승장일 때만 매수 (75%의 종목이 시장 방향을 따름)", priority: "핵심" },
            { rule: "베이스 돌파 매수", detail: "컵위드핸들, 이중바닥 등 건전한 차트 패턴에서 평균 이상 거래량으로 돌파할 때 매수", priority: "핵심" }
        ],
        sellRules: [
            { rule: "7-8% 손절 철칙", detail: "매수가 대비 7~8% 하락 시 예외 없이 즉시 매도. 이것이 가장 중요한 규칙", priority: "핵심" },
            { rule: "3주 내 20%+ 수익 시 8주 보유", detail: "돌파 매수 후 3주 이내에 20% 이상 수익이 나면 최소 8주간 보유 (대형주 후보)", priority: "주요" },
            { rule: "강세 매도 (이익 실현)", detail: "상승세가 강할 때 이익 실현하는 기술 마스터", priority: "주요" }
        ],
        indicators: ["EPS 성장률", "상대강도 (RS Rating)", "거래량", "차트 패턴 (컵위드핸들 등)", "50일/200일 이평선"],
        keyBooks: ["How to Make Money in Stocks", "The Successful Investor"],
        commonMistakes: ["하락주 매수", "손절 미이행", "약세장에서 매수"]
    },
    {
        id: "minervini",
        name: "마크 미너비니",
        nameEn: "Mark Minervini",
        era: "1960s–현재",
        nickname: "미국 투자 챔피언",
        photo: "🏆",
        style: "growth",
        styleName: "성장주 투자 (SEPA)",
        peakReturn: "연평균 220% (5년간)",
        philosophy: "정확한 진입 시점에서 사야 리스크를 최소화하고 수익을 극대화할 수 있다.",
        approach: "SEPA (Specific Entry Point Analysis) - 정밀한 진입점 분석을 통한 성장주 매매",
        timeframe: "중기 (수주~수개월)",
        riskPerTrade: "총 자본의 1-2%",
        buyRules: [
            { rule: "스테이지 2 상승 추세 확인", detail: "주가가 '스테이지 2' 상승 국면(강한 상승 모멘텀, 우호적 펀더멘털)에 있는 종목만 매수", priority: "핵심" },
            { rule: "8가지 추세 템플릿 충족", detail: "주가가 50일/150일/200일 이평선 위에 있고, 200일선이 상승 중이며, 현재가가 52주 저점 대비 25%+ 위에 있어야 함", priority: "핵심" },
            { rule: "VCP (변동성 수축 패턴)", detail: "Volatility Contraction Pattern - 가격 변동폭이 점진적으로 줄어들며, 거래량도 감소하는 패턴에서 돌파 직전 매수", priority: "핵심" },
            { rule: "피봇 포인트 돌파 매수", detail: "VCP에서 형성된 피봇 포인트(돌파 레벨)를 증가된 거래량과 함께 돌파할 때 정확히 진입", priority: "핵심" },
            { rule: "강한 펀더멘털 결합", detail: "강한 EPS/매출 성장과 기술적 차트 패턴을 결합하여 종목 선정", priority: "주요" },
            { rule: "시장 상승장에서만 매매", detail: "전체 시장이 확인된 상승 추세일 때만 거래. 횡보장이나 하락장에서는 현금 보유", priority: "주요" }
        ],
        sellRules: [
            { rule: "7-8% 손절 엄수", detail: "매수가 대비 7~8% 하락 시 예외 없이 손절하여 자본 보전", priority: "핵심" },
            { rule: "포지션 사이징 규칙", detail: "한 번의 거래에서 총 자본의 1~2% 이상을 절대 위험에 노출하지 않음. 진입가와 손절가의 차이로 포지션 규모 계산", priority: "핵심" },
            { rule: "상대강도 약화 시 매도", detail: "해당 종목의 상대강도가 시장 및 동종업계 대비 약화되면 매도 고려", priority: "주요" }
        ],
        indicators: ["50일/150일/200일 이동평균선", "VCP 패턴", "거래량", "상대강도 (RS)", "EPS/매출 성장률"],
        keyBooks: ["Trade Like a Stock Market Wizard", "Think & Trade Like a Champion"],
        commonMistakes: ["조건 불충족 종목 매수", "변동성 큰 장에서 매매", "포지션 사이징 무시"]
    },
    {
        id: "darvas",
        name: "니콜라스 다르바스",
        nameEn: "Nicolas Darvas",
        era: "1920–1977",
        nickname: "댄서 트레이더",
        photo: "📦",
        style: "momentum",
        styleName: "모멘텀/박스 이론",
        peakReturn: "18개월 만에 $200만 수익 (1950년대)",
        philosophy: "시장에서 돈을 벌려면, 주식이 무엇을 하고 있는지를 보아야 한다.",
        approach: "다르바스 박스 이론 - 가격 범위와 거래량에 기반한 모멘텀 트레이딩",
        timeframe: "중기 (수주~수개월)",
        riskPerTrade: "이전 박스 하단 손절",
        buyRules: [
            { rule: "박스 형성 확인", detail: "주가가 일정 범위(상단-하단) 내에서 움직이는 '박스'를 형성할 때까지 관찰", priority: "핵심" },
            { rule: "상단 돌파 + 강한 거래량 매수", detail: "주가가 박스 상단을 강한 거래량과 함께 돌파할 때 매수 신호. 거래량이 강한 것이 핵심 확인 조건", priority: "핵심" },
            { rule: "신고가 종목 집중", detail: "새로운 최고가를 경신하면서 거래량이 크게 증가하는 종목에 집중", priority: "주요" },
            { rule: "탈피오닥스 확인", detail: "50일 EMA(지수이동평균)로 추세를 확인하고, 진짜 돌파와 가짜 돌파를 구분", priority: "보조" }
        ],
        sellRules: [
            { rule: "이전 박스 진입 시 손절", detail: "주가가 이전 박스 영역으로 되돌아가면 즉시 손절. 추적 스톱로스 활용", priority: "핵심" },
            { rule: "박스 하단 이탈 시 매도", detail: "현재 박스의 하단을 이탈하면 즉시 매도", priority: "핵심" },
            { rule: "새 박스로 스톱 이동", detail: "새로운 상위 박스가 형성되면 이전 박스의 상단이 지지선이 되며, 스톱을 상향 조정", priority: "주요" }
        ],
        indicators: ["다르바스 박스 (가격 범위)", "거래량", "50일 EMA", "신고가 리스트"],
        keyBooks: ["How I Made $2,000,000 in the Stock Market"],
        commonMistakes: ["거래량 무시한 돌파 매수", "손절 미이행", "하락 추세 종목 매수"]
    },
    {
        id: "dennis",
        name: "리처드 데니스",
        nameEn: "Richard Dennis",
        era: "1949–현재",
        nickname: "터틀 트레이더의 스승",
        photo: "🐢",
        style: "quant",
        styleName: "시스템 트레이딩 (터틀)",
        peakReturn: "$400 → $200M (수년간)",
        philosophy: "트레이딩은 가르칠 수 있다. 규칙을 따르면 된다.",
        approach: "완전한 규칙 기반 추세추종 시스템 (터틀 트레이딩)",
        timeframe: "중기 (수주~수개월)",
        riskPerTrade: "총 자본의 2% (또는 1%)",
        buyRules: [
            { rule: "시스템 1: 20일 최고가 돌파", detail: "가격이 과거 20일간 최고가를 돌파하면 매수 진입", priority: "핵심" },
            { rule: "시스템 2: 55일 최고가 돌파", detail: "가격이 과거 55일간 최고가를 돌파하면 매수 진입 (더 보수적)", priority: "핵심" },
            { rule: "ATR 기반 포지션 사이징", detail: "20일 ATR(Average True Range)을 사용하여 변동성에 따라 포지션 규모 조정. 모든 거래의 리스크를 일정하게 유지", priority: "핵심" },
            { rule: "피라미딩 (승리 시 추가 매수)", detail: "추세가 유리한 방향으로 진행되면 기존 포지션에 추가 매수 (피라미딩)", priority: "주요" }
        ],
        sellRules: [
            { rule: "시스템 1: 10일 최저가 이탈 매도", detail: "가격이 과거 10일간 최저가 아래로 내려가면 청산", priority: "핵심" },
            { rule: "시스템 2: 20일 최저가 이탈 매도", detail: "가격이 과거 20일간 최저가 아래로 내려가면 청산", priority: "핵심" },
            { rule: "2N ATR 스톱로스", detail: "진입가에서 2배의 20일 ATR만큼 스톱로스 설정. 시장 변동성에 동적으로 조정", priority: "핵심" },
            { rule: "최대 리스크 2%", detail: "한 번의 거래에서 총 계좌의 2%를 초과하는 손실 불가", priority: "핵심" }
        ],
        indicators: ["20일/55일 채널 돌파", "ATR (Average True Range)", "10일/20일 최저가", "거래량"],
        keyBooks: ["Way of the Turtle (Curtis Faith)", "The Complete TurtleTrader"],
        commonMistakes: ["규칙 이탈", "감정적 매매", "포지션 사이징 무시"]
    },
    {
        id: "seykota",
        name: "에드 세이코타",
        nameEn: "Ed Seykota",
        era: "1946–현재",
        nickname: "시스템 트레이딩의 선구자",
        photo: "🖥️",
        style: "quant",
        styleName: "시스템적 추세추종",
        peakReturn: "$5,000 → $15M (12~16년간, 모델 계좌)",
        philosophy: "모든 사람은 시장에서 자신이 원하는 것을 얻는다.",
        approach: "컴퓨터 기반 시스템적 추세추종 + 심리 관리",
        timeframe: "중장기 (수주~수개월)",
        riskPerTrade: "소규모 포지션",
        buyRules: [
            { rule: "추세 확인 후 진입", detail: "지속적인 가격 추세를 식별하고, 추세 방향으로만 진입. 반전 징후가 나타날 때까지 보유", priority: "핵심" },
            { rule: "시스템 규칙 준수", detail: "감정을 배제한 규칙 기반의 객관적 데이터 분석으로만 매수 결정. 컴퓨터화된 시스템 활용", priority: "핵심" },
            { rule: "작은 포지션 유지", detail: "리스크 관리를 위해 항상 작은 포지션 규모로 진입", priority: "주요" },
            { rule: "뉴스 무시", detail: "뉴스를 '파일링'(무시)하고, 오직 가격 데이터와 기술 지표에만 의존", priority: "주요" }
        ],
        sellRules: [
            { rule: "손실 빠른 절단", detail: "손실이 발생한 거래는 빠르게 정리. 작은 손실이 큰 재난이 되기 전에 차단", priority: "핵심" },
            { rule: "수익 계속 유지", detail: "수익이 나고 있는 거래는 추세가 지속되는 한 계속 보유. '수익은 알아서 자란다'", priority: "핵심" },
            { rule: "스톱 사용 필수", detail: "모든 포지션에 반드시 스톱로스를 설정하고 엄격히 준수", priority: "핵심" },
            { rule: "시스템에 충실", detail: "어떤 상황에서도 시스템의 매도 신호를 따르고, 자의적 판단 배제", priority: "주요" }
        ],
        indicators: ["이동평균선", "추세 지표", "시스템 신호", "가격 액션"],
        keyBooks: ["Market Wizards (인터뷰)", "Trading Tribe"],
        commonMistakes: ["감정적 매매", "시스템 무시", "과거 뉴스에 반응"]
    },
    {
        id: "druckenmiller",
        name: "스탠리 드러켄밀러",
        nameEn: "Stanley Druckenmiller",
        era: "1953–현재",
        nickname: "소로스의 후계자",
        photo: "🎰",
        style: "macro",
        styleName: "글로벌 매크로",
        peakReturn: "30년간 연평균 30% (손실 연도 없음)",
        philosophy: "확신이 있으면 모든 달걀을 한 바구니에 넣고 그 바구니를 주시하라.",
        approach: "톱다운 거시경제 분석 + 유동성 분석에 기반한 집중 투자",
        timeframe: "중기 (수주~수개월)",
        riskPerTrade: "고확신 시 대규모 집중",
        buyRules: [
            { rule: "거시경제 톱다운 분석", detail: "GDP, 금리, 고용, 중앙은행 유동성 정책 등 거시경제 트렌드를 분석하여 큰 흐름 파악", priority: "핵심" },
            { rule: "높은 확신 시 집중 투자", detail: "'확신이 있으면 전부를 걸어라' - 소수의 고확신 기회에 자본을 집중 배치", priority: "핵심" },
            { rule: "유동성 흐름 추적", detail: "중앙은행의 유동성 정책과 자금 흐름을 면밀히 추적. 유동성이 시장을 움직인다", priority: "주요" },
            { rule: "유연한 자산배분", detail: "주식, 채권, 통화, 원자재 등 다양한 자산군에 걸쳐 거시경제 변화에 따라 유연하게 이동", priority: "주요" }
        ],
        sellRules: [
            { rule: "자본 보전 최우선", detail: "자본 보전이 근본 원칙. 손실을 빠르게 인정하고 청산", priority: "핵심" },
            { rule: "손실 빠른 절단", detail: "손실이 나는 포지션은 빠르게 정리하되, 수익 포지션은 계속 유지", priority: "핵심" },
            { rule: "환경 변화 시 즉시 대응", detail: "경제 환경이 변화하면 기존 포지션에 연연하지 않고 즉시 방향 전환", priority: "주요" },
            { rule: "에고 분리", detail: "자존심을 거래 결정에서 분리. 손실을 인정하는 데 주저하지 않음", priority: "주요" }
        ],
        indicators: ["중앙은행 정책/유동성", "GDP/금리/고용 데이터", "통화 흐름", "시장 간 상관관계"],
        keyBooks: ["The New Market Wizards (인터뷰)", "Bloomberg 인터뷰들"],
        commonMistakes: ["과도한 분산", "확신 부족한 소규모 매매", "에고에 따른 매매"]
    },
    {
        id: "weinstein",
        name: "스탠 와인스틴",
        nameEn: "Stan Weinstein",
        era: "1941–현재",
        nickname: "스테이지 분석의 아버지",
        photo: "📐",
        style: "stage",
        styleName: "스테이지 분석",
        peakReturn: "시장 사이클 예측으로 일관된 수익",
        philosophy: "30주 이동평균선이 당신에게 필요한 모든 것을 말해준다.",
        approach: "주봉 기반 4단계 스테이지 분석 - 30주 이동평균선 중심의 추세추종",
        timeframe: "중장기 (수주~수개월)",
        riskPerTrade: "스톱로스 엄수 (Stage 1 하단)",
        buyRules: [
            { rule: "Stage 2 진입 시에만 매수", detail: "주가가 Stage 1(축적) 바닥 구간에서 상단 저항선을 강한 거래량과 함께 돌파하고, 30주 이동평균선 위로 올라설 때만 매수. Stage 2만이 유일한 매수 구간", priority: "핵심" },
            { rule: "30주 이동평균선 상향 전환 확인", detail: "30주 이동평균선(≈150일선)이 평탄해진 후 상승 전환되었는지 반드시 확인. 하락하는 30주선 위의 돌파는 매수 금지", priority: "핵심" },
            { rule: "거래량 폭증 확인", detail: "돌파 시 거래량이 평균의 2~3배 이상 폭증해야 유효한 돌파. 거래량 없는 돌파는 가짜 신호", priority: "핵심" },
            { rule: "상대강도 확인", detail: "해당 종목의 상대강도가 시장 대비 강한 것을 확인. 시장보다 약한 종목은 아무리 좋아 보여도 매수 금지", priority: "주요" },
            { rule: "섹터 강도 확인", detail: "해당 종목이 속한 섹터/업종 전체가 강세인지 확인. 강한 섹터의 강한 종목을 매수", priority: "주요" },
            { rule: "시장 전체 방향 확인", detail: "S&P 500 등 주요 지수가 Stage 2에 있을 때만 개별 종목 매수. 약세장에서는 현금 보유", priority: "주요" }
        ],
        sellRules: [
            { rule: "30주선 이탈 시 매도", detail: "주가가 30주 이동평균선 아래로 마감하면 Stage 3(분배) 경고. 2주 연속 30주선 아래 마감 시 반드시 매도", priority: "핵심" },
            { rule: "Stage 3 진입 시 전량 매도", detail: "30주선이 평탄해지고 주가가 횡보하면 Stage 3(분배 구간). 더 이상 보유하지 않고 전량 매도", priority: "핵심" },
            { rule: "스톱로스 엄수", detail: "매수 시 반드시 스톱로스를 Stage 1 바닥 또는 돌파 지점 아래에 설정. 스톱 히트 시 즉시 매도", priority: "핵심" },
            { rule: "Stage 4 종목 절대 보유 금지", detail: "30주선이 하락하고 주가가 그 아래에 있는 Stage 4 종목은 절대 보유하지 않는다. 반등을 기대하며 보유하는 것은 가장 큰 실수", priority: "핵심" }
        ],
        indicators: ["30주 이동평균선 (≈150일)", "주봉 차트", "거래량", "상대강도", "10주 이동평균선 (트레이더용)", "섹터 분석"],
        keyBooks: ["Secrets for Profiting in Bull and Bear Markets"],
        commonMistakes: ["Stage 4 종목 반등 기대 보유", "하락하는 30주선 위 돌파 매수", "거래량 없는 돌파 매수", "약세장에서 매수 시도"]
    },
    {
        id: "graham", name: "벤저민 그레이엄", nameEn: "Benjamin Graham", era: "1894–1976",
        nickname: "가치투자의 아버지", photo: "📚", style: "value", styleName: "가치투자 (딥밸류)",
        peakReturn: "연평균 20% (20년간)", philosophy: "투자의 핵심은 안전마진이다. 충분한 할인가에 사라.",
        approach: "순자산가치(NCAV) 대비 저평가된 기업을 기계적으로 매수하는 딥밸류 전략",
        timeframe: "중장기 (수개월~수년)", riskPerTrade: "극도의 분산 (30종목+)",
        buyRules: [
            { rule: "안전마진 확보 (내재가치 2/3 이하)", detail: "기업의 내재가치를 계산하고, 시장가가 내재가치의 2/3 이하일 때만 매수", priority: "핵심" },
            { rule: "순유동자산가치(NCAV) 매수", detail: "시가총액이 유동자산-총부채보다 낮은 '넷넷' 주식 매수", priority: "핵심" },
            { rule: "PER 15 이하", detail: "최근 3년 평균 이익 기준 PER 15배 이하인 종목만 매수", priority: "주요" },
            { rule: "PBR 1.5 이하", detail: "장부가치 대비 1.5배 이하로 거래되는 종목만 매수", priority: "주요" },
            { rule: "재무 안정성 확인", detail: "유동비율 2:1 이상, 장기부채가 순유동자산 이하", priority: "주요" },
            { rule: "배당 지급 이력", detail: "최소 20년간 배당 지급 이력이 있는 기업 선호", priority: "보조" }
        ],
        sellRules: [
            { rule: "목표가 도달 시 매도", detail: "내재가치에 도달하거나 50% 수익 실현 시 매도", priority: "핵심" },
            { rule: "2~3년 내 목표 미달 시 매도", detail: "보유 후 2~3년 내 가치가 실현되지 않으면 매도", priority: "주요" },
            { rule: "펀더멘털 악화 시 매도", detail: "재무 상태가 악화되거나 적자 전환 시 매도", priority: "핵심" }
        ],
        indicators: ["PER", "PBR", "NCAV", "유동비율", "배당이력", "부채비율"],
        keyBooks: ["The Intelligent Investor", "Security Analysis"],
        commonMistakes: ["안전마진 무시", "고PER 성장주 추격", "재무 분석 생략"]
    },
    {
        id: "munger", name: "찰리 멍거", nameEn: "Charlie Munger", era: "1924–2023",
        nickname: "버핏의 파트너", photo: "🧓", style: "value", styleName: "품질 가치투자",
        peakReturn: "연평균 19.8% (Wesco Financial)", philosophy: "훌륭한 기업을 적정가에 사는 것이 적정 기업을 싸게 사는 것보다 낫다.",
        approach: "뛰어난 경쟁우위와 경영진을 가진 최고 품질 기업을 적정가에 장기보유",
        timeframe: "장기 (수년~영구보유)", riskPerTrade: "극소수 확신 종목 집중",
        buyRules: [
            { rule: "훌륭한 사업만 매수", detail: "이해하기 쉽고, 지속 가능한 경쟁우위를 가진 훌륭한 사업만 매수", priority: "핵심" },
            { rule: "적정한 가격 확인", detail: "좋은 기업이라도 합리적 가격이어야 함. 과대 지불 금지", priority: "핵심" },
            { rule: "경영진 평가", detail: "정직하고 유능한 경영진이 운영하는 기업만 투자", priority: "주요" },
            { rule: "다학제적 사고", detail: "심리학, 경제학, 물리학 등 다양한 사고 모델을 결합하여 판단", priority: "주요" }
        ],
        sellRules: [
            { rule: "거의 팔지 않는다", detail: "진정으로 훌륭한 기업은 영구보유. 매도 자체가 드문 이벤트", priority: "핵심" },
            { rule: "경쟁우위 상실 시 매도", detail: "사업의 근본적 경쟁우위가 사라졌을 때만 매도", priority: "핵심" },
            { rule: "경영진 신뢰 상실 시", detail: "경영진의 역량이나 도덕성에 문제가 생길 때", priority: "주요" }
        ],
        indicators: ["ROIC", "경쟁우위 지속성", "경영진 품질", "사업 이해도"],
        keyBooks: ["Poor Charlie's Almanack", "The Tao of Charlie Munger"],
        commonMistakes: ["저품질 기업 매수", "과대 지불", "능력 범위 밖 투자"]
    },
    {
        id: "lynch", name: "피터 린치", nameEn: "Peter Lynch", era: "1944–현재",
        nickname: "텐배거의 사냥꾼", photo: "🔟", style: "growth", styleName: "실전 성장투자",
        peakReturn: "연평균 29.2% (마젤란 펀드 13년)", philosophy: "일상에서 10배 주식을 찾아라. 아는 것에 투자하라.",
        approach: "일상생활에서 투자 아이디어를 발굴, PEG 비율로 성장성 대비 가격 평가",
        timeframe: "중장기 (수개월~수년)", riskPerTrade: "분산 (100종목+)",
        buyRules: [
            { rule: "PEG 비율 1 이하", detail: "PER/EPS성장률(PEG)이 1 이하인 종목. PEG 0.5면 극도의 매력", priority: "핵심" },
            { rule: "아는 것에 투자", detail: "자신이 이해하는 사업, 일상에서 발견한 좋은 제품/서비스의 회사에 투자", priority: "핵심" },
            { rule: "6가지 분류로 종목 평가", detail: "저성장, 우량, 고성장, 경기순환, 턴어라운드, 자산주로 분류 후 각각 다른 전략", priority: "주요" },
            { rule: "스토리 확인", detail: "왜 이 기업이 성장할 것인지 2분 안에 설명할 수 있어야 투자", priority: "주요" },
            { rule: "기관 미관심 종목 선호", detail: "기관 보유가 적고 애널리스트 커버리지가 없는 숨은 보석 선호", priority: "보조" }
        ],
        sellRules: [
            { rule: "스토리 변화 시 매도", detail: "당초 매수 이유의 스토리가 변했으면 매도", priority: "핵심" },
            { rule: "PEG 2 초과 시 매도 고려", detail: "PEG가 2를 넘으면 성장 대비 과대평가", priority: "주요" },
            { rule: "텐배거는 오래 보유", detail: "큰 승자를 너무 일찍 팔지 않는다. 올라가는 종목은 계속 보유", priority: "핵심" }
        ],
        indicators: ["PEG 비율", "EPS 성장률", "부채비율", "현금흐름", "재고 회전율"],
        keyBooks: ["One Up on Wall Street", "Beating the Street"],
        commonMistakes: ["이해 못하는 기업 투자", "승자를 너무 일찍 매도", "핫팁에 매수"]
    },
    {
        id: "fisher", name: "필 피셔", nameEn: "Phil Fisher", era: "1907–2004",
        nickname: "성장투자의 개척자", photo: "🔬", style: "growth", styleName: "질적 성장투자",
        peakReturn: "모토로라 등 수십배 수익", philosophy: "소수의 훌륭한 기업을 찾아 영원히 보유하라.",
        approach: "스커틀버트(발로 뛴 조사)를 통한 질적 분석 기반 소수 종목 장기보유",
        timeframe: "장기 (수년~수십년)", riskPerTrade: "소수 종목 집중 (10~30개)",
        buyRules: [
            { rule: "15가지 체크리스트 충족", detail: "매출 성장 잠재력, R&D 효율, 이익률, 노사관계, 경영진 깊이 등 15개 질적 기준 평가", priority: "핵심" },
            { rule: "스커틀버트 조사", detail: "경쟁사, 공급업체, 고객, 직원 등을 직접 인터뷰하여 기업의 진짜 품질을 파악", priority: "핵심" },
            { rule: "탁월한 경영진", detail: "최고 수준의 경영 능력과 진정성을 가진 경영진이 있는 기업만 투자", priority: "핵심" },
            { rule: "높은 이익률과 R&D 투자", detail: "업계 평균 이상의 이익률을 유지하고, R&D에 적극 투자하는 기업", priority: "주요" }
        ],
        sellRules: [
            { rule: "거의 팔지 않는다", detail: "올바르게 선택했다면 매도할 이유가 거의 없다. 수십년 보유가 기본", priority: "핵심" },
            { rule: "당초 매수 기준 불충족 시", detail: "매수 시 평가한 15가지 기준 중 핵심이 더 이상 충족되지 않을 때만", priority: "핵심" },
            { rule: "더 좋은 기회 발견 시", detail: "압도적으로 더 좋은 기회가 있을 때 자본 재배치", priority: "보조" }
        ],
        indicators: ["매출 성장 잠재력", "R&D 비용/매출", "이익률 추이", "경영진 품질", "노사관계"],
        keyBooks: ["Common Stocks and Uncommon Profits"],
        commonMistakes: ["시장 타이밍 시도", "좋은 기업을 너무 일찍 매도", "숫자만 보고 판단"]
    },
    {
        id: "burry", name: "마이클 버리", nameEn: "Michael Burry", era: "1971–현재",
        nickname: "빅숏의 주인공", photo: "👁️", style: "contrarian", styleName: "역발상 딥밸류",
        peakReturn: "2008년 서브프라임 공매도 +489%", philosophy: "군중이 무시하는 곳에서 가치를 찾아라.",
        approach: "극단적 역발상 - 시장이 완전히 외면하는 자산에서 숨겨진 가치를 발굴",
        timeframe: "중장기 (수개월~수년)", riskPerTrade: "집중 투자 (소수 확신 베팅)",
        buyRules: [
            { rule: "군중과 반대로 가라", detail: "시장의 컨센서스와 반대 방향에서 기회 탐색. 모두가 팔 때 사고, 모두가 살 때 회의적", priority: "핵심" },
            { rule: "극단적 저평가 발굴", detail: "자산가치 대비 극도로 저평가된 종목, 시장이 완전히 외면한 섹터에서 투자 기회", priority: "핵심" },
            { rule: "철저한 독립적 리서치", detail: "SEC 공시, 재무제표, 법률 문서까지 직접 분석. 남의 의견 의존 금지", priority: "핵심" },
            { rule: "비대칭 리스크/보상", detail: "하방은 제한되고 상방은 큰 비대칭적 기회에만 투자 (옵션, CDS 등 활용)", priority: "주요" }
        ],
        sellRules: [
            { rule: "가치 실현 시 매도", detail: "시장이 숨겨진 가치를 인식하여 정상 가격에 도달하면 매도", priority: "핵심" },
            { rule: "논거 훼손 시 매도", detail: "매수 근거의 핵심 가정이 무너진 경우 인정하고 매도", priority: "핵심" },
            { rule: "확신이 사라지면 매도", detail: "확신 수준이 떨어지면 집중투자 논거가 약해지므로 축소", priority: "주요" }
        ],
        indicators: ["자산가치(NCAV/청산가치)", "SEC 공시 분석", "부채 구조", "옵션 프라이싱"],
        keyBooks: ["The Big Short (Michael Lewis)"],
        commonMistakes: ["군중 따라가기", "리서치 부족", "타이밍 집착"]
    },
    {
        id: "wood", name: "캐시 우드", nameEn: "Cathie Wood", era: "1955–현재",
        nickname: "파괴적 혁신의 여왕", photo: "🚀", style: "disruptive", styleName: "파괴적 혁신 투자",
        peakReturn: "2020년 ARK +152%", philosophy: "파괴적 혁신은 S-커브를 따른다. 초기에 투자하라.",
        approach: "AI, 로봇, 유전체, 핀테크, 블록체인 등 파괴적 혁신 기술 기업에 집중 투자",
        timeframe: "장기 (5년+)", riskPerTrade: "높은 변동성 감수, 확신 종목 집중",
        buyRules: [
            { rule: "파괴적 혁신 기술 보유", detail: "기존 산업을 근본적으로 바꿀 파괴적 혁신 기술을 보유한 기업에만 투자", priority: "핵심" },
            { rule: "5년 목표가 기준 투자", detail: "현재 밸류에이션이 아닌 5년 후 잠재 시장 규모와 점유율로 목표가 산출", priority: "핵심" },
            { rule: "라이트 법칙 적용", detail: "생산량 증가에 따라 비용이 기하급수적으로 하락하는 기술 분야 선호", priority: "주요" },
            { rule: "S-커브 초기 진입", detail: "기술 채택 S-커브의 초기 단계에 있는 기업/기술에 진입", priority: "주요" }
        ],
        sellRules: [
            { rule: "혁신 논거 훼손 시 매도", detail: "해당 기술의 파괴적 혁신 논거가 더 이상 유효하지 않을 때", priority: "핵심" },
            { rule: "경영진 비전 상실 시", detail: "경영진이 혁신 비전을 잃거나 전략 방향이 바뀔 때", priority: "주요" },
            { rule: "더 나은 혁신 기회 발견 시", detail: "더 강력한 파괴적 혁신 기회가 나타나면 자본 재배치", priority: "주요" }
        ],
        indicators: ["TAM(총 시장규모)", "라이트 법칙 비용곡선", "기술 채택률", "R&D 투자"],
        keyBooks: ["ARK Invest Research Reports"],
        commonMistakes: ["단기 밸류에이션 집착", "변동성에 패닉 매도", "혁신 없는 기업 매수"]
    },
    {
        id: "ackman", name: "빌 애크먼", nameEn: "Bill Ackman", era: "1966–현재",
        nickname: "행동주의 투자자", photo: "⚔️", style: "activist", styleName: "행동주의 투자",
        peakReturn: "2020년 CDS 헤지 +2,600% (단기)", philosophy: "위대한 기업을 적정가에 사고, 필요하면 변화를 만들어라.",
        approach: "대규모 지분 매입 후 경영 개선을 요구하여 기업 가치를 끌어올리는 행동주의 투자",
        timeframe: "중장기 (1~3년)", riskPerTrade: "대규모 집중 (5~10종목)",
        buyRules: [
            { rule: "독점적 사업 + 저평가", detail: "진입장벽이 높고 독점적 위치를 가진 기업이 일시적으로 저평가된 경우 매수", priority: "핵심" },
            { rule: "경영 개선 카탈리스트 확인", detail: "경영진 교체, 구조조정, 분사 등 가치 실현 촉매가 명확한 경우", priority: "핵심" },
            { rule: "단순하고 예측 가능한 사업", detail: "현금흐름이 안정적이고 사업 모델이 단순하여 내재가치 계산이 쉬운 기업", priority: "주요" },
            { rule: "확신 시 대규모 집중", detail: "확신이 있으면 포트폴리오의 큰 비중을 하나의 종목에 집중", priority: "주요" }
        ],
        sellRules: [
            { rule: "내재가치 도달 시 매도", detail: "기업이 적정가치에 도달하면 이익 실현", priority: "핵심" },
            { rule: "논거 오류 인정 시 즉시 매도", detail: "투자 논거가 틀렸음을 인정하면 손절. 허벌라이프 사례처럼 큰 손실 인정", priority: "핵심" },
            { rule: "경영 개선 실패 시 매도", detail: "행동주의 캠페인이 실패하면 포지션 정리", priority: "주요" }
        ],
        indicators: ["FCF 수익률", "ROIC", "경영진 품질", "경쟁 위치", "촉매 이벤트"],
        keyBooks: ["Pershing Square Annual Letters"],
        commonMistakes: ["에고에 집착", "손실 인정 지연", "과도한 레버리지"]
    },
    {
        id: "damodaran", name: "아스와스 다모다란", nameEn: "Aswath Damodaran", era: "1957–현재",
        nickname: "밸류에이션의 학장", photo: "🎓", style: "value", styleName: "DCF 밸류에이션",
        peakReturn: "학술적 접근 (체계적 교육)", philosophy: "밸류에이션은 스토리와 숫자를 연결하는 것이다.",
        approach: "DCF(현금흐름 할인법) 기반 체계적 내재가치 산출 + 스토리텔링",
        timeframe: "중장기 (수개월~수년)", riskPerTrade: "분산 투자",
        buyRules: [
            { rule: "DCF 내재가치 대비 할인 매수", detail: "엄격한 DCF 분석으로 산출한 내재가치보다 충분히 낮은 가격에 매수", priority: "핵심" },
            { rule: "스토리+넘버 일관성", detail: "기업의 성장 스토리가 재무적 숫자와 일관성이 있어야 투자", priority: "핵심" },
            { rule: "리스크 프리미엄 적용", detail: "국가 리스크, 기업 리스크, 산업 리스크를 할인율에 정확히 반영", priority: "주요" },
            { rule: "성장의 가격 확인", detail: "시장이 성장에 매기는 가격이 합리적인지 분석", priority: "주요" }
        ],
        sellRules: [
            { rule: "내재가치 초과 시 매도", detail: "시장가가 DCF 내재가치를 초과하면 매도", priority: "핵심" },
            { rule: "스토리 변화 시 재평가", detail: "기업의 해당한 스토리에 변화가 생기면 DCF를 재계산하고 판단", priority: "핵심" },
            { rule: "기회비용 고려", detail: "더 매력적인 밸류에이션 기회가 있으면 자본 재배치", priority: "주요" }
        ],
        indicators: ["DCF 모델", "WACC", "FCF 성장률", "터미널 밸류", "EV/EBITDA"],
        keyBooks: ["The Little Book of Valuation", "Investment Valuation"],
        commonMistakes: ["감정적 밸류에이션", "비현실적 성장 가정", "리스크 과소평가"]
    },
    {
        id: "pabrai", name: "모니시 파브라이", nameEn: "Mohnish Pabrai", era: "1964–현재",
        nickname: "단도 투자자", photo: "🗡️", style: "value", styleName: "단도(Dhandho) 투자",
        peakReturn: "연평균 26% (Pabrai Funds)", philosophy: "앞면 나오면 크게 이기고, 뒷면 나오면 조금 지는 베팅만 하라.",
        approach: "저위험 고수익(Dhandho) 기회 탐색 - 하방 제한, 상방 무제한인 비대칭 투자",
        timeframe: "중장기 (수년)", riskPerTrade: "소수 집중 (10종목 이내)",
        buyRules: [
            { rule: "하방 제한 + 상방 무제한", detail: "잃을 수 있는 금액은 제한되고, 벌 수 있는 금액은 훨씬 큰 비대칭적 기회만 투자", priority: "핵심" },
            { rule: "쉬운 사업에 투자", detail: "단순하고 이해하기 쉬운 사업 모델을 가진 기업에만 투자", priority: "핵심" },
            { rule: "클로닝 전략", detail: "버핏, 멍거 등 검증된 투자자의 포트폴리오를 참고하여 아이디어 발굴", priority: "주요" },
            { rule: "체크리스트 활용", detail: "과거 실수에서 배운 체크리스트를 투자 전 반드시 확인", priority: "주요" }
        ],
        sellRules: [
            { rule: "내재가치 90%+ 도달 시 매도", detail: "내재가치의 90% 이상에 도달하면 매도", priority: "핵심" },
            { rule: "더 좋은 기회 발견 시", detail: "현재 보유보다 훨씬 매력적인 비대칭 기회가 있으면 교체", priority: "주요" },
            { rule: "논거 훼손 시 매도", detail: "매수 논거의 핵심이 무너지면 인정하고 매도", priority: "핵심" }
        ],
        indicators: ["내재가치 할인율", "FCF", "ROIC", "부채비율", "경영진 자사주 보유"],
        keyBooks: ["The Dhandho Investor", "Mosaic: Perspectives on Investing"],
        commonMistakes: ["비대칭성 없는 투자", "복잡한 사업 투자", "체크리스트 생략"]
    },
    {
        id: "jhunjhunwala", name: "라케시 준준왈라", nameEn: "Rakesh Jhunjhunwala", era: "1960–2022",
        nickname: "인도의 워런 버핏", photo: "🐃", style: "growth", styleName: "인도 성장투자",
        peakReturn: "$100 → $5.8B (30년+)", philosophy: "인도의 성장에 베팅하라. 강세장을 절대 의심하지 마라.",
        approach: "인도 경제 성장에 대한 깊은 확신을 바탕으로 고성장 인도 기업 장기투자",
        timeframe: "장기 (수년~수십년)", riskPerTrade: "확신 종목 대규모 집중",
        buyRules: [
            { rule: "구조적 성장 트렌드 투자", detail: "인구 증가, 중산층 확대, 디지털화 등 구조적 메가트렌드의 수혜 기업 투자", priority: "핵심" },
            { rule: "우량 경영진 확인", detail: "정직하고 비전 있는 경영진이 이끄는 기업에만 투자", priority: "핵심" },
            { rule: "강세장에서 대담하게 투자", detail: "확인된 상승장에서는 주저 없이 대규모 투자. 강세장을 의심하지 말라", priority: "주요" },
            { rule: "낙관주의 유지", detail: "장기적으로 시장은 상승한다는 확신. 일시적 하락은 매수 기회", priority: "주요" }
        ],
        sellRules: [
            { rule: "성장 논거 훼손 시 매도", detail: "기업이나 섹터의 성장 스토리가 무너졌을 때 매도", priority: "핵심" },
            { rule: "극단적 고평가 시 일부 매도", detail: "밸류에이션이 극단적으로 높아지면 일부 이익 실현", priority: "주요" },
            { rule: "경영진 신뢰 상실 시 매도", detail: "경영진의 비전이나 도덕성에 문제가 생기면 매도", priority: "핵심" }
        ],
        indicators: ["매출/이익 성장률", "경영진 비전", "시장 점유율", "산업 성장률"],
        keyBooks: ["인터뷰 및 강연"],
        commonMistakes: ["약세장에서 패닉 매도", "소심한 포지션", "성장 트렌드 무시"]
    },
    {
        id: "ai_antigravity", name: "Antigravity AI", nameEn: "Antigravity AI", era: "2024–현재",
        nickname: "잠들지 않는 스크리너", photo: "🤖", style: "quant", styleName: "AI 자동 스크리닝",
        peakReturn: "24/7 무중단 시장 감시", philosophy: "감정은 0, 규칙은 100%. 인간이 판단하고, AI가 실행한다.",
        approach: "21명 전설적 트레이더의 매수/매도 규칙을 데이터화하여 전체 시장을 자동 스크리닝. 규칙 기반 진입/이탈 신호 생성",
        timeframe: "전 구간 (초단기~장기 모든 전략 실행)", riskPerTrade: "규칙 기반 자동 산출",
        buyRules: [
            { rule: "전체 시장 자동 스크리닝", detail: "4,000+ 종목을 실시간 스캔하여 21명의 전략 조건에 부합하는 종목 자동 필터링", priority: "핵심" },
            { rule: "30주선/50일선 자동 계산", detail: "와인스틴 Stage 2 진입, 오닐 CAN SLIM 조건, 미너비니 SEPA 조건을 자동 계산", priority: "핵심" },
            { rule: "거래량 이상 감지", detail: "평균 거래량 대비 1.5배 이상 폭증 시 기관 매집 가능성 자동 알림", priority: "주요" },
            { rule: "멀티 전략 교차 검증", detail: "하나의 종목이 여러 트레이더의 전략에 동시 부합 시 신뢰도 상승 (크로스 시그널)", priority: "주요" },
            { rule: "뉴스/실적 이벤트 모니터링", detail: "실적 발표, 섹터 뉴스, 지정학 이벤트를 24시간 모니터링하여 촉매 감지", priority: "보조" }
        ],
        sellRules: [
            { rule: "손절선 100% 실행", detail: "설정된 손절가 이탈 시 감정 개입 없이 즉시 매도 신호 생성. 인간의 최대 약점을 보완", priority: "핵심" },
            { rule: "30주선 이탈 자동 감지", detail: "와인스틴 기준 30주선 아래 2주 연속 마감 시 즉시 매도 경고", priority: "핵심" },
            { rule: "스테이지 전환 감지", detail: "Stage 2→3→4 전환을 자동 감지하여 사전 경고. Stage 3 진입 시 즉시 알림", priority: "주요" },
            { rule: "포트폴리오 리스크 실시간 관리", detail: "전체 포트폴리오의 상관관계, 섹터 집중도, 개별 손실 한도를 실시간 모니터링", priority: "주요" }
        ],
        indicators: ["전 트레이더 지표 통합", "30주/10주/50일 MA", "RSI", "OBV", "거래량 비율", "ATR"],
        keyBooks: ["21명의 전설적 전략 데이터베이스 (이 대시보드)"],
        commonMistakes: ["블랙스완 대응 불가", "과거에 없던 패턴 예측 불가", "기업의 질적 판단 한계", "반사성(피드백 루프) 미반영"]
    }
];

const COMMON_RULES = [
    {
        icon: "✂️",
        title: "손실 빠른 절단",
        description: "전원이 동의하는 절대 규칙. 작은 손실이 큰 재난이 되기 전에 반드시 손절한다.",
        traders: ["전원 (21/21)"],
        importance: 10
    },
    {
        icon: "🏃",
        title: "수익은 계속 유지",
        description: "수익이 나는 포지션은 추세가 지속되는 한 보유. '손실은 짧게, 수익은 길게'",
        traders: ["Livermore", "Buffett", "Tudor Jones", "Seykota", "Druckenmiller", "Lynch", "Fisher"],
        importance: 9
    },
    {
        icon: "🧠",
        title: "감정 통제",
        description: "탐욕과 공포를 제어하고, 규칙과 시스템에 따라 매매. 에고를 거래에서 분리",
        traders: ["전원 (21/21)"],
        importance: 9
    },
    {
        icon: "📏",
        title: "포지션 사이징",
        description: "한 번의 거래에서 총 자본의 1-2% 이상을 위험에 노출하지 않는다",
        traders: ["Tudor Jones", "Minervini", "Dennis", "Seykota"],
        importance: 8
    },
    {
        icon: "📊",
        title: "추세 확인 후 매매",
        description: "시장 또는 종목의 추세를 확인한 후에만 진입. 역추세 매매는 극도로 제한적",
        traders: ["Livermore", "O'Neil", "Minervini", "Darvas", "Dennis", "Seykota", "Weinstein"],
        importance: 8
    },
    {
        icon: "🛡️",
        title: "자본 보전 최우선",
        description: "공격보다 수비를 먼저. 자본을 지키는 것이 수익을 내는 것보다 중요하다",
        traders: ["Tudor Jones", "Druckenmiller", "Soros", "Buffett", "Graham", "Munger", "Pabrai"],
        importance: 9
    },
    {
        icon: "🚫",
        title: "물타기 절대 금지",
        description: "손실 포지션에 추가 매수하여 평균단가를 낮추는 행위 절대 금지",
        traders: ["Livermore", "Tudor Jones", "O'Neil", "Minervini"],
        importance: 8
    },
    {
        icon: "⏳",
        title: "인내심과 기다림",
        description: "명확한 기회가 올 때까지 현금을 보유하며 기다린다. 매일 거래할 필요 없다",
        traders: ["Livermore", "Buffett", "O'Neil", "Minervini", "Munger", "Pabrai"],
        importance: 7
    },
    {
        icon: "🏰",
        title: "경쟁우위/해자 확인",
        description: "지속 가능한 경쟁우위(경제적 해자)를 가진 기업에만 투자한다",
        traders: ["Buffett", "Munger", "Fisher", "Lynch", "Ackman"],
        importance: 9
    },
    {
        icon: "📖",
        title: "능력 범위 내 투자",
        description: "자신이 이해할 수 있는 사업에만 투자. 잘 아는 영역에 집중",
        traders: ["Buffett", "Munger", "Lynch", "Graham", "Pabrai"],
        importance: 8
    }
];

const STYLE_COLORS = {
    momentum: { bg: "#FF6B35", label: "모멘텀/추세" },
    value: { bg: "#1B998B", label: "가치투자" },
    macro: { bg: "#7B2D8E", label: "글로벌 매크로" },
    growth: { bg: "#F46036", label: "성장주" },
    quant: { bg: "#2E86AB", label: "퀀트/시스템" },
    stage: { bg: "#E63946", label: "스테이지 분석" },
    contrarian: { bg: "#D4A373", label: "역발상" },
    disruptive: { bg: "#06D6A0", label: "파괴적 혁신" },
    activist: { bg: "#118AB2", label: "행동주의" }
};
