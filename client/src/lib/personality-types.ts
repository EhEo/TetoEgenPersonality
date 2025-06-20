import type { PersonalityType } from "@shared/schema";

export const personalityTypes: Record<string, PersonalityType> = {
  "INTJ": {
    code: "INTJ",
    title: "건축가 (The Architect)",
    subtitle: "전략적이고 창의적인 완벽주의자",
    color: "hsl(222, 47%, 47%)",
    traits: [
      "독립적이고 자율적",
      "전략적 사고와 장기적 비전",
      "창의적이고 혁신적",
      "높은 기준과 완벽주의"
    ],
    strengths: [
      "뛰어난 전략적 계획 능력",
      "독창적인 아이디어 창출",
      "체계적이고 논리적 접근",
      "목표 달성에 대한 강한 의지"
    ],
    description: "건축가는 상상력이 풍부하면서도 현실적이고, 야심차면서도 사생활을 중시하며, 호기심이 많으면서도 에너지를 낭비하지 않는 성격입니다."
  },
  "INTP": {
    code: "INTP",
    title: "논리술사 (The Logician)",
    subtitle: "혁신적이고 독창적인 사색가",
    color: "hsl(262, 52%, 47%)",
    traits: [
      "논리적이고 분석적",
      "독창적이고 창의적",
      "유연하고 적응력 높음",
      "지적 호기심이 강함"
    ],
    strengths: [
      "뛰어난 문제 해결 능력",
      "객관적이고 공정한 판단",
      "창의적인 아이디어 생성",
      "복잡한 개념의 이해"
    ],
    description: "논리술사는 자신의 독특한 관점과 활기찬 지성으로 자부심을 느끼며, 우주의 미스터리에 대해서 생각하는 것을 좋아합니다."
  },
  "ENTJ": {
    code: "ENTJ",
    title: "통솔자 (The Commander)",
    subtitle: "대담하고 상상력이 풍부한 지도자",
    color: "hsl(339, 60%, 47%)",
    traits: [
      "천성적인 리더십",
      "전략적이고 체계적",
      "목표 지향적",
      "결단력과 추진력"
    ],
    strengths: [
      "뛰어난 리더십과 조직력",
      "전략적 사고와 계획",
      "목표 달성에 대한 강한 의지",
      "효율적인 시스템 구축"
    ],
    description: "통솔자는 타고난 리더로, 카리스마와 자신감, 권위를 바탕으로 공통된 목표를 위해 사람들을 하나로 이끄는 능력이 있습니다."
  },
  "ENTP": {
    code: "ENTP",
    title: "변론가 (The Debater)",
    subtitle: "영리하고 호기심이 많은 사상가",
    color: "hsl(295, 60%, 47%)",
    traits: [
      "창의적이고 혁신적",
      "논리적이고 분석적",
      "유연하고 적응적",
      "사교적이고 활발함"
    ],
    strengths: [
      "뛰어난 아이디어 생성 능력",
      "논리적 분석과 토론",
      "창의적 문제 해결",
      "빠른 학습과 적응"
    ],
    description: "변론가는 지적 도전을 즐기며, 다른 사람들의 사고 과정을 이해하려고 노력합니다. 토론을 즐기지만 다른 사람과 갈등을 원하지는 않습니다."
  },
  "INFJ": {
    code: "INFJ",
    title: "옹호자 (The Advocate)",
    subtitle: "조용하고 신비로운 영감을 주는 이상주의자",
    color: "hsl(158, 60%, 47%)",
    traits: [
      "이상주의적이고 원칙적",
      "통찰력과 직관력",
      "공감 능력과 배려심",
      "창의적이고 상상력 풍부"
    ],
    strengths: [
      "깊은 통찰력과 직관",
      "타인에 대한 깊은 이해",
      "창의적이고 독창적 사고",
      "강한 도덕적 신념"
    ],
    description: "옹호자는 매우 희귀한 성격이지만, 세상에 큰 영향력을 발휘할 수 있습니다. 이들은 이상주의적이고 원칙주의적이지만 냉철한 현실주의자이기도 합니다."
  },
  "INFP": {
    code: "INFP",
    title: "중재자 (The Mediator)",
    subtitle: "시적이고 친절하며 이타적인 이상주의자",
    color: "hsl(200, 60%, 47%)",
    traits: [
      "이상주의적이고 가치 지향적",
      "창의적이고 예술적",
      "공감적이고 배려심 깊음",
      "유연하고 개방적"
    ],
    strengths: [
      "강한 가치관과 도덕성",
      "창의적 표현 능력",
      "타인에 대한 깊은 공감",
      "개인의 성장과 발전 추구"
    ],
    description: "중재자는 언제나 선을 행할 준비가 되어 있습니다. 내향적이고 조용하지만, 자신의 신념과 가치관에 대해서는 확고합니다."
  },
  "ENFJ": {
    code: "ENFJ",
    title: "선도자 (The Protagonist)",
    subtitle: "카리스마 있고 영감을 주는 타고난 지도자",
    color: "hsl(120, 60%, 47%)",
    traits: [
      "카리스마 있는 리더십",
      "공감적이고 이해심 깊음",
      "영감을 주는 의사소통",
      "이상주의적이고 가치 지향적"
    ],
    strengths: [
      "뛰어난 대인관계 능력",
      "타인을 이끌고 영감을 주는 능력",
      "팀워크와 협력 증진",
      "긍정적인 변화 추진"
    ],
    description: "선도자는 타고난 지도자로, 청중을 사로잡고 의욕을 불어넣는 능력과 카리스마를 지니고 있습니다."
  },
  "ENFP": {
    code: "ENFP",
    title: "활동가 (The Campaigner)",
    subtitle: "열정적이고 창의적인 자유로운 영혼",
    color: "hsl(45, 90%, 54%)",
    traits: [
      "외향적이고 사교적",
      "창의적이고 혁신적",
      "감정적으로 표현력이 풍부",
      "유연하고 적응력이 높음"
    ],
    strengths: [
      "뛰어난 의사소통 능력",
      "타인에 대한 깊은 이해",
      "무한한 가능성 추구",
      "긍정적이고 열정적"
    ],
    description: "활동가는 진정으로 자유로운 영혼입니다. 파티에서 인기가 많은 경우가 많지만, 단순히 즐거운 시간을 보내는 것보다는 다른 사람들과 사회적, 감정적으로 깊이 있는 유대감을 형성하는 데에 더 관심이 많습니다."
  },
  "ISTJ": {
    code: "ISTJ",
    title: "물류관리자 (The Logistician)",
    subtitle: "실용적이고 사실에 기반한 믿음직한 일꾼",
    color: "hsl(213, 27%, 47%)",
    traits: [
      "책임감이 강하고 신뢰할 수 있음",
      "체계적이고 조직적",
      "현실적이고 실용적",
      "전통과 안정을 중시"
    ],
    strengths: [
      "뛰어난 조직력과 계획성",
      "신뢰할 수 있는 업무 수행",
      "체계적이고 꼼꼼한 접근",
      "강한 책임감과 의무감"
    ],
    description: "물류관리자는 질서정연하고 책임감이 강합니다. 자신의 행동에 대해 책임을 지며, 가족과 조직의 전통을 자랑스럽게 여기고 지킵니다."
  },
  "ISFJ": {
    code: "ISFJ",
    title: "수호자 (The Protector)",
    subtitle: "따뜻하고 배려심 많은 보호자",
    color: "hsl(158, 40%, 47%)",
    traits: [
      "따뜻하고 배려심 많음",
      "충성스럽고 신뢰할 수 있음",
      "세심하고 꼼꼼함",
      "조화로운 관계 추구"
    ],
    strengths: [
      "타인에 대한 깊은 배려",
      "뛰어난 실무 처리 능력",
      "강한 책임감과 헌신",
      "조화로운 환경 조성"
    ],
    description: "수호자는 성격이 따뜻하고 마음이 착하며, 언제나 기꺼이 다른 사람을 도우려 합니다. 책임감이 강하고 타인의 감정에 대한 이해심이 깊습니다."
  },
  "ESTJ": {
    code: "ESTJ",
    title: "경영자 (The Executive)",
    subtitle: "뛰어난 관리 능력을 가진 질서 정연한 리더",
    color: "hsl(339, 40%, 47%)",
    traits: [
      "조직적이고 체계적",
      "리더십과 관리 능력",
      "현실적이고 실용적",
      "목표 지향적"
    ],
    strengths: [
      "뛰어난 조직 관리 능력",
      "효율적인 시스템 구축",
      "명확한 목표 설정과 달성",
      "팀을 이끄는 리더십"
    ],
    description: "경영자는 전통과 질서를 중시하며, 자신의 노력과 정직함과 헌신으로 가족과 공동체를 하나로 모으는 역할을 합니다."
  },
  "ESFJ": {
    code: "ESFJ",
    title: "집정관 (The Consul)",
    subtitle: "배려심 많고 사교적인 인기인",
    color: "hsl(120, 40%, 47%)",
    traits: [
      "사교적이고 친근함",
      "배려심과 이해심",
      "협력적이고 조화 추구",
      "실용적이고 현실적"
    ],
    strengths: [
      "뛰어난 대인관계 능력",
      "타인에 대한 세심한 배려",
      "팀워크와 협력 증진",
      "실용적인 문제 해결"
    ],
    description: "집정관은 인기가 많고 사교적인 성격으로, 친구들과 가족들 간의 모임을 성사시키는 데 뛰어납니다."
  },
  "ISTP": {
    code: "ISTP",
    title: "만능재주꾼 (The Virtuoso)",
    subtitle: "대담하고 실용적인 실험정신이 강한 장인",
    color: "hsl(27, 60%, 47%)",
    traits: [
      "실용적이고 현실적",
      "독립적이고 자율적",
      "유연하고 적응적",
      "문제 해결 능력"
    ],
    strengths: [
      "뛰어난 기술적 능력",
      "실용적인 문제 해결",
      "유연한 사고와 적응력",
      "침착하고 객관적 판단"
    ],
    description: "만능재주꾼은 손재주가 뛰어나며, 다양한 프로젝트를 탐구하는 것을 좋아합니다. 보통 조용하고 과묵하지만 위기 상황에서는 놀라울 정도로 적극적이 됩니다."
  },
  "ISFP": {
    code: "ISFP",
    title: "모험가 (The Adventurer)",
    subtitle: "유연하고 매력적인 예술가",
    color: "hsl(200, 40%, 47%)",
    traits: [
      "예술적이고 창의적",
      "유연하고 개방적",
      "공감적이고 배려심 많음",
      "평화롭고 조화로움"
    ],
    strengths: [
      "창의적 표현 능력",
      "타인에 대한 깊은 이해",
      "유연한 사고와 적응력",
      "진정성 있는 관계 형성"
    ],
    description: "모험가는 진정한 예술가입니다. 건전한 경쟁심이나 관심이 아니라 작품 자체의 아름다움과 질을 위해 예술 활동을 합니다."
  },
  "ESTP": {
    code: "ESTP",
    title: "사업가 (The Entrepreneur)",
    subtitle: "영리하고 활기찬 인식력이 뛰어난 탐험가",
    color: "hsl(339, 80%, 47%)",
    traits: [
      "활동적이고 에너지 넘침",
      "현실적이고 실용적",
      "사교적이고 친근함",
      "즉흥적이고 유연함"
    ],
    strengths: [
      "뛰어난 실행력과 추진력",
      "뛰어난 대인관계 능력",
      "빠른 상황 판단과 적응",
      "문제를 즉석에서 해결"
    ],
    description: "사업가는 주변 사람들에게 긍정적인 에너지를 전해 주는 활기찬 성격입니다. 파티에서 분위기를 이끄는 사람도 바로 이들입니다."
  },
  "ESFP": {
    code: "ESFP",
    title: "연예인 (The Entertainer)",
    subtitle: "자발적이고 열정적이며 사교적인 자유로운 영혼",
    color: "hsl(45, 60%, 47%)",
    traits: [
      "외향적이고 사교적",
      "즉흥적이고 유연함",
      "감정 표현이 풍부함",
      "타인을 즐겁게 하는 재능"
    ],
    strengths: [
      "뛰어난 대인관계 능력",
      "창의적이고 예술적 감각",
      "긍정적이고 낙천적",
      "빠른 적응력과 유연성"
    ],
    description: "연예인은 즉흥적이고 활기차며 열정적입니다. 어떤 모임에서든 금세 관심의 중심이 되며, 다른 사람들을 즐겁게 하는 것을 좋아합니다."
  }
};

export function calculatePersonalityType(answers: string[]): string {
  const scores = {
    E: 0, I: 0,
    N: 0, S: 0,
    T: 0, F: 0,
    J: 0, P: 0
  };

  // Score each answer
  answers.forEach(answer => {
    const dimension = answer.charAt(0) as keyof typeof scores;
    const weight = parseInt(answer.charAt(1));
    scores[dimension] += weight;
  });

  // Determine personality type
  const result = [
    scores.E > scores.I ? 'E' : 'I',
    scores.N > scores.S ? 'N' : 'S',
    scores.T > scores.F ? 'T' : 'F',
    scores.J > scores.P ? 'J' : 'P'
  ].join('');

  return result;
}
