import { useState, useEffect } from "react";
import { useLocation } from "wouter";
import ProgressBar from "@/components/progress-bar";
import QuestionCard from "@/components/question-card";
import { getShuffledQuestions } from "@/lib/questions-multilang";
import { calculatePersonalityType } from "@/lib/personality-types";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useLanguage } from "@/contexts/LanguageContext";
import Header from "@/components/Header";
import type { InsertTestSession } from "@shared/schema";

export default function Test() {
  const { language } = useLanguage();
  const [questions, setQuestions] = useState(() => getShuffledQuestions(language));
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [, setLocation] = useLocation();
  const { t } = useLanguage();

  // Update questions when language changes
  useEffect(() => {
    setQuestions(getShuffledQuestions(language));
  }, [language]);

  const saveResultMutation = useMutation({
    mutationFn: async (data: InsertTestSession) => {
      const response = await apiRequest("POST", "/api/test-sessions", data);
      return response.json();
    },
    onSuccess: (session) => {
      console.log('Test completed, session created:', session);
      // Use pushState to ensure URL is properly set
      const resultUrl = `/results?session=${session.id}`;
      window.history.pushState(null, '', resultUrl);
      setLocation(resultUrl);
    }
  });

  const handleAnswerSelect = (value: string) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = value;
    setAnswers(newAnswers);
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      // Test completed, calculate result
      const personalityType = calculatePersonalityType(answers);
      saveResultMutation.mutate({
        answers,
        personalityType,
        completedAt: new Date().toISOString()
      });
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const currentQuestionData = questions[currentQuestion];
  const selectedAnswer = answers[currentQuestion];
  const canGoNext = !!selectedAnswer;
  const canGoPrevious = currentQuestion > 0;
  const isLastQuestion = currentQuestion === questions.length - 1;

  if (saveResultMutation.isPending) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-900 dark:to-gray-800 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">{t('test.calculating')}</h2>
          <p className="text-gray-600 dark:text-gray-300">{t('test.wait')}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-900 dark:to-gray-800">
      <Header />

      <main className="max-w-4xl mx-auto px-4 py-8">
        <ProgressBar current={currentQuestion + 1} total={questions.length} />
        
        <QuestionCard
          question={currentQuestionData}
          selectedAnswer={selectedAnswer}
          onAnswerSelect={handleAnswerSelect}
          onNext={handleNext}
          onPrevious={handlePrevious}
          canGoNext={canGoNext}
          canGoPrevious={canGoPrevious}
          isLastQuestion={isLastQuestion}
        />
      </main>
    </div>
  );
}
