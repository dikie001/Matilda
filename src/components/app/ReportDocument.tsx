/* eslint-disable @typescript-eslint/no-explicit-any */
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

// --- THEME ---
const theme = {
  primary: "#4F46E5", // Indigo 600
  secondary: "#64748B",
  success: "#10B981",
  successBg: "#ECFDF5",
  warning: "#F59E0B",
  warningBg: "#FFFBEB",
  white: "#FFFFFF",
  bg: "#F8FAFC",
  border: "#E2E8F0",
  text: "#334155",
};

const styles = StyleSheet.create({
  page: {
    padding: 0,
    backgroundColor: theme.white,
    fontFamily: "Helvetica",
    color: theme.text,
    paddingBottom: 40,
  },

  // --- HEADER ---
  headerContainer: {
    height: 190,
    marginBottom: 20,
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  },
  headerContent: {
    alignItems: "center",
    marginTop: 20,
  },
  avatarContainer: {
    width: 64,
    height: 64,
    borderRadius: 32,
    marginBottom: 12,
    borderWidth: 3,
    borderColor: "rgba(255,255,255,0.4)",
    overflow: "hidden",
    backgroundColor: theme.white,
    position: "relative",
    zIndex: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  avatarImage: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
  headerName: {
    fontFamily: "Times-Roman",
    fontSize: 34,
    color: theme.white,
    marginBottom: 4,
    textTransform: "capitalize",
    fontWeight: "bold",
  },
  headerAppTag: {
    fontSize: 10,
    color: "rgba(255,255,255,0.9)",
    textTransform: "uppercase",
    letterSpacing: 2,
    backgroundColor: "rgba(0,0,0,0.15)",
    paddingVertical: 5,
    paddingHorizontal: 15,
    borderRadius: 20,
  },

  // --- BODY ---
  body: {
    paddingHorizontal: 40,
  },

  // --- STATS ---
  statsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 30,
    marginTop: 10,
  },
  statCard: {
    width: "31%",
    backgroundColor: theme.bg,
    borderRadius: 12,
    padding: 16,
    borderWidth: 1,
    borderColor: theme.border,
  },
  statLabel: {
    fontSize: 8,
    color: theme.secondary,
    textTransform: "uppercase",
    fontWeight: "bold",
    letterSpacing: 0.5,
    marginBottom: 6,
  },
  statValue: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#0F172A",
  },

  // --- GRAPH ---
  graphContainer: {
    backgroundColor: theme.white,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: theme.border,
    padding: 20,
    marginBottom: 30,
    height: 260,
  },
  graphHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  graphTitle: {
    fontSize: 12,
    fontWeight: "bold",
    color: "#0F172A",
  },

  // --- TABLE ---
  tableSection: {
    borderRadius: 12,
    borderWidth: 1,
    borderColor: theme.border,
    overflow: "hidden",
  },
  tableHeader: {
    flexDirection: "row",
    backgroundColor: theme.bg,
    borderBottomWidth: 1,
    borderBottomColor: theme.border,
    paddingVertical: 10,
    paddingHorizontal: 12,
  },
  th: {
    fontSize: 9,
    fontWeight: "bold",
    color: theme.secondary,
    textTransform: "uppercase",
  },
  tableRow: {
    flexDirection: "row",
    paddingVertical: 10,
    paddingHorizontal: 12,
    borderBottomWidth: 1,
    borderBottomColor: theme.border,
    alignItems: "center",
  },
  td: {
    fontSize: 10,
    color: "#0F172A",
  },
  badge: {
    borderRadius: 12,
    paddingVertical: 2,
    paddingHorizontal: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  badgeText: {
    fontSize: 8,
    fontWeight: "bold",
  },

  // --- FOOTER ---
  footer: {
    position: "absolute",
    bottom: 30,
    left: 40,
    right: 40,
    flexDirection: "row",
    justifyContent: "space-between",
    borderTopWidth: 1,
    borderTopColor: theme.border,
    paddingTop: 10,
  },
  footerText: {
    fontSize: 8,
    color: theme.secondary,
  },
});

// --- MATH HELPERS ---
const svgPath = (points: any[], command: any) => {
  return points.reduce(
    (acc, point, i, a) =>
      i === 0 ? `M ${point[0]},${point[1]}` : `${acc} ${command(point, i, a)}`,
    ""
  );
};
const line = (pointA: any, pointB: any) => {
  const lengthX = pointB[0] - pointA[0];
  const lengthY = pointB[1] - pointA[1];
  return {
    length: Math.sqrt(Math.pow(lengthX, 2) + Math.pow(lengthY, 2)),
    angle: Math.atan2(lengthY, lengthX),
  };
};
const controlPoint = (
  current: any,
  previous: any,
  next: any,
  reverse?: any
) => {
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
  // 1. LIMIT TO LAST 15 TESTS
  const chartData = graphData.slice(-15);

  // 2. DIMENSIONS
  const width = 420;
  const height = 150;
  const paddingLeft = 30;
  const paddingBottom = 20;

  const maxScore = 100;

  const points = chartData.map((d, i) => {
    const div = chartData.length > 1 ? chartData.length - 1 : 1;
    const x = (i / div) * width + paddingLeft;
    const y = height - (d.score / maxScore) * height;
    return [x, y];
  });

  const pathD = svgPath(points, bezierCommand);
  const areaD = `${pathD} L ${
    width + paddingLeft
  },${height} L ${paddingLeft},${height} Z`;

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        {/* --- HEADER --- */}
        <View style={styles.headerContainer}>
          <Svg
            height="190"
            width="600"
            style={{ position: "absolute", top: 0, left: 0 }}
          >
            <Defs>
              <LinearGradient id="headerGrad" x1="0" y1="0" x2="1" y2="1">
                <Stop offset="0%" stopColor="#6366f1" />
                <Stop offset="100%" stopColor="#a855f7" />
              </LinearGradient>
            </Defs>
            <Path
              d="M0,0 L600,0 L600,140 Q300,210 0,140 Z"
              fill="url(#headerGrad)"
            />
          </Svg>

          <View style={styles.headerContent}>
            <View style={styles.avatarContainer}>
              <Image src="/images/logo.png" style={styles.avatarImage} />
            </View>

            <Text style={styles.headerName}>{userName}</Text>

            <View style={styles.headerAppTag}>
              <Text>{appName} Performance Report</Text>
            </View>
          </View>
        </View>

        {/* --- BODY --- */}
        <View style={styles.body}>
          {/* STATS */}
          <View style={styles.statsContainer}>
            <View
              style={[
                styles.statCard,
                { borderLeftWidth: 4, borderLeftColor: theme.primary },
              ]}
            >
              <Text style={styles.statLabel}>Tests Taken</Text>
              <Text style={styles.statValue}>{stats.testsDone}</Text>
            </View>
            <View
              style={[
                styles.statCard,
                { borderLeftWidth: 4, borderLeftColor: theme.warning },
              ]}
            >
              <Text style={styles.statLabel}>Average Score</Text>
              <Text style={styles.statValue}>{stats.averageScore}%</Text>
            </View>
            <View
              style={[
                styles.statCard,
                { borderLeftWidth: 4, borderLeftColor: theme.success },
              ]}
            >
              <Text style={styles.statLabel}>Rating</Text>
              <Text style={{ ...styles.statValue, color: theme.success }}>
                {stats.averageScore >= 80
                  ? "Expert"
                  : stats.averageScore >= 60
                  ? "Pro"
                  : "Rookie"}
              </Text>
            </View>
          </View>

          {/* GRAPH */}
          <View style={styles.graphContainer} wrap={false}>
            <View style={styles.graphHeader}>
              <Text style={styles.graphTitle}>Recent Progress</Text>
              <Text style={{ fontSize: 9, color: theme.secondary }}>
                Last 15 Tests
              </Text>
            </View>

            {chartData.length > 1 ? (
              <Svg height={height + paddingBottom + 10} width={width + 50}>
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

                {/* --- Y-AXIS LABELS (FIXED) --- */}
                {/* 100% */}
                <Text
                  x={0}
                  y={10}
                  style={{ fill: theme.secondary, fontSize: 9 }}
                >
                  100
                </Text>
                {/* 50% */}
                <Text
                  x={5}
                  y={height / 2}
                  style={{ fill: theme.secondary, fontSize: 9 }}
                >
                  50
                </Text>
                {/* 0% */}
                <Text
                  x={10}
                  y={height}
                  style={{ fill: theme.secondary, fontSize: 9 }}
                >
                  0
                </Text>

                {/* --- GRID LINES --- */}
                {[0, 0.5, 1].map((t, i) => (
                  <Line
                    key={i}
                    x1={paddingLeft}
                    y1={height * t}
                    x2={width + paddingLeft}
                    y2={height * t}
                    stroke={theme.border}
                    strokeDasharray="4 4"
                    strokeWidth={1}
                  />
                ))}

                {/* --- DATA PATHS --- */}
                <Path d={areaD} fill="url(#chartGrad)" />
                <Path
                  d={pathD}
                  stroke={theme.primary}
                  strokeWidth={2}
                  fill="none"
                />

                {/* --- X-AXIS LABELS (FIXED) --- */}
                {points.map(([x, y], i) => (
                  <React.Fragment key={i}>
                    <Circle
                      cx={x}
                      cy={y}
                      r={3}
                      fill={theme.white}
                      stroke={theme.primary}
                      strokeWidth={2}
                    />
                    <Text
                      x={x}
                      y={height + 15}
                      style={{
                        fontSize: 8,
                        fill: theme.secondary,
                        textAnchor: "middle",
                      }}
                    >
                      {`T${i + 1}`}
                    </Text>
                  </React.Fragment>
                ))}
              </Svg>
            ) : (
              <View
                style={{
                  flex: 1,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text style={{ fontSize: 10, color: theme.secondary }}>
                  Take more tests to see your curve.
                </Text>
              </View>
            )}
          </View>

          {/* TABLE */}
          <Text style={{ ...styles.graphTitle, marginBottom: 10 }}>
            Detailed History
          </Text>
          <View style={styles.tableSection}>
            <View style={styles.tableHeader}>
              <Text style={[styles.th, { width: "25%" }]}>Date</Text>
              <Text style={[styles.th, { width: "50%" }]}>Test Name</Text>
              <Text style={[styles.th, { width: "25%", textAlign: "right" }]}>
                Score
              </Text>
            </View>

            {/* Render ALL data in table */}
            {graphData.map((row, i) => {
              const isPass = row.score >= 70;
              const badgeBg = isPass ? theme.successBg : theme.warningBg;
              const badgeColor = isPass ? theme.success : theme.warning;

              return (
                <View
                  key={i}
                  style={[
                    styles.tableRow,
                    i % 2 === 0
                      ? { backgroundColor: theme.white }
                      : { backgroundColor: theme.bg },
                  ]}
                >
                  <Text
                    style={[
                      styles.td,
                      { width: "25%", color: theme.secondary },
                    ]}
                  >
                    {row.fullDate}
                  </Text>
                  <Text
                    style={[styles.td, { width: "50%", fontWeight: "bold" }]}
                  >
                    {row.name}
                  </Text>

                  <View style={{ width: "25%", alignItems: "flex-end" }}>
                    <View style={[styles.badge, { backgroundColor: badgeBg }]}>
                      <Text style={[styles.badgeText, { color: badgeColor }]}>
                        {row.score}% {isPass ? "PASS" : "LOW"}
                      </Text>
                    </View>
                  </View>
                </View>
              );
            })}
          </View>
        </View>

        {/* FOOTER */}
        <View style={styles.footer} fixed>
          <Text style={styles.footerText}>Generated via {appName}</Text>
          <Text
            style={styles.footerText}
            render={({ pageNumber, totalPages }) =>
              `${pageNumber} / ${totalPages}`
            }
          />
        </View>
      </Page>
    </Document>
  );
};

// Needed for Fragment usage
import React from "react";
