import { createContext, useContext, useState, ReactNode } from 'react';

export type Language = 'ko' | 'en' | 'zh' | 'vi';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  ko: {
    // Header
    'app.title': '테토-에겐 성격 유형 테스트',
    'app.subtitle': '나만의 독특한 성격 유형을 발견해보세요',
    
    // Home page
    'home.welcome': '테토-에겐 성격 유형에 오신 것을 환영합니다!',
    'home.description': '이 테스트는 16가지 독특한 테토-에겐 성격 유형 중 여러분의 유형을 발견하는 데 도움을 드립니다. 각 질문에 솔직하게 답변해주시면, 여러분의 성격적 특성과 강점을 알 수 있습니다.',
    'home.accurate': '정확한 분석',
    'home.accurate.desc': '과학적 근거에 기반한 성격 분석',
    'home.quick': '빠른 테스트',
    'home.quick.desc': '약 10분 소요되는 간편한 테스트',
    'home.personalized': '개인화된 결과',
    'home.personalized.desc': '상세한 성격 분석과 조언 제공',
    'home.start': '테스트 시작하기',
    
    // Test page
    'test.progress': '진행률',
    'test.instruction': '가장 적합한 답변을 선택해주세요',
    'test.previous': '이전',
    'test.next': '다음',
    'test.results': '결과 보기',
    'test.calculating': '결과를 계산하고 있습니다...',
    'test.wait': '잠시만 기다려주세요',
    
    // Results page
    'results.title': '당신의 테토-에겐 성격 유형',
    'results.completed': '테스트가 완료되었습니다!',
    'results.traits': '성격 특성',
    'results.strengths': '강점',
    'results.description': '상세 설명',
    'results.share': '결과 공유하기',
    'results.restart': '다시 테스트하기',
    'results.other.types': '다른 테토-에겐 성격 유형들',
    'results.loading': '결과를 불러오고 있습니다...',
    'results.not.found': '결과를 찾을 수 없습니다',
    'results.try.again': '테스트를 다시 시도해주세요.',
    'results.home': '홈으로 돌아가기',
    'results.unknown': '알 수 없는 성격 유형',
    
    // Share
    'share.text': '나는 {type} 유형입니다! 테토-에겐 성격 유형 테스트를 해보세요.',
    'share.copied': '결과가 클립보드에 복사되었습니다!',
    
    // Footer
    'footer.copyright': '© 2024 테토-에겐 성격 유형 테스트. All rights reserved.',
    'footer.purpose': '이 테스트는 교육 및 자기 이해 목적으로 제공됩니다.',
    
    // Theme
    'theme.light': '라이트 모드',
    'theme.dark': '다크 모드',
    
    // Language
    'language.korean': '한국어',
    'language.english': 'English',
    'language.chinese': '中文',
    'language.vietnamese': 'Tiếng Việt'
  },
  
  en: {
    // Header
    'app.title': 'Teto-Egen Personality Type Test',
    'app.subtitle': 'Discover your unique personality type',
    
    // Home page
    'home.welcome': 'Welcome to the Teto-Egen Personality Types!',
    'home.description': 'This test helps you discover your type among 16 unique Teto-Egen personality types. Answer each question honestly to learn about your personality traits and strengths.',
    'home.accurate': 'Accurate Analysis',
    'home.accurate.desc': 'Science-based personality analysis',
    'home.quick': 'Quick Test',
    'home.quick.desc': 'Simple test taking about 10 minutes',
    'home.personalized': 'Personalized Results',
    'home.personalized.desc': 'Detailed personality analysis and advice',
    'home.start': 'Start Test',
    
    // Test page
    'test.progress': 'Progress',
    'test.instruction': 'Choose the most suitable answer',
    'test.previous': 'Previous',
    'test.next': 'Next',
    'test.results': 'View Results',
    'test.calculating': 'Calculating results...',
    'test.wait': 'Please wait a moment',
    
    // Results page
    'results.title': 'Your Teto-Egen Personality Type',
    'results.completed': 'Test completed!',
    'results.traits': 'Personality Traits',
    'results.strengths': 'Strengths',
    'results.description': 'Detailed Description',
    'results.share': 'Share Results',
    'results.restart': 'Take Test Again',
    'results.other.types': 'Other Teto-Egen Personality Types',
    'results.loading': 'Loading results...',
    'results.not.found': 'Results not found',
    'results.try.again': 'Please try the test again.',
    'results.home': 'Return Home',
    'results.unknown': 'Unknown personality type',
    
    // Share
    'share.text': 'I am a {type} type! Try the Teto-Egen Personality Type Test.',
    'share.copied': 'Results copied to clipboard!',
    
    // Footer
    'footer.copyright': '© 2024 Teto-Egen Personality Type Test. All rights reserved.',
    'footer.purpose': 'This test is provided for educational and self-understanding purposes.',
    
    // Theme
    'theme.light': 'Light Mode',
    'theme.dark': 'Dark Mode',
    
    // Language
    'language.korean': '한국어',
    'language.english': 'English',
    'language.chinese': '中文',
    'language.vietnamese': 'Tiếng Việt'
  },
  
  zh: {
    // Header
    'app.title': 'Teto-Egen 性格类型测试',
    'app.subtitle': '发现您独特的性格类型',
    
    // Home page
    'home.welcome': '欢迎来到 Teto-Egen 性格类型测试！',
    'home.description': '这个测试帮助您在16种独特的 Teto-Egen 性格类型中发现属于您的类型。请诚实回答每个问题，了解您的性格特征和优势。',
    'home.accurate': '精准分析',
    'home.accurate.desc': '基于科学的性格分析',
    'home.quick': '快速测试',
    'home.quick.desc': '约10分钟的简单测试',
    'home.personalized': '个性化结果',
    'home.personalized.desc': '详细的性格分析和建议',
    'home.start': '开始测试',
    
    // Test page
    'test.progress': '进度',
    'test.instruction': '选择最合适的答案',
    'test.previous': '上一个',
    'test.next': '下一个',
    'test.results': '查看结果',
    'test.calculating': '正在计算结果...',
    'test.wait': '请稍等',
    
    // Results page
    'results.title': '您的 Teto-Egen 性格类型',
    'results.completed': '测试完成！',
    'results.traits': '性格特征',
    'results.strengths': '优势',
    'results.description': '详细描述',
    'results.share': '分享结果',
    'results.restart': '重新测试',
    'results.other.types': '其他 Teto-Egen 性格类型',
    'results.loading': '正在加载结果...',
    'results.not.found': '未找到结果',
    'results.try.again': '请重新尝试测试。',
    'results.home': '返回首页',
    'results.unknown': '未知性格类型',
    
    // Share
    'share.text': '我是 {type} 类型！来试试 Teto-Egen 性格类型测试吧。',
    'share.copied': '结果已复制到剪贴板！',
    
    // Footer
    'footer.copyright': '© 2024 Teto-Egen 性格类型测试。保留所有权利。',
    'footer.purpose': '此测试仅供教育和自我了解目的。',
    
    // Theme
    'theme.light': '浅色模式',
    'theme.dark': '深色模式',
    
    // Language
    'language.korean': '한국어',
    'language.english': 'English',
    'language.chinese': '中文',
    'language.vietnamese': 'Tiếng Việt'
  },
  
  vi: {
    // Header
    'app.title': 'Bài kiểm tra loại hình tính cách Teto-Egen',
    'app.subtitle': 'Khám phá loại hình tính cách độc đáo của bạn',
    
    // Home page
    'home.welcome': 'Chào mừng đến với Loại hình tính cách Teto-Egen!',
    'home.description': 'Bài kiểm tra này giúp bạn khám phá loại hình của mình trong số 16 loại hình tính cách Teto-Egen độc đáo. Hãy trả lời mỗi câu hỏi một cách trung thực để tìm hiểu về đặc điểm tính cách và điểm mạnh của bạn.',
    'home.accurate': 'Phân tích chính xác',
    'home.accurate.desc': 'Phân tích tính cách dựa trên khoa học',
    'home.quick': 'Kiểm tra nhanh',
    'home.quick.desc': 'Bài kiểm tra đơn giản mất khoảng 10 phút',
    'home.personalized': 'Kết quả cá nhân hóa',
    'home.personalized.desc': 'Phân tích tính cách chi tiết và lời khuyên',
    'home.start': 'Bắt đầu kiểm tra',
    
    // Test page
    'test.progress': 'Tiến độ',
    'test.instruction': 'Chọn câu trả lời phù hợp nhất',
    'test.previous': 'Trước',
    'test.next': 'Tiếp theo',
    'test.results': 'Xem kết quả',
    'test.calculating': 'Đang tính toán kết quả...',
    'test.wait': 'Vui lòng đợi một chút',
    
    // Results page
    'results.title': 'Loại hình tính cách Teto-Egen của bạn',
    'results.completed': 'Bài kiểm tra hoàn thành!',
    'results.traits': 'Đặc điểm tính cách',
    'results.strengths': 'Điểm mạnh',
    'results.description': 'Mô tả chi tiết',
    'results.share': 'Chia sẻ kết quả',
    'results.restart': 'Làm lại bài kiểm tra',
    'results.other.types': 'Các loại hình tính cách Teto-Egen khác',
    'results.loading': 'Đang tải kết quả...',
    'results.not.found': 'Không tìm thấy kết quả',
    'results.try.again': 'Vui lòng thử lại bài kiểm tra.',
    'results.home': 'Về trang chủ',
    'results.unknown': 'Loại hình tính cách không xác định',
    
    // Share
    'share.text': 'Tôi là loại hình {type}! Hãy thử bài kiểm tra loại hình tính cách Teto-Egen.',
    'share.copied': 'Kết quả đã được sao chép vào clipboard!',
    
    // Footer
    'footer.copyright': '© 2024 Bài kiểm tra loại hình tính cách Teto-Egen. Đã đăng ký bản quyền.',
    'footer.purpose': 'Bài kiểm tra này được cung cấp cho mục đích giáo dục và tự hiểu biết.',
    
    // Theme
    'theme.light': 'Chế độ sáng',
    'theme.dark': 'Chế độ tối',
    
    // Language
    'language.korean': '한국어',
    'language.english': 'English',
    'language.chinese': '中文',
    'language.vietnamese': 'Tiếng Việt'
  }
};

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('language') as Language;
      if (saved && saved in translations) return saved;
      
      const browserLang = navigator.language.toLowerCase();
      if (browserLang.startsWith('ko')) return 'ko';
      if (browserLang.startsWith('zh')) return 'zh';
      if (browserLang.startsWith('vi')) return 'vi';
      return 'en';
    }
    return 'ko';
  });

  const setLanguageAndSave = (lang: Language) => {
    setLanguage(lang);
    if (typeof window !== 'undefined') {
      localStorage.setItem('language', lang);
    }
  };

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage: setLanguageAndSave, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}