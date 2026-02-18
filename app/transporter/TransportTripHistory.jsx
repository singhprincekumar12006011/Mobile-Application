import React from "react";
import { View, Text, ScrollView, StyleSheet, FlatList } from "react-native";
import MapView, { Marker } from "react-native-maps";

const summaryData = [
  { title: "Total Trucks", value: 48, color: "#000" },
  { title: "Active Trips", value: 32, color: "green" },
  { title: "Completed Today", value: 18, color: "#000" },
  { title: "Delayed Trips", value: 6, color: "orange" },
  { title: "Route Deviations", value: 3, color: "red" },
  { title: "SLA Breached", value: 2, color: "red" },
];

const slaData = [
  { tripId: "TRIP-7841", delay: "+1:20", status: "BREACHED", statusColor: "red" },
  { tripId: "TRIP-7819", delay: "+0:50", status: "DELAYED", statusColor: "orange" },
  { tripId: "TRIP-7842", delay: "---", status: "ON TIME", statusColor: "green" },
];

const tripsData = [
  {
    truckNo: "JH09AB2234",
    tripId: "TRIP-7841",
    commodity: "Wheat",
    qty: 25,
    source: "FCI Durgapur",
    destination: "JSFC Ranchi",
    tripStart: "10:20",
    eta: "18:40",
    actual: "---",
    delay: "+1:20",
    delayReason: "Route Deviation",
    route: "Deviated",
    slaStatus: "SLA BREACHED",
    slaColor: "red",
  },
  {
    truckNo: "WB15CD8841",
    tripId: "TRIP-7842",
    commodity: "Rice",
    qty: 30,
    source: "FCI Asansol",
    destination: "JSFC Bokaro",
    tripStart: "09:10",
    eta: "17:10",
    actual: "---",
    delay: "On Time",
    delayReason: "---",
    route: "Normal",
    slaStatus: "IN TRANSIT",
    slaColor: "green",
  },
  {
    truckNo: "JH10EF6672",
    tripId: "TRIP-7819",
    commodity: "PDS Grain",
    qty: 20,
    source: "JSFC Ranchi",
    destination: "FPS-214 (Giridih)",
    tripStart: "08:00",
    eta: "14:30",
    actual: "15:20",
    delay: "+0:50",
    delayReason: "Traffic Congestion",
    route: "Normal",
    slaStatus: "DELAYED",
    slaColor: "orange",
  },
];

const TransporterDashboardMobile = () => {
  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerText}>
          Transporter Command & Control Dashboard – Live Trip Monitoring
        </Text>
      </View>

      {/* Summary Cards */}
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.summaryContainer}>
        {summaryData.map((item, index) => (
          <View key={index} style={styles.card}>
            <Text style={styles.cardValue}>{item.value}</Text>
            <Text style={styles.cardTitle}>{item.title}</Text>
          </View>
        ))}
      </ScrollView>

      {/* Map */}
      <View style={styles.mapContainer}>
        <MapView
          style={{ flex: 1 }}
          initialRegion={{
            latitude: 23.685,
            longitude: 85.2799,
            latitudeDelta: 5,
            longitudeDelta: 5,
          }}
        >
          {/* Example markers */}
          <Marker coordinate={{ latitude: 23.8, longitude: 86.4 }} pinColor="red" />
          <Marker coordinate={{ latitude: 23.5, longitude: 85.5 }} pinColor="green" />
        </MapView>
      </View>

      {/* SLA & Escalation Status */}
      <View style={styles.slaContainer}>
        <Text style={styles.sectionTitle}>SLA & Escalation Status</Text>
        <View style={styles.slaTableHeader}>
          <Text style={[styles.slaCell, { flex: 2 }]}>Trip</Text>
          <Text style={[styles.slaCell, { flex: 2 }]}>Delay</Text>
          <Text style={[styles.slaCell, { flex: 2 }]}>Status</Text>
        </View>
        {slaData.map((item, index) => (
          <View key={index} style={styles.slaTableRow}>
            <Text style={[styles.slaCell, { flex: 2 }]}>{item.tripId}</Text>
            <Text style={[styles.slaCell, { flex: 2 }]}>{item.delay}</Text>
            <Text
              style={[
                styles.slaCell,
                { flex: 2, color: "#fff", backgroundColor: item.statusColor, textAlign: "center" },
              ]}
            >
              {item.status}
            </Text>
          </View>
        ))}
      </View>

      {/* Active & Recent Trips Table */}
      <View style={styles.tripsContainer}>
        <Text style={styles.sectionTitle}>Active & Recent Trips (Detailed)</Text>
        <ScrollView horizontal style={{ marginVertical: 5 }}>
          <View style={{ minWidth: 1000 }}>
            <View style={styles.tableHeader}>
              <Text style={[styles.tableCell, { flex: 2 }]}>Truck No</Text>
              <Text style={[styles.tableCell, { flex: 2 }]}>Trip ID</Text>
              <Text style={[styles.tableCell, { flex: 2 }]}>Commodity</Text>
              <Text style={[styles.tableCell, { flex: 1 }]}>Qty</Text>
              <Text style={[styles.tableCell, { flex: 3 }]}>Source</Text>
              <Text style={[styles.tableCell, { flex: 3 }]}>Destination</Text>
              <Text style={[styles.tableCell, { flex: 2 }]}>Trip Start</Text>
              <Text style={[styles.tableCell, { flex: 2 }]}>ETA</Text>
              <Text style={[styles.tableCell, { flex: 2 }]}>Actual Arrival</Text>
              <Text style={[styles.tableCell, { flex: 2 }]}>Delay</Text>
              <Text style={[styles.tableCell, { flex: 2 }]}>Delay Reason</Text>
              <Text style={[styles.tableCell, { flex: 2 }]}>Route</Text>
              <Text style={[styles.tableCell, { flex: 2 }]}>SLA Status</Text>
            </View>

            <ScrollView style={{ maxHeight: 300 }}>
              {tripsData.map((trip, index) => (
                <View key={index} style={styles.tableRow}>
                  <Text style={[styles.tableCell, { flex: 2 }]}>{trip.truckNo}</Text>
                  <Text style={[styles.tableCell, { flex: 2 }]}>{trip.tripId}</Text>
                  <Text style={[styles.tableCell, { flex: 2 }]}>{trip.commodity}</Text>
                  <Text style={[styles.tableCell, { flex: 1 }]}>{trip.qty}</Text>
                  <Text style={[styles.tableCell, { flex: 3 }]}>{trip.source}</Text>
                  <Text style={[styles.tableCell, { flex: 3 }]}>{trip.destination}</Text>
                  <Text style={[styles.tableCell, { flex: 2 }]}>{trip.tripStart}</Text>
                  <Text style={[styles.tableCell, { flex: 2 }]}>{trip.eta}</Text>
                  <Text style={[styles.tableCell, { flex: 2 }]}>{trip.actual}</Text>
                  <Text style={[styles.tableCell, { flex: 2, color: trip.delay.includes('+') ? 'red' : trip.delay === 'On Time' ? 'green' : 'orange'}]}>
                    {trip.delay}
                  </Text>
                  <Text style={[styles.tableCell, { flex: 2 }]}>{trip.delayReason}</Text>
                  <Text style={[styles.tableCell, { flex: 2, color: trip.route === 'Deviated' ? 'red' : 'green'}]}>{trip.route}</Text>
                  <Text
                    style={[
                      styles.tableCell,
                      { flex: 2, color: "#fff", backgroundColor: trip.slaColor, textAlign: "center" },
                    ]}
                  >
                    {trip.slaStatus}
                  </Text>
                </View>
              ))}
            </ScrollView>
          </View>
        </ScrollView>
      </View>
    </ScrollView>
  );
};

export default TransporterDashboardMobile;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#f2f4f7" },
  header: { padding: 15, backgroundColor: "#1e3a5f", marginTop: 10 },
  headerText: { color: "#fff", fontWeight: "bold", fontSize: 16 },
  summaryContainer: { flexDirection: "row", paddingVertical: 10, paddingHorizontal: 5 },
  card: { backgroundColor: "#fff", padding: 15, marginRight: 10, borderRadius: 8, alignItems: "center", minWidth: 100 },
  cardTitle: { fontSize: 12, color: "#555", marginTop: 5 },
  cardValue: { fontSize: 18, fontWeight: "bold" },
  mapContainer: { height: 200, margin: 10, borderRadius: 8, overflow: "hidden" },
  slaContainer: { margin: 10, backgroundColor: "#fff", borderRadius: 8, padding: 10 },
  sectionTitle: { fontWeight: "bold", marginBottom: 5 },
  slaTableHeader: { flexDirection: "row", backgroundColor: "#e9ecef", padding: 5, borderRadius: 5 },
  slaTableRow: { flexDirection: "row", padding: 5, borderBottomWidth: 1, borderBottomColor: "#ddd" },
  slaCell: { fontSize: 12, paddingHorizontal: 2 },
  tripsContainer: { margin: 10, backgroundColor: "#fff", borderRadius: 8, padding: 5 },
  tableHeader: { flexDirection: "row", backgroundColor: "#e9ecef", paddingVertical: 5, paddingHorizontal: 2, borderRadius: 5 },
  tableRow: { flexDirection: "row", paddingVertical: 5, paddingHorizontal: 2, borderBottomWidth: 1, borderBottomColor: "#ddd" },
  tableCell: { fontSize: 12, paddingHorizontal: 2 },
});
