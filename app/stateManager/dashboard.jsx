import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Dashboard = () => {
  return (
    <View style={styles.container}>
      {/* Accent bar */}
      <View style={styles.accent} />

      {/* Content box */}
      <View style={styles.card}>
        <Text style={styles.title}>Page Under Development</Text>

        <Text style={styles.subtitle}>
          This section is currently being developed.
          {"\n"}Please check back later.
        </Text>
      </View>
    </View>
  );
};

export default Dashboard;

/* ---------------- STYLES ---------------- */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F4F6F8",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },

  accent: {
    width: 60,
    height: 4,
    backgroundColor: "#0A2A66",
    borderRadius: 2,
    marginBottom: 16,
  },

  card: {
    backgroundColor: "#FFFFFF",
    width: "100%",
    maxWidth: 380,
    padding: 24,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#E0E0E0",
    alignItems: "center",
  },

  title: {
    fontSize: 18,
    fontWeight: "700",
    color: "#0A2A66",
    marginBottom: 10,
    textAlign: "center",
  },

  subtitle: {
    fontSize: 14,
    color: "#555",
    textAlign: "center",
    lineHeight: 20,
  },
});
