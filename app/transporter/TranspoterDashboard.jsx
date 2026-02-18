import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import MapView, { Marker } from "react-native-maps";
import { FontAwesome5 } from "@expo/vector-icons"; // For icons in summary cards

const summaryData = [
  { title: "Total Trucks", value: "48", color: "#000", icon: "truck" },
  { title: "Active Trips", value: "32", color: "green", icon: "route" },
  { title: "Completed Today", value: "18", color: "#000", icon: "check-circle" },
  { title: "Delayed Trips", value: "6", color: "orange", icon: "exclamation-circle" },
  { title: "Route Deviations", value: "3", color: "red", icon: "road" },
  { title: "SLA Breached", value: "2", color: "red", icon: "times-circle" },
];

const tripsData = [
  {
    truckNo: "JH09AB2234",
    tripId: "TRIP-7841",
    source: "FCI Durgapur",
    destination: "JSFC Ranchi",
    eta: "18:40",
    actual: "---",
    delay: "+1:20",
    route: "Deviation",
    status: "SLA BREACHED",
    delayColor: "red",
    routeColor: "red",
    statusColor: "#f8d7da",
    latitude: 23.5,
    longitude: 86.0,
  },
  {
    truckNo: "WB15CD8841",
    tripId: "TRIP-7842",
    source: "FCI Asansol",
    destination: "JSFC Bokaro",
    eta: "17:10",
    actual: "---",
    delay: "On Time",
    route: "Normal",
    status: "IN TRANSIT",
    delayColor: "green",
    routeColor: "green",
    statusColor: "#d4edda",
    latitude: 23.7,
    longitude: 86.2,
  },
  {
    truckNo: "JH10EF6672",
    tripId: "TRIP-7819",
    source: "JSFC Ranchi",
    destination: "FPS-214 (Giridih)",
    eta: "14:30",
    actual: "15:20",
    delay: "+0:50",
    route: "Normal",
    status: "DELAYED",
    delayColor: "orange",
    routeColor: "green",
    statusColor: "#fff3cd",
    latitude: 23.6,
    longitude: 85.8,
  },
  {
    truckNo: "JH02KL9981",
    tripId: "TRIP-7795",
    source: "FCI Bokaro",
    destination: "JSFC Hazaribagh",
    eta: "13:10",
    actual: "13:00",
    delay: "---",
    route: "Normal",
    status: "COMPLETED",
    delayColor: "#000",
    routeColor: "green",
    statusColor: "#e2e3e5",
    latitude: 23.4,
    longitude: 85.9,
  },
];

const TransporterDashboard = () => {
  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerText}>
          Transporter Dashboard – Truck & Trip Movement Monitoring
        </Text>
      </View>

      {/* Summary Cards */}
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.summaryContainer}>
        {summaryData.map((item, index) => (
          <View key={index} style={styles.card}>
            <FontAwesome5 name={item.icon} size={20} color={item.color} />
            <Text style={[styles.cardValue, { color: item.color }]}>{item.value}</Text>
            <Text style={styles.cardTitle}>{item.title}</Text>
          </View>
        ))}
      </ScrollView>

      {/* Map View */}
      <View style={styles.mapContainer}>
        <MapView
          style={{ flex: 1 }}
          initialRegion={{
            latitude: 23.6,
            longitude: 86.0,
            latitudeDelta: 2,
            longitudeDelta: 2,
          }}
        >
          {tripsData.map((trip, index) => (
            <Marker
              key={index}
              coordinate={{ latitude: trip.latitude, longitude: trip.longitude }}
              pinColor={trip.status === "SLA BREACHED" ? "red" : trip.status === "DELAYED" ? "orange" : "green"}
              title={trip.truckNo}
              description={`${trip.tripId} - ${trip.status}`}
            />
          ))}
        </MapView>
      </View>

      {/* Scrollable Table */}
      <ScrollView horizontal style={{ margin: 10 }}>
        <View style={styles.tableContainer}>
          {/* Table Header */}
          <View style={styles.tableHeader}>
            <Text style={[styles.tableCell, { flex: 2 }]}>Truck No</Text>
            <Text style={[styles.tableCell, { flex: 2 }]}>Trip ID</Text>
            <Text style={[styles.tableCell, { flex: 3 }]}>Source</Text>
            <Text style={[styles.tableCell, { flex: 3 }]}>Destination</Text>
            <Text style={[styles.tableCell, { flex: 2 }]}>ETA</Text>
            <Text style={[styles.tableCell, { flex: 2 }]}>Actual</Text>
            <Text style={[styles.tableCell, { flex: 2 }]}>Delay</Text>
            <Text style={[styles.tableCell, { flex: 2 }]}>Route</Text>
            <Text style={[styles.tableCell, { flex: 2 }]}>Status</Text>
          </View>

          {/* Table Rows */}
          <ScrollView style={{ maxHeight: 300 }}>
            {tripsData.map((trip, index) => (
              <View key={index} style={styles.tableRow}>
                <Text style={[styles.tableCell, { flex: 2 }]}>{trip.truckNo}</Text>
                <Text style={[styles.tableCell, { flex: 2 }]}>{trip.tripId}</Text>
                <Text style={[styles.tableCell, { flex: 3 }]}>{trip.source}</Text>
                <Text style={[styles.tableCell, { flex: 3 }]}>{trip.destination}</Text>
                <Text style={[styles.tableCell, { flex: 2 }]}>{trip.eta}</Text>
                <Text style={[styles.tableCell, { flex: 2 }]}>{trip.actual}</Text>
                <Text style={[styles.tableCell, { flex: 2, color: trip.delayColor }]}>{trip.delay}</Text>
                <Text style={[styles.tableCell, { flex: 2, color: trip.routeColor }]}>{trip.route}</Text>
                <Text
                  style={[
                    styles.tableCell,
                    { flex: 2, backgroundColor: trip.statusColor, textAlign: "center" },
                  ]}
                >
                  {trip.status}
                </Text>
              </View>
            ))}
          </ScrollView>

          <Text style={styles.note}>
            Note: Trips highlighted in red require immediate corrective action by transporter control team.
          </Text>
        </View>
      </ScrollView>
    </ScrollView>
  );
};

export default TransporterDashboard;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#f2f4f7" },
  header: { backgroundColor: "#0d47a1", padding: 15, marginTop: 30 },
  headerText: { color: "#fff", fontSize: 16, fontWeight: "bold" },
  summaryContainer: { flexDirection: "row", paddingVertical: 10, paddingHorizontal: 5 },
  card: {
    backgroundColor: "#fff",
    padding: 15,
    marginRight: 10,
    borderRadius: 8,
    minWidth: 120,
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  cardTitle: { fontSize: 12, color: "#555", marginTop: 5, textAlign: "center" },
  cardValue: { fontSize: 18, fontWeight: "bold" },
  mapContainer: { height: 200, margin: 10, borderRadius: 8, overflow: "hidden" },
  tableContainer: { backgroundColor: "#fff", borderRadius: 8, padding: 5, minWidth: 900 },
  tableHeader: { flexDirection: "row", backgroundColor: "#e9ecef", paddingVertical: 8, paddingHorizontal: 5, borderRadius: 5 },
  tableRow: { flexDirection: "row", paddingVertical: 8, paddingHorizontal: 5, borderBottomWidth: 1, borderBottomColor: "#ddd" },
  tableCell: { fontSize: 12, paddingHorizontal: 2 },
  note: { fontSize: 10, color: "#555", marginTop: 5 },
});
