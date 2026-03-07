import { useState } from "react";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Gamepad2, Brain, Heart, Star, Trophy, ArrowRight } from "lucide-react";

export function QuizzesPage() {
  const [selectedQuiz, setSelectedQuiz] = useState<number | null>(null);

  const quizzes = [
    {
      id: 1,
      title: "🌿 Which Jungle Animal Are You?",
      description: "Discover your wild side!",
      questions: 10,
      plays: "842K",
      category: "Personality",
      icon: Brain,
      color: "green",
    },
    {
      id: 2,
      title: "🏆 Ultimate Survival Skills Test",
      description: "Can you survive in the wild?",
      questions: 15,
      plays: "623K",
      category: "Challenge",
      icon: Trophy,
      color: "orange",
    },
    {
      id: 3,
      title: "❤️ How Kind Are You Really?",
      description: "Test your empathy level",
      questions: 8,
      plays: "1.2M",
      category: "Personality",
      icon: Heart,
      color: "pink",
    },
    {
      id: 4,
      title: "⭐ What's Your True Calling?",
      description: "Find your life purpose",
      questions: 12,
      plays: "956K",
      category: "Life",
      icon: Star,
      color: "purple",
    },
    {
      id: 5,
      title: "🐶 Dog or Cat Person?",
      description: "The ultimate pet quiz",
      questions: 10,
      plays: "2.1M",
      category: "Fun",
      icon: Brain,
      color: "blue",
    },
    {
      id: 6,
      title: "🔥 Can You Handle the Heat?",
      description: "Test your courage level",
      questions: 15,
      plays: "734K",
      category: "Challenge",
      icon: Trophy,
      color: "red",
    },
  ];

  const colorMap: Record<string, { bg: string; text: string; border: string }> = {
    green: { bg: "bg-green-500", text: "text-green-600", border: "border-green-200" },
    orange: { bg: "bg-orange-500", text: "text-orange-600", border: "border-orange-200" },
    pink: { bg: "bg-pink-500", text: "text-pink-600", border: "border-pink-200" },
    purple: { bg: "bg-purple-500", text: "text-purple-600", border: "border-purple-200" },
    blue: { bg: "bg-blue-500", text: "text-blue-600", border: "border-blue-200" },
    red: { bg: "bg-red-500", text: "text-red-600", border: "border-red-200" },
  };

  return (
    <div className="pb-20 min-h-screen">
      {/* Header */}
      <header className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white px-4 py-6 shadow-lg">
        <h1 className="text-2xl font-bold flex items-center gap-2">
          <Gamepad2 className="w-7 h-7" />
          Fun Quizzes
        </h1>
        <p className="text-purple-50 text-sm mt-1">Discover more about yourself</p>
      </header>

      {/* PropellerAds Banner */}
      <div className="bg-gray-100 border border-purple-200 mx-4 mt-4 rounded-lg overflow-hidden">
        <div className="h-20 flex items-center justify-center text-gray-500 text-sm">
          <div className="text-center">
            <p className="font-semibold">PropellerAds Quiz Page Banner</p>
            <p className="text-xs text-gray-400">728x90 or 320x50</p>
          </div>
        </div>
      </div>

      {/* Quizzes Grid */}
      <div className="px-4 mt-6 space-y-4">
        {quizzes.map((quiz, index) => {
          const colors = colorMap[quiz.color];
          const Icon = quiz.icon;

          return (
            <div key={quiz.id}>
              <Card
                className={`overflow-hidden ${colors.border} shadow-md hover:shadow-xl transition-all cursor-pointer`}
                onClick={() => setSelectedQuiz(quiz.id)}
              >
                <div className={`${colors.bg} text-white p-6 relative overflow-hidden`}>
                  <div className="absolute top-0 right-0 opacity-10">
                    <Icon className="w-32 h-32" />
                  </div>
                  <div className="relative z-10">
                    <Badge className="bg-white/20 hover:bg-white/30 mb-3">
                      {quiz.category}
                    </Badge>
                    <h3 className="text-xl font-bold mb-2">{quiz.title}</h3>
                    <p className="text-white/90 text-sm mb-4">{quiz.description}</p>
                    <div className="flex items-center gap-4 text-sm">
                      <span>{quiz.questions} questions</span>
                      <span>•</span>
                      <span>{quiz.plays} plays</span>
                    </div>
                  </div>
                </div>
                <div className="p-4 bg-white">
                  <Button className={`w-full ${colors.bg} hover:opacity-90`}>
                    Start Quiz
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </Card>

              {/* Monetag Banner - After every 2 quizzes */}
              {(index + 1) % 2 === 0 && (
                <div className="bg-gray-50 border border-indigo-200 rounded-lg overflow-hidden mt-4">
                  <div className="h-16 flex items-center justify-center text-gray-500 text-sm">
                    <div className="text-center">
                      <p className="font-semibold">Monetag Quiz Banner {Math.floor(index / 2) + 1}</p>
                      <p className="text-xs text-gray-400">320x50 In-Feed Ad</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Bottom CTA */}
      <div className="mx-4 mt-6 mb-4">
        <Card className="bg-gradient-to-r from-amber-400 to-orange-400 text-white p-6 text-center shadow-lg border-0">
          <Star className="w-12 h-12 mx-auto mb-3" />
          <h3 className="text-xl font-bold mb-2">New Quizzes Every Week!</h3>
          <p className="text-amber-50">Come back for more fun personality tests & challenges</p>
        </Card>
      </div>
    </div>
  );
}
