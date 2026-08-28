export interface ConditionItemRow {
  id: string;
  col1?: string; // 금액 또는 구분
  col2?: string; // 조건 또는 개월
  col3?: string; // 고객 또는 금리
  col4?: string; // 인센 또는 신규/기존
  col5?: string; // 기존 (신한일시불 등에서 사용)
  highlightCol3?: boolean;
  highlightCol4?: boolean;
}

export interface ConditionCardBlock {
  id: string;
  title: string;
  badge?: string;
  theme: 'blue' | 'rose' | 'green' | 'gray';
  headers: string[];
  colWidths?: string[];
  rows: ConditionItemRow[];
  footerNotices: string[];
  highlightNotices?: string[];
}

export interface ConditionMatrixData {
  title: string;
  lastUpdated: string;
  lumpSumSection: {
    title: string;
    subTitle?: string;
    blocks: ConditionCardBlock[];
    notices: string[];
  };
  directInstallmentSection: {
    title: string;
    subTitle: string;
    blocks: ConditionCardBlock[];
  };
  autoInstallmentSection: {
    title: string;
    subTitle: string;
    blocks: ConditionCardBlock[];
  };
}

export const INITIAL_CONDITION_MATRIX: ConditionMatrixData = {
  title: '2026년 2월 신차구매 조건표',
  lastUpdated: '2026. 02',
  lumpSumSection: {
    title: '일시불 결제 조건',
    blocks: [
      {
        id: 'nh-lump',
        title: '농협카드 일시불',
        theme: 'blue',
        headers: ['금액', '고객', '인센', '비고'],
        rows: [
          { id: '1', col1: '2천 이상', col2: '1.2%', col3: '0.4%', col4: '기존고객 진행가능' },
          { id: '2', col1: '1천 이상', col2: '1.0%', col3: '0.3%', col4: '신규는 카드 수령 후 진행' },
        ],
        footerNotices: ['* 기존 고객만 진행 가능', '* 신규 고객은 카드수령 후 진행가능'],
      },
      {
        id: 'lotte-lump',
        title: '롯데카드 일시불',
        theme: 'blue',
        headers: ['금액', '고객', '인센', '비고'],
        rows: [
          { id: '1', col1: '1백 이상', col2: '1.5%', col3: '0.4%', col4: '가상계좌, 기존만 가능' },
        ],
        footerNotices: ['* 가상계좌, 기존만 진행가능 신규카드 발급중단'],
        highlightNotices: ['신규발급 중단'],
      },
      {
        id: 'woori-lump',
        title: '우리카드 일시불',
        theme: 'blue',
        headers: ['금액', '고객', '인센', '비고'],
        rows: [
          { id: '1', col1: '1천 이상', col2: '1.3%', col3: '0.4%', col4: '캐시백 받고 해지가능' },
        ],
        footerNotices: ['* 캐시백 받고 해지 가능'],
      },
      {
        id: 'shinhan-lump',
        title: '신한카드 일시불',
        theme: 'blue',
        headers: ['금액', '고객', '인센', '비고'],
        rows: [
          { id: '1', col1: '5백 이상', col2: '1.3%', col3: '신규 0.6 / 기존 0.3', col4: '후불가능 / 신규 3개월 유지' },
        ],
        footerNotices: ['* 후불 가능 / 신규카드 3개월 유지'],
      },
      {
        id: 'hana-lump',
        title: '하나카드 일시불',
        theme: 'blue',
        headers: ['금액', '고객', '인센', '비고'],
        rows: [
          { id: '1', col1: '3백 이상', col2: '1.5%', col3: '0.4%', col4: '3조건 중 선택' },
          { id: '2', col1: '3백 이상', col2: '1.4%', col3: '0.5%', col4: '연회비 19,900원' },
          { id: '3', col1: '3백 이상', col2: '1.3%', col3: '0.6%', col4: '6개월 유지' },
        ],
        footerNotices: ['세가지 조건 선택', '* 연회비 19,900원 / 6개월 유지'],
      },
      {
        id: 'kb-lump',
        title: '국민카드 일시불',
        theme: 'blue',
        headers: ['금액', '고객', '인센', '비고'],
        rows: [
          { id: '1', col1: '5천 이상', col2: '1.3%', col3: '0.4%', col4: '후불가능' },
          { id: '2', col1: '2천 ~ 4천', col2: '1.3%', col3: '0.3%', col4: '2개월 유지' },
          { id: '3', col1: '1백 이상', col2: '1.3%', col3: '0.2%', col4: '' },
        ],
        footerNotices: ['* 후불 가능 / 2개월 유지'],
      },
      {
        id: 'corp-lump',
        title: '법인 캐시백',
        theme: 'blue',
        headers: ['카드사', '고객캐시백', '인센', '비고'],
        rows: [
          { id: '1', col1: '하나카드', col2: '0.5%', col3: '0.8%', col4: '연회비 X , 실물카드 없음' },
          { id: '2', col1: 'KB국민카드', col2: '0.5%', col3: '0.6%', col4: '연회비 X' },
        ],
        footerNotices: ['* 법인 캐시백 진행'],
      },
    ],
    notices: [
      '* 카드사별 캐시백 및 할부 조건은 변동될 수 있으므로 진행 전 확인 부탁드립니다.',
      '* 할부 진행시 공동명의는 사전에 말씀 부탁드립니다.',
      '* 중도상환은 할부 3개월간 유지 후, 4개월 차 때부터 가능합니다. (첫회차 납부 필수)',
      '* 문제가 발생할 경우, 수수료 지급이 어렵거나 환수가 있을 수 있는 점 참고 부탁드립니다.',
    ],
  },
  directInstallmentSection: {
    title: '다이렉트 할부',
    subTitle: '대출기록 X / 중도상환수수료 X / 원리금균등상환',
    blocks: [
      {
        id: 'lotte-direct',
        title: '롯데카드 다이렉트',
        theme: 'rose',
        headers: ['구분', '개월', '금리', '인센'],
        rows: [
          { id: '1', col1: '무선수', col2: '36~60개 월', col3: '6.0%', col4: '0.9%' },
        ],
        footerNotices: [],
      },
      {
        id: 'lotte-direct-low',
        title: '롯데카드 저금리',
        theme: 'rose',
        headers: ['구분', '개월', '금리', '인센'],
        rows: [
          { id: '1', col1: '무선수', col2: '36~60개 월', col3: '5.5%', col4: '0.5%' },
        ],
        footerNotices: [],
      },
      {
        id: 'kb-direct',
        title: '국민카드 다이렉트',
        theme: 'rose',
        headers: ['구분', '개월', '금리', '인센'],
        rows: [
          { id: '1', col1: '무선수', col2: '36~60개 월', col3: '4.8%', col4: '1.4%' },
        ],
        footerNotices: [],
      },
      {
        id: 'kb-direct-low',
        title: '국민카드 저금리',
        theme: 'rose',
        headers: ['구분', '개월', '금리', '인센'],
        rows: [
          { id: '1', col1: '무선수', col2: '36~60개 월', col3: '4.3%', col4: '0.5%' },
        ],
        footerNotices: ['* 수수료 익월 15일지급'],
      },
      {
        id: 'woori-direct',
        title: '우리카드 다이렉트',
        theme: 'rose',
        headers: ['구분', '개월', '금리', '인센'],
        rows: [
          { id: '1', col1: '무선수', col2: '36~60개 월', col3: '4.5%', col4: '1.7%' },
        ],
        footerNotices: [],
      },
      {
        id: 'woori-direct-low',
        title: '우리카드 저금리',
        theme: 'rose',
        headers: ['구분', '개월', '금리', '인센'],
        rows: [
          { id: '1', col1: '무선수', col2: '36개 월\n48개 월\n60개 월', col3: '3.5%\n3.6%\n3.7%', col4: '0.9%', highlightCol3: true },
        ],
        footerNotices: ['* 인센 월말 지급'],
      },
      {
        id: 'hana-direct',
        title: '하나카드 다이렉트',
        theme: 'rose',
        headers: ['구분', '개월', '금리', '인센'],
        rows: [
          { id: '1', col1: '무선수\n선수 10%\n선수 20%\n선수 30%', col2: '36~60개 월', col3: '4.4% ~ 4.1%', col4: '1.3%' },
        ],
        footerNotices: [],
      },
      {
        id: 'hana-direct-low',
        title: '하나카드 저금리',
        theme: 'rose',
        headers: ['구분', '개월', '금리', '인센'],
        rows: [
          { id: '1', col1: '무선수\n선수 10%\n선수 20%', col2: '36~60개 월', col3: '3.8% ~ 3.6%', col4: '0.6%', highlightCol3: true },
        ],
        footerNotices: ['* 캐시백 0.9% / 인센 0.3%'],
      },
      {
        id: 'shinhan-direct',
        title: '신한카드',
        theme: 'rose',
        headers: ['구분', '개월', '금리', '인센'],
        rows: [
          { id: '1', col1: '무선수', col2: '36개 월\n48개 월\n60개 월', col3: '3.9%\n4.0%\n4.1%', col4: '0.3%' },
        ],
        footerNotices: ['* 자동이체시 0.1% 할인'],
      },
    ],
  },
  autoInstallmentSection: {
    title: '오토 할부',
    subTitle: '대출기록 O / 중도상환수수료 O / 원리금균등상환',
    blocks: [
      {
        id: 'lotte-auto',
        title: '롯데카드 오토할부',
        theme: 'green',
        headers: ['구분', '개월', '금리', '인센'],
        rows: [
          { id: '1', col1: '무선수', col2: '36개 월\n~\n60개 월', col3: '5.4%', col4: '1.7%' },
        ],
        footerNotices: ['* 공동명의시 직계 가족만 진행가능'],
      },
      {
        id: 'hana-auto',
        title: '하나카드 오토할부',
        theme: 'green',
        headers: ['구분', '개월', '금리', '인센'],
        rows: [
          { id: '1', col1: '무선수\n선수 10%\n선수 20%\n선수 30%', col2: '36~72개 월', col3: '', col4: '1.9%' },
        ],
        footerNotices: ['* 전기, 하이브리드 0.1% 금리인하'],
      },
      {
        id: 'hana-auto-low',
        title: '하나카드 저금리',
        theme: 'green',
        headers: ['구분', '개월', '금리', '인센'],
        rows: [
          { id: '1', col1: '무선수\n선수 10%\n선수 20%\n선수 30%', col2: '36~72개 월', col3: '', col4: '0.5%' },
        ],
        footerNotices: [],
      },
      {
        id: 'woori-auto',
        title: '우리카드 오토할부',
        theme: 'green',
        headers: ['구분', '개월', '금리', '인센'],
        rows: [
          { id: '1', col1: '무선수\n선수 10%\n선수 30%', col2: '36~60\n36~60\n36~60', col3: '5.6~5.8%\n5.5~5.6%\n4.4~4.9%', col4: '1.6%' },
        ],
        footerNotices: ['* 전기차 0.1% ↓'],
      },
      {
        id: 'kb-auto',
        title: '국민카드 오토할부',
        theme: 'green',
        headers: ['구분', '개월', '금리', '인센'],
        rows: [
          { id: '1', col1: '무선수\n선수 10%\n선수 30%\n선수 50%', col2: '36~72개 월', col3: '', col4: '1.5%' },
        ],
        footerNotices: [],
      },
      {
        id: 'kb-auto-low',
        title: '국민카드 저금리',
        theme: 'green',
        headers: ['구분', '개월', '금리', '인센'],
        rows: [
          { id: '1', col1: '무선수\n선수 10%\n선수 30%\n선수 50%', col2: '36~72개 월', col3: '', col4: '0.4%' },
        ],
        footerNotices: [],
      },
      {
        id: 'hanabank-installment',
        title: '하나은행 할부',
        theme: 'green',
        headers: ['구분', '개월', '금리', '인센'],
        rows: [
          { id: '1', col1: '무선수', col2: '36~59\n60~119\n120개 월', col3: '변동금리 5~6%', col4: '2.2%\n2.4%\n2.6%' },
        ],
        footerNotices: [
          '* F4 외국인 가능',
          '* 변동금리 5~6%',
          '* 중도 0.7%(3년후면제)',
        ],
      },
      {
        id: 'lotte-auto-2',
        title: '롯데카드 오토할부',
        theme: 'green',
        headers: ['구분', '개월', '금리', '인센'],
        rows: [
          { id: '1', col1: '무선수', col2: '36개 월\n~\n60개 월', col3: '4.9%', col4: '0.5%' },
        ],
        footerNotices: ['* 공동명의시 직계가족만 가능'],
      },
    ],
  },
};
