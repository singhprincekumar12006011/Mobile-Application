import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";

export default function Report() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Reports</Text>
      </View>

      {/* Report List */}
      <View style={styles.card}>
        <Text style={styles.reportTitle}>Daily Lifting Report</Text>
        <Text style={styles.subText}>Date: 10 Feb 2026</Text>

        <TouchableOpacity style={styles.btn}>
          <Text style={styles.btnText}>View Report</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.card}>
        <Text style={styles.reportTitle}>Monthly FPS Summary</Text>
        <Text style={styles.subText}>January 2026</Text>

        <TouchableOpacity style={styles.btn}>
          <Text style={styles.btnText}>View Report</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.card}>
        <Text style={styles.reportTitle}>Transporter Performance</Text>
        <Text style={styles.subText}>FY 2025–26</Text>

        <TouchableOpacity style={styles.btn}>
          <Text style={styles.btnText}>View Report</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

/* ---------------- STYLES ---------------- */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F4F6F8",
  },
  header: {
    backgroundColor: "#FFFFFF",
    padding: 16,
    borderBottomWidth: 1,
    borderColor: "#E0E0E0",
  },
  title: {
    fontSize: 17,
    fontWeight: "700",
    color: "#0A2A66",
  },
  card: {
    backgroundColor: "#FFFFFF",
    marginHorizontal: 12,
    marginTop: 12,
    padding: 14,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: "#E0E0E0",
  },
  reportTitle: {
    fontSize: 15,
    fontWeight: "600",
    color: "#0A2A66",
  },
  subText: {
    fontSize: 12,
    color: "#666",
    marginTop: 4,
  },
  btn: {
    marginTop: 12,
    paddingVertical: 10,
    backgroundColor: "#0A2A66",
    borderRadius: 4,
    alignItems: "center",
  },
  btnText: {
    color: "#FFFFFF",
    fontSize: 13,
    fontWeight: "600",
  },
});
