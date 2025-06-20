import { Button } from "@/components/ui/button";
import { CheckCircle, Zap, Sun } from "lucide-react";
import { useLocation } from "wouter";

export default function Home() {
  const [, setLocation] = useLocation();

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
        <section className="fade-in">
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
            <div className="text-center mb-8">
              <img 
                src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400" 
                alt="Personality diversity illustration" 
                className="w-full h-64 object-cover rounded-xl mb-6"
              />
              
              <h2 className="text-2xl font-bold text-gray-900 mb-4">테토-에겐 성격 유형에 오신 것을 환영합니다!</h2>
              <p className="text-gray-600 text-lg leading-relaxed max-w-2xl mx-auto mb-6">
                이 테스트는 16가지 독특한 테토-에겐 성격 유형 중 여러분의 유형을 발견하는 데 도움을 드립니다. 
                각 질문에 솔직하게 답변해주시면, 여러분의 성격적 특성과 강점을 알 수 있습니다.
              </p>
              
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="text-center p-4">
                  <div className="w-12 h-12 bg-primary bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <CheckCircle className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">정확한 분석</h3>
                  <p className="text-sm text-gray-600">과학적 근거에 기반한 성격 분석</p>
                </div>
                <div className="text-center p-4">
                  <div className="w-12 h-12 bg-secondary bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Zap className="w-6 h-6 text-secondary" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">빠른 테스트</h3>
                  <p className="text-sm text-gray-600">약 10분 소요되는 간편한 테스트</p>
                </div>
                <div className="text-center p-4">
                  <div className="w-12 h-12 bg-accent bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Sun className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">개인화된 결과</h3>
                  <p className="text-sm text-gray-600">상세한 성격 분석과 조언 제공</p>
                </div>
              </div>
              
              <Button 
                onClick={() => setLocation("/test")}
                className="bg-primary hover:bg-blue-600 text-white font-semibold py-4 px-8 rounded-full text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
              >
                테스트 시작하기
              </Button>
            </div>
          </div>
        </section>
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
