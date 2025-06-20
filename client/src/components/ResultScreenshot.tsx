import { useRef } from 'react';
import html2canvas from 'html2canvas';
import { Button } from "@/components/ui/button";
import { Camera, Share2 } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import type { PersonalityType } from "@shared/schema";

interface ResultScreenshotProps {
  personalityType: PersonalityType;
  onShare: () => void;
  onRestart: () => void;
}

export default function ResultScreenshot({ personalityType, onShare, onRestart }: ResultScreenshotProps) {
  const resultRef = useRef<HTMLDivElement>(null);
  const { t } = useLanguage();

  const handleSaveAsImage = async () => {
    if (!resultRef.current) return;

    try {
      const canvas = await html2canvas(resultRef.current, {
        backgroundColor: '#ffffff',
        scale: 2,
        useCORS: true,
        allowTaint: true,
        height: resultRef.current.scrollHeight,
        width: resultRef.current.scrollWidth
      });

      const link = document.createElement('a');
      link.download = `teto-egen-${personalityType.code}-result.png`;
      link.href = canvas.toDataURL();
      link.click();
    } catch (error) {
      console.error('Failed to save image:', error);
      alert('이미지 저장에 실패했습니다. 다시 시도해주세요.');
    }
  };

  return (
    <div ref={resultRef} className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 mb-8">
      <div className="text-center mb-8">
        <img 
          src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400" 
          alt="Personality type illustration" 
          className="w-full h-48 object-cover rounded-xl mb-6"
        />
        
        <div 
          className="text-white rounded-full px-6 py-2 inline-block text-lg font-bold mb-4"
          style={{ backgroundColor: personalityType.color }}
        >
          {personalityType.code}
        </div>
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
          {personalityType.title}
        </h3>
        <p className="text-gray-600 dark:text-gray-300 text-lg mb-6">
          {personalityType.subtitle}
        </p>
      </div>
      
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-4">{t('results.traits')}</h4>
          <div className="space-y-3">
            {personalityType.traits.map((trait, index) => (
              <div key={index} className="flex items-center">
                <div className="w-2 h-2 bg-secondary rounded-full mr-3" />
                <span className="text-gray-700 dark:text-gray-300">{trait}</span>
              </div>
            ))}
          </div>
        </div>
        
        <div>
          <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-4">{t('results.strengths')}</h4>
          <div className="space-y-3">
            {personalityType.strengths.map((strength, index) => (
              <div key={index} className="flex items-center">
                <div className="w-2 h-2 bg-accent rounded-full mr-3" />
                <span className="text-gray-700 dark:text-gray-300">{strength}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <div className="mt-8 p-6 bg-gray-50 dark:bg-gray-700 rounded-xl">
        <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-4">{t('results.description')}</h4>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
          {personalityType.description}
        </p>
      </div>
      
      <div className="text-center mt-8 space-y-4">
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            onClick={handleSaveAsImage}
            className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-8 rounded-full flex items-center gap-2"
          >
            <Camera className="w-4 h-4" />
            이미지로 저장
          </Button>
          <Button 
            onClick={onShare}
            className="bg-secondary hover:bg-green-600 text-white font-semibold py-3 px-8 rounded-full flex items-center gap-2"
          >
            <Share2 className="w-4 h-4" />
            {t('results.share')}
          </Button>
        </div>
        <Button 
          onClick={onRestart}
          variant="secondary"
          className="bg-gray-500 hover:bg-gray-600 text-white font-semibold py-3 px-8 rounded-full mt-4"
        >
          {t('results.restart')}
        </Button>
      </div>
    </div>
  );
}