/* eslint-disable @typescript-eslint/no-explicit-any */
import {
    Document,
    Page,
    StyleSheet,
    Text,
    View
} from "@react-pdf/renderer";

// --- STYLES ---
const styles = StyleSheet.create({
  page: {
    paddingBottom: 40,
    paddingTop: 40,
    paddingHorizontal: 40,
    backgroundColor: "#FFFFFF",
    fontFamily: "Helvetica",
    color: "#1f2937",
  },
  // Header
  headerSection: {
    marginBottom: 30,
    borderBottomWidth: 2,
    borderBottomColor: "#4f46e5", // Indigo-600
    paddingBottom: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
  },
  appTitle: {
    fontSize: 28,
    fontWeight: "heavy",
    color: "#4f46e5",
    letterSpacing: -0.5,
  },
  reportTitle: {
    fontSize: 10,
    color: "#6b7280",
    textTransform: "uppercase",
    letterSpacing: 2,
    marginBottom: 2,
  },
  userInfo: {
    textAlign: "right",
  },
  userName: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#111827",
  },
  dateText: {
    fontSize: 9,
    color: "#9ca3af",
    marginTop: 2,
  },

  // Stats Grid
  statsGrid: {
    flexDirection: "row",
    gap: 12,
    marginBottom: 30,
  },
  statCard: {
    flex: 1,
    padding: 12,
    backgroundColor: "#f8fafc", // Slate-50
    borderLeftWidth: 3,
    borderColor: "#e2e8f0",
    borderRadius: 4,
  },
  statValue: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#1f2937",
  },
  statLabel: {
    fontSize: 8,
    color: "#64748b",
    textTransform: "uppercase",
    fontWeight: "bold",
    marginTop: 4,
  },

  // Chart Section
  chartSection: {
    marginBottom: 30,
    padding: 15,
    backgroundColor: "#ffffff",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#f1f5f9",
  },
  chartTitle: {
    fontSize: 11,
    fontWeight: "bold",
    marginBottom: 15,
    color: "#334155",
  },
  chartContainer: {
    height: 120,
    flexDirection: "row",
    alignItems: "flex-end",
    gap: 6,
  },
  barCol: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-end",
  },
  bar: {
    width: "100%",
    borderRadius: 2,
    opacity: 0.9,
  },
  barText: {
    fontSize: 6,
    color: "#64748b",
    marginTop: 4,
    textAlign: "center",
  },

  // Table Section
  tableContainer: {
    marginTop: 10,
    width: "100%",
    borderWidth: 1,
    borderColor: "#e2e8f0",
    borderRadius: 6,
    overflow: "hidden",
  },
  tableHeader: {
    flexDirection: "row",
    backgroundColor: "#f1f5f9", // Slate-100
    paddingVertical: 8,
    paddingHorizontal: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#e2e8f0",
  },
  tableHeaderCell: {
    fontSize: 9,
    fontWeight: "bold",
    color: "#475569",
    textTransform: "uppercase",
  },
  tableRow: {
    flexDirection: "row",
    paddingVertical: 8,
    paddingHorizontal: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#f1f5f9",
  },
  tableRowEven: {
    backgroundColor: "#f8fafc",
  },
  tableCell: {
    fontSize: 9,
    color: "#334155",
  },
  
  // Footer
  footer: {
    position: "absolute",
    bottom: 20,
    left: 40,
    right: 40,
    borderTopWidth: 1,
    borderTopColor: "#e2e8f0",
    paddingTop: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  footerText: {
    fontSize: 8,
    color: "#94a3b8",
  },
});

const getScoreColor = (score: number) => {
  if (score >= 90) return "#10b981"; // Emerald
  if (score >= 70) return "#6366f1"; // Indigo
  if (score >= 50) return "#f59e0b"; // Amber
  return "#ef4444"; // Red
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
  userName = "Dikie", 
  appName = "Learning App" 
}: ReportProps) => {
  
  // Logic: For the visual graph, only show the last 15 items so bars don't get too thin.
  // The TABLE will show all data.
  const chartData = graphData.length > 15 ? graphData.slice(-15) : graphData;

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        
        {/* --- HEADER (Fixed on all pages) --- */}
        <View style={styles.headerSection} fixed>
          <View>
            <Text style={styles.reportTitle}>Performance Report</Text>
            <Text style={styles.appTitle}>{appName}</Text>
          </View>
          <View style={styles.userInfo}>
            <Text style={styles.userName}>{userName}</Text>
            <Text style={styles.dateText}>
              {new Date().toLocaleDateString("en-US", { 
                year: 'numeric', month: 'long', day: 'numeric' 
              })}
            </Text>
          </View>
        </View>

        {/* --- STATS SUMMARY --- */}
        <View style={styles.statsGrid}>
          <View style={[styles.statCard, { borderColor: "#6366f1" }]}>
            <Text style={styles.statLabel}>Tests Completed</Text>
            <Text style={styles.statValue}>{stats.testsDone}</Text>
          </View>
          <View style={[styles.statCard, { borderColor: "#f59e0b" }]}>
            <Text style={styles.statLabel}>Average Score</Text>
            <Text style={styles.statValue}>{stats.averageScore}%</Text>
          </View>
          <View style={[styles.statCard, { borderColor: "#10b981" }]}>
            <Text style={styles.statLabel}>Performance Rating</Text>
            <Text style={styles.statValue}>
              {stats.averageScore >= 90 ? "Excellent" : stats.averageScore >= 70 ? "Good" : "Average"}
            </Text>
          </View>
        </View>

        {/* --- CHART (Visual Highlight) --- */}
        <View style={styles.chartSection} wrap={false}>
          <Text style={styles.chartTitle}>
            Recent Progress (Last {chartData.length} Tests)
          </Text>
          {chartData.length > 0 ? (
            <View style={styles.chartContainer}>
              {chartData.map((item: any, i: number) => (
                <View key={i} style={styles.barCol}>
                  <Text style={{fontSize: 7, marginBottom: 2, color: getScoreColor(item.score)}}>{item.score}</Text>
                  <View 
                    style={[
                      styles.bar, 
                      { 
                        height: `${Math.max(item.score, 2)}%`, // Ensure 0 score has small height
                        backgroundColor: getScoreColor(item.score)
                      }
                    ]} 
                  />
                  <Text style={styles.barText}>{`T${graphData.length - chartData.length + i + 1}`}</Text>
                </View>
              ))}
            </View>
          ) : (
            <Text style={{fontSize: 10, color: '#94a3b8', textAlign: 'center', padding: 20}}>
              Not enough data for visualization.
            </Text>
          )}
        </View>

        {/* --- DETAILED DATA TABLE --- */}
        <Text style={{ fontSize: 12, fontWeight: 'bold', marginBottom: 10, color: '#334155' }}>
          Complete History
        </Text>
        
        <View style={styles.tableContainer}>
          {/* Table Header */}
          <View style={styles.tableHeader}>
            <Text style={[styles.tableHeaderCell, { width: '15%' }]}>Date</Text>
            <Text style={[styles.tableHeaderCell, { width: '55%' }]}>Test Name</Text>
            <Text style={[styles.tableHeaderCell, { width: '15%', textAlign: 'center' }]}>Score</Text>
            <Text style={[styles.tableHeaderCell, { width: '15%', textAlign: 'right' }]}>Status</Text>
          </View>

          {/* Table Body - Maps all data, no matter how long */}
          {graphData.map((item, index) => (
            <View 
              key={index} 
              style={[
                styles.tableRow, 
                index % 2 !== 0 ? styles.tableRowEven : {} // Zebra striping
              ]}
            >
              <Text style={[styles.tableCell, { width: '15%' }]}>{item.fullDate}</Text>
              <Text style={[styles.tableCell, { width: '55%' }]}>{item.name}</Text>
              <Text style={[styles.tableCell, { width: '15%', textAlign: 'center', fontWeight: 'bold' }]}>
                {item.score}%
              </Text>
              <Text 
                style={[
                  styles.tableCell, 
                  { width: '15%', textAlign: 'right', fontWeight: 'bold', color: getScoreColor(item.score) }
                ]}
              >
                {item.score >= 70 ? "Pass" : "Revise"}
              </Text>
            </View>
          ))}
        </View>

        {/* --- FOOTER (Fixed on all pages) --- */}
        <View style={styles.footer} fixed>
          <Text style={styles.footerText}>Generated by {appName}</Text>
          <Text style={styles.footerText} render={({ pageNumber, totalPages }) => (
            `${pageNumber} / ${totalPages}`
          )} />
        </View>

      </Page>
    </Document>
  );
};