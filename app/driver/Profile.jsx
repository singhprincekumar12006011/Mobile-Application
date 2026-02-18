import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  TouchableOpacity,
  ScrollView,
  FlatList,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const { width } = Dimensions.get("window");

const Profile = () => {
  const trips = [
    { id: "1", from: "Patna", to: "Gaya", date: "12 Feb 2026", status: "Completed" },
    { id: "2", from: "Gaya", to: "Nalanda", date: "10 Feb 2026", status: "Completed" },
    { id: "3", from: "Patna", to: "Muzaffarpur", date: "08 Feb 2026", status: "Completed" },
  ];

  const feedbacks = [
    { id: "1", msg: "Very punctual and safe driving.", rating: 5 },
    { id: "2", msg: "Good behaviour and professional.", rating: 4 },
  ];

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      
      {/* ---------- Profile Header ---------- */}
      <View style={styles.header}>
        <View style={styles.imageWrapper}>
          <Image
            source={require("../../assets/driver.png")}
            style={styles.profileImage}
          />
          <TouchableOpacity style={styles.editIcon}>
            <MaterialCommunityIcons name="pencil" size={18} color="#fff" />
          </TouchableOpacity>
        </View>

        <Text style={styles.name}>Driver Name</Text>
        <Text style={styles.location}>📍 Patna, Bihar</Text>

        {/* Rating */}
        <View style={styles.ratingRow}>
          {[1, 2, 3, 4, 5].map((i) => (
            <MaterialCommunityIcons
              key={i}
              name="star"
              size={20}
              color="#FFC107"
            />
          ))}
          <Text style={styles.ratingText}>4.8 Rating</Text>
        </View>
      </View>

      {/* ---------- Driver Info ---------- */}
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Driver Information</Text>
        <InfoRow icon="id-card" label="Driver ID" value="JSFC-DR-1025" />
        <InfoRow icon="phone" label="Phone" value="+91-9876543210" />
        <InfoRow icon="card-account-details" label="DL Number" value="BR01-20230012345" />
        <InfoRow icon="truck" label="Vehicle" value="Tata 407 Truck" />
      </View>

      {/* ---------- Last Trips ---------- */}
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Last Trips</Text>

        {trips.map((trip) => (
          <View key={trip.id} style={styles.tripRow}>
            <MaterialCommunityIcons name="map-marker-path" size={20} color="#0c497c" />
            <View style={{ flex: 1, marginLeft: 10 }}>
              <Text style={styles.tripRoute}>
                {trip.from} ➜ {trip.to}
              </Text>
              <Text style={styles.tripDate}>{trip.date}</Text>
            </View>
            <Text style={styles.tripStatus}>{trip.status}</Text>
          </View>
        ))}
      </View>

      {/* ---------- Feedback Section ---------- */}
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Feedback</Text>

        {feedbacks.map((fb) => (
          <View key={fb.id} style={styles.feedbackRow}>
            <MaterialCommunityIcons name="account-circle" size={28} color="#0c497c" />
            <View style={{ flex: 1, marginLeft: 10 }}>
              <Text style={styles.feedbackText}>{fb.msg}</Text>

              <View style={{ flexDirection: "row", marginTop: 3 }}>
                {[...Array(fb.rating)].map((_, i) => (
                  <MaterialCommunityIcons
                    key={i}
                    name="star"
                    size={16}
                    color="#FFC107"
                  />
                ))}
              </View>
            </View>
          </View>
        ))}
      </View>

      {/* ---------- Logout ---------- */}
      <TouchableOpacity style={styles.logoutBtn}>
        <MaterialCommunityIcons name="logout" size={20} color="#fff" />
        <Text style={styles.logoutText}>Logout</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default Profile;



/* ---------- Reusable Info Row ---------- */
const InfoRow = ({ icon, label, value }) => {
  return (
    <View style={styles.infoRow}>
      <View style={styles.left}>
        <MaterialCommunityIcons name={icon} size={20} color="#0c497c" />
        <Text style={styles.label}>{label}</Text>
      </View>
      <Text style={styles.value}>{value}</Text>
    </View>
  );
};



/* ---------- Styles ---------- */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f4f6f9",
    padding: width * 0.04,
  },

  header: {
    alignItems: "center",
    marginBottom: 20,
  },

  imageWrapper: {
    position: "relative",
  },

  profileImage: {
    width: width * 0.28,
    height: width * 0.28,
    borderRadius: width * 0.14,
    borderWidth: 3,
    borderColor: "#0c497c",
  },

  editIcon: {
    position: "absolute",
    bottom: 0,
    right: 0,
    backgroundColor: "#0c497c",
    padding: 6,
    borderRadius: 20,
  },

  name: {
    marginTop: 10,
    fontSize: width * 0.05,
    fontWeight: "bold",
    color: "#051370",
  },

  location: {
    fontSize: width * 0.035,
    color: "#6b6f7a",
    marginTop: 2,
  },

  ratingRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 6,
  },

  ratingText: {
    marginLeft: 6,
    fontSize: width * 0.035,
    fontWeight: "600",
    color: "#333",
  },

  card: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: width * 0.045,
    marginBottom: 15,
    elevation: 4,
  },

  cardTitle: {
    fontSize: width * 0.042,
    fontWeight: "700",
    color: "#051370",
    marginBottom: 10,
  },

  infoRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 8,
  },

  left: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },

  label: {
    fontSize: width * 0.035,
    color: "#5a5a5a",
    fontWeight: "600",
  },

  value: {
    fontSize: width * 0.035,
    fontWeight: "500",
  },

  /* Trips */
  tripRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },

  tripRoute: {
    fontSize: width * 0.036,
    fontWeight: "600",
  },

  tripDate: {
    fontSize: width * 0.03,
    color: "#777",
  },

  tripStatus: {
    fontSize: width * 0.03,
    color: "#4CAF50",
    fontWeight: "600",
  },

  /* Feedback */
  feedbackRow: {
    flexDirection: "row",
    marginBottom: 12,
  },

  feedbackText: {
    fontSize: width * 0.035,
    color: "#333",
  },

  logoutBtn: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#e53935",
    padding: 14,
    borderRadius: 10,
    marginTop: 10,
    marginBottom: 30,
    gap: 8,
  },

  logoutText: {
    color: "#fff",
    fontSize: width * 0.04,
    fontWeight: "600",
  },
});
