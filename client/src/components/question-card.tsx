import { useState } from "react";
import type { Question } from "@shared/schema";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

interface QuestionCardProps {
  question: Question;
  selectedAnswer?: string;
  onAnswerSelect: (value: string) => void;
  onNext: () => void;
  onPrevious: () => void;
  canGoNext: boolean;
  canGoPrevious: boolean;
  isLastQuestion: boolean;
}

export default function QuestionCard({
  question,
  selectedAnswer,
  onAnswerSelect,
  onNext,
  onPrevious,
  canGoNext,
  canGoPrevious,
  isLastQuestion
}: QuestionCardProps) {
  const { t } = useLanguage();

  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          {question.text}
        </h2>
        <p className="text-gray-600 dark:text-gray-300">{t('test.instruction')}</p>
      </div>
      
      <div className="space-y-4 mb-8">
        {question.options.map((option, index) => {
          const isSelected = selectedAnswer === option.value;
          return (
            <label 
              key={index}
              className={`flex items-center p-4 border-2 rounded-xl cursor-pointer transition-all duration-200 group ${
                isSelected 
                  ? 'border-primary bg-blue-50 dark:bg-blue-900/20' 
                  : 'border-gray-200 dark:border-gray-600 hover:border-primary hover:bg-blue-50 dark:hover:bg-blue-900/20'
              }`}
            >
              <input
                type="radio"
                name="answer"
                value={option.value}
                checked={isSelected}
                onChange={(e) => onAnswerSelect(e.target.value)}
                className="sr-only"
              />
              <div className={`w-5 h-5 border-2 rounded-full mr-4 flex items-center justify-center ${
                isSelected ? 'border-primary' : 'border-gray-300 dark:border-gray-500 group-hover:border-primary'
              }`}>
                <div className={`w-3 h-3 bg-primary rounded-full transition-opacity duration-200 ${
                  isSelected ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                }`} />
              </div>
              <span className="text-gray-700 dark:text-gray-300 font-medium flex-1">{option.text}</span>
            </label>
          );
        })}
      </div>
      
      <div className="flex justify-between">
        <Button
          onClick={onPrevious}
          disabled={!canGoPrevious}
          variant="secondary"
          className="py-3 px-6 rounded-full font-semibold"
        >
          {t('test.previous')}
        </Button>
        <Button
          onClick={onNext}
          disabled={!canGoNext}
          className="py-3 px-6 rounded-full font-semibold"
        >
          {isLastQuestion ? t('test.results') : t('test.next')}
        </Button>
      </div>
    </div>
  );
}
