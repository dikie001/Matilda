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
} from "@react-pdf/renderer";

// --- MODERN PALETTE (Tailwind Slate/Indigo) ---
const theme = {
  primary: "#4F46E5", // Indigo 600
  primaryLight: "#EEF2FF", // Indigo 50
  secondary: "#64748B", // Slate 500
  success: "#10B981", // Emerald 500
  successBg: "#ECFDF5",
  warning: "#F59E0B", // Amber 500
  warningBg: "#FFFBEB",
  danger: "#EF4444", // Red 500
  dangerBg: "#FEF2F2",
  dark: "#0F172A", // Slate 900
  text: "#334155", // Slate 700
  muted: "#94A3B8", // Slate 400
  border: "#E2E8F0", // Slate 200
  bg: "#F8FAFC", // Slate 50
  white: "#FFFFFF",
};

const styles = StyleSheet.create({
  page: {
    padding: 40,
    backgroundColor: theme.white,
    fontFamily: "Helvetica",
    color: theme.text,
  },

  // --- UPDATED CENTERED HEADER ---
  header: {
    marginBottom: 40,
    flexDirection: "column",
    alignItems: "center", // Center horizontally
    justifyContent: "center",
    borderBottomWidth: 1,
    borderBottomColor: theme.border,
    paddingBottom: 25,
  },
  headerUser: {
    fontSize: 32, // Large and focused
    fontWeight: "heavy", // Boldest font
    color: theme.primary, // Indigo color
    letterSpacing: -0.5,
    marginBottom: 6,
    textAlign: "center",
    textTransform: "uppercase", // Optional: Makes name stand out more
  },
  headerSubDetail: {
    fontSize: 10,
    color: theme.secondary,
    textTransform: "uppercase",
    letterSpacing: 2, // Wide spacing for elegance
    fontWeight: "bold",
    marginBottom: 4,
  },
  headerDate: {
    fontSize: 9,
    color: theme.muted,
    marginTop: 4,
  },

  // --- STATS CARDS (Untouched) ---
  statsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 30,
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
    color: theme.dark,
  },

  // --- GRAPH (Untouched) ---
  graphContainer: {
    backgroundColor: theme.white,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: theme.border,
    padding: 20,
    marginBottom: 30,
    height: 220,
  },
  graphHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 15,
  },
  graphTitle: {
    fontSize: 12,
    fontWeight: "bold",
    color: theme.dark,
  },

  // --- MODERN TABLE (Untouched) ---
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
    color: theme.dark,
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

  // --- FOOTER (Untouched) ---
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
    color: theme.muted,
  },
});

// --- MATH HELPERS FOR SMOOTH CURVES (Bezier) ---
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
  userName = "Matilda Awino", // Default Name
  appName = "Brillia", // Default App Name
}: ReportProps) => {
  // Logic: Graph shows last 15, Table shows all.
  const chartData = graphData.slice(-15);

  // Graph Dimensions
  const width = 450;
  const height = 150;
  const paddingX = 10;
  const paddingY = 10;
  const maxScore = 100;

  // Generate Points [x, y]
  const points = chartData.map((d, i) => {
    const x = (i / Math.max(chartData.length - 1, 1)) * width + paddingX;
    const y = height - (d.score / maxScore) * height + paddingY;
    return [x, y];
  });

  // Generate Smooth Path
  const pathD = svgPath(points, bezierCommand);
  const areaD = `${pathD} L ${width + paddingX},${
    height + paddingY
  } L ${paddingX},${height + paddingY} Z`;

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        {/* --- NEW HEADER STRUCTURE --- */}
        <View style={styles.header}>
          {/* Main Focus: Name */}
          <Text style={styles.headerUser}>{userName}</Text>

          {/* Sub Detail: App Name */}
          <Text style={styles.headerSubDetail}>
            REPORT GENERATED BY {appName}
          </Text>

          {/* Date */}
          <Text style={styles.headerDate}>
            {new Date().toLocaleDateString(undefined, {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </Text>
        </View>

        {/* STATS CARDS */}
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
            <Text style={styles.graphTitle}>Performance Curve</Text>
            <Text style={{ fontSize: 9, color: theme.muted }}>
              Last 15 Tests
            </Text>
          </View>

          {chartData.length > 1 ? (
            <Svg height={height + 40} width={width + 20}>
              <Defs>
                <LinearGradient id="gradient" x1="0" y1="0" x2="0" y2="1">
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

              {/* Grid Lines */}
              {[0, 0.25, 0.5, 0.75, 1].map((t, i) => (
                <Line
                  key={i}
                  x1={paddingX}
                  y1={height * t + paddingY}
                  x2={width + paddingX}
                  y2={height * t + paddingY}
                  stroke={theme.border}
                  strokeDasharray="4 4"
                  strokeWidth={1}
                />
              ))}

              {/* Area & Line */}
              <Path d={areaD} fill="url(#gradient)" />
              <Path
                d={pathD}
                stroke={theme.primary}
                strokeWidth={2}
                fill="none"
              />

              {/* Dots */}
              {points.map(([x, y], i) => (
                <Circle
                  key={i}
                  cx={x}
                  cy={y}
                  r={3}
                  fill={theme.white}
                  stroke={theme.primary}
                  strokeWidth={2}
                />
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
              <Text style={{ fontSize: 10, color: theme.muted }}>
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
                  style={[styles.td, { width: "25%", color: theme.secondary }]}
                >
                  {row.fullDate}
                </Text>
                <Text style={[styles.td, { width: "50%", fontWeight: "bold" }]}>
                  {row.name}
                </Text>

                {/* Score Pill */}
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
