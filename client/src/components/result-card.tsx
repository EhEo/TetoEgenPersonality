import type { PersonalityType } from "@shared/schema";
import { Button } from "@/components/ui/button";

interface ResultCardProps {
  personalityType: PersonalityType;
  onShare: () => void;
  onRestart: () => void;
}

export default function ResultCard({ personalityType, onShare, onRestart }: ResultCardProps) {
  return (
    <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
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
        <h3 className="text-2xl font-bold text-gray-900 mb-2">
          {personalityType.title}
        </h3>
        <p className="text-gray-600 text-lg mb-6">
          {personalityType.subtitle}
        </p>
      </div>
      
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <h4 className="text-xl font-bold text-gray-900 mb-4">성격 특성</h4>
          <div className="space-y-3">
            {personalityType.traits.map((trait, index) => (
              <div key={index} className="flex items-center">
                <div className="w-2 h-2 bg-secondary rounded-full mr-3" />
                <span className="text-gray-700">{trait}</span>
              </div>
            ))}
          </div>
        </div>
        
        <div>
          <h4 className="text-xl font-bold text-gray-900 mb-4">강점</h4>
          <div className="space-y-3">
            {personalityType.strengths.map((strength, index) => (
              <div key={index} className="flex items-center">
                <div className="w-2 h-2 bg-accent rounded-full mr-3" />
                <span className="text-gray-700">{strength}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <div className="mt-8 p-6 bg-gray-50 rounded-xl">
        <h4 className="text-xl font-bold text-gray-900 mb-4">상세 설명</h4>
        <p className="text-gray-700 leading-relaxed">
          {personalityType.description}
        </p>
      </div>
      
      <div className="text-center mt-8 space-y-4">
        <Button 
          onClick={onShare}
          className="bg-secondary hover:bg-green-600 text-white font-semibold py-3 px-8 rounded-full mr-4"
        >
          결과 공유하기
        </Button>
        <Button 
          onClick={onRestart}
          variant="secondary"
          className="bg-gray-500 hover:bg-gray-600 text-white font-semibold py-3 px-8 rounded-full"
        >
          다시 테스트하기
        </Button>
      </div>
    </div>
  );
}
