import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRightCircle,
  BookOpen,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  PlayCircle,
  Rocket,
  Sparkles,
  Volume2,
} from "lucide-react";
import { useState } from "react";

/**
 * dikie, this is the refined, high-end version.
 * - No emojis (per your request).
 * - Focus on typography and massive visual presence for words/sentences.
 * - Fixed Aside component for navigation.
 * - Full speech functionality with visual feedback.
 */

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
    { word: "Frog", sentence: "A green frog hops." },
    { word: "Book", sentence: "I like to read books." },
    { word: "Car", sentence: "The red car goes fast." },
    { word: "Cake", sentence: "I want a piece of cake." },
    { word: "Moon", sentence: "The moon shines bright." },
    { word: "Milk", sentence: "Milk is good for you." },
    { word: "Bee", sentence: "The bee makes honey." },
  ],
  Junior: [
    { word: "Garden", sentence: "We plant seeds in the garden." },
    { word: "School", sentence: "I learn many things at school." },
    { word: "Rocket", sentence: "The rocket flies to the stars." },
    { word: "Friend", sentence: "I share toys with my friend." },
    { word: "Orange", sentence: "An orange is juicy and sweet." },
    { word: "Turtle", sentence: "The turtle walks very slowly." },
    { word: "Winter", sentence: "We play in the cold snow." },
    { word: "Dragon", sentence: "The dragon has golden wings." },
    { word: "Guitar", sentence: "He plays music on the guitar." },
    { word: "Puzzle", sentence: "I solved the big puzzle today." },
    { word: "Spider", sentence: "The spider spins a silver web." },
    { word: "Rabbit", sentence: "The rabbit eats a long carrot." },
    { word: "Doctor", sentence: "The doctor helps me feel better." },
    { word: "Banana", sentence: "The monkey eats a yellow banana." },
    { word: "Clouds", sentence: "White clouds float in the sky." },
    { word: "Cheese", sentence: "The little mouse loves cheese." },
    { word: "Bridge", sentence: "The cars drive over the bridge." },
  ],
  "Super Reader": [
    { word: "Adventure", sentence: "Let's go on a forest adventure." },
    { word: "Mountain", sentence: "The snowy mountain is very tall." },
    { word: "Universe", sentence: "The universe is full of mysteries." },
    { word: "Dinosaur", sentence: "The huge dinosaur lived long ago." },
    { word: "Explorer", sentence: "The explorer found a hidden cave." },
    { word: "Treasure", sentence: "They found a chest of gold treasure." },
    { word: "Butterfly", sentence: "A butterfly has beautiful wings." },
    { word: "Rainbow", sentence: "The rainbow appeared after the rain." },
    { word: "Elephant", sentence: "The elephant has a long trunk." },
    { word: "Astronaut", sentence: "An astronaut walks on the moon." },
    { word: "Whale", sentence: "The blue whale is a giant animal." },
    { word: "Volcano", sentence: "Hot lava flows from the volcano." },
    { word: "Library", sentence: "The library is full of quiet books." },
    { word: "Bicycle", sentence: "I ride my bicycle to the park." },
    { word: "Fireworks", sentence: "The fireworks exploded in the sky." },
    { word: "Lighthouse", sentence: "The lighthouse guides the ships." },
  ],
};

const Reading = () => {
  const [level, setLevel] = useState<LevelKey>("Beginner");
  const [index, setIndex] = useState(0);
  const [isSpeaking, setIsSpeaking] = useState<string | null>(null);

  const lessons = LESSON_DATA[level];
  const current = lessons[index];

  const handleSpeech = (text: string) => {
    if (!window.speechSynthesis) return;
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.rate = 0.8;
    utterance.pitch = 1.0;
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
    <div className="h-screen w-full bg-[#FFFAF5] flex overflow-hidden font-sans text-orange-950">
      {/* SIDEBAR NAVIGATION */}
      <aside className="w-80 bg-white border-r-4 border-orange-100 flex flex-col p-8 z-20 shadow-xl">
        <div className="flex items-center gap-4 mb-12 p-4 bg-orange-50 rounded-3xl border-2 border-orange-100">
          <div className="bg-orange-500 p-2 rounded-xl">
            <BookOpen className="text-white w-6 h-6" />
          </div>
          <h1 className="text-2xl font-black tracking-tight text-orange-900 leading-none">
            Smart
            <br />
            Reader
          </h1>
        </div>

        <div className="flex-1 space-y-4">
          <p className="text-[10px] font-black uppercase text-orange-300 tracking-widest px-3">
            Curriculum
          </p>
          {(Object.keys(LESSON_DATA) as LevelKey[]).map((l) => (
            <button
              key={l}
              onClick={() => {
                setLevel(l);
                setIndex(0);
              }}
              className={`w-full group flex items-center justify-between p-6 rounded-[2.5rem] border-4 transition-all ${
                level === l
                  ? "bg-orange-500 text-white border-orange-600 shadow-2xl shadow-orange-100 scale-105"
                  : "bg-white text-orange-700 border-orange-50 hover:border-orange-200"
              }`}
            >
              <div className="flex flex-col items-start">
                <span className="text-lg font-black">{l}</span>
                <span
                  className={`text-[10px] font-bold ${
                    level === l ? "text-orange-200" : "text-orange-300"
                  }`}
                >
                  Level {Object.keys(LESSON_DATA).indexOf(l) + 1}
                </span>
              </div>
              <ArrowRightCircle
                className={`w-6 h-6 transition-transform ${
                  level === l
                    ? "translate-x-0"
                    : "-translate-x-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-0"
                }`}
              />
            </button>
          ))}
        </div>

        <div className="bg-gradient-to-br from-orange-400 to-orange-600 p-6 rounded-[3rem] text-white">
          <div className="flex items-center gap-2 mb-2">
            <Sparkles className="w-5 h-5 text-orange-200" />
            <span className="font-black text-xs uppercase tracking-tight">
              Active Learning
            </span>
          </div>
          <p className="text-sm font-bold opacity-90 leading-relaxed">
            Ready to read, dikie? Let's start with Level{" "}
            {Object.keys(LESSON_DATA).indexOf(level) + 1}!
          </p>
        </div>
      </aside>

      {/* MAIN LEARNING STAGE */}
      <main className="flex-1 flex flex-col p-10 relative overflow-hidden">
        {/* Top Progress Bar */}
        <div className="w-full max-w-4xl mx-auto flex items-center gap-8 mb-10">
          <div className="flex-1 h-5 bg-orange-100/50 rounded-full border-2 border-orange-50 p-1">
            <motion.div
              className="h-full bg-orange-500 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${((index + 1) / lessons.length) * 100}%` }}
              transition={{ type: "spring", damping: 15 }}
            />
          </div>
          <div className="bg-white px-5 py-2 rounded-2xl shadow-sm border border-orange-100">
            <span className="font-black text-orange-600 text-xl tracking-tighter">
              {index + 1} <span className="text-orange-200 mx-1">/</span>{" "}
              {lessons.length}
            </span>
          </div>
        </div>

        {/* Display Card */}
        <div className="flex-1 flex items-center justify-center min-h-0">
          <AnimatePresence mode="wait">
            <motion.div
              key={`${level}-${index}`}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              className="w-full max-w-5xl h-full flex flex-col"
            >
              <Card className="flex-1 rounded-[5rem] border-0 shadow-[0_50px_100px_-30px_rgba(255,165,0,0.1)] bg-white overflow-hidden flex flex-col border-b-[12px] border-orange-100">
                <CardContent className="flex-1 flex flex-col items-center justify-center p-16 space-y-16">
                  {/* WORD DISPLAY */}
                  <div className="relative group">
                    <motion.div className="absolute -inset-8 bg-orange-50 rounded-[4rem] scale-95 opacity-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500 -z-10" />
                    <button
                      onClick={() => handleSpeech(current.word)}
                      className="flex flex-col items-center gap-6"
                    >
                      <h2
                        className={`text-[10rem] md:text-[13rem] font-black tracking-tighter leading-none transition-all duration-300
                        ${
                          isSpeaking === current.word
                            ? "text-orange-500 scale-110"
                            : "text-slate-900 hover:text-orange-600"
                        }`}
                      >
                        {current.word}
                      </h2>
                      <div
                        className={`flex items-center gap-3 px-8 py-3 rounded-full border-2 transition-all
                        ${
                          isSpeaking === current.word
                            ? "bg-orange-500 border-orange-600 text-white shadow-xl"
                            : "bg-white border-orange-100 text-orange-400"
                        }`}
                      >
                        <Volume2 className="w-6 h-6" />
                        <span className="text-sm font-black uppercase tracking-widest">
                          Listen to Word
                        </span>
                      </div>
                    </button>
                  </div>

                  {/* SENTENCE DISPLAY */}
                  <div className="w-full max-w-4xl">
                    <button
                      onClick={() => handleSpeech(current.sentence)}
                      className={`w-full p-12 md:p-16 rounded-[4rem] border-4 transition-all relative overflow-hidden group
                        ${
                          isSpeaking === current.sentence
                            ? "bg-orange-500 border-orange-600 shadow-2xl scale-[1.02]"
                            : "bg-slate-50 border-slate-100 hover:bg-white hover:border-orange-400"
                        }`}
                    >
                      {/* Decorative Background Icon */}
                      <PlayCircle
                        className={`absolute right-10 top-1/2 -translate-y-1/2 w-32 h-32 opacity-[0.03] transition-transform duration-700 group-hover:scale-150 ${
                          isSpeaking === current.sentence
                            ? "text-white"
                            : "text-slate-900"
                        }`}
                      />

                      <div className="relative z-10 flex flex-col items-center gap-6">
                        <p
                          className={`text-4xl md:text-6xl font-bold leading-tight text-center transition-colors px-10
                          ${
                            isSpeaking === current.sentence
                              ? "text-white"
                              : "text-slate-800"
                          }`}
                        >
                          "{current.sentence}"
                        </p>
                        <div
                          className={`flex items-center gap-4 py-2 px-6 rounded-2xl border-2 transition-all
                          ${
                            isSpeaking === current.sentence
                              ? "bg-orange-400 border-orange-300 text-white"
                              : "bg-white border-slate-200 text-slate-400 opacity-60"
                          }`}
                        >
                          <Volume2 className="w-6 h-6" />
                          <span className="text-xs font-black uppercase tracking-tighter">
                            Read Full Sentence
                          </span>
                        </div>
                      </div>
                    </button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation Footer */}
        <footer className="h-40 flex justify-between items-center max-w-4xl mx-auto w-full">
          <Button
            onClick={prevLesson}
            disabled={index === 0}
            className="h-24 w-24 rounded-full bg-white text-slate-400 shadow-lg border-2 border-slate-50 hover:text-orange-500 hover:border-orange-100 transition-all disabled:opacity-20"
          >
            <ChevronLeft className="w-12 h-12" />
          </Button>

          <div className="flex items-center gap-12 bg-white px-12 py-6 rounded-[3rem] border-2 border-orange-50 shadow-sm">
            <div className="flex flex-col items-center">
              <Rocket className="w-7 h-7 text-orange-500 mb-1" />
              <span className="font-black text-orange-900 text-xs uppercase tracking-tighter">
                Level Progress
              </span>
            </div>
            <div className="w-px h-10 bg-orange-100" />
            <div className="flex flex-col items-start">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-green-500" />
                <span className="font-bold text-slate-600 text-sm">
                  Well Done, dikie!
                </span>
              </div>
              <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-0.5">
                Focus on the sounds
              </p>
            </div>
          </div>

          <Button
            onClick={nextLesson}
            disabled={index === lessons.length - 1}
            className="h-32 w-32 rounded-full bg-orange-500 text-white shadow-[0_15px_0_0_#C2410C] hover:bg-orange-600 hover:shadow-[0_10px_0_0_#C2410C] active:translate-y-2 active:shadow-none transition-all flex items-center justify-center group"
          >
            <ChevronRight className="w-20 h-20 group-hover:translate-x-1 transition-transform" />
          </Button>
        </footer>
      </main>

      {/* Modern Background Accents */}
      <div className="fixed top-0 right-0 w-[500px] h-[500px] bg-orange-100/20 rounded-full blur-[120px] -z-10 pointer-events-none" />
      <div className="fixed bottom-0 left-80 w-[400px] h-[400px] bg-orange-200/10 rounded-full blur-[100px] -z-10 pointer-events-none" />
    </div>
  );
};

export default Reading;
