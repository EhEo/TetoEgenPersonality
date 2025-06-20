import { Button } from "@/components/ui/button";
import { CheckCircle, Zap, Sun } from "lucide-react";
import { useLocation } from "wouter";
import { useLanguage } from "@/contexts/LanguageContext";
import Header from "@/components/Header";

export default function Home() {
  const [, setLocation] = useLocation();
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-900 dark:to-gray-800">
      <Header />

      <main className="max-w-4xl mx-auto px-4 py-8">
        <section className="fade-in">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 mb-8">
            <div className="text-center mb-8">
              <img 
                src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400" 
                alt="Personality diversity illustration" 
                className="w-full h-64 object-cover rounded-xl mb-6"
              />
              
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">{t('home.welcome')}</h2>
              <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed max-w-2xl mx-auto mb-6">
                {t('home.description')}
              </p>
              
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="text-center p-4">
                  <div className="w-12 h-12 bg-primary bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <CheckCircle className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">{t('home.accurate')}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">{t('home.accurate.desc')}</p>
                </div>
                <div className="text-center p-4">
                  <div className="w-12 h-12 bg-secondary bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Zap className="w-6 h-6 text-secondary" />
                  </div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">{t('home.quick')}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">{t('home.quick.desc')}</p>
                </div>
                <div className="text-center p-4">
                  <div className="w-12 h-12 bg-accent bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Sun className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">{t('home.personalized')}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">{t('home.personalized.desc')}</p>
                </div>
              </div>
              
              <Button 
                onClick={() => setLocation("/test")}
                className="bg-primary hover:bg-blue-600 text-white font-semibold py-4 px-8 rounded-full text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
              >
                {t('home.start')}
              </Button>
            </div>
          </div>
        </section>
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
