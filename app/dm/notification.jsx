import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";

export default function Notification() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Notifications</Text>
      </View>

      {/* Notification List */}
      <View style={styles.card}>
        <Text style={styles.msg}>
          Lifting request from FPS ID 1023 is pending approval.
        </Text>
        <Text style={styles.time}>10 Feb 2026 • 11:20 AM</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.msg}>
          Transporter assigned for Godown Ranchi-2.
        </Text>
        <Text style={styles.time}>09 Feb 2026 • 05:40 PM</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.msg}>
          Monthly lifting report has been generated successfully.
        </Text>
        <Text style={styles.time}>08 Feb 2026 • 09:10 AM</Text>
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
  msg: {
    fontSize: 14,
    color: "#333",
    lineHeight: 20,
  },
  time: {
    marginTop: 6,
    fontSize: 12,
    color: "#777",
  },
});
