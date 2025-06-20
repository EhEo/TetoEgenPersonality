import type { Question } from "@shared/schema";
import type { Language } from "@/contexts/LanguageContext";

// Fisher-Yates shuffle algorithm
function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

const questionsData = {
  ko: [
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
  ],

  en: [
    {
      id: 1,
      text: "What role do you usually play when you're with friends?",
      options: [
        { text: "Lead the conversation and set the mood", value: "E3" },
        { text: "Actively participate and share opinions", value: "E2" },
        { text: "Listen quietly and give advice when needed", value: "I2" },
        { text: "Mostly listen and observe", value: "I3" }
      ]
    },
    {
      id: 2,
      text: "What's your approach when starting a new project?",
      options: [
        { text: "Think about the overall vision and possibilities first", value: "N3" },
        { text: "Brainstorm ideas and approach creatively", value: "N2" },
        { text: "Make concrete plans and steps", value: "S2" },
        { text: "Approach based on existing experience and facts", value: "S3" }
      ]
    },
    {
      id: 3,
      text: "What do you value most when making important decisions?",
      options: [
        { text: "Logical analysis and objective facts", value: "T3" },
        { text: "Efficiency and practicality", value: "T2" },
        { text: "People's feelings and relationships", value: "F2" },
        { text: "Values and personal beliefs", value: "F3" }
      ]
    },
    {
      id: 4,
      text: "What's your style in daily life?",
      options: [
        { text: "Make plans and follow them systematically", value: "J3" },
        { text: "Have some plans but stay flexible", value: "J2" },
        { text: "Decide spontaneously based on the situation", value: "P2" },
        { text: "Completely free and fluid", value: "P3" }
      ]
    },
    {
      id: 5,
      text: "When meeting new people, you:",
      options: [
        { text: "Approach first and start conversations", value: "E3" },
        { text: "Greet friendly and naturally engage", value: "E2" },
        { text: "Wait for others to approach first", value: "I2" },
        { text: "Stay quiet and observe", value: "I3" }
      ]
    },
    {
      id: 6,
      text: "What's your method for solving problems?",
      options: [
        { text: "Find creative and innovative solutions", value: "N3" },
        { text: "Explore multiple possibilities", value: "N2" },
        { text: "Apply proven methods systematically", value: "S2" },
        { text: "Approach step by step based on past experience", value: "S3" }
      ]
    },
    {
      id: 7,
      text: "How do you respond in conflict situations?",
      options: [
        { text: "Find solutions through objective analysis", value: "T3" },
        { text: "Organize the situation logically", value: "T2" },
        { text: "Consider everyone's emotions", value: "F2" },
        { text: "Prioritize harmony and unity", value: "F3" }
      ]
    },
    {
      id: 8,
      text: "How do you spend your leisure time?",
      options: [
        { text: "Do activities planned in advance", value: "J3" },
        { text: "Act under rough plans", value: "J2" },
        { text: "Decide based on mood at the moment", value: "P2" },
        { text: "Act completely spontaneously", value: "P3" }
      ]
    },
    {
      id: 9,
      text: "How do you gain energy?",
      options: [
        { text: "Through active interaction with people", value: "E3" },
        { text: "Spending time with friends", value: "E2" },
        { text: "Having time to myself", value: "I2" },
        { text: "Recharging in quiet environments", value: "I3" }
      ]
    },
    {
      id: 10,
      text: "How do you process information?",
      options: [
        { text: "See overall patterns and possibilities", value: "N3" },
        { text: "Imagine future potential", value: "N2" },
        { text: "Focus on concrete facts and details", value: "S2" },
        { text: "Prefer realistic and practical information", value: "S3" }
      ]
    },
    {
      id: 11,
      text: "What's your role when working in a team?",
      options: [
        { text: "Logical analysis and systematic approach", value: "T3" },
        { text: "Suggest efficient methods", value: "T2" },
        { text: "Facilitate teamwork and communication", value: "F2" },
        { text: "Care for team members' emotions", value: "F3" }
      ]
    },
    {
      id: 12,
      text: "What's your preferred style for work or study?",
      options: [
        { text: "Clear plans and deadlines", value: "J3" },
        { text: "Proceed in a structured environment", value: "J2" },
        { text: "Proceed with flexible schedules", value: "P2" },
        { text: "Creatively in a free environment", value: "P3" }
      ]
    },
    {
      id: 13,
      text: "When you're stressed, you:",
      options: [
        { text: "Talk to people to relieve stress", value: "E3" },
        { text: "Seek advice from friends", value: "E2" },
        { text: "Think and organize by myself", value: "I2" },
        { text: "Spend time alone in quiet places", value: "I3" }
      ]
    },
    {
      id: 14,
      text: "What's your perspective on the future?",
      options: [
        { text: "Believe infinite possibilities exist", value: "N3" },
        { text: "Want to explore new opportunities", value: "N2" },
        { text: "Set realistic goals", value: "S2" },
        { text: "Pursue stable and certain things", value: "S3" }
      ]
    },
    {
      id: 15,
      text: "What's your reaction when receiving criticism?",
      options: [
        { text: "Analyze objectively and find improvements", value: "T3" },
        { text: "Accept it rationally", value: "T2" },
        { text: "Get hurt emotionally but accept it", value: "F2" },
        { text: "Find it personally very difficult", value: "F3" }
      ]
    },
    {
      id: 16,
      text: "What's your attitude toward change?",
      options: [
        { text: "Change after careful planning", value: "J3" },
        { text: "Accept change after some preparation", value: "J2" },
        { text: "Enjoy change and adapt", value: "P2" },
        { text: "Welcome change and adapt immediately", value: "P3" }
      ]
    },
    {
      id: 17,
      text: "What's your communication style?",
      options: [
        { text: "Actively express opinions", value: "E3" },
        { text: "Speak clearly when necessary", value: "E2" },
        { text: "Think carefully before speaking", value: "I2" },
        { text: "Speak as concisely as possible", value: "I3" }
      ]
    },
    {
      id: 18,
      text: "What's your preferred learning method?",
      options: [
        { text: "Understanding connections between theories and concepts", value: "N3" },
        { text: "Understanding the big picture first", value: "N2" },
        { text: "Learning systematically step by step", value: "S2" },
        { text: "Learning through practical examples and experience", value: "S3" }
      ]
    },
    {
      id: 19,
      text: "What's your criterion for important choices?",
      options: [
        { text: "Logical validity and effectiveness", value: "T3" },
        { text: "Practicality and rationality", value: "T2" },
        { text: "Impact on people involved", value: "F2" },
        { text: "Alignment with my values", value: "F3" }
      ]
    },
    {
      id: 20,
      text: "What do you think about daily routines?",
      options: [
        { text: "Regular routines are absolutely necessary", value: "J3" },
        { text: "Some structure is good", value: "J2" },
        { text: "Prefer flexibility over routines", value: "P2" },
        { text: "Really dislike routines", value: "P3" }
      ]
    }
  ],

  zh: [
    {
      id: 1,
      text: "和朋友在一起时，您通常扮演什么角色？",
      options: [
        { text: "主导对话并带动气氛", value: "E3" },
        { text: "积极参与并提出意见", value: "E2" },
        { text: "安静倾听，必要时给建议", value: "I2" },
        { text: "主要倾听和观察", value: "I3" }
      ]
    },
    {
      id: 2,
      text: "开始新项目时，您的方法是？",
      options: [
        { text: "首先考虑整体愿景和可能性", value: "N3" },
        { text: "头脑风暴并创造性地接近", value: "N2" },
        { text: "制定具体计划和步骤", value: "S2" },
        { text: "基于现有经验和事实来接近", value: "S3" }
      ]
    },
    {
      id: 3,
      text: "做重要决定时，您最重视什么？",
      options: [
        { text: "逻辑分析和客观事实", value: "T3" },
        { text: "效率和实用性", value: "T2" },
        { text: "人们的感情和关系", value: "F2" },
        { text: "价值观和个人信念", value: "F3" }
      ]
    },
    {
      id: 4,
      text: "日常生活中您的风格是？",
      options: [
        { text: "制定计划并系统地按日程进行", value: "J3" },
        { text: "有一定计划但保持灵活", value: "J2" },
        { text: "根据情况即兴决定", value: "P2" },
        { text: "完全自由和流动", value: "P3" }
      ]
    },
    {
      id: 5,
      text: "遇到新朋友时，您会？",
      options: [
        { text: "主动上前开始对话", value: "E3" },
        { text: "友好打招呼并自然交谈", value: "E2" },
        { text: "等待对方先接近", value: "I2" },
        { text: "保持安静并观察", value: "I3" }
      ]
    },
    {
      id: 6,
      text: "解决问题时您的方法是？",
      options: [
        { text: "寻找创造性和创新的解决方案", value: "N3" },
        { text: "探索多种可能性", value: "N2" },
        { text: "系统地应用经过验证的方法", value: "S2" },
        { text: "基于过去经验逐步接近", value: "S3" }
      ]
    },
    {
      id: 7,
      text: "在冲突情况下您的应对方式是？",
      options: [
        { text: "通过客观分析找到解决方案", value: "T3" },
        { text: "逻辑地整理情况", value: "T2" },
        { text: "考虑所有人的情感", value: "F2" },
        { text: "优先考虑和谐与团结", value: "F3" }
      ]
    },
    {
      id: 8,
      text: "度过休闲时间的方式是？",
      options: [
        { text: "进行预先计划的活动", value: "J3" },
        { text: "在大致计划下活动", value: "J2" },
        { text: "根据当时的心情决定", value: "P2" },
        { text: "完全即兴行动", value: "P3" }
      ]
    },
    {
      id: 9,
      text: "获得能量的方式是？",
      options: [
        { text: "与人们积极交流", value: "E3" },
        { text: "与朋友共度时光", value: "E2" },
        { text: "拥有独处时间", value: "I2" },
        { text: "在安静环境中充电", value: "I3" }
      ]
    },
    {
      id: 10,
      text: "接受信息的方式是？",
      options: [
        { text: "看整体模式和可能性", value: "N3" },
        { text: "想象未来潜力", value: "N2" },
        { text: "关注具体事实和细节", value: "S2" },
        { text: "偏好现实和实用信息", value: "S3" }
      ]
    },
    {
      id: 11,
      text: "在团队中工作时您的角色是？",
      options: [
        { text: "逻辑分析和系统性方法", value: "T3" },
        { text: "提出高效方法", value: "T2" },
        { text: "促进团队合作和沟通", value: "F2" },
        { text: "关心成员的情感", value: "F3" }
      ]
    },
    {
      id: 12,
      text: "工作或学习中偏好的方式是？",
      options: [
        { text: "明确的计划和截止日期", value: "J3" },
        { text: "在结构化环境中进行", value: "J2" },
        { text: "以灵活的时间表进行", value: "P2" },
        { text: "在自由环境中创造性地进行", value: "P3" }
      ]
    },
    {
      id: 13,
      text: "感到压力时，您会？",
      options: [
        { text: "与人交谈来缓解压力", value: "E3" },
        { text: "向朋友寻求建议", value: "E2" },
        { text: "独自思考并整理", value: "I2" },
        { text: "在安静的地方独处", value: "I3" }
      ]
    },
    {
      id: 14,
      text: "对未来的看法是？",
      options: [
        { text: "相信存在无限可能性", value: "N3" },
        { text: "想要探索新机会", value: "N2" },
        { text: "设定现实目标", value: "S2" },
        { text: "追求稳定和确定的事物", value: "S3" }
      ]
    },
    {
      id: 15,
      text: "受到批评时您的反应是？",
      options: [
        { text: "客观分析并找到改进点", value: "T3" },
        { text: "理性地接受", value: "T2" },
        { text: "情感上受伤但接受", value: "F2" },
        { text: "个人感到非常困难", value: "F3" }
      ]
    },
    {
      id: 16,
      text: "对变化的态度是？",
      options: [
        { text: "谨慎计划后再变化", value: "J3" },
        { text: "经过一定准备后接受变化", value: "J2" },
        { text: "享受变化并适应", value: "P2" },
        { text: "欢迎变化并立即适应", value: "P3" }
      ]
    },
    {
      id: 17,
      text: "沟通时您的风格是？",
      options: [
        { text: "积极表达意见", value: "E3" },
        { text: "必要时清楚地说话", value: "E2" },
        { text: "仔细思考后说话", value: "I2" },
        { text: "尽可能简洁地说话", value: "I3" }
      ]
    },
    {
      id: 18,
      text: "学习时偏好的方法是？",
      options: [
        { text: "理解理论和概念之间的联系", value: "N3" },
        { text: "首先理解大局", value: "N2" },
        { text: "逐步系统地学习", value: "S2" },
        { text: "通过实际例子和经验学习", value: "S3" }
      ]
    },
    {
      id: 19,
      text: "重要选择的标准是？",
      options: [
        { text: "逻辑有效性和效果", value: "T3" },
        { text: "实用性和合理性", value: "T2" },
        { text: "对相关人员的影响", value: "F2" },
        { text: "与我价值观的一致性", value: "F3" }
      ]
    },
    {
      id: 20,
      text: "对日常例行公事的想法是？",
      options: [
        { text: "规律的例行公事绝对必要", value: "J3" },
        { text: "有一定结构就好", value: "J2" },
        { text: "比起例行公事更偏好灵活性", value: "P2" },
        { text: "非常讨厌例行公事", value: "P3" }
      ]
    }
  ],

  vi: [
    {
      id: 1,
      text: "Khi ở cùng bạn bè, bạn thường đóng vai trò gì?",
      options: [
        { text: "Dẫn dắt cuộc trò chuyện và tạo không khí", value: "E3" },
        { text: "Tham gia tích cực và đưa ra ý kiến", value: "E2" },
        { text: "Lắng nghe và đưa lời khuyên khi cần", value: "I2" },
        { text: "Chủ yếu lắng nghe và quan sát", value: "I3" }
      ]
    },
    {
      id: 2,
      text: "Cách tiếp cận của bạn khi bắt đầu dự án mới?",
      options: [
        { text: "Nghĩ về tầm nhìn tổng thể và khả năng trước", value: "N3" },
        { text: "Động não ý tưởng và tiếp cận sáng tạo", value: "N2" },
        { text: "Lập kế hoạch và các bước cụ thể", value: "S2" },
        { text: "Tiếp cận dựa trên kinh nghiệm và sự thật", value: "S3" }
      ]
    },
    {
      id: 3,
      text: "Điều gì bạn coi trọng nhất khi đưa ra quyết định quan trọng?",
      options: [
        { text: "Phân tích logic và sự thật khách quan", value: "T3" },
        { text: "Hiệu quả và tính thực tiễn", value: "T2" },
        { text: "Cảm xúc và mối quan hệ của mọi người", value: "F2" },
        { text: "Giá trị và niềm tin cá nhân", value: "F3" }
      ]
    },
    {
      id: 4,
      text: "Phong cách của bạn trong cuộc sống hàng ngày?",
      options: [
        { text: "Lập kế hoạch và theo lịch trình có hệ thống", value: "J3" },
        { text: "Có kế hoạch nhưng linh hoạt", value: "J2" },
        { text: "Quyết định ngẫu hứng tùy tình huống", value: "P2" },
        { text: "Hoàn toàn tự do và linh hoạt", value: "P3" }
      ]
    },
    {
      id: 5,
      text: "Khi gặp người mới, bạn:",
      options: [
        { text: "Chủ động tiếp cận và bắt chuyện", value: "E3" },
        { text: "Chào hỏi thân thiện và trò chuyện tự nhiên", value: "E2" },
        { text: "Đợi người khác tiếp cận trước", value: "I2" },
        { text: "Im lặng và quan sát", value: "I3" }
      ]
    },
    {
      id: 6,
      text: "Phương pháp giải quyết vấn đề của bạn?",
      options: [
        { text: "Tìm giải pháp sáng tạo và đổi mới", value: "N3" },
        { text: "Khám phá nhiều khả năng", value: "N2" },
        { text: "Áp dụng phương pháp đã được kiểm chứng", value: "S2" },
        { text: "Tiếp cận từng bước dựa trên kinh nghiệm", value: "S3" }
      ]
    },
    {
      id: 7,
      text: "Cách ứng phó trong tình huống xung đột?",
      options: [
        { text: "Tìm giải pháp qua phân tích khách quan", value: "T3" },
        { text: "Sắp xếp tình huống một cách logic", value: "T2" },
        { text: "Xem xét cảm xúc của tất cả mọi người", value: "F2" },
        { text: "Ưu tiên hòa hợp và đoàn kết", value: "F3" }
      ]
    },
    {
      id: 8,
      text: "Cách bạn dành thời gian rảnh rỗi?",
      options: [
        { text: "Thực hiện hoạt động đã lên kế hoạch trước", value: "J3" },
        { text: "Hoạt động theo kế hoạch đại khái", value: "J2" },
        { text: "Quyết định theo tâm trạng lúc đó", value: "P2" },
        { text: "Hành động hoàn toàn ngẫu hứng", value: "P3" }
      ]
    },
    {
      id: 9,
      text: "Cách bạn lấy lại năng lượng?",
      options: [
        { text: "Qua tương tác tích cực với mọi người", value: "E3" },
        { text: "Dành thời gian với bạn bè", value: "E2" },
        { text: "Có thời gian cho bản thân", value: "I2" },
        { text: "Nạp năng lượng trong môi trường yên tĩnh", value: "I3" }
      ]
    },
    {
      id: 10,
      text: "Cách bạn tiếp nhận thông tin?",
      options: [
        { text: "Nhìn thấy mô hình tổng thể và khả năng", value: "N3" },
        { text: "Tưởng tượng tiềm năng tương lai", value: "N2" },
        { text: "Tập trung vào sự thật và chi tiết cụ thể", value: "S2" },
        { text: "Thích thông tin thực tế và thiết thực", value: "S3" }
      ]
    },
    {
      id: 11,
      text: "Vai trò của bạn khi làm việc nhóm?",
      options: [
        { text: "Phân tích logic và tiếp cận có hệ thống", value: "T3" },
        { text: "Đề xuất phương pháp hiệu quả", value: "T2" },
        { text: "Thúc đẩy làm việc nhóm và giao tiếp", value: "F2" },
        { text: "Quan tâm đến cảm xúc của thành viên", value: "F3" }
      ]
    },
    {
      id: 12,
      text: "Phong cách ưa thích trong công việc hoặc học tập?",
      options: [
        { text: "Kế hoạch rõ ràng và thời hạn", value: "J3" },
        { text: "Tiến hành trong môi trường có cấu trúc", value: "J2" },
        { text: "Tiến hành với lịch trình linh hoạt", value: "P2" },
        { text: "Sáng tạo trong môi trường tự do", value: "P3" }
      ]
    },
    {
      id: 13,
      text: "Khi căng thẳng, bạn:",
      options: [
        { text: "Nói chuyện với mọi người để giải tỏa", value: "E3" },
        { text: "Tìm lời khuyên từ bạn bè", value: "E2" },
        { text: "Suy nghĩ và sắp xếp một mình", value: "I2" },
        { text: "Dành thời gian một mình ở nơi yên tĩnh", value: "I3" }
      ]
    },
    {
      id: 14,
      text: "Quan điểm của bạn về tương lai?",
      options: [
        { text: "Tin rằng tồn tại vô số khả năng", value: "N3" },
        { text: "Muốn khám phá cơ hội mới", value: "N2" },
        { text: "Đặt mục tiêu thực tế", value: "S2" },
        { text: "Theo đuổi những điều ổn định và chắc chắn", value: "S3" }
      ]
    },
    {
      id: 15,
      text: "Phản ứng của bạn khi nhận phê bình?",
      options: [
        { text: "Phân tích khách quan và tìm cải tiến", value: "T3" },
        { text: "Chấp nhận một cách hợp lý", value: "T2" },
        { text: "Bị tổn thương về mặt cảm xúc nhưng chấp nhận", value: "F2" },
        { text: "Cảm thấy rất khó khăn về mặt cá nhân", value: "F3" }
      ]
    },
    {
      id: 16,
      text: "Thái độ của bạn đối với sự thay đổi?",
      options: [
        { text: "Thay đổi sau khi lập kế hoạch cẩn thận", value: "J3" },
        { text: "Chấp nhận thay đổi sau một số chuẩn bị", value: "J2" },
        { text: "Thích thay đổi và thích ứng", value: "P2" },
        { text: "Chào đón thay đổi và thích ứng ngay lập tức", value: "P3" }
      ]
    },
    {
      id: 17,
      text: "Phong cách giao tiếp của bạn?",
      options: [
        { text: "Tích cực bày tỏ ý kiến", value: "E3" },
        { text: "Nói rõ ràng khi cần thiết", value: "E2" },
        { text: "Suy nghĩ cẩn thận trước khi nói", value: "I2" },
        { text: "Nói ngắn gọn nhất có thể", value: "I3" }
      ]
    },
    {
      id: 18,
      text: "Phương pháp học tập ưa thích?",
      options: [
        { text: "Hiểu kết nối giữa lý thuyết và khái niệm", value: "N3" },
        { text: "Hiểu bức tranh lớn trước", value: "N2" },
        { text: "Học từng bước một cách có hệ thống", value: "S2" },
        { text: "Học qua ví dụ thực tế và kinh nghiệm", value: "S3" }
      ]
    },
    {
      id: 19,
      text: "Tiêu chí cho những lựa chọn quan trọng?",
      options: [
        { text: "Tính hợp lý logic và hiệu quả", value: "T3" },
        { text: "Tính thực tiễn và hợp lý", value: "T2" },
        { text: "Tác động lên những người liên quan", value: "F2" },
        { text: "Sự phù hợp với giá trị của tôi", value: "F3" }
      ]
    },
    {
      id: 20,
      text: "Suy nghĩ của bạn về thói quen hàng ngày?",
      options: [
        { text: "Thói quen đều đặn là hoàn toàn cần thiết", value: "J3" },
        { text: "Có một số cấu trúc thì tốt", value: "J2" },
        { text: "Thích linh hoạt hơn thói quen", value: "P2" },
        { text: "Rất không thích thói quen", value: "P3" }
      ]
    }
  ]
};

// Generate shuffled questions with randomized options for a specific language
export function getShuffledQuestions(language: Language = 'ko'): Question[] {
  const questions = questionsData[language] || questionsData.ko;
  return questions.map(question => ({
    ...question,
    options: shuffleArray(question.options)
  }));
}