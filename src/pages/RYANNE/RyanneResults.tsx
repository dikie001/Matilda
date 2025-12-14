/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import Navbar from "@/components/app/Navbar";
import { Button } from "@/components/ui/button";
import { PDFDownloadLink } from "@react-pdf/renderer";
import { Download, FileCheck, Loader2, TrendingUp, Trophy } from "lucide-react";
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
import { ReportDocument } from "./ReportDocument";

// ==========================================
// 🛠️ CONFIGURATION SECTION
// ==========================================

const USER_ID = "RYANNE";

const STORAGE_CONFIG = {
  TEST_RESULTS: `${USER_ID}_TEST_RESULTS`,
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
  averageScore: number;
}

// --- THEME UTILS (BLUE THEME) ---
const getColorForScore = (score: number) => {
  if (score >= 90) return "#2563EB"; // blue-600 (Excellent)
  if (score >= 70) return "#4F46E5"; // indigo-600 (Good)
  if (score >= 50) return "#F59E0B"; // amber-500 (Average)
  return "#EF4444"; // red-500 (Needs Improvement)
};

const RyanneResults = () => {
  const [loading, setLoading] = useState(true);
  const [stats, setStats] = useState<UserStats>({
    testsDone: 0,
    averageScore: 0,
  });
  const [graphData, setGraphData] = useState<any[]>([]);
  // Used to prevent hydration errors with PDF generation in Next.js
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    // 1. Fetch Data
    const rawResults = localStorage.getItem(STORAGE_CONFIG.TEST_RESULTS);

    // 2. Parse Data
    const results: TestResult[] = rawResults ? JSON.parse(rawResults) : [];

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
      averageScore: avgScore,
    });

    // 4. Format Graph Data
    const formattedGraphData = results.map((result, index) => {
      let dateDisplay = "N/A";

      if (result.date) {
        const safeDateString = result.date.toString().replace(/-/g, "/");
        const dateObj = new Date(safeDateString);

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
        fullDate: dateDisplay,
      };
    });

    setGraphData(formattedGraphData);
    setLoading(false);
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-950">
        <Loader2 className="w-8 h-8 animate-spin text-blue-500" />
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
            <h1 className="text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-500 to-cyan-500">
              Ryanne's Results
            </h1>
            <p className="mt-2 text-gray-600 dark:text-gray-400">
              Overview of tests and performance milestones.
            </p>
          </div>

          {/* PDF DOWNLOAD BUTTON */}
          {isClient && graphData.length > 0 && (
            <PDFDownloadLink
              document={
                <ReportDocument
                  stats={stats}
                  graphData={graphData}
                  userName="Ryanne Ochieng"
                />
              }
              fileName="Ryanne's Report.pdf"
            >
              {({ loading: pdfLoading }) => (
                <Button
                  className="bg-blue-600 cursor-pointer hover:bg-blue-700 text-white shadow-lg shadow-blue-200 dark:shadow-none transition-all border-none"
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
            color="blue"
          />
          <StatCard
            title="Average Score"
            value={`${stats.averageScore}%`}
            icon={Trophy}
            color="indigo"
          />
        </div>

        {/* --- MAIN GRAPH: MARKS PER TEST --- */}
        <div className="bg-white dark:bg-gray-900 rounded-3xl p-6 sm:p-8 shadow-xl shadow-blue-100/50 dark:shadow-none border border-gray-100 dark:border-gray-800">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                <TrendingUp className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>
              <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">
                Performance History
              </h2>
            </div>

            {/* Legend for color coding */}
            <div className="hidden sm:flex gap-4 text-xs font-medium text-gray-500 dark:text-gray-400">
              <div className="flex items-center gap-1">
                <div className="w-2 h-2 rounded-full bg-blue-600" /> Excellent
              </div>
              <div className="flex items-center gap-1">
                <div className="w-2 h-2 rounded-full bg-indigo-600" /> Good
              </div>
              <div className="flex items-center gap-1">
                <div className="w-2 h-2 rounded-full bg-amber-500" /> Average
              </div>
              <div className="flex items-center gap-1">
                <div className="w-2 h-2 rounded-full bg-red-500" /> Low
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
    blue: {
      bg: "bg-gradient-to-br from-white to-blue-50 dark:from-gray-900 dark:to-blue-950/20",
      border: "border-blue-100 dark:border-blue-900/40",
      iconColor: "text-blue-600 dark:text-blue-400",
      shadow: "shadow-blue-100/40 dark:shadow-none",
      ring: "ring-blue-50 dark:ring-blue-900/20",
    },
    indigo: {
      bg: "bg-gradient-to-br from-white to-indigo-50 dark:from-gray-900 dark:to-indigo-950/20",
      border: "border-indigo-100 dark:border-indigo-900/40",
      iconColor: "text-indigo-600 dark:text-indigo-400",
      shadow: "shadow-indigo-100/40 dark:shadow-none",
      ring: "ring-indigo-50 dark:ring-indigo-900/20",
    },
    amber: {
      bg: "bg-gradient-to-br from-white to-amber-50 dark:from-gray-900 dark:to-amber-950/20",
      border: "border-amber-100 dark:border-amber-900/40",
      iconColor: "text-amber-600 dark:text-amber-400",
      shadow: "shadow-amber-100/40 dark:shadow-none",
      ring: "ring-amber-50 dark:ring-amber-900/20",
    },
  };

  const s = styles[color] || styles.blue;

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
              ? "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400"
              : score >= 70
              ? "bg-indigo-100 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-400"
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

export default RyanneResults;