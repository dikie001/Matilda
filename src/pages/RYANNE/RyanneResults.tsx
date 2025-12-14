/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import Navbar from "@/components/app/Navbar";
import { FileCheck, Loader2, TrendingUp, Trophy, Download } from "lucide-react";
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

// ==========================================
// 🛠️ CONFIGURATION SECTION
// ==========================================

// Must match the ID used in Gavin's Quiz App
const USER_ID = "RYANNE"; 

const STORAGE_CONFIG = {
  TEST_RESULTS: `${USER_ID}_TEST_RESULTS`,
  STORIES_READ: `${USER_ID}_STORIES_READ`, // Optional if you add stories later
};

// ==========================================

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

// --- THEME UTILS ---
const getColorForScore = (score: number) => {
  if (score >= 90) return "#10b981"; // emerald-500 (Excellent)
  if (score >= 70) return "#0d9488"; // teal-600 (Good)
  if (score >= 50) return "#fbbf24"; // amber-400 (Average)
  return "#ef4444"; // red-500 (Needs Improvement)
};

const GavinResults = () => {
  const [loading, setLoading] = useState(true);
  const [stats, setStats] = useState<UserStats>({
    testsDone: 0,
    storiesRead: 0,
    averageScore: 0,
  });
  const [graphData, setGraphData] = useState<any[]>([]);
  // Used to prevent hydration errors with PDF generation in Next.js
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    // 1. Fetch Data from LocalStorage using GAVIN's keys
    const rawResults = localStorage.getItem(STORAGE_CONFIG.TEST_RESULTS);
    const rawStories = localStorage.getItem(STORAGE_CONFIG.STORIES_READ);

    // 2. Parse Data
    const results: TestResult[] = rawResults ? JSON.parse(rawResults) : [];
    const storiesCount = rawStories ? JSON.parse(rawStories).length : 0;

    // 3. Calculate Stats
    const totalTests = results.length;

    // Calculate Average
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

    // 4. Format Graph Data (Test 1, Test 2...)
    const formattedGraphData = results.map((result, index) => {
      let dateDisplay = "N/A";

      if (result.date) {
        // FIX: Mobile browsers hate dashes (2023-01-01).
        const safeDateString = result.date.toString().replace(/-/g, "/");
        const dateObj = new Date(safeDateString);

        // Check if date is valid
        if (!isNaN(dateObj.getTime())) {
          dateDisplay = dateObj.toLocaleDateString("en-US", {
            year: "numeric",
            month: "short",
            day: "numeric",
          });
        } else {
          dateDisplay = result.date.toString();
        }
      }

      return {
        name: `Test ${index + 1}`,
        score: result.percentage,
        date: result.date,
        fullDate: dateDisplay, // This is what the PDF uses
      };
    });

    setGraphData(formattedGraphData);
    setLoading(false);
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-950">
        <Loader2 className="w-8 h-8 animate-spin text-emerald-500" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 pt-24 pb-12 px-4 sm:px-6 lg:px-8 transition-colors duration-300">
      <Navbar />
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-green-500 to-teal-500">
              Gavin's Results
            </h1>
            <p className="mt-2 text-gray-600 dark:text-gray-400">
              Overview of tests and performance milestones.
            </p>
          </div>

          {/* PDF DOWNLOAD BUTTON */}
          {isClient && graphData.length > 0 && (
            <PDFDownloadLink
              document={<ReportDocument stats={stats} graphData={graphData} />}
              fileName="Gavin's Report.pdf"
            >
              {({ loading: pdfLoading }) => (
                <Button
                  className="bg-emerald-600 cursor-pointer hover:bg-emerald-700 text-white shadow-lg shadow-emerald-200 dark:shadow-none transition-all border-none"
                  disabled={pdfLoading}
                >
                  {pdfLoading ? (
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                  ) : (
                    <Download className="w-4 h-4 mr-2" />
                  )}
                  {pdfLoading ? "Preparing..." : "Download Report"}
                </Button>
              )}
            </PDFDownloadLink>
          )}
        </div>

        {/* --- STATS ROW --- */}
        <div className="grid grid-cols-2 gap-4 md:gap-6n mb-8">
          <StatCard
            title="Tests Completed"
            value={stats.testsDone}
            icon={FileCheck}
            color="emerald" 
          />
          <StatCard
            title="Average Score"
            value={`${stats.averageScore}%`}
            icon={Trophy}
            color="teal"
          />
        </div>

        {/* --- MAIN GRAPH: MARKS PER TEST --- */}
        <div className="bg-white dark:bg-gray-900 rounded-3xl p-6 sm:p-8 shadow-xl shadow-emerald-100/50 dark:shadow-none border border-gray-100 dark:border-gray-800">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-emerald-100 dark:bg-emerald-900/30 rounded-lg">
                <TrendingUp className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
              </div>
              <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">
                Performance History
              </h2>
            </div>

            {/* Legend for color coding */}
            <div className="hidden sm:flex gap-4 text-xs font-medium text-gray-500 dark:text-gray-400">
              <div className="flex items-center gap-1">
                <div className="w-2 h-2 rounded-full bg-emerald-500" />{" "}
                Excellent
              </div>
              <div className="flex items-center gap-1">
                <div className="w-2 h-2 rounded-full bg-teal-600" /> Good
              </div>
              <div className="flex items-center gap-1">
                <div className="w-2 h-2 rounded-full bg-amber-400" /> Average
              </div>
              <div className="flex items-center gap-1">
                <div className="w-2 h-2 rounded-full bg-red-400" /> Low
              </div>
            </div>
          </div>

          {/* SCROLL WRAPPER START */}
          <div className="w-full overflow-x-auto pb-4">
            <div
              className="h-[400px]"
              style={{
                width:
                  graphData.length > 6 ? `${graphData.length * 60}px` : "100%",
                minWidth: "100%",
              }}
            >
              {graphData.length > 0 ? (
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    data={graphData as any}
                    margin={{ top: 20, right: 30, left: 0, bottom: 20 }}
                  >
                    <CartesianGrid
                      strokeDasharray="3 3"
                      vertical={false}
                      strokeOpacity={0.1}
                    />
                    <XAxis
                      dataKey="name"
                      axisLine={false}
                      tickLine={false}
                      tick={{ fill: "#6b7280", fontSize: 12 }}
                      dy={10}
                      interval={0} 
                    />
                    <YAxis
                      axisLine={false}
                      tickLine={false}
                      tick={{ fill: "#6b7280", fontSize: 12 }}
                      domain={[0, 100]}
                    />
                    <Tooltip
                      content={<CustomTooltip />}
                      cursor={{ fill: "transparent" }}
                    />
                    <ReferenceLine
                      y={50}
                      stroke="#ef4444"
                      strokeDasharray="3 3"
                      strokeOpacity={0.5}
                    />
                    <Bar
                      dataKey="score"
                      radius={[8, 8, 8, 8]}
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
                <div className="h-full flex flex-col items-center justify-center text-gray-400">
                  <FileCheck className="w-12 h-12 mb-2 opacity-20" />
                  <p>No tests taken yet.</p>
                </div>
              )}
            </div>
          </div>
          {/* SCROLL WRAPPER END */}
        </div>
      </div>
    </div>
  );
};

// --- SUB-COMPONENTS ---

const StatCard = ({ title, value, icon: Icon, color }: any) => {
  const styles: Record<string, any> = {
    emerald: {
      bg: "bg-gradient-to-br from-white to-emerald-50 dark:from-gray-900 dark:to-emerald-950/20",
      border: "border-emerald-100 dark:border-emerald-900/40",
      iconColor: "text-emerald-600 dark:text-emerald-400",
      shadow: "shadow-emerald-100/40 dark:shadow-none",
      ring: "ring-emerald-50 dark:ring-emerald-900/20",
    },
    teal: {
      bg: "bg-gradient-to-br from-white to-teal-50 dark:from-gray-900 dark:to-teal-950/20",
      border: "border-teal-100 dark:border-teal-900/40",
      iconColor: "text-teal-600 dark:text-teal-400",
      shadow: "shadow-teal-100/40 dark:shadow-none",
      ring: "ring-teal-50 dark:ring-teal-900/20",
    },
    amber: {
      bg: "bg-gradient-to-br from-white to-amber-50 dark:from-gray-900 dark:to-amber-950/20",
      border: "border-amber-100 dark:border-amber-900/40",
      iconColor: "text-amber-600 dark:text-amber-400",
      shadow: "shadow-amber-100/40 dark:shadow-none",
      ring: "ring-amber-50 dark:ring-amber-900/20",
    },
  };

  const s = styles[color] || styles.emerald;

  return (
    <div
      className={`relative overflow-hidden rounded-2xl p-6 transition-all duration-300 border ${s.bg} ${s.border} shadow-lg ${s.shadow} hover:shadow-xl hover:-translate-y-1`}
    >
      <div className="relative flex flex-col items-center text-center">
        <div
          className={`inline-flex items-center justify-center w-12 h-12 bg-white dark:bg-gray-800 rounded-xl mb-4 shadow-sm ring-4 ${s.ring} transition-transform duration-300 group-hover:scale-105`}
        >
          <Icon className={`w-6 h-6 ${s.iconColor}`} />
        </div>

        <div className="text-3xl font-bold text-gray-900 dark:text-white tracking-tight mb-1">
          {value}
        </div>

        <p className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
          {title}
        </p>
      </div>
    </div>
  );
};
const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    const score = payload[0].value;
    return (
      <div className="bg-white/95 dark:bg-gray-950/95 backdrop-blur-sm p-4 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-800 text-center min-w-[150px]">
        <p className="text-gray-500 dark:text-gray-400 text-sm font-medium mb-1">
          {label}
        </p>
        <p className="text-3xl font-bold text-gray-800 dark:text-white mb-1">
          {score}%
        </p>
        <span
          className={`text-xs font-bold px-2 py-1 rounded-full ${
            score >= 90
              ? "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400"
              : score >= 70
              ? "bg-teal-100 text-teal-700 dark:bg-teal-900/30 dark:text-teal-400"
              : "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400"
          }`}
        >
          {score >= 90
            ? "Excellent!"
            : score >= 70
            ? "Good Job"
            : "Keep Trying"}
        </span>
      </div>
    );
  }
  return null;
};

export default GavinResults;