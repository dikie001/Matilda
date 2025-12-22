/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import {
  Document,
  Page,
  StyleSheet,
  Text,
  View,
  Svg,
  Path,
  Line,
  Defs,
  LinearGradient,
  Stop,
  Circle,
  Image,
} from "@react-pdf/renderer";

// --- THEME (PINK THEME) ---
const theme = {
  primary: "#DB2777", // Pink 600
  secondary: "#64748B",
  success: "#059669", // Emerald 600
  successBg: "#ECFDF5",
  warning: "#D97706", // Amber 600
  warningBg: "#FFFBEB",
  danger: "#E11D48", // Rose 600
  dangerBg: "#FFF1F2",
  blue: "#2563EB",
  white: "#FFFFFF",
  bg: "#FDF2F8", // Pink 50
  border: "#FBCFE8", // Pink 200
  text: "#1F2937",
};

// --- CBC GRADE LOGIC ---
const getCBCGrade = (score: number) => {
  if (score >= 85)
    return {
      grade: "EE",
      label: "Exceeding Expectations",
      color: "#9D174D", // Pink 800
    };
  if (score >= 75)
    return { grade: "ME", label: "Meeting Expectations", color: theme.primary };
  if (score >= 55)
    return {
      grade: "AE",
      label: "Approaching Expectations",
      color: "#BE185D", // Pink 700
    };
  return { grade: "BE", label: "Below Expectations", color: theme.danger };
};

const styles = StyleSheet.create({
  page: {
    padding: 0,
    backgroundColor: theme.white,
    fontFamily: "Helvetica",
    color: theme.text,
    paddingBottom: 60,
  },

  headerContainer: {
    height: 130,
    marginBottom: 10,
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  },
  headerContent: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    paddingHorizontal: 40,
    marginTop: 10,
  },
  userInfoSection: {
    flexDirection: "row",
    alignItems: "center",
    gap: 15,
  },
  avatarContainer: {
    width: 50,
    height: 50,
    borderRadius: 25,
    borderWidth: 2,
    borderColor: "rgba(255,255,255,0.8)",
    overflow: "hidden",
    backgroundColor: theme.white,
    alignItems: "center",
    justifyContent: "center",
  },
  avatarImage: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    borderRadius: 25,
  },
  userDetails: {
    justifyContent: "center",
  },
  headerName: {
    fontFamily: "Times-Roman",
    fontSize: 24,
    color: theme.white,
    marginBottom: 2,
    textTransform: "capitalize",
    fontWeight: "bold",
  },
  headerAppTag: {
    fontSize: 9,
    color: "rgba(255,255,255,0.9)",
    textTransform: "uppercase",
    letterSpacing: 1,
  },

  stampContainer: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 4,
    paddingHorizontal: 10,
    borderRadius: 6,
    borderWidth: 2,
    borderColor: theme.white,
    transform: "rotate(-5deg)",
  },
  stampGrade: {
    fontSize: 28,
    fontFamily: "Helvetica-Bold",
    fontWeight: "bold",
    color: theme.white,
    textAlign: "center",
  },
  stampLabel: {
    fontSize: 7,
    color: theme.white,
    textTransform: "uppercase",
    fontWeight: "bold",
    textAlign: "center",
    marginTop: -2,
  },

  body: {
    paddingHorizontal: 40,
  },

  statsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 15,
  },
  statCard: {
    width: "48%",
    backgroundColor: theme.bg,
    borderRadius: 8,
    padding: 12,
    borderWidth: 1,
    borderColor: theme.border,
  },
  statLabel: {
    fontSize: 8,
    color: theme.secondary,
    textTransform: "uppercase",
    fontWeight: "bold",
    marginBottom: 4,
  },
  statValue: {
    fontSize: 18,
    fontWeight: "bold",
    color: theme.primary,
  },

  graphContainer: {
    backgroundColor: theme.white,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: theme.border,
    padding: 10,
    marginBottom: 15,
    height: 180,
  },
  graphHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
    paddingHorizontal: 5,
  },
  graphTitle: {
    fontSize: 10,
    fontWeight: "bold",
    color: theme.text,
  },

  tableSection: {
    borderRadius: 8,
    borderWidth: 1,
    borderColor: theme.border,
    overflow: "hidden",
    marginBottom: 20,
  },
  tableHeader: {
    flexDirection: "row",
    backgroundColor: theme.bg,
    borderBottomWidth: 1,
    borderBottomColor: theme.border,
    paddingVertical: 8,
    paddingHorizontal: 10,
  },
  th: {
    fontSize: 8,
    fontWeight: "bold",
    color: theme.primary,
    textTransform: "uppercase",
  },
  tableRow: {
    flexDirection: "row",
    paddingVertical: 6,
    paddingHorizontal: 10,
    borderBottomWidth: 1,
    borderBottomColor: theme.border,
    alignItems: "center",
  },
  td: {
    fontSize: 9,
    color: theme.text,
  },
  badge: {
    borderRadius: 8,
    paddingVertical: 2,
    paddingHorizontal: 6,
    alignItems: "center",
    justifyContent: "center",
  },
  badgeText: {
    fontSize: 7,
    fontWeight: "bold",
  },

  footer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: 40,
    backgroundColor: theme.bg,
    borderTopWidth: 1,
    borderTopColor: theme.border,
  },
  brandStrip: {
    height: 3,
    width: "100%",
    backgroundColor: theme.primary,
  },
  footerContent: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 40,
  },
  footerText: {
    fontSize: 7,
    color: theme.secondary,
  },
  footerBold: {
    color: theme.primary,
    fontWeight: "bold",
  },

  // ---  ABOUT SECTION ---
  aboutSection: {
    backgroundColor: theme.bg,
    borderRadius: 8,
    padding: 12,
    marginBottom: 15,
    marginHorizontal: 40,
    borderLeftWidth: 3,
    borderLeftColor: theme.primary,
  },
  aboutTitle: {
    fontSize: 10,
    fontWeight: "bold",
    color: theme.primary,
    marginBottom: 4,
  },
  aboutText: {
    fontSize: 9,
    color: theme.secondary,
    lineHeight: 1.4,
  },
});

// --- MATH HELPERS ---
const svgPath = (points: any[], command: any) =>
  points.reduce(
    (acc, point, i, a) =>
      i === 0 ? `M ${point[0]},${point[1]}` : `${acc} ${command(point, i, a)}`,
    ""
  );
const line = (pointA: any, pointB: any) => {
  const lengthX = pointB[0] - pointA[0];
  const lengthY = pointB[1] - pointA[1];
  return {
    length: Math.sqrt(Math.pow(lengthX, 2) + Math.pow(lengthY, 2)),
    angle: Math.atan2(lengthY, lengthX),
  };
};
const controlPoint = (current: any, previous: any, next: any, reverse?: any) => {
  const p = previous || current;
  const n = next || current;
  const smoothing = 0.2;
  const o = line(p, n);
  const angle = o.angle + (reverse ? Math.PI : 0);
  const length = o.length * smoothing;
  const x = current[0] + Math.cos(angle) * length;
  const y = current[1] + Math.sin(angle) * length;
  return [x, y];
};
const bezierCommand = (point: any, i: any, a: any) => {
  const [cpsX, cpsY] = controlPoint(a[i - 1], a[i - 2], point);
  const [cpeX, cpeY] = controlPoint(point, a[i - 1], a[i + 1], true);
  return `C ${cpsX},${cpsY} ${cpeX},${cpeY} ${point[0]},${point[1]}`;
};

interface ReportProps {
  stats: any;
  graphData: any[];
  userName?: string;
  appName?: string;
}

export const ReportDocument = ({
  stats,
  graphData,
  userName = "Matilda Awino",
  appName = "Brillia",
}: ReportProps) => {
  const chartData = graphData.slice(-15);
  const cbcInfo = getCBCGrade(stats.averageScore);
  const reportId = `REF-${Math.floor(Math.random() * 1000000000)}`;

  const containerWidth = 460;
  const svgHeight = 140;
  const paddingLeft = 25;
  const paddingRight = 10;
  const paddingBottom = 20;
  const paddingTop = 15;
  const graphWidth = containerWidth - paddingLeft - paddingRight;
  const graphHeight = svgHeight - paddingBottom - paddingTop;
  const maxScore = 100;

  const points = chartData.map((d, i) => {
    const div = chartData.length > 1 ? chartData.length - 1 : 1;
    const x = (i / div) * graphWidth + paddingLeft;
    const y = paddingTop + graphHeight - (d.score / maxScore) * graphHeight;
    return [x, y];
  });

  const pathD = svgPath(points, bezierCommand);
  const areaD = `${pathD} L ${graphWidth + paddingLeft},${paddingTop + graphHeight
    } L ${paddingLeft},${paddingTop + graphHeight} Z`;

  const today = new Date().toLocaleDateString("en-KE", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        {/* HEADER */}
        <View style={styles.headerContainer}>
          <Svg
            height="130"
            width="600"
            style={{ position: "absolute", top: 0, left: 0 }}
          >
            <Defs>
              <LinearGradient id="headerGrad" x1="0" y1="0" x2="1" y2="1">
                <Stop offset="0%" stopColor="#ec4899" />
                <Stop offset="100%" stopColor="#db2777" />
              </LinearGradient>
            </Defs>
            <Path
              d="M0,0 L600,0 L600,90 Q300,160 0,90 Z"
              fill="url(#headerGrad)"
            />
          </Svg>

          <View style={styles.headerContent}>
            <View style={styles.userInfoSection}>
              <View style={styles.avatarContainer}>
                <Image src="/images/matilda.png" style={styles.avatarImage} />
              </View>
              <View style={styles.userDetails}>
                <Text style={styles.headerName}>{userName}</Text>
                <Text style={styles.headerAppTag}>
                  {appName} Comprehensive Report
                </Text>
              </View>
            </View>
            <View
              style={[
                styles.stampContainer,
                { backgroundColor: cbcInfo.color },
              ]}
            >
              <Text style={styles.stampGrade}>{cbcInfo.grade}</Text>
              <Text style={styles.stampLabel}>{cbcInfo.label}</Text>
            </View>
          </View>
        </View>

        {/* ABOUT */}
        <View style={styles.aboutSection}>
          <Text style={styles.aboutTitle}>Executive Summary for {userName}</Text>
          <Text style={styles.aboutText}>
            This document serves as a comprehensive record of your learning journey on {appName}.
            It details your assessment history, visualizes your performance trends over the last 15 tests,
            and provides an analyzed CBC grade based on your cumulative average.
          </Text>
        </View>
        <View style={styles.body}>
          <View style={styles.statsContainer}>
            <View
              style={[
                styles.statCard,
                { borderLeftWidth: 3, borderLeftColor: theme.primary },
              ]}
            >
              <Text style={styles.statLabel}>Tests Taken</Text>
              <Text style={styles.statValue}>{stats.testsDone}</Text>
            </View>
            <View
              style={[
                styles.statCard,
                { borderLeftWidth: 3, borderLeftColor: theme.warning },
              ]}
            >
              <Text style={styles.statLabel}>Average Score</Text>
              <Text style={styles.statValue}>{stats.averageScore}%</Text>
            </View>
          </View>

          <View style={styles.graphContainer} wrap={false}>
            <View style={styles.graphHeader}>
              <Text style={styles.graphTitle}>Progress Curve</Text>
              <Text style={{ fontSize: 8, color: theme.secondary }}>
                Last 15 Tests
              </Text>
            </View>
            {chartData.length > 1 ? (
              <Svg height={svgHeight} width="100%">
                <Defs>
                  <LinearGradient id="chartGrad" x1="0" y1="0" x2="0" y2="1">
                    <Stop
                      offset="0%"
                      stopColor={theme.primary}
                      stopOpacity={0.2}
                    />
                    <Stop
                      offset="100%"
                      stopColor={theme.primary}
                      stopOpacity={0}
                    />
                  </LinearGradient>
                </Defs>
                <Text x={0} y={paddingTop + 3} style={{ fill: theme.secondary, fontSize: 8 }}>100</Text>
                <Text x={5} y={paddingTop + graphHeight / 2} style={{ fill: theme.secondary, fontSize: 8 }}>50</Text>
                <Text x={10} y={paddingTop + graphHeight} style={{ fill: theme.secondary, fontSize: 8 }}>0</Text>
                {[0, 0.5, 1].map((t, i) => (
                  <Line
                    key={i}
                    x1={paddingLeft}
                    y1={paddingTop + graphHeight * t}
                    x2={graphWidth + paddingLeft}
                    y2={paddingTop + graphHeight * t}
                    stroke={theme.border}
                    strokeDasharray="3 3"
                    strokeWidth={1}
                  />
                ))}
                <Path d={areaD} fill="url(#chartGrad)" />
                <Path d={pathD} stroke={theme.primary} strokeWidth={2} fill="none" />
                {points.map(([x, y], i) => (
                  <React.Fragment key={i}>
                    <Circle cx={x} cy={y} r={2.5} fill={theme.white} stroke={theme.primary} strokeWidth={1.5} />
                    <Text x={x} y={svgHeight - 5} style={{ fontSize: 7, fill: theme.secondary, textAnchor: "middle" }}>{`T${i + 1}`}</Text>
                  </React.Fragment>
                ))}
              </Svg>
            ) : (
              <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                <Text style={{ fontSize: 10, color: theme.secondary }}>No data.</Text>
              </View>
            )}
          </View>

          <Text style={{ fontSize: 10, fontWeight: "bold", color: "#0F172A", marginBottom: 6 }}>History</Text>
          <View style={styles.tableSection}>
            <div style={styles.tableHeader}>
              <Text style={[styles.th, { width: "25%" }]}>Date</Text>
              <Text style={[styles.th, { width: "50%" }]}>Test Name</Text>
              <Text style={[styles.th, { width: "25%", textAlign: "right" }]}>Score</Text>
            </div>
            {graphData.map((row, i) => {
              const isPass = row.score >= 70;
              return (
                <View key={i} style={[styles.tableRow, i % 2 === 0 ? { backgroundColor: theme.white } : { backgroundColor: theme.bg }]}>
                  <Text style={[styles.td, { width: "25%", color: theme.secondary }]}>{row.fullDate}</Text>
                  <Text style={[styles.td, { width: "50%", fontWeight: "bold" }]}>{row.name}</Text>
                  <View style={{ width: "25%", alignItems: "flex-end" }}>
                    <View style={[styles.badge, { backgroundColor: isPass ? theme.successBg : theme.warningBg }]}>
                      <Text style={[styles.badgeText, { color: isPass ? theme.success : theme.primary }]}>
                        {row.score}% {isPass ? "PASS" : "LOW"}
                      </Text>
                    </View>
                  </View>
                </View>
              );
            })}
          </View>
        </View>

        <View style={styles.footer} fixed>
          <View style={styles.brandStrip} />
          <View style={styles.footerContent}>
            <Text style={styles.footerText}>ID: {reportId} | {today}</Text>
            <Text style={styles.footerText}>Prepared for <Text style={styles.footerBold}>{userName}</Text></Text>
            <Text style={styles.footerText} render={({ pageNumber, totalPages }) => `${pageNumber}/${totalPages}`} />
          </View>
        </View>
      </Page>
    </Document>
  );
};