import Footer from "@/components/app/Footer";
import Navbar from "@/components/app/Navbar";
import { TEST_RESULTS } from "@/constants";
import useSound from "@/hooks/useSound";
import LearnerModal from "@/modals/Welcome";
import {
  ArrowRight,
  Bike,
  BookOpen,
  ChevronDown,
  ChevronUp,
  CircleHelp,
  FileText,
  GraduationCap,
  Laptop2,
  Lightbulb,
  Mic,
  Sparkles,
  Train,
  Trees,
  TrendingUp,
  Trophy,
  Zap,
} from "lucide-react";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Animation from "../../components/animation/Animation";

const READ_STORIES = "read-stories";

type Complete = {
  stories: number;
  quiz: number;
};

const HomePage: React.FC = () => {
  const navigate = useNavigate();
  const { playSend } = useSound();
  const [openLearnerModal, setOpenLearnerModal] = useState(false);
  const [completed, setCompleted] = useState<Complete>({ stories: 0, quiz: 0 });
  const [showMore, setShowMore] = useState(false);

  // 1. Primary Activities (Quiz + Personal Cards)
  const mainSections = [
    {
      name: "Matilda Awino",
      icon: <GraduationCap />,
      description: "Quizes for matilda",
      color: "from-pink-500 to-rose-600",
      bgGradient:
        "from-pink-50 to-rose-50 dark:from-pink-950/40 dark:to-rose-950/40",
      to: "quick-quiz",
      isQuiz: true,
    },
    {
      name: "Ann Judith",
      icon: <Train />,
      description: "",
      color: "from-emerald-500 to-green-600",
      bgGradient:
        "from-emerald-50 to-green-50 dark:from-emerald-950/40 dark:to-green-950/40",
      to: "/gavin/quiz",
    },
    {
      name: "Dikie001",
      icon: <Laptop2 />,
      description: "Blue Theme Activities",
      color: "from-blue-500 to-cyan-600",
      bgGradient:
        "from-blue-50 to-cyan-50 dark:from-blue-950/40 dark:to-cyan-950/40",
      to: "/ryanne/quiz",
    },
    {
      name: "Daniel Otieno",
      icon: <Bike />,
      description: "Orange Theme Activities",
      color: "from-orange-500 to-amber-600",
      bgGradient:
        "from-orange-50 to-amber-50 dark:from-orange-950/40 dark:to-amber-950/40",
      to: "/daniel/quiz",
    },
    {
      name: "Abraham Lincoln",
      icon: <Trees />,
      description: "Purple Theme Activities",
      color: "from-purple-500 to-fuchsia-600",
      bgGradient:
        "from-purple-50 to-fuchsia-50 dark:from-purple-950/40 dark:to-fuchsia-950/40",
      to: "/lincoln/quiz",
    },
  ];

  // 2. Other Sections (Hidden by default)
  const otherSections = [
    {
      name: "Quick Challenges",
      icon: <Zap />,
      description: "Fast logic hits",
      color: "from-fuchsia-500 to-purple-600",
      to: "/quick-challenges",
    },
    {
      name: "Flash Stories",
      icon: <FileText />,
      description: "Short powerful stories",
      color: "from-violet-500 to-indigo-600",
      to: "/flash-stories",
    },
    {
      name: "Life Gems",
      icon: <Sparkles />,
      description: "Quick life tips",
      color: "from-amber-400 to-orange-500",
      to: "/life-gems",
    },
    {
      name: "Clear Speech",
      icon: <Mic />,
      description: "Improve fluency",
      color: "from-rose-400 to-pink-600",
      to: "/clear-speech",
    },
    {
      name: "Fun Facts",
      icon: <Lightbulb />,
      description: "Surprising facts",
      color: "from-purple-400 to-violet-600",
      to: "/fun-facts",
    },
    {
      name: "Word Power",
      icon: <BookOpen />,
      description: "Language skills",
      color: "from-rose-900 to-pink-900 shadow-lg",
      to: "/word-power",
    },
  ];

  const HandleCategoryClick = (destination: string) => {
    playSend();
    navigate(destination);
  };

  useEffect(() => {
    const isFirstTime = localStorage.getItem("first-time");
    if (!isFirstTime) setTimeout(() => setOpenLearnerModal(true), 1200);
  }, []);

  useEffect(() => {
    const rawData = localStorage.getItem(READ_STORIES);
    const completedStories = rawData ? JSON.parse(rawData).length : 0;

    const rawQuizData = localStorage.getItem(TEST_RESULTS);
    const completedQuizes = rawQuizData ? JSON.parse(rawQuizData).length : 0;

    setCompleted({ stories: completedStories, quiz: completedQuizes });
  }, []);

  const totalProgress = completed.stories + completed.quiz;

  return (
    <div className="min-h-screen text-gray-900 dark:text-white bg-gradient-to-br from-rose-50 via-fuchsia-50/30 to-purple-50/30 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 flex flex-col relative overflow-hidden transition-colors duration-500">
      <Animation />

      <Navbar />

      <main className="relative z-10 flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-12">
        {/* Header Section */}
        <div className="text-center mb-6 md:mb-10 space-y-2 md:space-y-4 animate-in fade-in duration-700">
          {totalProgress > 0 && (
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-pink-600 to-rose-600 text-white rounded-3xl shadow-md text-sm font-semibold mb-4">
              <TrendingUp className="w-4 h-4" />
              <span>{totalProgress} Activities Completed!</span>
            </div>
          )}
          <h1 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-pink-600 via-fuchsia-600 to-purple-600 bg-clip-text text-transparent">
            Learn. Grow. Excel.
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-xl mx-auto">
            Daily challenges to sharpen your mind.
          </p>
        </div>

        {/* --- MAIN GRID (Quiz + Personal Cards) --- */}
        <div className="grid grid-cols-2  lg:grid-cols-3 gap-4 mb-8">
          {mainSections.map((section, index) => (
            <button
              key={section.name}
              onClick={() => HandleCategoryClick(section.to)}
              className="group cursor-pointer relative p-5 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white dark:bg-gray-800/50 border border-gray-100 dark:border-gray-700/50 overflow-hidden flex items-center gap-4 text-left backdrop-blur-sm"
              style={{
                animationDelay: `${index * 100}ms`,
                animation: "slideUp 0.6s ease-out forwards",
                opacity: 0,
              }}
            >
              {/* Colored Top Border (Always visible) */}
              <div
                className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${section.color}`}
              />

              {/* Background gradient (Always visible) */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${section.bgGradient} opacity-100`}
              />

              {/* Icon Container */}
              <div className="relative p-3 rounded-xl bg-white/60 dark:bg-black/20 shadow-sm shrink-0 backdrop-blur-sm">
                {React.cloneElement(section.icon, {
                  className:
                    "w-6 h-6 text-gray-700 dark:text-gray-200 group-hover:scale-110 transition-transform duration-300",
                })}
              </div>

              {/* Text Content */}
              <div className="relative flex-1">
                <div className="flex items-center gap-2">
                  <h3 className="font-bold text-lg text-gray-900 dark:text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-gray-900 group-hover:to-gray-600 dark:group-hover:from-white dark:group-hover:to-gray-300 transition-colors">
                    {section.name}
                  </h3>
                  {/* Badge for Quiz if completed */}
                  {section.isQuiz && completed.quiz > 0 && (
                    <span className="text-[10px] font-bold text-pink-600 bg-pink-100 dark:bg-pink-900/30 px-2 py-0.5 rounded-full">
                      {completed.quiz}
                    </span>
                  )}
                </div>
                <p className="text-xs text-gray-600 dark:text-gray-300 line-clamp-1 font-medium">
                  {section.description}
                </p>
              </div>

              {/* Arrow Icon appearing on hover */}
              <ArrowRight className="absolute right-4 w-4 h-4 text-gray-400 dark:text-gray-500 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
            </button>
          ))}
        </div>

        {/* --- SHOW MORE TOGGLE --- */}
        <div className="flex justify-center mb-6">
          <button
            onClick={() => {
              playSend();
              setShowMore(!showMore);
            }}
            className="flex items-center gap-2 px-6 py-2.5 rounded-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md hover:bg-gray-50 dark:hover:bg-gray-700 transition-all text-sm font-semibold text-gray-600 dark:text-gray-300"
          >
            <span>
              {showMore ? "Hide Extra Activities" : "Explore More Activities"}
            </span>
            {showMore ? (
              <ChevronUp className="w-4 h-4" />
            ) : (
              <ChevronDown className="w-4 h-4" />
            )}
          </button>
        </div>

        {/* --- OTHER CARDS (Hidden Grid) --- */}
        {showMore && (
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-4 animate-in slide-in-from-top-4 fade-in duration-500">
            {otherSections.map((section, index) => {
              const hasCompleted = section.name === "Flash Stories";
              const completionCount = completed.stories;

              return (
                <button
                  key={section.name}
                  onClick={() => HandleCategoryClick(section.to)}
                  className="group cursor-pointer relative p-4 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white/80 dark:bg-gray-800/50 border border-rose-100 dark:border-gray-700/50 backdrop-blur-sm overflow-hidden flex flex-col items-center text-center"
                >
                  <div
                    className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${section.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left`}
                  />

                  <div className="mb-4 relative">
                    <div
                      className={`absolute inset-0 bg-gradient-to-r ${section.color} blur-xl opacity-0 group-hover:opacity-40 transition-opacity duration-300`}
                    />
                    <div
                      className={`relative p-3 rounded-xl bg-gradient-to-r ${section.color} shadow-md group-hover:scale-110 transition-transform duration-300`}
                    >
                      {React.cloneElement(section.icon, {
                        className: "w-6 h-6 text-white",
                      })}
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-pink-600 dark:group-hover:text-pink-400 transition-colors">
                    {section.name}
                  </h3>
                  <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                    {section.description}
                  </p>

                  {hasCompleted && completionCount > 0 && (
                    <div className="mt-4 flex items-center gap-1.5 text-xs font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-900/20 px-3 py-1 rounded-full">
                      <Trophy className="w-3 h-3" />
                      <span>{completionCount} Read</span>
                    </div>
                  )}
                </button>
              );
            })}
          </div>
        )}
      </main>

      <Footer />
      {openLearnerModal && (
        <LearnerModal
          onClose={() => {
            setOpenLearnerModal(false);
            navigate("/");
          }}
        />
      )}

      <style>{`
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
};

export default HomePage;