import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

const { width } = Dimensions.get("window");

const Dashboard = () => {
  const router = useRouter();

  const goProfile = () => {
    router.push("/driver/profile");
  };

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* ================= PROFILE HEADER ================= */}
      <TouchableOpacity activeOpacity={0.8} onPress={goProfile}>
        <View style={styles.profileCard}>
          <Image
            source={require("../../assets/driver.png")}
            style={styles.avatar}
          />

          <View style={{ flex: 1 }}>
            <Text style={styles.name}>Driver Name</Text>
            <Text style={styles.location}>📍 Patna, Bihar</Text>

            <View style={styles.statusRow}>
              <View style={styles.onlineDot} />
              <Text style={styles.onlineText}>Online</Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>

      {/* ================= STATS ================= */}
      <View style={styles.statsRow}>
        <StatCard icon="road-variant" label="Total Trips" value="245" />
        <StatCard icon="check-circle" label="Completed" value="210" />
        <StatCard icon="clock-outline" label="Pending" value="35" />
      </View>

      {/* ================= QUICK ACTIONS ================= */}
      <Text style={styles.sectionTitle}>Quick Actions</Text>

      <View style={styles.actionsRow}>
        <ActionButton
          icon="map-marker-path"
          label="Start Trip"
          onPress={() => router.push("/startTrip")}
        />

        <ActionButton
          icon="history"
          label="Trip History"
          onPress={() => router.push("/driver/(stack)/tripHistory")}
        />

        <ActionButton
          icon="truck-delivery"
          label="My Vehicle"
          onPress={() => router.push("/driver/(stack)/myVehicle")}
        />

        <ActionButton
          icon="account"
          label="Active Trip"
          onPress={() => router.push("/startTrip")}
        />
      </View>

      {/* ================= RECENT TRIPS ================= */}
      <Text style={styles.sectionTitle}>Recent Trips</Text>

      <TripItem from="Patna" to="Gaya" status="Completed" />
      <TripItem from="Ranchi" to="Dhanbad" status="Ongoing" />
      <TripItem from="Patna" to="Muzaffarpur" status="Pending" />
    </ScrollView>
  );
};

export default Dashboard;

/* ================= COMPONENTS ================= */

const StatCard = ({ icon, label, value }) => (
  <View style={styles.statCard}>
    <MaterialCommunityIcons name={icon} size={22} color="#0c497c" />
    <Text style={styles.statValue}>{value}</Text>
    <Text style={styles.statLabel}>{label}</Text>
  </View>
);

const ActionButton = ({ icon, label, onPress }) => (
  <TouchableOpacity
    style={styles.actionBtn}
    onPress={onPress}
    activeOpacity={0.8}
  >
    <MaterialCommunityIcons name={icon} size={24} color="#fff" />
    <Text style={styles.actionText}>{label}</Text>
  </TouchableOpacity>
);

const TripItem = ({ from, to, status }) => (
  <View style={styles.tripCard}>
    <View>
      <Text style={styles.tripRoute}>
        {from} → {to}
      </Text>
      <Text style={styles.tripDate}>Today, 10:30 AM</Text>
    </View>

    <View
      style={[
        styles.statusBadge,
        status === "Completed"
          ? { backgroundColor: "#28a745" }
          : status === "Ongoing"
          ? { backgroundColor: "#ffc107" }
          : { backgroundColor: "#6c757d" },
      ]}
    >
      <Text style={styles.statusText}>{status}</Text>
    </View>
  </View>
);

/* ================= STYLES ================= */

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f4f6f9",
    padding: width * 0.04,
  },

  /* PROFILE */
  profileCard: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: width * 0.04,
    marginBottom: width * 0.04,
    elevation: 3,
  },

  avatar: {
    width: width * 0.18,
    height: width * 0.18,
    borderRadius: 10,
    marginRight: 12,
  },

  name: {
    fontSize: width * 0.045,
    fontWeight: "bold",
    color: "#051370",
  },

  location: {
    fontSize: width * 0.032,
    color: "#6c757d",
    marginTop: 2,
  },

  statusRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 5,
  },

  onlineDot: {
    width: 8,
    height: 8,
    borderRadius: 10,
    backgroundColor: "#28a745",
    marginRight: 6,
  },

  onlineText: {
    color: "#28a745",
    fontWeight: "600",
    fontSize: 12,
  },

  /* STATS */
  statsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: width * 0.04,
  },

  statCard: {
    width: "31%",
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 12,
    alignItems: "center",
    elevation: 2,
  },

  statValue: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 5,
  },

  statLabel: {
    fontSize: 12,
    color: "#6c757d",
  },

  /* ACTIONS */
  sectionTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 10,
    marginTop: 10,
  },

  actionsRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },

  actionBtn: {
    width: "48%",
    backgroundColor: "#0c497c",
    borderRadius: 10,
    padding: 14,
    marginBottom: 10,
    alignItems: "center",
  },

  actionText: {
    color: "#fff",
    marginTop: 5,
    fontWeight: "600",
  },

  /* TRIPS */
  tripCard: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 14,
    borderRadius: 10,
    marginBottom: 10,
    elevation: 2,
  },

  tripRoute: {
    fontWeight: "600",
  },

  tripDate: {
    fontSize: 12,
    color: "#6c757d",
  },

  statusBadge: {
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 6,
  },

  statusText: {
    color: "#fff",
    fontSize: 12,
    fontWeight: "600",
  },
});
