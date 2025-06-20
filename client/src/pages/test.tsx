import { useState } from "react";
import { useLocation } from "wouter";
import ProgressBar from "@/components/progress-bar";
import QuestionCard from "@/components/question-card";
import { questions } from "@/lib/questions";
import { calculatePersonalityType } from "@/lib/personality-types";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import type { InsertTestSession } from "@shared/schema";

export default function Test() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [, setLocation] = useLocation();

  const saveResultMutation = useMutation({
    mutationFn: async (data: InsertTestSession) => {
      const response = await apiRequest("POST", "/api/test-sessions", data);
      return response.json();
    },
    onSuccess: (session) => {
      setLocation(`/results?session=${session.id}`);
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
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-gray-900 mb-4">결과를 계산하고 있습니다...</h2>
          <p className="text-gray-600">잠시만 기다려주세요</p>
        </div>
      </div>
    );
  }

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
