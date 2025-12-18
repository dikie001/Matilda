import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Sparkles, Star, Trophy, Volume2 } from 'lucide-react';
import { useState } from 'react';

type Level = 'Beginner' | 'Intermediate' | 'Explorer';

interface Lesson {
  word: string;
  sentence: string;
  image: string;
}

const LESSON_DATA: Record<Level, Lesson[]> = {
  Beginner: [
    { word: "Cat", sentence: "The cat is fast.", image: "🐱" },
    { word: "Sun", sentence: "The sun is hot.", image: "☀️" },
    { word: "Apple", sentence: "I eat an apple.", image: "🍎" },
  ],
  Intermediate: [
    { word: "Garden", sentence: "Flowers grow in the garden.", image: "🌻" },
    { word: "Rocket", sentence: "The rocket flies to the moon.", image: "🚀" },
    { word: "Friend", sentence: "I play with my best friend.", image: "🤝" },
  ],
  Explorer: [
    { word: "Adventure", sentence: "We are going on a big forest adventure.", image: "🗺️" },
    { word: "Mountain", sentence: "The snowy mountain is very tall.", image: "🏔️" },
    { word: "Universe", sentence: "The universe is full of bright stars.", image: "🌌" },
  ],
};

const Reading = () => {
  const [level, setLevel] = useState<Level>('Beginner');
  const [index, setIndex] = useState(0);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [score, setScore] = useState(0);

  const currentLesson = LESSON_DATA[level][index];
  const progress = ((index + 1) / LESSON_DATA[level].length) * 100;

  const speak = (text: string) => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.rate = 0.9;
      utterance.pitch = 1.2;
      utterance.onstart = () => setIsSpeaking(true);
      utterance.onend = () => setIsSpeaking(false);
      window.speechSynthesis.speak(utterance);
    }
  };

  const handleNext = () => {
    if (index < LESSON_DATA[level].length - 1) {
      setIndex(index + 1);
      setScore(prev => prev + 10);
    }
  };

  const handlePrev = () => {
    if (index > 0) setIndex(index - 1);
  };

  return (
    <div className="min-h-screen bg-[#FFF7ED] p-6 font-sans selection:bg-orange-200">
      <div className="max-w-4xl mx-auto space-y-8">
        
        {/* Header Section */}
        <header className="flex flex-col md:flex-row justify-between items-center gap-4 bg-orange-100 p-6 rounded-[2rem] border-4 border-orange-200 shadow-sm">
          <div className="flex items-center gap-3">
            <div className="bg-orange-500 p-3 rounded-2xl shadow-lg animate-bounce">
              <Sparkles className="text-white w-8 h-8" />
            </div>
            <div>
              <h1 className="text-3xl font-black text-orange-900 tracking-tight">Reading Buddy!</h1>
              <p className="text-orange-700 font-medium">Let's learn together, dikie!</p>
            </div>
          </div>
          
          <div className="flex items-center gap-4 bg-white/50 p-2 rounded-full px-4">
            <Trophy className="text-yellow-500 w-6 h-6" />
            <span className="text-2xl font-bold text-orange-600">{score}</span>
          </div>
        </header>

        {/* Level Selector */}
        <div className="flex justify-center gap-4">
          {(Object.keys(LESSON_DATA) as Level[]).map((lvl) => (
            <Button
              key={lvl}
              variant={level === lvl ? "default" : "outline"}
              onClick={() => { setLevel(lvl); setIndex(0); }}
              className={`rounded-full px-8 py-6 text-lg font-bold transition-all transform hover:scale-105 ${
                level === lvl 
                ? "bg-orange-500 hover:bg-orange-600 shadow-lg" 
                : "border-2 border-orange-200 text-orange-600 hover:bg-orange-50"
              }`}
            >
              {lvl}
            </Button>
          ))}
        </div>

        {/* Main Learning Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`${level}-${index}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <Card className="border-4 border-orange-200 rounded-[3rem] shadow-xl overflow-hidden bg-white">
              <CardContent className="p-0">
                <div className="bg-orange-500 h-3">
                  <motion.div 
                    className="bg-yellow-400 h-full" 
                    initial={{ width: 0 }}
                    animate={{ width: `${progress}%` }}
                  />
                </div>
                
                <div className="p-8 md:p-12 text-center space-y-10">
                  {/* Emoji/Image Area */}
                  <div className="text-8xl md:text-9xl mb-4 animate-pulse">
                    {currentLesson.image}
                  </div>

                  {/* Word Section */}
                  <div className="space-y-4">
                    <Badge variant="secondary" className="bg-orange-100 text-orange-700 px-4 py-1 text-sm rounded-full">
                      Step 1: The Word
                    </Badge>
                    <div className="flex items-center justify-center gap-4">
                      <h2 className="text-6xl md:text-8xl font-black text-gray-800 tracking-tighter">
                        {currentLesson.word}
                      </h2>
                      <Button 
                        size="icon" 
                        variant="ghost" 
                        onClick={() => speak(currentLesson.word)}
                        className={`rounded-full h-16 w-16 bg-orange-100 hover:bg-orange-200 ${isSpeaking ? 'animate-ping' : ''}`}
                      >
                        <Volume2 className="h-8 w-8 text-orange-600" />
                      </Button>
                    </div>
                  </div>

                  {/* Sentence Section */}
                  <div className="bg-orange-50 p-8 rounded-[2.5rem] border-2 border-dashed border-orange-300">
                    <Badge variant="secondary" className="bg-white text-orange-700 px-4 py-1 text-sm rounded-full mb-4">
                      Step 2: The Sentence
                    </Badge>
                    <div className="flex flex-col items-center gap-6">
                      <p className="text-2xl md:text-4xl font-medium text-gray-700 italic leading-relaxed">
                        "{currentLesson.sentence}"
                      </p>
                      <Button 
                        onClick={() => speak(currentLesson.sentence)}
                        className="rounded-full px-10 py-8 text-xl bg-orange-600 hover:bg-orange-700 shadow-lg group"
                      >
                        <Volume2 className="mr-3 h-6 w-6 group-hover:scale-125 transition-transform" />
                        Listen to Sentence
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </AnimatePresence>

        {/* Navigation Controls */}
        <div className="flex justify-between items-center px-4">
          <Button
            disabled={index === 0}
            onClick={handlePrev}
            variant="ghost"
            className="rounded-full h-20 w-20 text-orange-400 hover:text-orange-600 disabled:opacity-30"
          >
            <ChevronLeft className="h-12 w-12" />
          </Button>

          <div className="flex gap-2">
            {LESSON_DATA[level].map((_, i) => (
              <div 
                key={i} 
                className={`h-4 w-4 rounded-full transition-colors ${i === index ? 'bg-orange-500 scale-125' : 'bg-orange-200'}`}
              />
            ))}
          </div>

          <Button
            disabled={index === LESSON_DATA[level].length - 1}
            onClick={handleNext}
            className="rounded-full h-24 w-24 bg-orange-500 hover:bg-orange-600 shadow-[0_10px_0_0_rgba(234,88,12,1)] active:translate-y-1 active:shadow-none transition-all group"
          >
            <ChevronRight className="h-14 w-14 text-white group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>

        {/* Footer Fun */}
        <footer className="text-center py-8">
          <div className="inline-flex items-center gap-2 bg-white px-6 py-3 rounded-full shadow-sm border border-orange-100">
            <Star className="text-yellow-400 fill-yellow-400 w-5 h-5" />
            <span className="text-orange-900 font-bold">You are doing amazing!</span>
            <Star className="text-yellow-400 fill-yellow-400 w-5 h-5" />
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Reading;