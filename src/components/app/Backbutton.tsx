import { ChevronLeft } from "lucide-react";

export const BackButton = () => {
  return (
    <button
      onClick={() => window.history.back()}
      className="
        group relative z-10 flex items-center justify-center 
        w-9 h-9 mb-2 -mt-6 cursor-pointer
        bg-white/80 dark:bg-gray-900/80 backdrop-blur-md
        border border-gray-200/60 dark:border-gray-700/60
        rounded-full 
        shadow-sm hover:shadow-lg hover:shadow-indigo-500/20
        transition-all duration-300 ease-out
        hover:-translate-x-1
      "
    >
      <ChevronLeft className="w-5 h-5 text-gray-500 dark:text-gray-400 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors" />
    </button>
  );
};