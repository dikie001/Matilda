/* eslint-disable @typescript-eslint/no-explicit-any */
import Navbar from "@/components/app/Navbar";
import {
  ArrowLeft,
  BookOpen,
  Calendar,
  CheckCircle,
  Clock,
  Search,
  Trophy,
  X,
  XCircle
} from "lucide-react";
import { useState } from "react";
// 1. CORRECT IMPORT
import quizzes from "@/jsons/quizData";

// --- TYPES ---
export interface QuestionReview {
  id: number;
  question: string;
  options: Record<string, string>;
  userAnswer: string;
  correctAnswer: string;
  explanation: string;
}

export interface TestResult {
  testNumber: number;
  subject: string;
  score: number;
  totalQuestions: number;
  percentage: number;
  date: string;
  timeTaken?: number;
  userChoices?: Record<number, string> | string[]; 
}

interface HydratedTestResult extends TestResult {
  questions: QuestionReview[];
}

interface HistoryPageProps {
  testResults: TestResult[];
  onBack: () => void;
}

const formatDate = (dateString: string) => {
  if (!dateString) return "N/A";
  const safeDate = dateString.toString().replace(/-/g, "/");
  const date = new Date(safeDate);
  return isNaN(date.getTime())
    ? dateString
    : date.toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
      });
};

const quizData = quizzes;

// --- SUB-COMPONENT: REVISION MODAL ---
const TestRevisionModal = ({
  result,
  onClose,
}: {
  result: HydratedTestResult;
  onClose: () => void;
}) => {
  if (!result) return null;

  return (
    // Fixed overlay with z-index
    <div className="fixed inset-0 z-[100] flex items-center justify-center sm:p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      
      {/* MODAL CONTAINER 
         Mobile: h-[100dvh] (full screen, no rounding, no margin)
         Desktop: rounded-2xl, max-height limit
      */}
      <div className="bg-gray-50 dark:bg-gray-900 w-full h-[100dvh] sm:h-auto sm:max-h-[90vh] sm:max-w-3xl sm:rounded-2xl shadow-2xl border-0 sm:border border-gray-100 dark:border-gray-800 overflow-hidden flex flex-col animate-in slide-in-from-bottom-10 sm:zoom-in-95 duration-300">
        
        {/* Header */}
        <div className="flex-none bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 p-4 flex justify-between items-center z-10 shadow-sm">
          <div>
            <h3 className="text-lg font-bold text-gray-900 dark:text-white flex items-center gap-2">
              Test #{result.testNumber} <span className="px-2 py-0.5 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-500 text-xs font-normal">Review</span>
            </h3>
            <div className="flex items-center gap-3 text-sm mt-0.5">
              <span className={`font-bold ${result.percentage >= 60 ? 'text-emerald-600' : 'text-rose-600'}`}>
                {result.percentage}% Score
              </span>
            </div>
          </div>
          <button 
            onClick={onClose} 
            className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-rose-50 dark:hover:bg-rose-900/20 hover:text-rose-600 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Questions List */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50 dark:bg-black/20">
          {result.questions && result.questions.length > 0 ? (
            result.questions.map((q, index) => {
              const isCorrect = q.userAnswer === q.correctAnswer;
              return (
                <div key={index} className={`bg-white dark:bg-gray-900 rounded-xl p-4 border ${isCorrect ? "border-emerald-100 dark:border-emerald-900/30" : "border-rose-100 dark:border-rose-900/30"} shadow-sm`}>
                  
                  {/* Question Title Row */}
                  <div className="flex gap-3 mb-3">
                    <span className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${isCorrect ? "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/50 dark:text-emerald-400" : "bg-rose-100 text-rose-700 dark:bg-rose-900/50 dark:text-rose-400"}`}>
                      {index + 1}
                    </span>
                    <h4 className="text-gray-900 dark:text-white font-medium text-base leading-snug">{q.question}</h4>
                  </div>

                  {/* Options Grid */}
                  <div className="grid grid-cols-1 gap-2 pl-9">
                    {Object.entries(q.options).map(([key, val]) => {
                      let optionClass = "p-2.5 rounded-lg border flex items-center gap-3 text-sm font-medium transition-colors ";
                      // Logic to highlight Correct and User's Wrong Answer
                      if (key === q.correctAnswer) optionClass += "bg-emerald-50 border-emerald-200 text-emerald-800 dark:bg-emerald-900/20 dark:border-emerald-800 dark:text-emerald-200";
                      else if (key === q.userAnswer && key !== q.correctAnswer) optionClass += "bg-rose-50 border-rose-200 text-rose-800 dark:bg-rose-900/20 dark:border-rose-800 dark:text-rose-200";
                      else optionClass += "bg-gray-50 border-gray-100 text-gray-500 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400";

                      return (
                        <div key={key} className={optionClass}>
                           <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold border ${key === q.correctAnswer ? "border-emerald-400 bg-emerald-200" : key === q.userAnswer ? "border-rose-400 bg-rose-200" : "border-gray-300 bg-gray-200 dark:border-gray-600 dark:bg-gray-700"}`}>{key}</span>
                           <span className="flex-1">{val}</span>
                           {key === q.correctAnswer && <CheckCircle className="w-4 h-4 ml-auto text-emerald-600" />}
                           {key === q.userAnswer && key !== q.correctAnswer && <XCircle className="w-4 h-4 ml-auto text-rose-600" />}
                        </div>
                      );
                    })}
                  </div>
                  
                  {/* Explanation Block */}
                  {q.explanation && (
                    <div className="mt-3 ml-9 p-3 bg-indigo-50 dark:bg-indigo-900/10 rounded-lg text-xs text-indigo-800 dark:text-indigo-200 border border-indigo-100 dark:border-indigo-900/30">
                      <span className="font-bold block mb-0.5">Explanation:</span>{q.explanation}
                    </div>
                  )}
                </div>
              );
            })
          ) : (
             <div className="flex flex-col items-center justify-center h-full text-gray-500">
                <div className="bg-orange-50 text-orange-600 p-3 rounded-xl mb-2">Missing Data</div>
                <p>Questions could not be retrieved.</p>
             </div>
          )}
        </div>

        {/* Footer (Sticky bottom) */}
        <div className="flex-none p-4 border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 pb-safe">
           <button onClick={onClose} className="w-full py-3.5 bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-bold rounded-xl shadow-lg hover:scale-[1.01] active:scale-[0.98] transition-all">Close Revision</button>
        </div>
      </div>
    </div>
  );
};

// --- MAIN PAGE COMPONENT ---
const HistoryPage = ({ testResults, onBack }: HistoryPageProps) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTest, setSelectedTest] = useState<HydratedTestResult | null>(null);

  const filteredResults = testResults
    .filter((t) => t.subject.toLowerCase().includes(searchTerm.toLowerCase()))
    .reverse(); 

  const handleTestClick = (historyItem: TestResult) => {
      const batchSize = historyItem.totalQuestions;
      const startIdx = (historyItem.testNumber - 1) * batchSize;
      const endIdx = startIdx + batchSize;
      const relevantQuestions = quizData.slice(startIdx, endIdx);

      if (!relevantQuestions || relevantQuestions.length === 0) {
          console.error("Questions not found for Test:", historyItem.testNumber);
          setSelectedTest({ ...historyItem, questions: [] });
          return;
      }

      const mergedQuestions: QuestionReview[] = relevantQuestions.map((q: any, index: number) => {
          let userAnswer = "";
          if (historyItem.userChoices) {
             if (Array.isArray(historyItem.userChoices)) {
                 userAnswer = historyItem.userChoices[index] || "";
             } else {
                 // @ts-ignore 
                 userAnswer = historyItem.userChoices[index] || "";
             }
          }
          return {
              id: q.id,
              question: q.question,
              options: q.options || {},
              correctAnswer: q.correctAnswer,
              explanation: q.explanation || "",
              userAnswer: userAnswer
          };
      });

      setSelectedTest({ ...historyItem, questions: mergedQuestions });
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 dark:bg-gray-950 font-sans text-gray-900 dark:text-gray-100 transition-colors duration-300">
      <Navbar currentPage="History" />

      <main className="flex-1 w-full max-w-5xl mx-auto px-4 sm:px-6 py-20 sm:py-24">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <button onClick={onBack} className="p-2 -ml-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors text-gray-500">
                <ArrowLeft className="w-6 h-6" />
              </button>
              <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">History</h1>
            </div>
            <p className="text-gray-500 dark:text-gray-400">Review your past performance.</p>
          </div>
          <div className="relative w-full md:w-72">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"><Search className="h-4 w-4 text-gray-400" /></div>
            <input type="text" placeholder="Search tests..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} className="pl-10 w-full rounded-xl border border-gray-200 bg-white py-2.5 text-sm focus:ring-2 focus:ring-rose-500 outline-none" />
          </div>
        </div>

        {filteredResults.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredResults.map((test, idx) => {
              const isHigh = test.percentage >= 80;
              const isMid = test.percentage >= 50;
              const borderColor = isHigh ? "hover:border-emerald-300" : isMid ? "hover:border-amber-300" : "hover:border-rose-300";

              return (
                <div key={idx} onClick={() => handleTestClick(test)} className={`group relative bg-white dark:bg-gray-900 rounded-2xl p-5 border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer ${borderColor} hover:-translate-y-1`}>
                  {/* Card Header */}
                  <div className="flex justify-between items-center mb-4">
                    <div className="flex items-center gap-3">
                      <div className={`p-2.5 rounded-xl ${isHigh ? 'bg-emerald-100 text-emerald-600' : 'bg-rose-50 text-rose-500'}`}>
                        {isHigh ? <Trophy className="w-5 h-5" /> : <BookOpen className="w-5 h-5" />}
                      </div>
                      <h3 className="text-lg font-bold text-gray-900 dark:text-white">Test #{test.testNumber}</h3>
                    </div>
                    <div className={`px-2.5 py-1 rounded-lg text-sm font-bold ${isHigh ? 'bg-emerald-50 text-emerald-700' : isMid ? 'bg-amber-50 text-amber-700' : 'bg-rose-50 text-rose-700'}`}>{test.percentage}%</div>
                  </div>

                  {/* Card Footer Details */}
                  <div className="flex items-center justify-between text-xs text-gray-500 pt-3 border-t border-gray-100">
                    <div className="flex items-center gap-1.5"><Calendar className="w-3.5 h-3.5" />{formatDate(test.date)}</div>
                    <div className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5" />{test.timeTaken ? Math.floor(test.timeTaken / 60) + 'm' : 'N/A'}</div>
                  </div>
                  <div className="absolute bottom-3 right-4 text-xs font-bold text-rose-500 opacity-0 group-hover:opacity-100 transition-opacity">Revise →</div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-20 text-center">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4"><Search className="w-8 h-8 text-gray-400" /></div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">No tests found</h3>
            <p className="text-gray-500 max-w-sm">Try taking a new test!</p>
          </div>
        )}
      </main>

      {selectedTest && <TestRevisionModal result={selectedTest} onClose={() => setSelectedTest(null)} />}
    </div>
  );
};

export default HistoryPage;