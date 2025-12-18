import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { AnimatePresence, motion } from "framer-motion";
import {
  BookOpen,
  ChevronLeft,
  ChevronRight,
  Volume2,
  Star,
  Trophy,
  Sparkles,
} from "lucide-react";

type LevelKey = "Beginner" | "Junior" | "Super Reader";

interface Lesson {
  word: string;
  sentence: string;
}

const LESSON_DATA: Record<LevelKey, Lesson[]> = {
  Beginner: [
    { word: "Cat", sentence: "The cat is on the mat." },
    { word: "Sun", sentence: "The sun is big and hot." },
    { word: "Dog", sentence: "My dog likes to run." },
    { word: "Apple", sentence: "I eat a red apple." },
    { word: "Ball", sentence: "Throw the blue ball." },
    { word: "Fish", sentence: "The fish swims fast." },
    { word: "Hat", sentence: "I wear a yellow hat." },
    { word: "Cup", sentence: "Drink milk from the cup." },
    { word: "Bird", sentence: "The bird can fly high." },
    { word: "Tree", sentence: "The green tree is tall." },
  ],
  Junior: [
    { word: "Garden", sentence: "We plant seeds in the garden." },
    { word: "School", sentence: "I learn many things at school." },
    { word: "Rocket", sentence: "The rocket flies to the stars." },
    { word: "Friend", sentence: "I share toys with my friend." },
    { word: "Orange", sentence: "An orange is juicy and sweet." },
  ],
  "Super Reader": [
    { word: "Adventure", sentence: "Let's go on a forest adventure." },
    { word: "Mountain", sentence: "The snowy mountain is very tall." },
    { word: "Universe", sentence: "The universe is full of mysteries." },
    { word: "Dinosaur", sentence: "The huge dinosaur lived long ago." },
  ],
};

const Reading = () => {
  const [level, setLevel] = useState<LevelKey>("Beginner");
  const [index, setIndex] = useState(0);
  const [isSpeaking, setIsSpeaking] = useState<string | null>(null);
  const [activeWord, setActiveWord] = useState<string | null>(null);

  const lessons = LESSON_DATA[level];
  const current = lessons[index];

  const speak = (text: string, rate = 0.8) => {
    if (!window.speechSynthesis) return;
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.rate = rate;
    utterance.pitch = 1.1;
    utterance.onstart = () => setIsSpeaking(text);
    utterance.onend = () => {
      setIsSpeaking(null);
      setActiveWord(null);
    };
    window.speechSynthesis.speak(utterance);
  };

  const speakSentence = (sentence: string) => {
    const words = sentence.split(" ");
    speak(sentence, 0.75);

    // Sync visual highlight with audio
    words.forEach((word, i) => {
      setTimeout(() => {
        setActiveWord(word.replace(/[.,]/g, ""));
      }, i * 500);
    });
  };

  const nextLesson = () => index < lessons.length - 1 && setIndex(index + 1);
  const prevLesson = () => index > 0 && setIndex(index - 1);

  return (
    <div className="flex h-screen w-full bg-[#F8FAFC] font-sans text-slate-900">
      {/* SIDEBAR - Fixed Width */}
      <aside className="hidden md:flex w-72 flex-col bg-white border-r-4 border-slate-100 p-6 shadow-sm">
        <div className="mb-10 flex items-center gap-3 rounded-2xl bg-indigo-50 p-4">
          <BookOpen className="h-6 w-6 text-indigo-600" />
          <span className="font-black uppercase tracking-tight text-indigo-900">
            Reader
          </span>
        </div>

        <nav className="flex-1 space-y-3">
          {(Object.keys(LESSON_DATA) as LevelKey[]).map((l) => (
            <button
              key={l}
              onClick={() => {
                setLevel(l);
                setIndex(0);
              }}
              className={`w-full rounded-2xl p-4 text-left transition-all border-b-4 active:translate-y-1 ${
                level === l
                  ? "bg-indigo-600 text-white border-indigo-800 shadow-lg"
                  : "bg-slate-50 text-slate-500 border-slate-200 hover:bg-slate-100"
              }`}
            >
              <div className="text-[10px] font-black uppercase opacity-60">
                Level
              </div>
              <div className="font-bold text-lg">{l}</div>
            </button>
          ))}
        </nav>

        <div className="rounded-3xl bg-amber-50 p-5 border-b-4 border-amber-100">
          <Trophy className="mb-2 h-6 w-6 text-amber-500" />
          <p className="text-sm font-bold text-amber-900 leading-tight">
            Great job dikie!
          </p>
        </div>
      </aside>

      {/* MAIN CONTENT - Dynamic Height Adjustment */}
      <main className="flex flex-1 flex-col overflow-hidden">
        {/* Progress Header - Fixed Height */}
        <header className="flex h-20 items-center justify-between px-8">
          <div className="h-4 flex-1 max-w-md bg-slate-200 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-green-500"
              initial={{ width: 0 }}
              animate={{ width: `${((index + 1) / lessons.length) * 100}%` }}
            />
          </div>
          <div className="ml-4 font-black text-slate-400">
            {index + 1} <span className="opacity-30">/</span> {lessons.length}
          </div>
        </header>

        {/* LEARNING AREA - Grows to fill available space */}
        <section className="flex flex-1 items-center justify-center p-4 md:p-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={`${level}-${index}`}
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 1.05, y: -20 }}
              className="flex h-full w-full max-w-5xl items-center justify-center"
            >
              <Card className="flex h-full w-full flex-col items-center justify-center rounded-[3rem] border-0 bg-white p-8 shadow-xl md:p-12 border-b-[12px] border-slate-100">
                <CardContent className="flex w-full flex-col items-center justify-center space-y-8 md:space-y-12">
                  {/* WORD FOCUS */}
                  <motion.button
                    whileTap={{ scale: 0.9 }}
                    onClick={() => speak(current.word)}
                    className="group flex flex-col items-center"
                  >
                    <h2
                      className={`text-[clamp(5rem,15vh,10rem)] font-black leading-none tracking-tighter transition-colors ${
                        isSpeaking === current.word
                          ? "text-indigo-600"
                          : "text-slate-900"
                      }`}
                    >
                      {current.word}
                    </h2>
                    <div className="mt-2 flex items-center gap-2 font-black uppercase text-indigo-400 text-xs tracking-widest">
                      <Volume2 className="h-4 w-4" /> Listen
                    </div>
                  </motion.button>

                  {/* SENTENCE BOX */}
                  <div
                    onClick={() => speakSentence(current.sentence)}
                    className="cursor-pointer rounded-[2.5rem] bg-indigo-50/50 p-6 md:p-10 border-4 border-dashed border-indigo-100 hover:border-indigo-300 transition-colors w-full"
                  >
                    <div className="flex flex-wrap justify-center gap-x-4 gap-y-2">
                      {current.sentence.split(" ").map((word, i) => (
                        <motion.span
                          key={i}
                          animate={{
                            scale:
                              activeWord === word.replace(/[.,]/g, "")
                                ? 1.2
                                : 1,
                            color:
                              activeWord === word.replace(/[.,]/g, "")
                                ? "#4f46e5"
                                : "#1e293b",
                          }}
                          className="text-[clamp(1.5rem,5vh,3.5rem)] font-extrabold"
                        >
                          {word}
                        </motion.span>
                      ))}
                    </div>
                    <div className="mt-4 flex items-center justify-center gap-2 text-indigo-400 opacity-60">
                      <Sparkles className="h-4 w-4" />
                      <span className="text-[10px] font-black uppercase tracking-widest">
                        Tap to read full sentence
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </AnimatePresence>
        </section>

        {/* NAVIGATION BAR - Fixed Height */}
        <footer className="flex h-32 items-center justify-between px-8 md:px-20 bg-white/50 backdrop-blur-sm">
          <Button
            variant="ghost"
            onClick={prevLesson}
            disabled={index === 0}
            className="h-16 w-16 rounded-full border-2 border-slate-200 bg-white hover:bg-slate-50 disabled:opacity-20"
          >
            <ChevronLeft className="h-8 w-8 text-slate-600" />
          </Button>

          <div className="flex items-center gap-2 md:gap-4">
            <Star className="h-6 w-6 fill-amber-400 text-amber-400 animate-pulse" />
            <span className="hidden sm:block font-black text-slate-400 uppercase text-xs tracking-widest">
              Keep going dikie
            </span>
            <Star className="h-6 w-6 fill-amber-400 text-amber-400 animate-pulse" />
          </div>

          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              onClick={nextLesson}
              disabled={index === lessons.length - 1}
              className="h-20 px-8 md:px-12 rounded-[2rem] bg-green-500 text-white shadow-[0_8px_0_0_#15803d] hover:bg-green-600 active:translate-y-1 active:shadow-none transition-all flex items-center gap-4"
            >
              <span className="text-xl font-black uppercase tracking-tight">
                Next
              </span>
              <ChevronRight className="h-8 w-8" />
            </Button>
          </motion.div>
        </footer>
      </main>
    </div>
  );
};

export default Reading;
