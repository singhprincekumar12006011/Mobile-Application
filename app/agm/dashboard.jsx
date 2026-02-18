import React from "react";
import { View, Text, StyleSheet, ScrollView, Dimensions } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { BarChart } from "react-native-chart-kit";

const screenWidth = Dimensions.get("window").width - 32; // for padding

// Card component with icon and colored accent
const Card = ({ title, value, icon, color }) => (
  <View style={[styles.card, { borderLeftColor: color }]}>
    <View style={styles.cardHeader}>
      <MaterialCommunityIcons name={icon} size={28} color={color} />
      <Text style={styles.value}>{value}</Text>
    </View>
    <Text style={styles.title}>{title}</Text>
  </View>
);

export default function AGMHome() {
  // Example monthly lifting data
  const liftingData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        data: [400, 600, 800, 500, 700, 900], // MT per month
      },
    ],
  };

  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.heading}>AGM Dashboard</Text>
        <Text style={styles.sub}>State Level Overview</Text>
      </View>

      {/* Grid Cards */}
      <View style={styles.grid}>
        <Card title="Total Districts" value="24" icon="map-marker" color="#4CAF50" />
        <Card title="Total Godowns" value="312" icon="warehouse" color="#2196F3" />
        <Card title="Pending Lifting" value="128" icon="truck-delivery" color="#FF9800" />
        <Card title="Completed Lifting" value="4,560 MT" icon="check-circle" color="#009688" />
        <Card title="Active Transporters" value="86" icon="account-group" color="#9C27B0" />
        <Card title="FPS Covered" value="8,240" icon="store" color="#E91E63" />
      </View>

      {/* Monthly Lifting Overview Chart */}
      <View style={styles.chartSection}>
        <Text style={styles.chartHeading}>Monthly Lifting Overview (MT)</Text>
        <BarChart
          data={liftingData}
          width={screenWidth}
          height={220}
          yAxisLabel=""
          yAxisSuffix=" MT"
          chartConfig={{
            backgroundColor: "#FFF",
            backgroundGradientFrom: "#FFF",
            backgroundGradientTo: "#FFF",
            decimalPlaces: 0,
            color: (opacity = 1) => `rgba(10, 42, 102, ${opacity})`,
            labelColor: (opacity = 1) => `rgba(0,0,0, ${opacity})`,
            style: { borderRadius: 8 },
            propsForDots: { r: "6", strokeWidth: "2", stroke: "#0A2A66" },
          }}
          style={{ marginVertical: 8, borderRadius: 8 }}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#F4F6F8" },
  header: {
    backgroundColor: "#FFF",
    padding: 20,
    borderBottomWidth: 1,
    borderColor: "#E0E0E0",
  },
  heading: { fontSize: 22, fontWeight: "700", color: "#0A2A66" },
  sub: { fontSize: 14, color: "#555", marginTop: 4 },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    padding: 12,
    justifyContent: "space-between",
  },
  card: {
    width: "48%",
    backgroundColor: "#FFF",
    padding: 16,
    marginBottom: 12,
    borderLeftWidth: 6,
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  cardHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  value: { fontSize: 22, fontWeight: "700", color: "#0A2A66" },
  title: { fontSize: 13, color: "#555", marginTop: 6 },
  chartSection: {
    margin: 16,
    padding: 16,
    backgroundColor: "#FFF",
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  chartHeading: { fontSize: 16, fontWeight: "600", color: "#0A2A66", marginBottom: 8 },
});
