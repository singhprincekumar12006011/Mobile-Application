import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const { width } = Dimensions.get("window");

export default function DMDashboard() {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      
      {/* ================= HEADER ================= */}
      <View style={styles.headerCard}>
        <Text style={styles.heading}>District Manager Dashboard</Text>
        <Text style={styles.subHeading}>Jharkhand State Food Corporation</Text>
      </View>

      {/* ================= OVERVIEW STATS ================= */}
      <View style={styles.statsContainer}>
        <StatCard icon="warehouse" label="Total Godowns" value="24" color="#0c497c" />
        <StatCard icon="store" label="Active FPS" value="312" color="#28a745" />
        <StatCard icon="truck-delivery" label="Pending Lifting" value="18" color="#ffc107" />
        <StatCard icon="check-circle-outline" label="Completed Lifting" value="106" color="#9c27b0" />
        <StatCard icon="truck" label="Transporters" value="42" color="#2196F3" />
        <StatCard icon="account-group" label="Drivers" value="198" color="#ff6b6b" />
      </View>

      {/* ================= QUICK ACTIONS ================= */}
      <Text style={styles.sectionTitle}>Quick Actions</Text>
      <View style={styles.actionsGrid}>
        <ActionButton icon="truck-plus" label="Assign Transporter" color="#0c497c" onPress={() => {}} />
        <ActionButton icon="file-check" label="Approve Lifting" color="#28a745" onPress={() => {}} />
        <ActionButton icon="clipboard-text" label="Manage Godowns" color="#ff9800" onPress={() => {}} />
        <ActionButton icon="chart-line" label="Analytics" color="#9c27b0" onPress={() => {}} />
      </View>

      {/* ================= RECENT ACTIVITY ================= */}
      <Text style={styles.sectionTitle}>Recent Activity</Text>
      <View style={styles.activityCard}>
        <ActivityItem text="FPS ID 1023 – Rice lifting approved" />
        <ActivityItem text="Transporter assigned for Godown Ranchi-2" />
        <ActivityItem text="3 lifting requests pending approval" />
      </View>

      <View style={{ height: 20 }} />
    </ScrollView>
  );
}

/* ================= COMPONENTS ================= */
const StatCard = ({ icon, label, value, color }) => (
  <View style={styles.statCard}>
    <View style={[styles.iconContainer, { backgroundColor: color + "15" }]}>
      <MaterialCommunityIcons name={icon} size={26} color={color} />
    </View>
    <Text style={[styles.statValue, { color }]}>{value}</Text>
    <Text style={styles.statLabel}>{label}</Text>
  </View>
);

const ActionButton = ({ icon, label, color, onPress }) => (
  <TouchableOpacity style={[styles.actionBtn, { backgroundColor: color }]} onPress={onPress}>
    <MaterialCommunityIcons name={icon} size={28} color="#fff" />
    <Text style={styles.actionText}>{label}</Text>
  </TouchableOpacity>
);

const ActivityItem = ({ text }) => (
  <View style={styles.listItem}>
    <MaterialCommunityIcons name="circle-small" size={10} color="#0c497c" style={{ marginRight: 8 }} />
    <Text style={styles.listText}>{text}</Text>
  </View>
);

/* ================= STYLES ================= */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f4f6f9",
    padding: width * 0.04,
  },

  headerCard: {
    backgroundColor: "#fff",
    padding: 16,
    borderRadius: 12,
    marginBottom: width * 0.04,
    elevation: 2,
  },
  heading: {
    fontSize: 18,
    fontWeight: "700",
    color: "#0A2A66",
  },
  subHeading: {
    fontSize: 13,
    color: "#555",
    marginTop: 4,
  },

  /* STATS */
  statsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginBottom: width * 0.04,
  },
  statCard: {
    width: "48%",
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 14,
    marginBottom: width * 0.04,
    alignItems: "center",
    elevation: 2,
  },
  iconContainer: {
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 8,
  },
  statValue: {
    fontSize: 22,
    fontWeight: "bold",
    marginTop: 4,
  },
  statLabel: {
    fontSize: 12,
    color: "#6c757d",
    marginTop: 2,
    textAlign: "center",
  },

  /* QUICK ACTIONS */
  sectionTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#051370",
    marginBottom: 12,
    marginTop: 8,
  },
  actionsGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginBottom: width * 0.04,
  },
  actionBtn: {
    width: "48%",
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    alignItems: "center",
  },
  actionText: {
    color: "#fff",
    marginTop: 8,
    fontWeight: "600",
    fontSize: 13,
    textAlign: "center",
  },

  /* RECENT ACTIVITY */
  activityCard: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 16,
    marginBottom: width * 0.04,
    elevation: 2,
  },
  listItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  listText: {
    fontSize: 13,
    color: "#333",
  },
});
