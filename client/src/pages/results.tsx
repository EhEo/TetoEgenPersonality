import { useEffect } from "react";
import { useLocation } from "wouter";
import { useQuery } from "@tanstack/react-query";
import ResultScreenshot from "@/components/ResultScreenshot";
import { personalityTypes } from "@/lib/personality-types";
import { useLanguage } from "@/contexts/LanguageContext";
import Header from "@/components/Header";
import type { TestSession } from "@shared/schema";

export default function Results() {
  const [location, setLocation] = useLocation();
  
  // More robust URL parsing
  const urlParts = location.split('?');
  const queryString = urlParts.length > 1 ? urlParts[1] : '';
  const searchParams = new URLSearchParams(queryString);
  const sessionId = searchParams.get('session');
  const { t } = useLanguage();
  
  console.log('Results page - location:', location, 'sessionId:', sessionId);

  const { data: session, isLoading, error } = useQuery<TestSession>({
    queryKey: [`/api/test-sessions/${sessionId}`],
    enabled: !!sessionId
  });

  useEffect(() => {
    // Add delay to allow proper URL parsing
    const timer = setTimeout(() => {
      if (!sessionId && location.includes('/results')) {
        console.log('No session ID found after delay, redirecting to home');
        setLocation('/');
      }
    }, 100);
    
    return () => clearTimeout(timer);
  }, [sessionId, setLocation, location]);

  const handleShare = async () => {
    if (!session) return;
    
    const personalityType = personalityTypes[session.personalityType];
    const shareText = t('share.text').replace('{type}', personalityType.title);
    
    if (navigator.share) {
      try {
        await navigator.share({
          title: t('app.title'),
          text: shareText,
          url: window.location.origin
        });
      } catch (error) {
        // User cancelled sharing
      }
    } else {
      try {
        await navigator.clipboard.writeText(`${shareText} ${window.location.origin}`);
        alert(t('share.copied'));
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
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-900 dark:to-gray-800 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">{t('results.loading')}</h2>
        </div>
      </div>
    );
  }

  if (error || !session) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-900 dark:to-gray-800 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">{t('results.not.found')}</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6">{t('results.try.again')}</p>
          <button 
            onClick={() => setLocation('/')}
            className="bg-primary hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-full"
          >
            {t('results.home')}
          </button>
        </div>
      </div>
    );
  }

  const personalityType = personalityTypes[session.personalityType];

  if (!personalityType) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-900 dark:to-gray-800 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">{t('results.unknown')}</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6">{t('results.try.again')}</p>
          <button 
            onClick={() => setLocation('/')}
            className="bg-primary hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-full"
          >
            {t('results.home')}
          </button>
        </div>
      </div>
    );
  }

  const otherTypes = Object.values(personalityTypes)
    .filter(type => type.code !== session.personalityType)
    .slice(0, 4);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-900 dark:to-gray-800">
      <Header />

      <main className="max-w-4xl mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">{t('results.title')}</h2>
          <p className="text-gray-600 dark:text-gray-300 text-lg">{t('results.completed')}</p>
        </div>
        
        <ResultScreenshot 
          personalityType={personalityType}
          onShare={handleShare}
          onRestart={handleRestart}
        />
        
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">{t('results.other.types')}</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {otherTypes.map((type) => (
              <div key={type.code} className="text-center p-4 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg cursor-pointer transition-all duration-200">
                <div 
                  className="text-white rounded-lg px-3 py-1 text-sm font-bold mb-2 inline-block"
                  style={{ backgroundColor: type.color }}
                >
                  {type.code}
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-300">{type.title.split(' ')[0]}</p>
              </div>
            ))}
          </div>
        </div>
      </main>

      <footer className="bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 mt-16">
        <div className="max-w-4xl mx-auto px-4 py-8">
          <div className="text-center text-gray-600 dark:text-gray-300">
            <p className="mb-4">{t('footer.copyright')}</p>
            <p className="text-sm">{t('footer.purpose')}</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
