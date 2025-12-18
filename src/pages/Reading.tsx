import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { AnimatePresence, motion } from 'framer-motion';
import {
    BookOpen,
    ChevronLeft,
    ChevronRight,
    Rocket,
    Sparkles,
    Star,
    Volume2
} from 'lucide-react';
import { useState } from 'react';

/**
 * dikie, here is the full-featured, comprehensive learning page.
 * Strictly using React, TypeScript, Tailwind, and Shadcn.
 * 50 Curated entries across three distinct levels.
 * UI designed for Grade 1-4: Clean, orange-themed, and intuitive.
 */

type LevelKey = 'Beginner' | 'Intermediate' | 'Advanced';

interface Lesson {
  word: string;
  sentence: string;
  emoji: string;
}

const LESSON_DATA: Record<LevelKey, Lesson[]> = {
  Beginner: [
    { word: "Cat", sentence: "The cat is on the mat.", emoji: "🐱" },
    { word: "Sun", sentence: "The sun is big and hot.", emoji: "☀️" },
    { word: "Dog", sentence: "My dog likes to run.", emoji: "🐶" },
    { word: "Apple", sentence: "I eat a red apple.", emoji: "🍎" },
    { word: "Ball", sentence: "Throw the blue ball.", emoji: "⚽" },
    { word: "Fish", sentence: "The fish swims fast.", emoji: "🐟" },
    { word: "Hat", sentence: "I wear a yellow hat.", emoji: "👒" },
    { word: "Cup", sentence: "Drink milk from the cup.", emoji: "🥛" },
    { word: "Bird", sentence: "The bird can fly high.", emoji: "🐦" },
    { word: "Tree", sentence: "The green tree is tall.", emoji: "🌳" },
    { word: "Frog", sentence: "A green frog hops.", emoji: "🐸" },
    { word: "Book", sentence: "I like to read books.", emoji: "📖" },
    { word: "Car", sentence: "The red car goes fast.", emoji: "🚗" },
    { word: "Cake", sentence: "I want a piece of cake.", emoji: "🍰" },
    { word: "Moon", sentence: "The moon shines bright.", emoji: "🌙" },
    { word: "Milk", sentence: "Milk is good for you.", emoji: "🥛" },
    { word: "Bee", sentence: "The bee makes honey.", emoji: "🐝" },
  ],
  Intermediate: [
    { word: "Garden", sentence: "We plant seeds in the garden.", emoji: "🌻" },
    { word: "School", sentence: "I learn many things at school.", emoji: "🏫" },
    { word: "Rocket", sentence: "The rocket flies to the stars.", emoji: "🚀" },
    { word: "Friend", sentence: "I share toys with my friend.", emoji: "🤝" },
    { word: "Orange", sentence: "An orange is juicy and sweet.", emoji: "🍊" },
    { word: "Turtle", sentence: "The turtle walks very slowly.", emoji: "🐢" },
    { word: "Winter", sentence: "We play in the cold snow.", emoji: "❄️" },
    { word: "Dragon", sentence: "The dragon has golden wings.", emoji: "🐉" },
    { word: "Guitar", sentence: "He plays music on the guitar.", emoji: "🎸" },
    { word: "Puzzle", sentence: "I solved the big puzzle today.", emoji: "🧩" },
    { word: "Spider", sentence: "The spider spins a silver web.", emoji: "🕷️" },
    { word: "Rabbit", sentence: "The rabbit eats a long carrot.", emoji: "🥕" },
    { word: "Doctor", sentence: "The doctor helps me feel better.", emoji: "👩‍⚕️" },
    { word: "Banana", sentence: "The monkey eats a yellow banana.", emoji: "🍌" },
    { word: "Clouds", sentence: "White clouds float in the sky.", emoji: "☁️" },
    { word: "Cheese", sentence: "The little mouse loves cheese.", emoji: "🧀" },
    { word: "Bridge", sentence: "The cars drive over the bridge.", emoji: "🌉" },
  ],
  Advanced: [
    { word: "Adventure", sentence: "Let's go on a forest adventure.", emoji: "🗺️" },
    { word: "Mountain", sentence: "The snowy mountain is very tall.", emoji: "🏔️" },
    { word: "Universe", sentence: "The universe is full of mysteries.", emoji: "🌌" },
    { word: "Dinosaur", sentence: "The huge dinosaur lived long ago.", emoji: "🦖" },
    { word: "Explorer", sentence: "The explorer found a hidden cave.", emoji: "🔦" },
    { word: "Treasure", sentence: "They found a chest of gold treasure.", emoji: "💎" },
    { word: "Butterfly", sentence: "A butterfly has beautiful wings.", emoji: "🦋" },
    { word: "Rainbow", sentence: "The rainbow appeared after the rain.", emoji: "🌈" },
    { word: "Elephant", sentence: "The elephant has a long trunk.", emoji: "🐘" },
    { word: "Astronaut", sentence: "An astronaut walks on the moon.", emoji: "👨‍🚀" },
    { word: "Whale", sentence: "The blue whale is a giant animal.", emoji: "🐋" },
    { word: "Volcano", sentence: "Hot lava flows from the volcano.", emoji: "🌋" },
    { word: "Library", sentence: "The library is full of quiet books.", emoji: "📚" },
    { word: "Bicycle", sentence: "I ride my bicycle to the park.", emoji: "🚲" },
    { word: "Fireworks", sentence: "The fireworks exploded in the sky.", emoji: "🎆" },
    { word: "Lighthouse", sentence: "The lighthouse guides the ships.", emoji: "🚨" },
  ]
};

const Reading = () => {
  const [level, setLevel] = useState<LevelKey>('Beginner');
  const [index, setIndex] = useState(0);
  const [isSpeaking, setIsSpeaking] = useState<string | null>(null);

  const lessons = LESSON_DATA[level];
  const current = lessons[index];

  const handleSpeech = (text: string) => {
    if (!window.speechSynthesis) return;
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.rate = 0.85;
    utterance.pitch = 1.1;
    utterance.onstart = () => setIsSpeaking(text);
    utterance.onend = () => setIsSpeaking(null);
    window.speechSynthesis.speak(utterance);
  };

  const nextLesson = () => {
    if (index < lessons.length - 1) setIndex(index + 1);
  };

  const prevLesson = () => {
    if (index > 0) setIndex(index - 1);
  };

  return (
    <div className="h-screen w-full bg-[#FFFBF7] flex overflow-hidden font-sans">
      
      {/* ASIDE: NAVIGATION */}
      <aside className="w-80 bg-white border-r-4 border-orange-100 flex flex-col p-6 z-20 shadow-lg">
        <div className="flex items-center gap-3 mb-10 p-4 bg-orange-50 rounded-3xl border-2 border-orange-100">
          <BookOpen className="text-orange-600 w-8 h-8" />
          <h1 className="text-2xl font-black text-orange-950 italic tracking-tighter">ReaderGo!</h1>
        </div>

        <div className="flex-1 space-y-4">
          <p className="text-[11px] font-black uppercase text-orange-300 tracking-widest px-2">Levels</p>
          {(Object.keys(LESSON_DATA) as LevelKey[]).map((l) => (
            <button
              key={l}
              onClick={() => { setLevel(l); setIndex(0); }}
              className={`w-full text-left p-5 rounded-[2rem] border-4 transition-all active:scale-95 ${
                level === l 
                ? "bg-orange-500 text-white border-orange-600 shadow-xl shadow-orange-100 scale-[1.02]" 
                : "bg-white text-orange-600 border-orange-50 hover:border-orange-200"
              }`}
            >
              <div className="text-lg font-black">{l}</div>
              <div className={`text-xs font-bold opacity-80`}>{LESSON_DATA[l].length} Exercises</div>
            </button>
          ))}
        </div>

        <div className="mt-auto p-6 bg-orange-50 rounded-[2.5rem] border-2 border-orange-100 relative overflow-hidden group">
          <Sparkles className="absolute -right-2 -top-2 text-orange-200 w-12 h-12 rotate-12 group-hover:animate-spin" />
          <p className="text-sm font-black text-orange-900 leading-tight relative z-10">
            Keep practicing, dikie!<br/>You're doing great.
          </p>
        </div>
      </aside>

      {/* MAIN CONTENT */}
      <main className="flex-1 flex flex-col p-8 relative overflow-hidden">
        
        {/* Progress Bar Header */}
        <div className="w-full max-w-4xl mx-auto flex items-center gap-6 mb-8">
          <div className="flex-1 h-4 bg-orange-100 rounded-full overflow-hidden border-2 border-orange-50">
            <motion.div 
              className="h-full bg-orange-500"
              initial={{ width: 0 }}
              animate={{ width: `${((index + 1) / lessons.length) * 100}%` }}
              transition={{ type: "spring", stiffness: 50 }}
            />
          </div>
          <span className="font-black text-orange-500 text-lg">
            {index + 1} / {lessons.length}
          </span>
        </div>

        {/* The Interaction Stage */}
        <div className="flex-1 flex items-center justify-center min-h-0">
          <AnimatePresence mode="wait">
            <motion.div
              key={`${level}-${index}`}
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 1.05, y: -10 }}
              className="w-full max-w-5xl h-full flex flex-col"
            >
              <Card className="flex-1 rounded-[4rem] border-0 shadow-2xl bg-white overflow-hidden flex flex-col">
                <CardContent className="flex-1 flex flex-col items-center justify-center p-12 space-y-8">
                  
                  {/* Emoji Section */}
                  <motion.div 
                    initial={{ rotate: -10 }}
                    animate={{ rotate: 10 }}
                    transition={{ repeat: Infinity, duration: 2.5, repeatType: "reverse" }}
                    className="text-[10rem] md:text-[14rem] select-none filter drop-shadow-xl"
                  >
                    {current.emoji}
                  </motion.div>

                  {/* Word Section */}
                  <div className="flex flex-col items-center gap-4">
                    <button 
                      onClick={() => handleSpeech(current.word)}
                      className={`group flex items-center gap-6 px-12 py-6 rounded-[3rem] transition-all active:scale-95 border-b-8
                        ${isSpeaking === current.word 
                          ? 'bg-orange-500 border-orange-700 text-white' 
                          : 'bg-white border-orange-100 hover:border-orange-200 text-gray-800'}`}
                    >
                      <h2 className="text-8xl md:text-9xl font-black tracking-tighter">
                        {current.word}
                      </h2>
                      <div className={`p-4 rounded-full transition-all ${isSpeaking === current.word ? 'bg-white text-orange-500' : 'bg-orange-50 text-orange-500'}`}>
                        <Volume2 className="w-10 h-10" />
                      </div>
                    </button>
                    <p className="text-orange-300 font-black uppercase text-xs tracking-widest">Click word to listen</p>
                  </div>

                  {/* Sentence Section */}
                  <div className="w-full max-w-3xl">
                    <button 
                      onClick={() => handleSpeech(current.sentence)}
                      className={`w-full p-10 rounded-[3.5rem] border-4 border-dashed transition-all group relative
                        ${isSpeaking === current.sentence 
                          ? 'bg-orange-600 border-orange-400 shadow-2xl scale-[1.02]' 
                          : 'bg-orange-50 border-orange-200 hover:bg-white hover:border-orange-400 shadow-inner'}`}
                    >
                      <div className="absolute -top-4 left-10 bg-orange-500 text-white px-6 py-1 rounded-full text-xs font-black uppercase shadow-lg">
                        Sentence Practice
                      </div>
                      
                      <div className="flex flex-col items-center gap-4">
                        <p className={`text-4xl md:text-5xl font-bold leading-tight transition-colors
                          ${isSpeaking === current.sentence ? 'text-white' : 'text-orange-950'}`}>
                          "{current.sentence}"
                        </p>
                        <div className={`flex items-center gap-2 opacity-60 ${isSpeaking === current.sentence ? 'text-white' : 'text-orange-400'}`}>
                          <Volume2 className="w-5 h-5" />
                          <span className="text-xs font-bold uppercase tracking-tighter">Click to play audio</span>
                        </div>
                      </div>
                    </button>
                  </div>

                </CardContent>
              </Card>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation Controls */}
        <footer className="h-32 flex justify-between items-center max-w-4xl mx-auto w-full">
          <Button
            onClick={prevLesson}
            disabled={index === 0}
            className="h-20 w-20 rounded-full bg-white text-orange-400 shadow-lg border-2 border-orange-50 disabled:opacity-20 hover:text-orange-600 hover:scale-110 transition-all"
          >
            <ChevronLeft className="w-12 h-12" />
          </Button>

          <div className="flex items-center gap-8 bg-white px-10 py-5 rounded-full border-2 border-orange-50 shadow-sm">
             <div className="flex items-center gap-2">
                <Star className="w-6 h-6 text-yellow-500 fill-yellow-500" />
                <span className="font-black text-orange-950 text-lg">Great reading!</span>
             </div>
             <div className="w-px h-6 bg-orange-100" />
             <div className="flex items-center gap-2">
                <Rocket className="w-6 h-6 text-orange-500" />
                <span className="font-bold text-orange-400">Keep it up</span>
             </div>
          </div>

          <Button
            onClick={nextLesson}
            disabled={index === lessons.length - 1}
            className="h-24 w-24 rounded-full bg-orange-500 text-white shadow-[0_12px_0_0_#c2410c] hover:bg-orange-600 hover:shadow-[0_8px_0_0_#c2410c] active:translate-y-2 active:shadow-none transition-all flex items-center justify-center group"
          >
            <ChevronRight className="w-16 h-16 group-hover:scale-110 transition-transform" />
          </Button>
        </footer>

      </main>

      {/* Decorative Background Elements */}
      <div className="fixed -bottom-20 -left-20 w-64 h-64 bg-orange-100/30 rounded-full blur-3xl -z-10" />
      <div className="fixed -top-20 -right-20 w-64 h-64 bg-orange-200/20 rounded-full blur-3xl -z-10" />
    </div>
  );
};

export default Reading;