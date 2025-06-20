import { useEffect } from "react";
import { useLocation } from "wouter";
import { useQuery } from "@tanstack/react-query";
import ResultCard from "@/components/result-card";
import { personalityTypes } from "@/lib/personality-types";
import type { TestSession } from "@shared/schema";

export default function Results() {
  const [location, setLocation] = useLocation();
  const searchParams = new URLSearchParams(location.split('?')[1] || '');
  const sessionId = searchParams.get('session');

  const { data: session, isLoading, error } = useQuery<TestSession>({
    queryKey: [`/api/test-sessions/${sessionId}`],
    enabled: !!sessionId
  });

  useEffect(() => {
    if (!sessionId) {
      setLocation('/');
    }
  }, [sessionId, setLocation]);

  const handleShare = async () => {
    if (!session) return;
    
    const personalityType = personalityTypes[session.personalityType];
    const shareText = `나는 ${personalityType.title} 유형입니다! 테토-에겐 성격 유형 테스트를 해보세요.`;
    
    if (navigator.share) {
      try {
        await navigator.share({
          title: '나의 테토-에겐 성격 유형',
          text: shareText,
          url: window.location.origin
        });
      } catch (error) {
        // User cancelled sharing
      }
    } else {
      try {
        await navigator.clipboard.writeText(`${shareText} ${window.location.origin}`);
        alert('결과가 클립보드에 복사되었습니다!');
      } catch (error) {
        console.error('Failed to copy to clipboard:', error);
      }
    }
  };

  const handleRestart = () => {
    setLocation('/');
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-gray-900 mb-4">결과를 불러오고 있습니다...</h2>
        </div>
      </div>
    );
  }

  if (error || !session) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">결과를 찾을 수 없습니다</h2>
          <p className="text-gray-600 mb-6">테스트를 다시 시도해주세요.</p>
          <button 
            onClick={() => setLocation('/')}
            className="bg-primary hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-full"
          >
            홈으로 돌아가기
          </button>
        </div>
      </div>
    );
  }

  const personalityType = personalityTypes[session.personalityType];

  if (!personalityType) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">알 수 없는 성격 유형</h2>
          <p className="text-gray-600 mb-6">테스트를 다시 시도해주세요.</p>
          <button 
            onClick={() => setLocation('/')}
            className="bg-primary hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-full"
          >
            홈으로 돌아가기
          </button>
        </div>
      </div>
    );
  }

  const otherTypes = Object.values(personalityTypes)
    .filter(type => type.code !== session.personalityType)
    .slice(0, 4);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 py-6">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">테토-에겐 성격 유형 테스트</h1>
            <p className="text-gray-600">나만의 독특한 성격 유형을 발견해보세요</p>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">당신의 테토-에겐 성격 유형</h2>
          <p className="text-gray-600 text-lg">테스트가 완료되었습니다!</p>
        </div>
        
        <ResultCard 
          personalityType={personalityType}
          onShare={handleShare}
          onRestart={handleRestart}
        />
        
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">다른 테토-에겐 성격 유형들</h3>
          <div className="grid md:grid-cols-4 gap-4">
            {otherTypes.map((type) => (
              <div key={type.code} className="text-center p-4 hover:bg-gray-50 rounded-lg cursor-pointer transition-all duration-200">
                <div 
                  className="text-white rounded-lg px-3 py-1 text-sm font-bold mb-2 inline-block"
                  style={{ backgroundColor: type.color }}
                >
                  {type.code}
                </div>
                <p className="text-sm text-gray-600">{type.title.split(' ')[0]}</p>
              </div>
            ))}
          </div>
        </div>
      </main>

      <footer className="bg-white border-t border-gray-200 mt-16">
        <div className="max-w-4xl mx-auto px-4 py-8">
          <div className="text-center text-gray-600">
            <p className="mb-4">© 2024 테토-에겐 성격 유형 테스트. All rights reserved.</p>
            <p className="text-sm">이 테스트는 교육 및 자기 이해 목적으로 제공됩니다.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
