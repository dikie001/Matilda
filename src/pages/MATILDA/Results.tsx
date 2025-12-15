/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import Navbar from "@/components/app/Navbar";
import { STORIES_READ, TEST_RESULTS } from "@/constants";
import { FileCheck, Loader2, TrendingUp, Trophy, Download, ChevronRight, Sparkles, Users } from "lucide-react";
import { useEffect, useState } from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  ReferenceLine,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { PDFDownloadLink } from "@react-pdf/renderer";
import { ReportDocument } from "@/components/app/ReportDocument";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useNavigate } from "react-router-dom";

// --- TYPES ---
interface TestResult {
  percentage: number;
  totalQuestions: number;
  date?: string;
  score: number;
}

interface UserStats {
  testsDone: number;
  storiesRead: number;
  averageScore: number;
}

interface StudentProfile {
  name: string;
  gradient: string;
  image: string; // Changed from avatarSeed to image
  url: string | null;
  borderColor: string;
  shadowColor: string;
}

// --- THEME UTILS ---
const getColorForScore = (score: number) => {
  if (score >= 90) return "#34d399";
  if (score >= 70) return "#818cf8";
  if (score >= 50) return "#fbbf24";
  return "#f87171";
};

const Results = () => {
  const [loading, setLoading] = useState(true);
  const [stats, setStats] = useState<UserStats>({
    testsDone: 0,
    storiesRead: 0,
    averageScore: 0,
  });
  const [graphData, setGraphData] = useState<any[]>([]);
  const [isClient, setIsClient] = useState(false);
  const navigate = useNavigate();

  // Dialog State
  const [showSelectionDialog, setShowSelectionDialog] = useState(true);

  // Student Profiles Data
  const profiles: StudentProfile[] = [
    {
      name: "Matilda",
      gradient: "from-indigo-500 to-purple-600",
      borderColor: "border-indigo-200 group-hover:border-indigo-500",
      shadowColor: "shadow-indigo-200",
      image: "/images/matilda.png",
      url: null, // Current page
    },
    {
      name: "Ryanne",
      gradient: "from-blue-400 to-cyan-500",
      borderColor: "border-blue-200 group-hover:border-blue-500",
      shadowColor: "shadow-blue-200",
      image: "/images/ryanne.png",
      url: "/ryanne/results",
    },
    {
      name: "Sowon",
      gradient: "from-emerald-400 to-teal-500",
      borderColor: "border-emerald-200 group-hover:border-emerald-500",
      shadowColor: "shadow-emerald-200",
      image: "/images/sowon.png", // Using standard naming convention
      url: "/gavin/results",
    },
  ];

  const handleProfileSelect = (profile: StudentProfile) => {
    if (profile.url === null) {
      setShowSelectionDialog(false);
    } else {
      navigate(profile.url);
    }
  };

  useEffect(() => {
    setIsClient(true);
    const rawResults = localStorage.getItem(TEST_RESULTS);
    const rawStories = localStorage.getItem(STORIES_READ);

    const results: TestResult[] = rawResults ? JSON.parse(rawResults) : [];
    const storiesCount = rawStories ? JSON.parse(rawStories).length : 0;
    const totalTests = results.length;
    const totalScoreSum = results.reduce((sum, item) => sum + item.percentage, 0);
    const avgScore = totalTests > 0 ? Math.round(totalScoreSum / totalTests) : 0;

    setStats({
      testsDone: totalTests,
      storiesRead: storiesCount,
      averageScore: avgScore,
    });

    const formattedGraphData = results.map((result, index) => {
      let dateDisplay = "N/A";
      if (result.date) {
        const safeDateString = result.date.toString().replace(/-/g, "/");
        const dateObj = new Date(safeDateString);
        if (!isNaN(dateObj.getTime())) {
          dateDisplay = dateObj.toLocaleDateString("en-US", {
            month: "short",
            day: "numeric",
          });
        }
      }
      return {
        name: `Test ${index + 1}`,
        score: result.percentage,
        date: result.date,
        fullDate: dateDisplay,
      };
    });

    setGraphData(formattedGraphData);
    setLoading(false);
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-indigo-50 dark:bg-gray-950">
        <Loader2 className="w-10 h-10 animate-spin text-indigo-600" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-100 via-indigo-50 to-white dark:from-gray-900 dark:via-indigo-950 dark:to-gray-950 pt-24 pb-12 px-4 sm:px-6 lg:px-8 transition-colors duration-300">
      
      {/* --- SELECTION DIALOG --- */}
      <Dialog open={showSelectionDialog} onOpenChange={setShowSelectionDialog}>
        <DialogContent
          className="sm:max-w-2xl border-none shadow-2xl bg-white/90 dark:bg-gray-900/90 backdrop-blur-md p-8"
          onInteractOutside={(e) => e.preventDefault()}
        >
          <DialogHeader>
            <DialogTitle className="text-center">
              <span className="block text-3xl font-extrabold text-indigo-900 dark:text-indigo-100 mb-2">
                Welcome Back!
              </span>
              <span className="text-gray-500 font-normal text-base">
                Who is checking their progress today?
              </span>
            </DialogTitle>
          </DialogHeader>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 py-6">
            {profiles.map((profile) => (
              <div
                key={profile.name}
                onClick={() => handleProfileSelect(profile)}
                className={`
                  group relative cursor-pointer 
                  flex flex-col items-center justify-center 
                  p-6 rounded-2xl bg-white dark:bg-gray-800 
                  border-2 ${profile.borderColor} 
                  transition-all duration-300 ease-out
                  hover:-translate-y-2 hover:shadow-xl ${profile.shadowColor}
                  ${profile.url === null ? "ring-2 ring-offset-2 ring-indigo-500" : ""}
                `}
              >
                {/* Active Indicator Badge */}
                {profile.url === null && (
                  <div className="absolute top-3 right-3 flex items-center gap-1 bg-indigo-100 text-indigo-700 text-[10px] font-bold px-2 py-1 rounded-full uppercase tracking-wide">
                    <Sparkles className="w-3 h-3" />
                    You
                  </div>
                )}

                {/* Custom Image Container */}
                <div className="relative w-24 h-24 mb-4">
                  <div className={`absolute inset-0 rounded-full bg-gradient-to-br ${profile.gradient} opacity-20 blur-lg group-hover:opacity-40 transition-opacity`} />
                  <div className={`relative w-full h-full rounded-full p-1 bg-gradient-to-br ${profile.gradient}`}>
                    <div className="w-full h-full rounded-full bg-white overflow-hidden border-2 border-white">
                      <img 
                        src={profile.image}
                        alt={profile.name}
                        className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>
                  </div>
                </div>

                <h3 className="font-bold text-gray-800 dark:text-gray-100 text-xl group-hover:text-indigo-600 transition-colors">
                  {profile.name}
                </h3>
                
                <div className="mt-3 flex items-center text-xs font-semibold text-gray-400 group-hover:text-indigo-500 transition-colors">
                  {profile.url === null ? "View Dashboard" : "Switch Profile"}
                  <ChevronRight className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity transform group-hover:translate-x-1" />
                </div>
              </div>
            ))}
          </div>
        </DialogContent>
      </Dialog>

      <Navbar />

      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="relative">
            <div className="absolute -left-6 top-1 w-1 h-full bg-indigo-500 rounded-full hidden md:block" />
            <h1 className="text-4xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-600">
              Learning Report
            </h1>
            <p className="mt-3 text-lg text-gray-600 dark:text-gray-300 max-w-xl">
              Here is a summary of <strong className="text-indigo-600 dark:text-indigo-400">Matilda's</strong> recent achievements.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
             {/* SWITCH PROFILE BUTTON */}
             <Button 
                variant="outline"
                onClick={() => setShowSelectionDialog(true)}
                className="bg-white hover:bg-gray-50 text-gray-700 border-gray-200 dark:bg-gray-800 dark:text-gray-200 dark:border-gray-700"
             >
                <Users className="w-4 h-4 mr-2" />
                Switch Profile
             </Button>

            {/* DOWNLOAD BUTTON */}
            {isClient && graphData.length > 0 && (
              <PDFDownloadLink
                document={<ReportDocument stats={stats} graphData={graphData} />}
                fileName="Matilda_Awino_Report.pdf"
              >
                {({ loading: pdfLoading }) => (
                  <Button
                    className="bg-indigo-600 w-full sm:w-auto hover:bg-indigo-700 text-white shadow-lg shadow-indigo-200 dark:shadow-none transition-all hover:scale-105"
                    disabled={pdfLoading}
                  >
                    {pdfLoading ? (
                      <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                    ) : (
                      <Download className="w-5 h-5 mr-2" />
                    )}
                    {pdfLoading ? "Generating..." : "Download PDF"}
                  </Button>
                )}
              </PDFDownloadLink>
            )}
          </div>
        </div>

        {/* --- STATS ROW --- */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
          <StatCard
            title="Tests Completed"
            value={stats.testsDone}
            icon={FileCheck}
            color="indigo"
          />
          <StatCard
            title="Average Score"
            value={`${stats.averageScore}%`}
            icon={Trophy}
            color="amber"
          />
        </div>

        {/* --- MAIN GRAPH --- */}
        <div className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm rounded-3xl p-6 sm:p-8 shadow-xl shadow-indigo-100/50 dark:shadow-none border border-white dark:border-gray-800">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-8 gap-4">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-indigo-100 dark:bg-indigo-900/30 rounded-2xl">
                <TrendingUp className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">
                  Performance History
                </h2>
                <p className="text-sm text-gray-500">Scores over time</p>
              </div>
            </div>

            {/* Legend */}
            <div className="flex flex-wrap gap-3 text-xs font-semibold text-gray-600 dark:text-gray-400 bg-gray-50 dark:bg-gray-800/50 p-2 rounded-xl">
              <div className="flex items-center gap-1.5 px-2">
                <div className="w-2.5 h-2.5 rounded-full bg-[#34d399] shadow-sm shadow-emerald-200" /> Excellent
              </div>
              <div className="flex items-center gap-1.5 px-2 border-l border-gray-200 dark:border-gray-700">
                <div className="w-2.5 h-2.5 rounded-full bg-[#818cf8] shadow-sm shadow-indigo-200" /> Good
              </div>
              <div className="flex items-center gap-1.5 px-2 border-l border-gray-200 dark:border-gray-700">
                <div className="w-2.5 h-2.5 rounded-full bg-[#fbbf24] shadow-sm shadow-amber-200" /> Average
              </div>
            </div>
          </div>

          <div className="w-full overflow-x-auto pb-2 scrollbar-hide">
            <div
              className="h-[400px]"
              style={{
                width: graphData.length > 6 ? `${graphData.length * 80}px` : "100%",
                minWidth: "100%",
              }}
            >
              {graphData.length > 0 ? (
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    data={graphData as any}
                    margin={{ top: 20, right: 10, left: 0, bottom: 20 }}
                  >
                    <CartesianGrid
                      strokeDasharray="3 3"
                      vertical={false}
                      stroke="#e5e7eb"
                      strokeOpacity={0.5}
                    />
                    <XAxis
                      dataKey="name"
                      axisLine={false}
                      tickLine={false}
                      tick={{ fill: "#6b7280", fontSize: 12, fontWeight: 500 }}
                      dy={15}
                      interval={0}
                    />
                    <YAxis
                      axisLine={false}
                      tickLine={false}
                      tick={{ fill: "#6b7280", fontSize: 12 }}
                      domain={[0, 100]}
                      dx={-10}
                    />
                    <Tooltip
                      content={<CustomTooltip />}
                      cursor={{ fill: "#f3f4f6", opacity: 0.4 }}
                    />
                    <ReferenceLine
                      y={50}
                      stroke="#ef4444"
                      strokeDasharray="3 3"
                      strokeOpacity={0.4}
                    />
                    <Bar
                      dataKey="score"
                      radius={[12, 12, 12, 12]}
                      barSize={48}
                      animationDuration={1500}
                    >
                      {graphData.map((entry: any, index: number) => (
                        <Cell
                          key={`cell-${index}`}
                          fill={getColorForScore(entry.score)}
                          className="hover:opacity-80 transition-opacity cursor-pointer filter drop-shadow-sm"
                        />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              ) : (
                <div className="h-full flex flex-col items-center justify-center text-gray-400 bg-gray-50/50 rounded-2xl border-2 border-dashed border-gray-200">
                  <FileCheck className="w-12 h-12 mb-3 opacity-20" />
                  <p className="font-medium">No tests taken yet.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// --- SUB-COMPONENTS ---

const StatCard = ({ title, value, icon: Icon, color }: any) => {
  const styles: Record<string, any> = {
    indigo: {
      gradient: "from-indigo-500 to-purple-600",
      iconBg: "bg-indigo-100 dark:bg-indigo-900/30",
      iconColor: "text-indigo-600 dark:text-indigo-400",
      borderColor: "border-indigo-100",
    },
    amber: {
      gradient: "from-amber-400 to-orange-500",
      iconBg: "bg-amber-100 dark:bg-amber-900/30",
      iconColor: "text-amber-600 dark:text-amber-400",
      borderColor: "border-amber-100",
    },
  };

  const s = styles[color] || styles.indigo;

  return (
    <div className={`relative overflow-hidden rounded-3xl p-1 bg-gradient-to-br ${s.gradient} shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300`}>
      <div className="h-full bg-white dark:bg-gray-900 rounded-[22px] p-6 flex items-center justify-between">
        <div>
           <p className="text-sm font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-1">
            {title}
          </p>
          <div className="text-4xl font-extrabold text-gray-900 dark:text-white tracking-tight">
            {value}
          </div>
        </div>
        <div className={`w-14 h-14 flex items-center justify-center rounded-2xl ${s.iconBg}`}>
          <Icon className={`w-7 h-7 ${s.iconColor}`} />
        </div>
      </div>
    </div>
  );
};

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    const score = payload[0].value;
    return (
      <div className="bg-white dark:bg-gray-900 p-4 rounded-xl shadow-2xl border border-indigo-50 dark:border-gray-800 text-center min-w-[140px]">
        <p className="text-gray-500 dark:text-gray-400 text-xs font-bold uppercase mb-2 tracking-wide">
          {label}
        </p>
        <p className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 mb-2">
          {score}%
        </p>
        <div className="flex justify-center">
             <span
          className={`text-[10px] font-bold px-3 py-1 rounded-full border ${
            score >= 90
              ? "bg-emerald-50 text-emerald-700 border-emerald-100"
              : score >= 70
              ? "bg-indigo-50 text-indigo-700 border-indigo-100"
              : "bg-amber-50 text-amber-700 border-amber-100"
          }`}
        >
          {score >= 90
            ? "🌟 Excellent"
            : score >= 70
            ? "👍 Good Job"
            : "🚧 Keep Trying"}
        </span>
        </div>
      </div>
    );
  }
  return null;
};

export default Results;