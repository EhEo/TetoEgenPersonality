import type { Question } from "@shared/schema";

export const questions: Question[] = [
  {
    id: 1,
    text: "친구들과 함께 있을 때 당신은 어떤 역할을 주로 하나요?",
    options: [
      { text: "대화를 주도하고 분위기를 이끈다", value: "E3" },
      { text: "적극적으로 참여하며 의견을 제시한다", value: "E2" },
      { text: "조용히 듣고 필요할 때 조언한다", value: "I2" },
      { text: "주로 듣는 역할을 하며 관찰한다", value: "I3" }
    ]
  },
  {
    id: 2,
    text: "새로운 프로젝트를 시작할 때 당신의 접근 방식은?",
    options: [
      { text: "전체적인 비전과 가능성을 먼저 생각한다", value: "N3" },
      { text: "아이디어를 브레인스토밍하며 창의적으로 접근한다", value: "N2" },
      { text: "구체적인 계획과 단계를 세운다", value: "S2" },
      { text: "기존의 경험과 사실을 바탕으로 접근한다", value: "S3" }
    ]
  },
  {
    id: 3,
    text: "중요한 결정을 내릴 때 무엇을 가장 중시하나요?",
    options: [
      { text: "논리적 분석과 객관적 사실", value: "T3" },
      { text: "효율성과 실용성", value: "T2" },
      { text: "사람들의 감정과 관계", value: "F2" },
      { text: "가치관과 개인적 신념", value: "F3" }
    ]
  },
  {
    id: 4,
    text: "일상생활에서 당신의 스타일은?",
    options: [
      { text: "계획을 세우고 일정에 따라 체계적으로", value: "J3" },
      { text: "어느 정도 계획은 있지만 유연하게", value: "J2" },
      { text: "상황에 따라 즉흥적으로 결정", value: "P2" },
      { text: "완전히 자유롭고 유동적으로", value: "P3" }
    ]
  },
  {
    id: 5,
    text: "새로운 사람들과 만날 때 당신은?",
    options: [
      { text: "먼저 다가가서 대화를 시작한다", value: "E3" },
      { text: "친근하게 인사하고 자연스럽게 대화한다", value: "E2" },
      { text: "상대방이 먼저 다가오길 기다린다", value: "I2" },
      { text: "조용히 있으며 관찰하는 편이다", value: "I3" }
    ]
  },
  {
    id: 6,
    text: "문제를 해결할 때 당신의 방법은?",
    options: [
      { text: "창의적이고 혁신적인 해결책을 찾는다", value: "N3" },
      { text: "여러 가능성을 탐색해본다", value: "N2" },
      { text: "검증된 방법을 체계적으로 적용한다", value: "S2" },
      { text: "과거 경험을 바탕으로 단계별로 접근한다", value: "S3" }
    ]
  },
  {
    id: 7,
    text: "갈등 상황에서 당신의 대응 방식은?",
    options: [
      { text: "객관적 분석으로 해결책을 찾는다", value: "T3" },
      { text: "논리적으로 상황을 정리한다", value: "T2" },
      { text: "모든 사람의 감정을 고려한다", value: "F2" },
      { text: "화합과 조화를 최우선으로 한다", value: "F3" }
    ]
  },
  {
    id: 8,
    text: "여가 시간을 보내는 방법은?",
    options: [
      { text: "미리 계획한 활동을 한다", value: "J3" },
      { text: "대략적인 계획 하에 활동한다", value: "J2" },
      { text: "그때그때 기분에 따라 결정한다", value: "P2" },
      { text: "완전히 즉흥적으로 행동한다", value: "P3" }
    ]
  },
  {
    id: 9,
    text: "에너지를 얻는 방법은?",
    options: [
      { text: "사람들과 활발하게 교류하며", value: "E3" },
      { text: "친구들과 함께 시간을 보내며", value: "E2" },
      { text: "혼자만의 시간을 가지며", value: "I2" },
      { text: "조용한 환경에서 충전하며", value: "I3" }
    ]
  },
  {
    id: 10,
    text: "정보를 받아들이는 방식은?",
    options: [
      { text: "전체적인 패턴과 가능성을 본다", value: "N3" },
      { text: "미래의 잠재력을 상상한다", value: "N2" },
      { text: "구체적인 사실과 세부사항에 집중한다", value: "S2" },
      { text: "현실적이고 실용적인 정보를 선호한다", value: "S3" }
    ]
  },
  {
    id: 11,
    text: "팀에서 일할 때 당신의 역할은?",
    options: [
      { text: "논리적 분석과 체계적 접근", value: "T3" },
      { text: "효율적인 방법 제시", value: "T2" },
      { text: "팀워크와 소통 촉진", value: "F2" },
      { text: "구성원들의 감정 돌봄", value: "F3" }
    ]
  },
  {
    id: 12,
    text: "업무나 학습에서 선호하는 방식은?",
    options: [
      { text: "명확한 계획과 마감일 설정", value: "J3" },
      { text: "구조화된 환경에서 진행", value: "J2" },
      { text: "융통성 있는 일정으로 진행", value: "P2" },
      { text: "자유로운 환경에서 창의적으로", value: "P3" }
    ]
  },
  {
    id: 13,
    text: "스트레스를 받을 때 당신은?",
    options: [
      { text: "사람들과 이야기하며 해소한다", value: "E3" },
      { text: "친구들에게 조언을 구한다", value: "E2" },
      { text: "혼자 생각하며 정리한다", value: "I2" },
      { text: "조용한 곳에서 혼자 시간을 보낸다", value: "I3" }
    ]
  },
  {
    id: 14,
    text: "미래에 대한 당신의 관점은?",
    options: [
      { text: "무한한 가능성이 존재한다고 본다", value: "N3" },
      { text: "새로운 기회를 탐색하고 싶다", value: "N2" },
      { text: "현실적인 목표를 설정한다", value: "S2" },
      { text: "안정적이고 확실한 것을 추구한다", value: "S3" }
    ]
  },
  {
    id: 15,
    text: "비판을 받을 때 당신의 반응은?",
    options: [
      { text: "객관적으로 분석하고 개선점을 찾는다", value: "T3" },
      { text: "합리적으로 받아들인다", value: "T2" },
      { text: "감정적으로 상처받지만 수용한다", value: "F2" },
      { text: "개인적으로 매우 힘들어한다", value: "F3" }
    ]
  },
  {
    id: 16,
    text: "변화에 대한 당신의 태도는?",
    options: [
      { text: "신중하게 계획을 세운 후 변화한다", value: "J3" },
      { text: "어느 정도 준비 후 변화를 받아들인다", value: "J2" },
      { text: "변화를 즐기고 적응한다", value: "P2" },
      { text: "변화를 환영하며 즉시 적응한다", value: "P3" }
    ]
  },
  {
    id: 17,
    text: "의사소통할 때 당신의 스타일은?",
    options: [
      { text: "적극적으로 의견을 표현한다", value: "E3" },
      { text: "필요할 때 명확히 말한다", value: "E2" },
      { text: "신중하게 생각한 후 말한다", value: "I2" },
      { text: "가능한 한 간결하게 말한다", value: "I3" }
    ]
  },
  {
    id: 18,
    text: "학습할 때 선호하는 방법은?",
    options: [
      { text: "이론과 개념의 연결을 파악한다", value: "N3" },
      { text: "큰 그림을 먼저 이해한다", value: "N2" },
      { text: "단계별로 체계적으로 학습한다", value: "S2" },
      { text: "실제 예시와 경험을 통해 학습한다", value: "S3" }
    ]
  },
  {
    id: 19,
    text: "중요한 선택의 기준은?",
    options: [
      { text: "논리적 타당성과 효과", value: "T3" },
      { text: "실용성과 합리성", value: "T2" },
      { text: "관련된 사람들에게 미치는 영향", value: "F2" },
      { text: "내 가치관과의 일치도", value: "F3" }
    ]
  },
  {
    id: 20,
    text: "일상의 루틴에 대한 당신의 생각은?",
    options: [
      { text: "규칙적인 루틴이 꼭 필요하다", value: "J3" },
      { text: "어느 정도 구조가 있으면 좋다", value: "J2" },
      { text: "루틴보다는 유연함을 선호한다", value: "P2" },
      { text: "루틴을 매우 싫어한다", value: "P3" }
    ]
  }
];
