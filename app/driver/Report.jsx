import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  FlatList,
  Modal,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const { width } = Dimensions.get("window");

const Report = () => {
  const [activeFilter, setActiveFilter] = useState("Today");
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedTrip, setSelectedTrip] = useState(null);

const trips = [
  {
    id: "1",
    route: "Patna → Gaya",
    date: "12 Feb 2026",
    distance: "102 km",
    earning: "₹1,200",
    status: "Completed",
    givenTime: "2 hrs",
    timeTaken: "1 hr 50 min",
    startTime: "09:10 AM",
    endTime: "11:00 AM",
    rating: 4,
    feedback: "Driver was on time and delivery completed smoothly.",
  },
  {
    id: "2",
    route: "Patna → Nalanda",
    date: "11 Feb 2026",
    distance: "88 km",
    earning: "₹980",
    status: "Completed",
    givenTime: "1 hr 40 min",
    timeTaken: "1 hr 35 min",
    startTime: "01:00 PM",
    endTime: "02:35 PM",
    rating: 5,
    feedback: "Excellent driving and very professional behavior.",
  },
];


  /* -------- Summary -------- */
  const summary = {
    trips: 24,
    distance: "2,140 km",
    earnings: "₹24,850",
  };

  /* -------- Open Modal -------- */
  const openTrip = (trip) => {
    setSelectedTrip(trip);
    setModalVisible(true);
  };

  const FilterBtn = ({ label }) => (
    <TouchableOpacity
      onPress={() => setActiveFilter(label)}
      style={[
        styles.filterBtn,
        activeFilter === label && styles.activeFilter,
      ]}
    >
      <Text
        style={[
          styles.filterText,
          activeFilter === label && { color: "#fff" },
        ]}
      >
        {label}
      </Text>
    </TouchableOpacity>
  );

  /* -------- Trip Card -------- */
  const renderTrip = ({ item }) => (
    <TouchableOpacity onPress={() => openTrip(item)} style={styles.tripCard}>
      <Text style={styles.route}>{item.route}</Text>
      <View style={styles.tripRowBetween}>
        <Text style={styles.tripText}>📅 {item.date}</Text>
        <Text style={styles.tripText}>{item.distance}</Text>
      </View>
      <View style={styles.tripRowBetween}>
        <Text style={styles.earning}>{item.earning}</Text>
        <Text style={styles.status}>{item.status}</Text>
      </View>
    </TouchableOpacity>
  );

  const StarRating = ({ rating = 0 }) => {
  return (
    <View style={{ flexDirection: "row", marginTop: 5 }}>
      {[1, 2, 3, 4, 5].map((i) => (
        <MaterialCommunityIcons
          key={i}
          name={i <= rating ? "star" : "star-outline"}
          size={22}
          color="#f4b400"
        />
      ))}
    </View>
  );
};


  return (
    <View style={styles.container}>
      
      {/* ---------- Filters ---------- */}
      <View style={styles.filterRow}>
        <FilterBtn label="Today" />
        <FilterBtn label="Week" />
        <FilterBtn label="Month" />
      </View>

      {/* ---------- Summary ---------- */}
      <View style={styles.summaryRow}>
        <SummaryCard icon="truck" label="Trips" value={summary.trips} />
        <SummaryCard icon="map-marker-distance" label="Distance" value={summary.distance} />
        <SummaryCard icon="cash" label="Earnings" value={summary.earnings} />
      </View>

      <Text style={styles.sectionTitle}>Trip History</Text>

      <FlatList
        data={trips}
        keyExtractor={(item) => item.id}
        renderItem={renderTrip}
      />

      {/* ---------- Modal ---------- */}
      <Modal visible={modalVisible} animationType="slide" transparent>
        <View style={styles.modalOverlay}>
          <View style={styles.modalCard}>

            <MaterialCommunityIcons
              name="truck-delivery"
              size={40}
              color="#0c497c"
            />

            <Text style={styles.modalTitle}>{selectedTrip?.route}</Text>

            <DetailRow label="Date" value={selectedTrip?.date} />
            <DetailRow label="Distance" value={selectedTrip?.distance} />
            <DetailRow label="Given Time" value={selectedTrip?.givenTime} />
            <DetailRow label="Time Taken" value={selectedTrip?.timeTaken} />
            <DetailRow label="Start Time" value={selectedTrip?.startTime} />
            <DetailRow label="End Time" value={selectedTrip?.endTime} />
            <DetailRow label="Earnings" value={selectedTrip?.earning} />
            <DetailRow label="Status" value={selectedTrip?.status} />

            <TouchableOpacity
              style={styles.closeBtn}
              onPress={() => setModalVisible(false)}
            >
              <Text style={{ color: "#fff", fontWeight: "600" }}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default Report;


/* ---------- Summary Card ---------- */
const SummaryCard = ({ icon, label, value }) => (
  <View style={styles.summaryCard}>
    <MaterialCommunityIcons name={icon} size={22} color="#0c497c" />
    <Text style={styles.summaryValue}>{value}</Text>
    <Text style={styles.summaryLabel}>{label}</Text>
  </View>
);

/* ---------- Detail Row ---------- */
const DetailRow = ({ label, value }) => (
  <View style={styles.detailRow}>
    <Text style={styles.detailLabel}>{label}</Text>
    <Text style={styles.detailValue}>{value}</Text>
  </View>
);


/* ---------- Styles ---------- */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f4f6f9",
    padding: width * 0.04,
  },

  filterRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 15,
  },

  filterBtn: {
    paddingVertical: 6,
    paddingHorizontal: 18,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#0c497c",
  },

  activeFilter: {
    backgroundColor: "#0c497c",
  },

  filterText: {
    fontSize: width * 0.035,
    fontWeight: "600",
    color: "#0c497c",
  },

  summaryRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },

  summaryCard: {
    width: "31%",
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 12,
    alignItems: "center",
    elevation: 3,
  },

  summaryValue: {
    fontSize: width * 0.04,
    fontWeight: "700",
    color: "#051370",
  },

  summaryLabel: {
    fontSize: width * 0.03,
    color: "#777",
  },

  sectionTitle: {
    fontSize: width * 0.04,
    fontWeight: "700",
    color: "#051370",
    marginBottom: 10,
  },

  tripCard: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 14,
    marginBottom: 10,
    elevation: 2,
  },

  route: {
    fontSize: width * 0.037,
    fontWeight: "600",
    color: "#051370",
  },

  tripRowBetween: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 5,
  },

  tripText: {
    fontSize: width * 0.032,
    color: "#555",
  },

  earning: {
    fontSize: width * 0.035,
    fontWeight: "700",
    color: "#2e7d32",
  },

  status: {
    fontSize: width * 0.032,
    color: "#0c497c",
    fontWeight: "600",
  },

  /* Modal */
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.4)",
    justifyContent: "center",
    alignItems: "center",
  },

  modalCard: {
    width: "90%",
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 20,
    alignItems: "center",
  },

  modalTitle: {
    fontSize: width * 0.045,
    fontWeight: "700",
    color: "#051370",
    marginBottom: 12,
  },

  detailRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginVertical: 4,
  },

  detailLabel: {
    fontSize: width * 0.035,
    color: "#555",
  },

  detailValue: {
    fontSize: width * 0.035,
    fontWeight: "600",
  },

  closeBtn: {
    marginTop: 15,
    backgroundColor: "#0c497c",
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 8,
  },
});
