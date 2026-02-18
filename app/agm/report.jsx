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

      <View style={styles.card}>
        <Text style={styles.report}>District-wise Lifting Report</Text>
        <TouchableOpacity style={styles.btn}>
          <Text style={styles.btnText}>View</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.card}>
        <Text style={styles.report}>Monthly State Summary</Text>
        <TouchableOpacity style={styles.btn}>
          <Text style={styles.btnText}>View</Text>
        </TouchableOpacity>
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
  report: { fontSize: 15, fontWeight: "600", color: "#0A2A66" },
  btn: {
    marginTop: 10,
    backgroundColor: "#0A2A66",
    paddingVertical: 10,
    borderRadius: 4,
    alignItems: "center",
  },
  btnText: { color: "#FFF", fontWeight: "600" },
});
