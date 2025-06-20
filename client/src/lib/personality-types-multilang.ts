import type { PersonalityType } from "@shared/schema";
import type { Language } from "@/contexts/LanguageContext";

interface MultilingualPersonalityType {
  code: string;
  color: string;
  ko: {
    title: string;
    subtitle: string;
    traits: string[];
    strengths: string[];
    description: string;
  };
  en: {
    title: string;
    subtitle: string;
    traits: string[];
    strengths: string[];
    description: string;
  };
  zh: {
    title: string;
    subtitle: string;
    traits: string[];
    strengths: string[];
    description: string;
  };
  vi: {
    title: string;
    subtitle: string;
    traits: string[];
    strengths: string[];
    description: string;
  };
}

const multilingualPersonalityTypes: Record<string, MultilingualPersonalityType> = {
  "INTJ": {
    code: "INTJ",
    color: "hsl(222, 47%, 47%)",
    ko: {
      title: "건축가 (The Architect)",
      subtitle: "전략적이고 창의적인 완벽주의자",
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
    en: {
      title: "The Architect",
      subtitle: "Strategic and creative perfectionist",
      traits: [
        "Independent and autonomous",
        "Strategic thinking and long-term vision",
        "Creative and innovative",
        "High standards and perfectionism"
      ],
      strengths: [
        "Excellent strategic planning ability",
        "Original idea generation",
        "Systematic and logical approach",
        "Strong will to achieve goals"
      ],
      description: "Architects are imaginative yet realistic, ambitious yet private, curious yet focused with energy."
    },
    zh: {
      title: "建筑师",
      subtitle: "战略性和创造性的完美主义者",
      traits: [
        "独立自主",
        "战略思维和长远眼光",
        "富有创造力和创新精神",
        "高标准和完美主义"
      ],
      strengths: [
        "出色的战略规划能力",
        "原创性想法生成",
        "系统性和逻辑性方法",
        "实现目标的强烈意志"
      ],
      description: "建筑师富有想象力却又现实，雄心勃勃却又注重隐私，好奇心强却又专注不浪费精力。"
    },
    vi: {
      title: "Kiến trúc sư",
      subtitle: "Người hoàn hảo chiến lược và sáng tạo",
      traits: [
        "Độc lập và tự chủ",
        "Tư duy chiến lược và tầm nhìn dài hạn",
        "Sáng tạo và đổi mới",
        "Tiêu chuẩn cao và chủ nghĩa hoàn hảo"
      ],
      strengths: [
        "Khả năng lập kế hoạch chiến lược xuất sắc",
        "Tạo ra những ý tưởng độc đáo",
        "Phương pháp có hệ thống và logic",
        "Ý chí mạnh mẽ để đạt mục tiêu"
      ],
      description: "Kiến trúc sư giàu trí tưởng tượng nhưng thực tế, đầy tham vọng nhưng coi trọng sự riêng tư, tò mò nhưng tập trung không lãng phí năng lượng."
    }
  },
  "INTP": {
    code: "INTP",
    color: "hsl(262, 52%, 47%)",
    ko: {
      title: "논리술사 (The Logician)",
      subtitle: "혁신적이고 독창적인 사색가",
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
    en: {
      title: "The Logician",
      subtitle: "Innovative and original thinker",
      traits: [
        "Logical and analytical",
        "Original and creative",
        "Flexible and adaptable",
        "Strong intellectual curiosity"
      ],
      strengths: [
        "Excellent problem-solving ability",
        "Objective and fair judgment",
        "Creative idea generation",
        "Understanding complex concepts"
      ],
      description: "Logicians pride themselves on their unique perspective and vigorous intellect, and love to think about the mysteries of the universe."
    },
    zh: {
      title: "逻辑学家",
      subtitle: "创新和原创的思想家",
      traits: [
        "逻辑性和分析性强",
        "原创性和创造性",
        "灵活且适应性强",
        "强烈的求知欲"
      ],
      strengths: [
        "出色的问题解决能力",
        "客观公正的判断",
        "创造性想法生成",
        "理解复杂概念"
      ],
      description: "逻辑学家以其独特的观点和旺盛的智力为傲，喜欢思考宇宙的奥秘。"
    },
    vi: {
      title: "Nhà logic học",
      subtitle: "Nhà tư tưởng đổi mới và độc đáo",
      traits: [
        "Logic và phân tích",
        "Độc đáo và sáng tạo",
        "Linh hoạt và thích nghi",
        "Tò mò trí tuệ mạnh mẽ"
      ],
      strengths: [
        "Khả năng giải quyết vấn đề xuất sắc",
        "Phán đoán khách quan và công bằng",
        "Tạo ra ý tưởng sáng tạo",
        "Hiểu các khái niệm phức tạp"
      ],
      description: "Các nhà logic học tự hào về quan điểm độc đáo và trí tuệ mạnh mẽ của họ, và thích suy nghĩ về những bí ẩn của vũ trụ."
    }
  },
  "ENTJ": {
    code: "ENTJ",
    color: "hsl(339, 60%, 47%)",
    ko: {
      title: "통솔자 (The Commander)",
      subtitle: "대담하고 상상력이 풍부한 지도자",
      traits: [
        "천성적인 리더십",
        "전략적이고 체계적",
        "목표 지향적",
        "결단력 있고 자신감"
      ],
      strengths: [
        "뛰어난 조직 관리 능력",
        "효과적인 의사소통",
        "장기적 계획과 실행",
        "팀을 동기부여하는 능력"
      ],
      description: "통솔자는 천성적인 리더로서 조직을 이끌고 목표를 달성하는 데 탁월한 능력을 발휘합니다."
    },
    en: {
      title: "The Commander",
      subtitle: "Bold and imaginative leader",
      traits: [
        "Natural leadership",
        "Strategic and systematic",
        "Goal-oriented",
        "Decisive and confident"
      ],
      strengths: [
        "Excellent organizational management",
        "Effective communication",
        "Long-term planning and execution",
        "Ability to motivate teams"
      ],
      description: "Commanders are natural leaders who excel at leading organizations and achieving goals."
    },
    zh: {
      title: "指挥官",
      subtitle: "大胆而富有想象力的领导者",
      traits: [
        "天生的领导力",
        "战略性和系统性",
        "目标导向",
        "果断和自信"
      ],
      strengths: [
        "出色的组织管理能力",
        "有效的沟通",
        "长期规划和执行",
        "激励团队的能力"
      ],
      description: "指挥官是天生的领导者，在领导组织和实现目标方面表现出色。"
    },
    vi: {
      title: "Chỉ huy",
      subtitle: "Nhà lãnh đạo táo bạo và giàu trí tưởng tượng",
      traits: [
        "Khả năng lãnh đạo bẩm sinh",
        "Chiến lược và có hệ thống",
        "Hướng mục tiêu",
        "Quyết đoán và tự tin"
      ],
      strengths: [
        "Khả năng quản lý tổ chức xuất sắc",
        "Giao tiếp hiệu quả",
        "Lập kế hoạch và thực hiện dài hạn",
        "Khả năng động viên đội nhóm"
      ],
      description: "Các chỉ huy là những nhà lãnh đạo bẩm sinh xuất sắc trong việc dẫn dắt tổ chức và đạt được mục tiêu."
    }
  },
  "ENTP": {
    code: "ENTP",
    color: "hsl(31, 91%, 47%)",
    ko: {
      title: "토론가 (The Debater)",
      subtitle: "영리하고 호기심 많은 사상가",
      traits: [
        "창의적이고 혁신적",
        "뛰어난 의사소통 능력",
        "유연하고 적응력 높음",
        "열정적이고 에너지 넘침"
      ],
      strengths: [
        "새로운 아이디어 생성",
        "복잡한 문제 해결",
        "사람들과의 네트워킹",
        "변화에 대한 적응력"
      ],
      description: "토론가는 지적 도전을 즐기며 새로운 가능성을 탐구하는 것을 좋아하는 혁신적인 사상가입니다."
    },
    en: {
      title: "The Debater",
      subtitle: "Smart and curious thinker",
      traits: [
        "Creative and innovative",
        "Excellent communication skills",
        "Flexible and adaptable",
        "Enthusiastic and energetic"
      ],
      strengths: [
        "Generating new ideas",
        "Solving complex problems",
        "Networking with people",
        "Adaptability to change"
      ],
      description: "Debaters are innovative thinkers who enjoy intellectual challenges and love exploring new possibilities."
    },
    zh: {
      title: "辩论家",
      subtitle: "聪明而好奇的思想家",
      traits: [
        "富有创造力和创新精神",
        "出色的沟通能力",
        "灵活且适应性强",
        "热情且精力充沛"
      ],
      strengths: [
        "产生新想法",
        "解决复杂问题",
        "与人建立网络",
        "对变化的适应性"
      ],
      description: "辩论家是创新的思想家，喜欢智力挑战，热爱探索新的可能性。"
    },
    vi: {
      title: "Nhà tranh luận",
      subtitle: "Nhà tư tưởng thông minh và tò mò",
      traits: [
        "Sáng tạo và đổi mới",
        "Kỹ năng giao tiếp xuất sắc",
        "Linh hoạt và thích nghi",
        "Nhiệt tình và năng động"
      ],
      strengths: [
        "Tạo ra ý tưởng mới",
        "Giải quyết vấn đề phức tạp",
        "Kết nối mạng lưới với mọi người",
        "Khả năng thích nghi với thay đổi"
      ],
      description: "Các nhà tranh luận là những nhà tư tưởng đổi mới thích thử thách trí tuệ và yêu thích khám phá những khả năng mới."
    }
  },
  "ENFJ": {
    code: "ENFJ",
    color: "hsl(112, 50%, 47%)",
    ko: {
      title: "선도자 (The Protagonist)",
      subtitle: "카리스마 있고 영감을 주는 지도자",
      traits: ["타인을 이해하고 공감", "뛰어난 소통 능력", "이상주의적", "책임감이 강함"],
      strengths: ["팀워크 구축", "동기부여", "갈등 해결", "비전 제시"],
      description: "선도자는 타고난 지도자로서 다른 사람들에게 영감을 주고 긍정적인 변화를 이끌어냅니다."
    },
    en: {
      title: "The Protagonist",
      subtitle: "Charismatic and inspiring leader",
      traits: ["Understanding and empathetic", "Excellent communication", "Idealistic", "Strong sense of responsibility"],
      strengths: ["Building teamwork", "Motivation", "Conflict resolution", "Vision presentation"],
      description: "Protagonists are natural leaders who inspire others and drive positive change."
    },
    zh: {
      title: "主人公",
      subtitle: "有魅力且鼓舞人心的领导者",
      traits: ["理解和共情", "出色的沟通", "理想主义", "强烈的责任感"],
      strengths: ["建立团队合作", "激励", "冲突解决", "愿景展示"],
      description: "主人公是天生的领导者，能够激励他人并推动积极变化。"
    },
    vi: {
      title: "Nhân vật chính",
      subtitle: "Nhà lãnh đạo có sức hút và truyền cảm hứng",
      traits: ["Hiểu biết và đồng cảm", "Giao tiếp xuất sắc", "Lý tưởng hóa", "Tinh thần trách nhiệm cao"],
      strengths: ["Xây dựng tinh thần đội nhóm", "Động viên", "Giải quyết xung đột", "Trình bày tầm nhìn"],
      description: "Nhân vật chính là những nhà lãnh đạo bẩm sinh truyền cảm hứng cho người khác và thúc đẩy thay đổi tích cực."
    }
  },
  "ENFP": {
    code: "ENFP",
    color: "hsl(142, 69%, 47%)",
    ko: {
      title: "활동가 (The Campaigner)",
      subtitle: "열정적이고 창의적인 자유로운 영혼",
      traits: ["창의적이고 호기심 많음", "사교적이고 친근함", "유연하고 자발적", "열정적이고 에너지 넘침"],
      strengths: ["새로운 아이디어 생성", "사람들과의 연결", "변화에 대한 적응", "영감 제공"],
      description: "활동가는 진정한 자유로운 영혼으로서 사교적이고 개방적이며 항상 새로운 가능성을 탐구합니다."
    },
    en: {
      title: "The Campaigner",
      subtitle: "Enthusiastic and creative free spirit",
      traits: ["Creative and curious", "Social and friendly", "Flexible and spontaneous", "Enthusiastic and energetic"],
      strengths: ["Generating new ideas", "Connecting with people", "Adapting to change", "Providing inspiration"],
      description: "Campaigners are true free spirits who are social, open, and always exploring new possibilities."
    },
    zh: {
      title: "竞选者",
      subtitle: "热情而有创造力的自由精神",
      traits: ["富有创造力和好奇心", "社交和友好", "灵活和自发", "热情和精力充沛"],
      strengths: ["产生新想法", "与人建立联系", "适应变化", "提供灵感"],
      description: "竞选者是真正的自由精神，善于社交、开放，总是在探索新的可能性。"
    },
    vi: {
      title: "Nhà vận động",
      subtitle: "Tinh thần tự do nhiệt tình và sáng tạo",
      traits: ["Sáng tạo và tò mò", "Xã hội và thân thiện", "Linh hoạt và tự phát", "Nhiệt tình và năng động"],
      strengths: ["Tạo ra ý tưởng mới", "Kết nối với mọi người", "Thích nghi với thay đổi", "Cung cấp cảm hứng"],
      description: "Các nhà vận động là những tinh thần tự do thực sự, xã hội, cởi mở và luôn khám phá những khả năng mới."
    }
  },
  "INFJ": {
    code: "INFJ",
    color: "hsl(218, 79%, 47%)",
    ko: {
      title: "옹호자 (The Advocate)",
      subtitle: "조용하고 신비로운 영감을 주는 이상주의자",
      traits: ["깊은 통찰력", "강한 직감", "이상주의적", "결단력 있음"],
      strengths: ["미래 예측", "타인의 감정 이해", "창의적 문제 해결", "의미 있는 관계 형성"],
      description: "옹호자는 세상을 더 나은 곳으로 만들고자 하는 강한 의지를 가진 이상주의자입니다."
    },
    en: {
      title: "The Advocate",
      subtitle: "Quiet and mystical inspiring idealist",
      traits: ["Deep insight", "Strong intuition", "Idealistic", "Decisive"],
      strengths: ["Future prediction", "Understanding others' emotions", "Creative problem solving", "Building meaningful relationships"],
      description: "Advocates are idealists with a strong will to make the world a better place."
    },
    zh: {
      title: "提倡者",
      subtitle: "安静而神秘的鼓舞人心的理想主义者",
      traits: ["深刻的洞察力", "强烈的直觉", "理想主义", "果断"],
      strengths: ["预测未来", "理解他人情感", "创造性问题解决", "建立有意义的关系"],
      description: "提倡者是理想主义者，有着让世界变得更美好的坚强意志。"
    },
    vi: {
      title: "Người ủng hộ",
      subtitle: "Nhà lý tưởng truyền cảm hứng yên tĩnh và bí ẩn",
      traits: ["Hiểu biết sâu sắc", "Trực giác mạnh mẽ", "Lý tưởng hóa", "Quyết đoán"],
      strengths: ["Dự đoán tương lai", "Hiểu cảm xúc của người khác", "Giải quyết vấn đề sáng tạo", "Xây dựng mối quan hệ có ý nghĩa"],
      description: "Người ủng hộ là những nhà lý tưởng có ý chí mạnh mẽ để làm cho thế giới trở nên tốt đẹp hơn."
    }
  },
  "INFP": {
    code: "INFP",
    color: "hsl(322, 59%, 47%)",
    ko: {
      title: "중재자 (The Mediator)",
      subtitle: "시적이고 친절하며 이타적인 사람",
      traits: ["창의적이고 상상력 풍부", "공감 능력이 뛰어남", "유연하고 개방적", "가치 중심적"],
      strengths: ["예술적 표현", "갈등 중재", "개인적 성장", "진정성 추구"],
      description: "중재자는 항상 선을 행할 준비가 되어 있는 진정한 이상주의자입니다."
    },
    en: {
      title: "The Mediator",
      subtitle: "Poetic, kind and altruistic people",
      traits: ["Creative and imaginative", "Excellent empathy", "Flexible and open", "Value-centered"],
      strengths: ["Artistic expression", "Conflict mediation", "Personal growth", "Pursuing authenticity"],
      description: "Mediators are true idealists, always ready to do good."
    },
    zh: {
      title: "调解者",
      subtitle: "诗意、善良和利他的人",
      traits: ["富有创造力和想象力", "出色的共情能力", "灵活和开放", "以价值为中心"],
      strengths: ["艺术表达", "冲突调解", "个人成长", "追求真实"],
      description: "调解者是真正的理想主义者，总是准备行善。"
    },
    vi: {
      title: "Người hòa giải",
      subtitle: "Những người thơ mộng, tử tế và vị tha",
      traits: ["Sáng tạo và giàu trí tưởng tượng", "Khả năng đồng cảm xuất sắc", "Linh hoạt và cởi mở", "Tập trung vào giá trị"],
      strengths: ["Biểu đạt nghệ thuật", "Hòa giải xung đột", "Phát triển cá nhân", "Theo đuổi tính chân thực"],
      description: "Người hòa giải là những nhà lý tưởng thực sự, luôn sẵn sàng làm điều tốt."
    }
  },
  "ISTJ": {
    code: "ISTJ",
    color: "hsl(245, 58%, 47%)",
    ko: {
      title: "논리주의자 (The Logistician)",
      subtitle: "실용적이고 사실에 기반한 신뢰할 수 있는 사람",
      traits: ["책임감이 강함", "체계적이고 조직적", "현실적이고 실용적", "전통을 중시함"],
      strengths: ["계획 수립과 실행", "세부사항 관리", "안정성 제공", "신뢰성"],
      description: "논리주의자는 전통과 충성심을 중시하며 약속을 지키는 신뢰할 수 있는 사람입니다."
    },
    en: {
      title: "The Logistician",
      subtitle: "Practical and fact-minded reliable people",
      traits: ["Strong sense of responsibility", "Systematic and organized", "Realistic and practical", "Value tradition"],
      strengths: ["Planning and execution", "Detail management", "Providing stability", "Reliability"],
      description: "Logisticians value tradition and loyalty, and are reliable people who keep their promises."
    },
    zh: {
      title: "物流师",
      subtitle: "实用且以事实为基础的可靠人员",
      traits: ["强烈的责任感", "系统化和有组织", "现实和实用", "重视传统"],
      strengths: ["规划和执行", "细节管理", "提供稳定性", "可靠性"],
      description: "物流师重视传统和忠诚，是信守承诺的可靠人员。"
    },
    vi: {
      title: "Nhà hậu cần",
      subtitle: "Những người thực tế và dựa trên sự thật đáng tin cậy",
      traits: ["Tinh thần trách nhiệm cao", "Có hệ thống và tổ chức", "Thực tế và thiết thực", "Coi trọng truyền thống"],
      strengths: ["Lập kế hoạch và thực hiện", "Quản lý chi tiết", "Cung cấp sự ổn định", "Độ tin cậy"],
      description: "Nhà hậu cần coi trọng truyền thống và lòng trung thành, là những người đáng tin cậy giữ lời hứa."
    }
  },
  "ISFJ": {
    code: "ISFJ",
    color: "hsl(340, 82%, 47%)",
    ko: {
      title: "수호자 (The Protector)",
      subtitle: "따뜻하고 헌신적인 보호자",
      traits: ["따뜻하고 배려심 많음", "책임감이 강함", "세심하고 관찰력 좋음", "전통적 가치 중시"],
      strengths: ["타인 돌봄", "세부사항 기억", "안정성 제공", "팀워크"],
      description: "수호자는 다른 사람을 보호하고 돌보는 것을 최우선으로 생각하는 따뜻한 마음의 소유자입니다."
    },
    en: {
      title: "The Protector",
      subtitle: "Warm-hearted and dedicated protector",
      traits: ["Warm and caring", "Strong sense of responsibility", "Attentive and observant", "Values traditional values"],
      strengths: ["Caring for others", "Remembering details", "Providing stability", "Teamwork"],
      description: "Protectors are warm-hearted people who prioritize protecting and caring for others."
    },
    zh: {
      title: "保护者",
      subtitle: "热心和专注的保护者",
      traits: ["温暖和关怀", "强烈的责任感", "细心和善于观察", "重视传统价值"],
      strengths: ["关心他人", "记住细节", "提供稳定性", "团队合作"],
      description: "保护者是热心的人，优先考虑保护和关心他人。"
    },
    vi: {
      title: "Người bảo vệ",
      subtitle: "Người bảo vệ ấm áp và tận tụy",
      traits: ["Ấm áp và quan tâm", "Tinh thần trách nhiệm cao", "Chú ý và quan sát", "Coi trọng giá trị truyền thống"],
      strengths: ["Chăm sóc người khác", "Ghi nhớ chi tiết", "Cung cấp sự ổn định", "Làm việc nhóm"],
      description: "Người bảo vệ là những người ấm áp ưu tiên bảo vệ và chăm sóc người khác."
    }
  },
  "ESTJ": {
    code: "ESTJ",
    color: "hsl(21, 85%, 47%)",
    ko: {
      title: "경영자 (The Executive)",
      subtitle: "뛰어난 관리자, 전통과 질서를 중시",
      traits: ["조직력이 뛰어남", "리더십이 강함", "현실적이고 실용적", "책임감이 강함"],
      strengths: ["프로젝트 관리", "팀 조직", "효율성 추구", "목표 달성"],
      description: "경영자는 전통, 질서, 기준을 대표하며 공동체를 하나로 모으는 뛰어난 조직가입니다."
    },
    en: {
      title: "The Executive",
      subtitle: "Excellent administrator, values tradition and order",
      traits: ["Excellent organizational skills", "Strong leadership", "Realistic and practical", "Strong sense of responsibility"],
      strengths: ["Project management", "Team organization", "Pursuing efficiency", "Goal achievement"],
      description: "Executives represent tradition, order, and standards, and are excellent organizers who bring communities together."
    },
    zh: {
      title: "总经理",
      subtitle: "优秀的管理者，重视传统和秩序",
      traits: ["出色的组织能力", "强烈的领导力", "现实和实用", "强烈的责任感"],
      strengths: ["项目管理", "团队组织", "追求效率", "目标达成"],
      description: "总经理代表传统、秩序和标准，是将社区团结在一起的优秀组织者。"
    },
    vi: {
      title: "Giám đốc điều hành",
      subtitle: "Quản trị viên xuất sắc, coi trọng truyền thống và trật tự",
      traits: ["Kỹ năng tổ chức xuất sắc", "Khả năng lãnh đạo mạnh mẽ", "Thực tế và thiết thực", "Tinh thần trách nhiệm cao"],
      strengths: ["Quản lý dự án", "Tổ chức nhóm", "Theo đuổi hiệu quả", "Đạt mục tiêu"],
      description: "Giám đốc điều hành đại diện cho truyền thống, trật tự và tiêu chuẩn, là những nhà tổ chức xuất sắc kết hợp cộng đồng lại với nhau."
    }
  },
  "ESFJ": {
    code: "ESFJ",
    color: "hsl(199, 89%, 47%)",
    ko: {
      title: "집정관 (The Consul)",
      subtitle: "매우 인기 많고 사교적인 사람",
      traits: ["사교적이고 친근함", "배려심 깊음", "협력적", "전통을 중시함"],
      strengths: ["팀워크 구축", "타인의 필요 파악", "조화로운 환경 조성", "실용적 도움 제공"],
      description: "집정관은 인기가 많고 사교적이며 다른 사람들이 최선을 다하도록 격려하는 협력적인 사람입니다."
    },
    en: {
      title: "The Consul",
      subtitle: "Very popular and sociable people",
      traits: ["Social and friendly", "Deeply caring", "Cooperative", "Values tradition"],
      strengths: ["Building teamwork", "Identifying others' needs", "Creating harmonious environment", "Providing practical help"],
      description: "Consuls are popular, sociable, and cooperative people who encourage others to do their best."
    },
    zh: {
      title: "执政官",
      subtitle: "非常受欢迎和善于社交的人",
      traits: ["社交和友好", "深切关怀", "合作", "重视传统"],
      strengths: ["建立团队合作", "识别他人需求", "创造和谐环境", "提供实用帮助"],
      description: "执政官是受欢迎、善于社交和合作的人，鼓励他人尽力而为。"
    },
    vi: {
      title: "Lãnh sự",
      subtitle: "Những người rất nổi tiếng và hòa đồng",
      traits: ["Xã hội và thân thiện", "Quan tâm sâu sắc", "Hợp tác", "Coi trọng truyền thống"],
      strengths: ["Xây dựng tinh thần đội nhóm", "Xác định nhu cầu của người khác", "Tạo môi trường hài hòa", "Cung cấp sự giúp đỡ thực tế"],
      description: "Lãnh sự là những người nổi tiếng, hòa đồng và hợp tác, khuyến khích người khác cố gắng hết sức."
    }
  },
  "ISTP": {
    code: "ISTP",
    color: "hsl(45, 100%, 47%)",
    ko: {
      title: "만능재주꾼 (The Virtuoso)",
      subtitle: "대담하고 실용적인 실험가",
      traits: ["실용적이고 현실적", "손재주가 뛰어남", "독립적", "문제 해결 능력"],
      strengths: ["기계적 이해력", "즉흥적 대응", "위기 상황 대처", "실용적 해결책"],
      description: "만능재주꾼은 손으로 탐구하고 눈과 손을 민첩하게 움직이며 침착하고 이성적으로 주변 세계를 탐험합니다."
    },
    en: {
      title: "The Virtuoso",
      subtitle: "Bold and practical experimenter",
      traits: ["Practical and realistic", "Excellent manual skills", "Independent", "Problem-solving ability"],
      strengths: ["Mechanical understanding", "Impromptu response", "Crisis management", "Practical solutions"],
      description: "Virtuosos explore with their hands and move their eyes and hands nimbly, exploring the world around them calmly and rationally."
    },
    zh: {
      title: "鉴赏家",
      subtitle: "大胆而实用的实验者",
      traits: ["实用和现实", "出色的手工技能", "独立", "解决问题的能力"],
      strengths: ["机械理解", "即兴反应", "危机管理", "实用解决方案"],
      description: "鉴赏家用手探索，灵活地移动眼睛和手，冷静理性地探索周围的世界。"
    },
    vi: {
      title: "Nghệ sĩ",
      subtitle: "Nhà thí nghiệm táo bạo và thực tế",
      traits: ["Thực tế và hiện thực", "Kỹ năng thủ công xuất sắc", "Độc lập", "Khả năng giải quyết vấn đề"],
      strengths: ["Hiểu biết cơ khí", "Phản ứng ứng biến", "Quản lý khủng hoảng", "Giải pháp thực tế"],
      description: "Nghệ sĩ khám phá bằng tay và di chuyển mắt và tay một cách nhanh nhẹn, khám phá thế giới xung quanh một cách bình tĩnh và lý trí."
    }
  },
  "ISFP": {
    code: "ISFP",
    color: "hsl(322, 59%, 47%)",
    ko: {
      title: "모험가 (The Adventurer)",
      subtitle: "유연하고 매력적인 예술가",
      traits: ["예술적 감각", "유연하고 개방적", "친근하고 따뜻함", "가치 중심적"],
      strengths: ["예술적 표현", "개인적 가치 추구", "타인에 대한 이해", "조화로운 관계"],
      description: "모험가는 진정한 예술가로서 아름다움과 경험의 가능성을 끊임없이 탐구합니다."
    },
    en: {
      title: "The Adventurer",
      subtitle: "Flexible and charming artist",
      traits: ["Artistic sense", "Flexible and open", "Friendly and warm", "Value-centered"],
      strengths: ["Artistic expression", "Pursuing personal values", "Understanding others", "Harmonious relationships"],
      description: "Adventurers are true artists who constantly explore the possibilities of beauty and experience."
    },
    zh: {
      title: "冒险家",
      subtitle: "灵活而迷人的艺术家",
      traits: ["艺术感", "灵活和开放", "友好和温暖", "以价值为中心"],
      strengths: ["艺术表达", "追求个人价值", "理解他人", "和谐关系"],
      description: "冒险家是真正的艺术家，不断探索美丽和体验的可能性。"
    },
    vi: {
      title: "Nhà thám hiểm",
      subtitle: "Nghệ sĩ linh hoạt và quyến rũ",
      traits: ["Cảm giác nghệ thuật", "Linh hoạt và cởi mở", "Thân thiện và ấm áp", "Tập trung vào giá trị"],
      strengths: ["Biểu đạt nghệ thuật", "Theo đuổi giá trị cá nhân", "Hiểu người khác", "Mối quan hệ hài hòa"],
      description: "Nhà thám hiểm là những nghệ sĩ thực sự liên tục khám phá khả năng của vẻ đẹp và trải nghiệm."
    }
  },
  "ESTP": {
    code: "ESTP",
    color: "hsl(60, 100%, 47%)",
    ko: {
      title: "사업가 (The Entrepreneur)",
      subtitle: "똑똑하고 에너지 넘치며 매우 지각 능력이 뛰어난 사람",
      traits: ["활동적이고 에너지 넘침", "현실적이고 실용적", "사교적", "순간 대응력"],
      strengths: ["즉석 문제 해결", "사람들과의 소통", "실용적 접근", "위기 대응"],
      description: "사업가는 주변 사람과 상황에 영향을 미치는 것을 좋아하는 활동적이고 사교적인 사람입니다."
    },
    en: {
      title: "The Entrepreneur",
      subtitle: "Smart, energetic and very perceptive people",
      traits: ["Active and energetic", "Realistic and practical", "Social", "Quick response"],
      strengths: ["Instant problem solving", "Communication with people", "Practical approach", "Crisis response"],
      description: "Entrepreneurs are active and social people who like to influence the people and situations around them."
    },
    zh: {
      title: "企业家",
      subtitle: "聪明、精力充沛且洞察力很强的人",
      traits: ["活跃和精力充沛", "现实和实用", "社交", "快速反应"],
      strengths: ["即时问题解决", "与人沟通", "实用方法", "危机反应"],
      description: "企业家是活跃和社交的人，喜欢影响周围的人和情况。"
    },
    vi: {
      title: "Doanh nhân",
      subtitle: "Những người thông minh, năng động và có khả năng nhận thức rất cao",
      traits: ["Tích cực và năng động", "Thực tế và thiết thực", "Xã hội", "Phản ứng nhanh"],
      strengths: ["Giải quyết vấn đề tức thì", "Giao tiếp với mọi người", "Phương pháp thực tế", "Phản ứng khủng hoảng"],
      description: "Doanh nhân là những người tích cực và xã hội thích ảnh hưởng đến mọi người và tình huống xung quanh họ."
    }
  },
  "ESFP": {
    code: "ESFP",
    color: "hsl(56, 100%, 47%)",
    ko: {
      title: "연예인 (The Entertainer)",
      subtitle: "자발적이고 열정적이며 사교적인 사람",
      traits: ["열정적이고 활기찬", "자발적이고 유연함", "사교적이고 친근함", "낙관적"],
      strengths: ["분위기 메이커", "타인 격려", "창의적 표현", "즉흥적 대응"],
      description: "연예인은 삶과 사람, 물질적 편안함을 사랑하며 주변 사람들에게 기쁨을 전해주는 사람입니다."
    },
    en: {
      title: "The Entertainer",
      subtitle: "Spontaneous, enthusiastic and sociable people",
      traits: ["Enthusiastic and lively", "Spontaneous and flexible", "Social and friendly", "Optimistic"],
      strengths: ["Mood maker", "Encouraging others", "Creative expression", "Impromptu response"],
      description: "Entertainers love life, people, and material comforts, and bring joy to those around them."
    },
    zh: {
      title: "表演者",
      subtitle: "自发、热情和善于社交的人",
      traits: ["热情和活泼", "自发和灵活", "社交和友好", "乐观"],
      strengths: ["气氛制造者", "鼓励他人", "创意表达", "即兴反应"],
      description: "表演者热爱生活、人和物质舒适，给周围的人带来快乐。"
    },
    vi: {
      title: "Nghệ sĩ giải trí",
      subtitle: "Những người tự phát, nhiệt tình và hòa đồng",
      traits: ["Nhiệt tình và sống động", "Tự phát và linh hoạt", "Xã hội và thân thiện", "Lạc quan"],
      strengths: ["Người tạo không khí", "Khuyến khích người khác", "Biểu đạt sáng tạo", "Phản ứng ứng biến"],
      description: "Nghệ sĩ giải trí yêu cuộc sống, con người và sự thoải mái vật chất, mang lại niềm vui cho những người xung quanh."
    }
  }
};

export function getPersonalityType(code: string, language: Language = 'ko'): PersonalityType {
  const multiType = multilingualPersonalityTypes[code];
  if (!multiType) {
    return {
      code,
      title: "Unknown Type",
      subtitle: "Unknown",
      traits: [],
      strengths: [],
      description: "Unknown personality type",
      color: "hsl(0, 0%, 50%)"
    };
  }

  const langData = multiType[language] || multiType.ko;
  return {
    code: multiType.code,
    title: langData.title,
    subtitle: langData.subtitle,
    traits: langData.traits,
    strengths: langData.strengths,
    description: langData.description,
    color: multiType.color
  };
}

export function getAllPersonalityTypes(language: Language = 'ko'): Record<string, PersonalityType> {
  const result: Record<string, PersonalityType> = {};
  for (const code in multilingualPersonalityTypes) {
    result[code] = getPersonalityType(code, language);
  }
  return result;
}