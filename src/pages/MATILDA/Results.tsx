/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { BackButton } from "@/components/app/Backbutton";
import Navbar from "@/components/app/Navbar";
import { ReportDocument } from "@/components/app/ReportDocument";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { STORIES_READ, TEST_RESULTS } from "@/constants";
import { PDFDownloadLink } from "@react-pdf/renderer";
import {
  ChevronRight,
  Download,
  FileCheck,
  Loader2,
  Sparkles,
  TrendingUp,
  Trophy,
  Users
} from "lucide-react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
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
import LoaderPage from "../ADMIN/Loader";

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
  image: string;
  url: string | null;
  accentColor: string; // CSS color for shadows/rings
}

// --- THEME UTILS ---
const getColorForScore = (score: number) => {
  if (score >= 90) return "#34d399"; // Emerald 400
  if (score >= 70) return "#818cf8"; // Indigo 400
  if (score >= 50) return "#fbbf24"; // Amber 400
  return "#f87171"; // Red 400
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
      accentColor: "indigo",
      image: "/images/matilda.png",
      url: null,
    },
    {
      name: "Ryanne",
      gradient: "from-blue-400 to-cyan-500",
      accentColor: "blue",
      image: "/images/ryanne.png",
      url: "/ryanne/results",
    },
    {
      name: "Sowon",
      gradient: "from-emerald-400 to-teal-500",
      accentColor: "emerald",
      image: "/images/sowon.png",
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
    const totalScoreSum = results.reduce(
      (sum, item) => sum + item.percentage,
      0
    );
    const avgScore =
      totalTests > 0 ? Math.round(totalScoreSum / totalTests) : 0;

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
    return <LoaderPage />;
  }

  return (
    <div className="min-h-screen bg-gray-50/50 dark:bg-gray-950 pt-24 pb-12 px-4 sm:px-6 lg:px-8 transition-colors duration-300">
      <BackButton />
      {/* --- SELECTION DIALOG --- */}
      <Dialog open={showSelectionDialog} onOpenChange={setShowSelectionDialog}>
        <DialogContent
          className="sm:max-w-3xl border-none shadow-2xl bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl p-8"
          onInteractOutside={(e) => e.preventDefault()}
        >
          <DialogHeader className="mb-6 ">
            <DialogTitle className="text-center">
              <span className="block text-3xl font-extrabold text-gray-900 dark:text-gray-100 mb-2 tracking-tight">
                Welcome Back
              </span>
              <span className="text-gray-500 font-medium text-base">
                Who is checking their progress today?
              </span>
            </DialogTitle>
          </DialogHeader>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {profiles.map((profile) => {
              const isActive = profile.url === null;
              return (
                <div
                  key={profile.name}
                  onClick={() => handleProfileSelect(profile)}
                  className={`
                    group relative cursor-pointer 
                    flex flex-col items-center justify-center 
                    p-6 rounded-3xl 
                    bg-white dark:bg-gray-800 
                    border border-gray-100 dark:border-gray-700
                    shadow-sm hover:shadow-xl hover:shadow-${
                      profile.accentColor
                    }-100 dark:hover:shadow-none
                    transition-all duration-300 ease-out
                    hover:-translate-y-1
                    ${
                      isActive
                        ? "ring-2 ring-indigo-500 ring-offset-2 dark:ring-offset-gray-900"
                        : ""
                    }
                  `}
                >
                  {/* Active Badge */}
                  {isActive && (
                    <div className="absolute top-4 right-4 flex items-center gap-1 bg-indigo-50 text-indigo-600 dark:bg-indigo-900/50 dark:text-indigo-300 text-[10px] font-bold px-2 py-1 rounded-full uppercase tracking-wide">
                      <Sparkles className="w-3 h-3" />
                      You
                    </div>
                  )}

                  {/* Avatar Section */}
                  <div className="relative w-24 h-24 mb-5">
                    {/* Soft Glow Background */}
                    <div
                      className={`absolute inset-0 rounded-full bg-gradient-to-br ${profile.gradient} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500`}
                    />

                    {/* Image Container - Clean Ring instead of Border */}
                    <div className="relative w-full h-full rounded-full p-1 bg-white dark:bg-gray-800 shadow-lg ring-1 ring-gray-100 dark:ring-gray-700">
                      <div className="w-full h-full rounded-full overflow-hidden relative">
                        <img
                          src={profile.image}
                          alt={profile.name}
                          className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
                        />
                      </div>
                    </div>
                  </div>

                  <h3 className="font-bold text-gray-900 dark:text-white text-lg group-hover:text-indigo-600 transition-colors">
                    {profile.name}
                  </h3>

                  <div className="mt-2 flex items-center text-xs font-semibold text-gray-400 group-hover:text-gray-600 dark:group-hover:text-gray-300 transition-colors">
                    {isActive ? "View Dashboard" : "Switch Profile"}
                    <ChevronRight className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-all transform group-hover:translate-x-1" />
                  </div>
                </div>
              );
            })}
          </div>
        </DialogContent>
      </Dialog>

      <Navbar />

      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="mb-4 md:mb-12 flex flex-row lg:items-end justify-between gap-6">
          <div className="space-y-2">
            <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-white tracking-tight">
              Matilda's Report
            </h1>
            <p className="text-lg text-gray-500 dark:text-gray-400">
              Overview for{" "}
              <strong className="text-indigo-600 dark:text-indigo-400">
                Matilda Awino
              </strong>
            </p>
          </div>

          <div className="flex max-md:hidden flex-row gap-3">
            <Button
              variant="outline"
              onClick={() => setShowSelectionDialog(true)}
              className="bg-white hover:bg-gray-50 text-gray-700 border-gray-200 dark:bg-gray-800 dark:text-gray-200 dark:border-gray-700 dark:hover:bg-gray-700"
            >
              <Users className="w-4 h-4 mr-2" />
              Switch Profile
            </Button>

            {isClient && graphData.length > 0 && (
              <PDFDownloadLink
                document={
                  <ReportDocument stats={stats} graphData={graphData} />
                }
                fileName="Matilda_Awino_Report.pdf"
              >
                {({ loading: pdfLoading }) => (
                  <Button
                    className="w-full sm:w-auto bg-indigo-600 hover:bg-indigo-700 text-white shadow-lg shadow-indigo-200/50 dark:shadow-none transition-all"
                    disabled={pdfLoading}
                  >
                    {pdfLoading ? (
                      <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    ) : (
                      <Download className="w-4 h-4 mr-2" />
                    )}
                    {pdfLoading ? "Generating..." : "Download Report"}
                  </Button>
                )}
              </PDFDownloadLink>
            )}
          </div>
        </div>

        <div className="flex w-full md:hidden justify-end items-center mb-4  flex-row gap-3">
          <Button
            variant="outline"
            onClick={() => setShowSelectionDialog(true)}
            className="bg-white hover:bg-gray-50 text-gray-700 border-gray-200 dark:bg-gray-800 dark:text-gray-200 dark:border-gray-700 dark:hover:bg-gray-700"
          >
            <Users className="w-4 h-4 mr-2" />
            Switch Profile
          </Button>

          {isClient && graphData.length > 0 && (
            <PDFDownloadLink
              document={<ReportDocument stats={stats} graphData={graphData} />}
              fileName="Matilda_Awino_Report.pdf"
            >
              {({ loading: pdfLoading }) => (
                <Button
                  className="w-full sm:w-auto bg-indigo-600 hover:bg-indigo-700 text-white shadow-lg shadow-indigo-200/50 dark:shadow-none transition-all"
                  disabled={pdfLoading}
                >
                  {pdfLoading ? (
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                  ) : (
                    <Download className="w-4 h-4 mr-2" />
                  )}
                  {pdfLoading ? "Generating..." : "Download Report"}
                </Button>
              )}
            </PDFDownloadLink>
          )}
        </div>

        {/* --- STATS ROW --- */}
        <div className="grid  grid-cols-2 gap-4 md:gap-6 mb-8">
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
        <div className="bg-white dark:bg-gray-800 rounded-3xl p-2 md:p-4 shadow-sm border border-gray-100 dark:border-gray-700">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-8 gap-4">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-indigo-50 dark:bg-indigo-900/20 rounded-2xl">
                <TrendingUp className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100">
                  Performance History
                </h2>
                <p className="text-sm text-gray-500">Scores over time</p>
              </div>
            </div>

            {/* Legend */}
            <div className="flex flex-wrap gap-4 text-xs font-semibold text-gray-600 dark:text-gray-400 bg-gray-50 dark:bg-gray-900/50 py-2 px-4 rounded-full border border-gray-100 dark:border-gray-700">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#34d399]" /> Excellent
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#818cf8]" /> Good
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#fbbf24]" /> Average
              </div>
            </div>
          </div>

          <div className="w-full overflow-x-auto pb-2 scrollbar-hide">
            <div
              className="h-[400px]"
              style={{
                width:
                  graphData.length > 8 ? `${graphData.length * 60}px` : "100%",
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
                      stroke="#f3f4f6"
                      strokeOpacity={1}
                    />
                    <XAxis
                      dataKey="name"
                      axisLine={false}
                      tickLine={false}
                      tick={{ fill: "#9ca3af", fontSize: 12, fontWeight: 500 }}
                      dy={15}
                      interval={0}
                    />
                    <YAxis
                      axisLine={false}
                      tickLine={false}
                      tick={{ fill: "#9ca3af", fontSize: 12 }}
                      domain={[0, 100]}
                      dx={-10}
                    />
                    <Tooltip
                      content={<CustomTooltip />}
                      cursor={{ fill: "transparent" }} // FIXED: Removed white overlay
                    />
                    <ReferenceLine
                      y={50}
                      stroke="#e5e7eb"
                      strokeDasharray="3 3"
                    />
                    <Bar
                      dataKey="score"
                      radius={[6, 6, 6, 6]}
                      barSize={40}
                      animationDuration={1500}
                    >
                      {graphData.map((entry: any, index: number) => (
                        <Cell
                          key={`cell-${index}`}
                          fill={getColorForScore(entry.score)}
                          className="hover:opacity-80 transition-opacity cursor-pointer"
                        />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              ) : (
                <div className="h-full flex flex-col items-center justify-center text-gray-400 bg-gray-50/50 rounded-2xl border border-dashed border-gray-200">
                  <FileCheck className="w-10 h-10 mb-2 opacity-20" />
                  <p className="font-medium text-sm">No tests taken yet</p>
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
      iconBg:
        "bg-indigo-50 text-indigo-600 dark:bg-indigo-900/20 dark:text-indigo-400",
      borderHover: "hover:border-indigo-200 dark:hover:border-indigo-800",
      shadow: "hover:shadow-indigo-100 dark:hover:shadow-none",
    },
    amber: {
      iconBg:
        "bg-amber-50 text-amber-600 dark:bg-amber-900/20 dark:text-amber-400",
      borderHover: "hover:border-amber-200 dark:hover:border-amber-800",
      shadow: "hover:shadow-amber-100 dark:hover:shadow-none",
    },
  };

  const s = styles[color] || styles.indigo;

  return (
    <div
      className={`
        bg-white dark:bg-gray-800 
        rounded-3xl p-6 
        border border-gray-100 dark:border-gray-700 ${s.borderHover}
        shadow-sm ${s.shadow}
        transition-all duration-300
    `}
    >
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2">
            {title}
          </p>
          <div className="text-4xl font-extrabold text-gray-900 dark:text-white tracking-tight">
            {value}
          </div>
        </div>
        <div
          className={`w-14 h-14 flex items-center justify-center rounded-2xl ${s.iconBg}`}
        >
          <Icon className="w-7 h-7" />
        </div>
      </div>
    </div>
  );
};

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    const score = payload[0].value;
    return (
      <div className="bg-white dark:bg-gray-800 p-3 rounded-xl shadow-xl border border-gray-100 dark:border-gray-700 min-w-[120px]">
        <p className="text-gray-400 text-[10px] font-bold uppercase mb-1 tracking-wider text-center">
          {label}
        </p>
        <p className="text-3xl font-black text-center text-gray-800 dark:text-gray-100 mb-2">
          {score}%
        </p>
        <div
          className={`
            text-[10px] font-bold px-2 py-1 rounded-md text-center
            ${
              score >= 70
                ? "bg-emerald-50 text-emerald-600"
                : "bg-amber-50 text-amber-600"
            }
        `}
        >
          {score >= 90
            ? "Excellent"
            : score >= 70
            ? "Good Job"
            : "Review Needed"}
        </div>
      </div>
    );
  }
  return null;
};

export default Results;
