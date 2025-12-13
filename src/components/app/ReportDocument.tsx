/* eslint-disable @typescript-eslint/no-explicit-any */
import { Document, Page, StyleSheet, Text, View } from "@react-pdf/renderer";

// --- PDF STYLES ---
const styles = StyleSheet.create({
  page: {
    padding: 0,
    backgroundColor: "#FFFFFF",
    fontFamily: "Helvetica",
  },
  headerSection: {
    backgroundColor: "#4f46e5", // Indigo-600
    padding: 30,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  headerTitle: {
    fontSize: 24,
    color: "#FFFFFF",
    fontWeight: "bold",
    letterSpacing: 1,
  },
  headerDate: {
    fontSize: 10,
    color: "#e0e7ff",
    marginTop: 4,
  },
  body: {
    padding: 30,
  },
  sectionTitle: {
    fontSize: 14,
    color: "#374151", // Gray-700
    fontWeight: "bold",
    marginTop: 20,
    marginBottom: 10,
    textTransform: "uppercase",
    letterSpacing: 1,
    borderBottomWidth: 1,
    borderBottomColor: "#e5e7eb",
    paddingBottom: 5,
  },
  statsGrid: {
    flexDirection: "row",
    gap: 15,
    marginBottom: 20,
  },
  statCard: {
    flex: 1,
    padding: 15,
    backgroundColor: "#f9fafb", // Gray-50
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#e5e7eb",
  },
  statValue: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#111827",
  },
  statLabel: {
    fontSize: 9,
    color: "#6b7280",
    textTransform: "uppercase",
    marginTop: 4,
  },
  chartContainer: {
    marginTop: 10,
    height: 200,
    flexDirection: "row",
    alignItems: "flex-end",
    gap: 8,
    paddingLeft: 10,
    borderLeftWidth: 1,
    borderLeftColor: "#e5e7eb",
    borderBottomWidth: 1,
    borderBottomColor: "#e5e7eb",
  },
  barContainer: {
    alignItems: "center",
    flex: 1,
  },
  bar: {
    width: "100%",
    minWidth: 15,
    borderRadius: 3,
  },
  barLabel: {
    fontSize: 8,
    color: "#6b7280",
    marginTop: 4,
    textAlign: "center",
  },
  scoreLabel: {
    fontSize: 8,
    marginBottom: 2,
    color: "#374151",
    fontWeight: "bold",
  },
  footer: {
    position: "absolute",
    bottom: 30,
    left: 30,
    right: 30,
    borderTopWidth: 1,
    borderTopColor: "#e5e7eb",
    paddingTop: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  footerText: {
    fontSize: 8,
    color: "#9ca3af",
  },
});

// Helper for bar colors
const getBarColor = (score: number) => {
  if (score >= 90) return "#34d399"; // Emerald
  if (score >= 70) return "#6366f1"; // Indigo
  if (score >= 50) return "#fbbf24"; // Amber
  return "#f87171"; // Red
};

interface ReportProps {
  stats: any;
  graphData: any[];
}

export const ReportDocument = ({ stats, graphData }: ReportProps) => (
  <Document>
    <Page size="A4" style={styles.page}>
      {/* HEADER */}
      <View style={styles.headerSection}>
        <View>
          <Text style={styles.headerTitle}>Learning Report</Text>
          <Text style={styles.headerDate}>Generated on {new Date().toLocaleDateString()}</Text>
        </View>
        <View style={{ alignItems: 'flex-end' }}>
          <Text style={{ color: 'white', fontSize: 10, opacity: 0.8 }}>DIKIE'S PERFORMANCE</Text>
        </View>
      </View>

      <View style={styles.body}>
        {/* STATS */}
        <Text style={styles.sectionTitle}>Overview</Text>
        <View style={styles.statsGrid}>
          <View style={styles.statCard}>
            <Text style={styles.statValue}>{stats.testsDone}</Text>
            <Text style={styles.statLabel}>Tests Taken</Text>
          </View>
          <View style={styles.statCard}>
            <Text style={styles.statValue}>{stats.averageScore}%</Text>
            <Text style={styles.statLabel}>Avg. Score</Text>
          </View>
          <View style={styles.statCard}>
            <Text style={styles.statValue}>
               {stats.averageScore >= 90 ? "Excellent" : stats.averageScore >= 70 ? "Good" : "Average"}
            </Text>
            <Text style={styles.statLabel}>Overall Rating</Text>
          </View>
        </View>

        {/* VISUALIZATION (Simplified Bar Chart for PDF) */}
        <Text style={styles.sectionTitle}>Progress History</Text>
        
        {graphData.length > 0 ? (
          <View style={styles.chartContainer}>
            {graphData.slice(-10).map((item, index) => (
              <View key={index} style={styles.barContainer}>
                 <Text style={styles.scoreLabel}>{item.score}</Text>
                 <View 
                    style={[
                      styles.bar, 
                      { 
                        height: `${item.score * 1.5}px`, // Scale height
                        backgroundColor: getBarColor(item.score)
                      }
                    ]} 
                 />
                 <Text style={styles.barLabel}>{`T${index + 1}`}</Text>
              </View>
            ))}
          </View>
        ) : (
          <Text style={{ fontSize: 10, color: '#6b7280', fontStyle: 'italic' }}>No test data available yet.</Text>
        )}

        {/* DETAILED LIST */}
        <Text style={styles.sectionTitle}>Details</Text>
        {graphData.map((item, i) => (
            <View key={i} style={{ flexDirection: 'row', paddingVertical: 5, borderBottomWidth: 1, borderBottomColor: '#f3f4f6' }}>
                <Text style={{ width: '30%', fontSize: 10, color: '#4b5563' }}>{item.fullDate || 'N/A'}</Text>
                <Text style={{ width: '40%', fontSize: 10, color: '#111827', fontWeight: 'bold' }}>{item.name}</Text>
                <Text style={{ width: '30%', fontSize: 10, textAlign: 'right', color: getBarColor(item.score) }}>{item.score}% Score</Text>
            </View>
        ))}
      </View>

      {/* FOOTER */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>Automated Report</Text>
        <Text style={styles.footerText} render={({ pageNumber, totalPages }) => `${pageNumber} / ${totalPages}`} />
      </View>
    </Page>
  </Document>
);