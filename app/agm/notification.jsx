import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";

export default function Notification() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Notifications</Text>
      </View>

      <View style={styles.card}>
        <Text>District Ranchi submitted lifting summary.</Text>
        <Text style={styles.time}>Today • 10:30 AM</Text>
      </View>

      <View style={styles.card}>
        <Text>Monthly report approved by GM.</Text>
        <Text style={styles.time}>Yesterday • 04:15 PM</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#F4F6F8" },
  header: {
    backgroundColor: "#FFF",
    padding: 16,
    borderBottomWidth: 1,
    borderColor: "#E0E0E0",
  },
  title: { fontSize: 17, fontWeight: "700", color: "#0A2A66" },
  card: {
    backgroundColor: "#FFF",
    margin: 12,
    padding: 14,
    borderWidth: 1,
    borderColor: "#E0E0E0",
    borderRadius: 6,
  },
  time: { fontSize: 12, color: "#777", marginTop: 6 },
});
