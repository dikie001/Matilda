import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { AnimatePresence, motion } from 'framer-motion';
import { BookOpen, ChevronLeft, ChevronRight, Music, Sparkles, Star, Volume2 } from 'lucide-react';
import { useState } from 'react';

// --- Data: 50 Carefully Curated Lessons ---
type LevelKey = 'Beginner' | 'Junior' | 'Super';
interface Lesson { word: string; sentence: string; emoji: string; }

const LESSONS: Record<LevelKey, Lesson[]> = {
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
  Junior: [
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
  Super: [
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
  const [speaking, setSpeaking] = useState<string | null>(null);

  const currentLevelLessons = LESSONS[level];
  const current = currentLevelLessons[index];

  const speak = (text: string) => {
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.rate = 0.85;
    utterance.pitch = 1.1;
    utterance.onstart = () => setSpeaking(text);
    utterance.onend = () => setSpeaking(null);
    window.speechSynthesis.speak(utterance);
  };

  const next = () => index < currentLevelLessons.length - 1 && setIndex(index + 1);
  const prev = () => index > 0 && setIndex(index - 1);

  return (
    <div className="h-screen w-full bg-[#FFF9F2] overflow-hidden flex font-sans text-orange-950">
      
      {/* Sidebar: Navigation & Levels */}
      <aside className="w-72 bg-white border-r-4 border-orange-100 flex flex-col p-6 space-y-8 shadow-[10px_0_30px_rgba(255,165,0,0.05)]">
        <div className="flex items-center gap-3 py-2">
          <div className="bg-orange-500 p-2 rounded-2xl animate-pulse">
            <BookOpen className="text-white w-6 h-6" />
          </div>
          <h1 className="text-xl font-black tracking-tight">Reading Buddy</h1>
        </div>

        <nav className="flex-1 space-y-4">
          <p className="text-xs font-black uppercase tracking-widest text-orange-300 px-2">Choose your level</p>
          {(Object.keys(LESSONS) as LevelKey[]).map((l) => (
            <Button
              key={l}
              onClick={() => { setLevel(l); setIndex(0); }}
              className={`w-full justify-start rounded-2xl py-8 text-lg font-bold border-2 transition-all ${
                level === l 
                ? "bg-orange-500 text-white border-orange-600 shadow-lg shadow-orange-200" 
                : "bg-white text-orange-600 border-orange-100 hover:bg-orange-50"
              }`}
            >
              {l === 'Beginner' && "🌟 "}
              {l === 'Junior' && "🚀 "}
              {l === 'Super' && "👑 "}
              {l}
            </Button>
          ))}
        </nav>

        <div className="bg-orange-50 p-4 rounded-3xl border-2 border-orange-100 flex items-center gap-3">
          <div className="bg-yellow-400 p-2 rounded-full">
            <Star className="w-5 h-5 text-white fill-white" />
          </div>
          <p className="text-sm font-bold text-orange-800">Hi dikie, keep going!</p>
        </div>
      </aside>

      {/* Main Stage */}
      <main className="flex-1 flex flex-col p-8 relative">
        
        {/* Progress Pill */}
        <div className="flex justify-center mb-6">
          <div className="bg-white px-6 py-2 rounded-full shadow-sm border-2 border-orange-50 flex items-center gap-4">
            <div className="h-2 w-48 bg-orange-100 rounded-full overflow-hidden">
              <motion.div 
                className="h-full bg-orange-500" 
                animate={{ width: `${((index + 1) / currentLevelLessons.length) * 100}%` }}
              />
            </div>
            <span className="text-sm font-black text-orange-400">{index + 1} / {currentLevelLessons.length}</span>
          </div>
        </div>

        {/* Word Display Area */}
        <div className="flex-1 flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={`${level}-${index}`}
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 1.1, opacity: 0, y: -20 }}
              className="w-full max-w-3xl"
            >
              <Card className="rounded-[4rem] border-0 shadow-[0_40px_80px_-20px_rgba(255,165,0,0.15)] bg-white overflow-hidden">
                <CardContent className="p-12 md:p-16 flex flex-col items-center text-center space-y-12">
                  
                  {/* Big Emoji */}
                  <motion.div 
                    animate={{ y: [0, -10, 0] }}
                    transition={{ repeat: Infinity, duration: 3 }}
                    className="text-9xl md:text-[12rem] cursor-default select-none filter drop-shadow-2xl"
                  >
                    {current.emoji}
                  </motion.div>

                  {/* Word with Sound */}
                  <div className="space-y-4">
                    <div 
                      onClick={() => speak(current.word)}
                      className="group cursor-pointer flex items-center gap-6 justify-center"
                    >
                      <h2 className="text-7xl md:text-9xl font-black tracking-tight text-gray-800 group-hover:text-orange-500 transition-colors">
                        {current.word}
                      </h2>
                      <div className={`p-4 rounded-full bg-orange-100 group-hover:bg-orange-500 transition-all ${speaking === current.word ? 'scale-125 bg-orange-500 shadow-xl' : ''}`}>
                        <Volume2 className={`w-8 h-8 ${speaking === current.word ? 'text-white' : 'text-orange-500'}`} />
                      </div>
                    </div>
                  </div>

                  {/* Sentence Box */}
                  <div 
                    onClick={() => speak(current.sentence)}
                    className={`w-full p-10 rounded-[3rem] border-4 border-dashed transition-all cursor-pointer group
                      ${speaking === current.sentence 
                        ? 'bg-orange-500 border-orange-600 shadow-xl' 
                        : 'bg-orange-50 border-orange-200 hover:border-orange-400'}`}
                  >
                    <p className={`text-2xl md:text-4xl font-bold leading-relaxed transition-colors
                      ${speaking === current.sentence ? 'text-white' : 'text-orange-800'}`}>
                      "{current.sentence}"
                    </p>
                    <div className="mt-4 flex justify-center items-center gap-2">
                      <Music className={`w-5 h-5 ${speaking === current.sentence ? 'text-white animate-spin' : 'text-orange-300'}`} />
                      <span className={`text-xs font-black uppercase tracking-tighter ${speaking === current.sentence ? 'text-orange-100' : 'text-orange-300'}`}>
                        Click to hear the sentence
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Footer Navigation */}
        <div className="flex justify-between items-center h-32 px-12">
          <Button
            onClick={prev}
            disabled={index === 0}
            className="h-20 w-20 rounded-full bg-white text-orange-400 shadow-lg hover:shadow-xl border-2 border-orange-100 disabled:opacity-30 disabled:shadow-none"
          >
            <ChevronLeft className="w-10 h-10" />
          </Button>

          <div className="flex gap-4 items-center">
            <div className="p-4 bg-orange-100 rounded-full animate-bounce">
              <Sparkles className="w-8 h-8 text-orange-500" />
            </div>
            <p className="text-xl font-black text-orange-900">Great Job!</p>
          </div>

          <Button
            onClick={next}
            disabled={index === currentLevelLessons.length - 1}
            className="h-24 w-24 rounded-full bg-orange-500 text-white shadow-[0_10px_0_0_rgba(194,65,12,1)] active:shadow-none active:translate-y-2 transition-all hover:bg-orange-600"
          >
            <ChevronRight className="w-12 h-12" />
          </Button>
        </div>

      </main>
    </div>
  );
};

export default Reading;