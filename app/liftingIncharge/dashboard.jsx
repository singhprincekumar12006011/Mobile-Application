import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Dimensions,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import MapView, { Marker } from "react-native-maps";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const { width } = Dimensions.get("window");

// Dashboard cards data
const dashboardData = [
  { title: "Release Orders", value: 12, icon: "truck-delivery" },
  { title: "Active Trips", value: 18, icon: "truck-fast" },
  { title: "Delayed Trips", value: 4, icon: "clock-alert" },
  { title: "Route Deviations", value: 2, icon: "map-marker-distance" },
  { title: "SLA Breached", value: 2, icon: "alert-circle-outline" },
  { title: "Material Gap", value: 3.5, icon: "grain" },
  { title: "Completed", value: 9, icon: "check-circle-outline" },
];

// Release orders data
const releaseOrders = [
  { ro: "RO-011", grain: "Rice", scheme: "NFSA", allocated: 120, lifted: 118, balance: 2 },
  { ro: "RO-012", grain: "Wheat", scheme: "PMGKAY", allocated: 80, lifted: 80, balance: 0 },
];

// Trips data
const trips = [
  {
    trip: "TRIP-7841",
    truck: "JH09AB2234",
    source: "FCI Durgapur",
    destination: "JSFC Ranchi",
    eta: "00:58:21",
    delay: "+1:20",
    transporter: "ABC Transport",
    driver: "Ramesh",
    status: "SLA BREACHED",
    coordinate: { latitude: 23.3441, longitude: 85.3096 },
  },
  {
    trip: "TRIP-7842",
    truck: "WB15CD8841",
    source: "FCI Asansol",
    destination: "JSFC Bokaro",
    eta: "01:28:21",
    delay: "On Time",
    transporter: "XYZ Logistics",
    driver: "Sunil",
    status: "IN TRANSIT",
    coordinate: { latitude: 23.6693, longitude: 86.1511 },
  },
];

// Grain gap data
const grainGap = [
  { grain: "Rice", scheme: "NFSA", dispatched: 200, received: 198, gap: -2, status: "Short Received" },
  { grain: "Wheat", scheme: "PMGKAY", dispatched: 150, received: 150, gap: 0, status: "Matched" },
];

export default function LiftingDashboard() {
  return (
    <FlatList
      data={trips}
      keyExtractor={(item) => item.trip}
      contentContainerStyle={{ padding: 10 }}
      ListHeaderComponent={() => (
        <>
          {/* ===== DASHBOARD CARDS ===== */}
          <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.cardsContainer}>
            {dashboardData.map((item, index) => (
              <View style={styles.card} key={index}>
                <MaterialCommunityIcons name={item.icon} size={28} color="#0A2A66" />
                <Text style={styles.cardTitle}>{item.title}</Text>
                <Text style={styles.cardValue}>{item.value}</Text>
              </View>
            ))}
          </ScrollView>

          {/* ===== RELEASE ORDERS TABLE ===== */}
          <Text style={styles.sectionTitle}>Release Orders & Breakup</Text>
          <View style={styles.table}>
            <View style={styles.tableHeader}>
              {["RO No", "Grain", "Scheme", "Allocated", "Lifted", "Balance"].map((h) => (
                <Text style={styles.tableHeaderText} key={h}>{h}</Text>
              ))}
            </View>
            {releaseOrders.map((item, index) => (
              <View
                style={[styles.tableRow, index % 2 === 0 ? { backgroundColor: "#f5f5f5" } : {}]}
                key={item.ro}
              >
                <Text style={styles.tableCell}>{item.ro}</Text>
                <Text style={styles.tableCell}>{item.grain}</Text>
                <Text style={styles.tableCell}>{item.scheme}</Text>
                <Text style={styles.tableCell}>{item.allocated}</Text>
                <Text style={styles.tableCell}>{item.lifted}</Text>
                <Text style={[styles.tableCell, item.balance > 0 ? styles.balanceRed : styles.balanceGreen]}>
                  {item.balance}
                </Text>
              </View>
            ))}
          </View>

          {/* ===== MAP VIEW ===== */}
          <Text style={styles.sectionTitle}>Trips Map</Text>
          <MapView
            style={styles.map}
            initialRegion={{
              latitude: 23.3441,
              longitude: 85.3096,
              latitudeDelta: 2,
              longitudeDelta: 2,
            }}
          >
            {trips.map((trip) => (
              <Marker
                key={trip.trip}
                coordinate={trip.coordinate}
                title={trip.trip}
                description={`${trip.source} → ${trip.destination}`}
              />
            ))}
          </MapView>

          {/* ===== GRAIN GAP TABLE ===== */}
          <Text style={styles.sectionTitle}>Grain & Scheme – Dispatch vs Receipt</Text>
          <View style={styles.table}>
            <View style={styles.tableHeader}>
              {["Grain", "Scheme", "Dispatched", "Received", "GAP", "Status"].map((h) => (
                <Text style={styles.tableHeaderText} key={h}>{h}</Text>
              ))}
            </View>
            {grainGap.map((item, index) => (
              <View
                style={[styles.tableRow, index % 2 === 0 ? { backgroundColor: "#f5f5f5" } : {}]}
                key={item.grain}
              >
                <Text style={styles.tableCell}>{item.grain}</Text>
                <Text style={styles.tableCell}>{item.scheme}</Text>
                <Text style={styles.tableCell}>{item.dispatched}</Text>
                <Text style={styles.tableCell}>{item.received}</Text>
                <Text style={[styles.tableCell, item.gap < 0 ? styles.balanceRed : styles.balanceGreen]}>
                  {item.gap}
                </Text>
                <Text style={styles.tableCell}>{item.status}</Text>
              </View>
            ))}
          </View>
        </>
      )}
      renderItem={({ item }) => (
        <TouchableOpacity style={styles.tripCard}>
          <View style={styles.tripHeader}>
            <Text style={styles.tripTitle}>{item.trip}</Text>
            <Text style={[styles.statusText, item.status === "SLA BREACHED" ? styles.statusRed : styles.statusGreen]}>
              {item.status}
            </Text>
          </View>
          <Text style={styles.tripDetail}>Truck: {item.truck}</Text>
          <Text style={styles.tripDetail}>Source: {item.source}</Text>
          <Text style={styles.tripDetail}>Destination: {item.destination}</Text>
          <Text style={styles.tripDetail}>ETA: {item.eta} | Delay: {item.delay}</Text>
          <Text style={styles.tripDetail}>Transporter: {item.transporter}</Text>
          <Text style={styles.tripDetail}>Driver: {item.driver}</Text>
        </TouchableOpacity>
      )}
    />
  );
}

const styles = StyleSheet.create({
  cardsContainer: { flexDirection: "row", marginVertical: 10 },
  card: {
    width: 140,
    backgroundColor: "#fff",
    marginRight: 12,
    padding: 16,
    borderRadius: 12,
    elevation: 3,
    alignItems: "center",
  },
  cardTitle: { fontSize: 12, color: "#555", marginTop: 6, textAlign: "center" },
  cardValue: { fontSize: 20, fontWeight: "700", marginTop: 4, color: "#0A2A66" },
  sectionTitle: { fontSize: 16, fontWeight: "700", marginVertical: 12, color: "#0A2A66" },
  table: { backgroundColor: "#fff", borderRadius: 10, marginBottom: 20, overflow: "hidden", elevation: 2 },
  tableHeader: { flexDirection: "row", backgroundColor: "#e6e6e6", padding: 10 },
  tableHeaderText: { flex: 1, fontWeight: "700", fontSize: 12, color: "#333" },
  tableRow: { flexDirection: "row", padding: 10, borderBottomWidth: 1, borderBottomColor: "#eee" },
  tableCell: { flex: 1, fontSize: 12, color: "#333" },
  balanceRed: { color: "#D32F2F", fontWeight: "700" },
  balanceGreen: { color: "#388E3C", fontWeight: "700" },
  tripCard: { backgroundColor: "#fff", padding: 14, borderRadius: 12, marginBottom: 12, elevation: 2 },
  tripHeader: { flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginBottom: 6 },
  tripTitle: { fontWeight: "700", fontSize: 14, color: "#0A2A66" },
  tripDetail: { fontSize: 12, color: "#555", marginVertical: 1 },
  statusText: { fontWeight: "700" },
  statusRed: { color: "#D32F2F" },
  statusGreen: { color: "#388E3C" },
  map: { height: 220, width: width - 20, borderRadius: 12, marginBottom: 20 },
});
