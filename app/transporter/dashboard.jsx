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
import { useNavigation } from "@react-navigation/native";

const { width } = Dimensions.get("window");

const TransporterDashboard = () => {
  const navigation = useNavigation();

  const goToProfile = () => {
    navigation.navigate("Profile");
  };

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* ================= PROFILE HEADER ================= */}
      {/* <>
      <TouchableOpacity activeOpacity={0.8} onPress={goToProfile}>
        <View style={styles.profileCard}>
          {/* <Image
            source={require("../../../../assets/transporter.png")}
            style={styles.avatar}
          /> 

          <View style={{ flex: 1 }}>
            <Text style={styles.name}>Transport Company</Text>
            <Text style={styles.company}>ABC Logistics Pvt Ltd</Text>
            <Text style={styles.location}>📍 Patna, Bihar</Text>

            <View style={styles.statusRow}>
              <View style={styles.activeDot} />
              <Text style={styles.activeText}>Active</Text>
              <Text style={styles.fleetText}>• 25 Vehicles</Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
      </> */}

      {/* ================= OVERVIEW STATS ================= */}
      {/* ================= OVERVIEW STATS ================= */}
<View style={styles.statsContainer}>
  <StatCard 
    icon="truck-fast" 
    label="Total Trips" 
    value="18" 
    color="#0c497c"
    widthPercent="31.5%"  // first row, 3 cards
  />
  
  <StatCard 
    icon="account-group" 
    label="Total Drivers" 
    value="12" 
    color="#28a745"
    widthPercent="31.5%"
  />
  
  <StatCard 
    icon="truck-fast" 
    label="Active Trips" 
    value="18" 
    color="#0c497c"
    widthPercent="31.5%"
  />
</View>

<View style={styles.statsContainer}>
  <StatCard 
    icon="alert-octagon" 
    label="Compliance" 
    value="12" 
    color="#28a745"
    widthPercent="48%"  // second row, 2 cards
  />
  <StatCard 
    icon="truck-fast" 
    label="Upcoming Trips" 
    value="45" 
    color="#ff6b6b"
    widthPercent="48%"
  />
</View>


      {/* ================= REVENUE OVERVIEW ================= */}
      <View style={styles.revenueCard}>
        <View style={styles.revenueHeader}>
          <Text style={styles.sectionTitle}>Revenue Overview</Text>
          <Text style={styles.periodText}>This Month</Text>
        </View>
        
        <View style={styles.revenueStats}>
          <View style={styles.revenueItem}>
            <MaterialCommunityIcons name="cash-multiple" size={24} color="#28a745" />
            <View style={{ marginLeft: 12 }}>
              <Text style={styles.revenueLabel}>Total Earnings</Text>
              <Text style={styles.revenueValue}>₹8,45,000</Text>
            </View>
          </View>
          
          <View style={styles.revenueDivider} />
          
          <View style={styles.revenueItem}>
            <MaterialCommunityIcons name="trending-up" size={24} color="#0c497c" />
            <View style={{ marginLeft: 12 }}>
              <Text style={styles.revenueLabel}>Pending Payments</Text>
              <Text style={styles.revenueValue}>₹1,25,000</Text>
            </View>
          </View>
        </View>
      </View>

      {/* ================= QUICK ACTIONS ================= */}
      <Text style={styles.sectionTitle}>Quick Actions</Text>

      <View style={styles.actionsGrid}>
        <ActionButton
          icon="truck-plus"
          label="Add Vehicle"
          color="#0c497c"
          onPress={() => navigation.navigate("Add Vehicle")}
        />
        <ActionButton
          icon="account-plus"
          label="Add Driver"
          color="#2196F3"
          onPress={() => navigation.navigate("Add Driver")}
        />
        <ActionButton
          icon="clipboard-text"
          label="Manage Trips"
          color="#ff9800"
          onPress={() => navigation.navigate("Manage Trips")}
        />
        <ActionButton
          icon="chart-line"
          label="Analytics"
          color="#9c27b0"
          onPress={() => navigation.navigate("Analytics")}
        />
      </View>

      {/* ================= FLEET STATUS ================= */}
      <View style={styles.headerRow}>
        <Text style={styles.sectionTitle}>Fleet Status</Text>
        <TouchableOpacity onPress={() => navigation.navigate("Fleet Management")}>
          <Text style={styles.viewAllText}>View All</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.fleetContainer}>
        <FleetStatusItem 
          label="On Trip" 
          count={18} 
          total={25} 
          color="#0c497c"
          icon="truck-fast"
        />
        <FleetStatusItem 
          label="Available" 
          count={5} 
          total={25} 
          color="#28a745"
          icon="truck-check"
        />
        <FleetStatusItem 
          label="Maintenance" 
          count={2} 
          total={25} 
          color="#ffc107"
          icon="wrench"
        />
      </View>

      {/* ================= ACTIVE TRIPS ================= */}
      <View style={styles.headerRow}>
        <Text style={styles.sectionTitle}>Active Trips</Text>
        <TouchableOpacity onPress={() => navigation.navigate("All Trips")}>
          <Text style={styles.viewAllText}>View All</Text>
        </TouchableOpacity>
      </View>

      <TripCard 
        tripId="#TRP12345"
        driver="Rajesh Kumar"
        vehicle="HR-26-AB-1234"
        from="Patna"
        to="Kolkata"
        status="In Transit"
        progress={65}
        eta="2 hrs 30 min"
      />
      <TripCard 
        tripId="#TRP12346"
        driver="Amit Singh"
        vehicle="BR-01-CD-5678"
        from="Gaya"
        to="Varanasi"
        status="Loading"
        progress={15}
        eta="5 hrs"
      />
      <TripCard 
        tripId="#TRP12347"
        driver="Suresh Yadav"
        vehicle="JH-20-EF-9012"
        from="Ranchi"
        to="Patna"
        status="Near Delivery"
        progress={90}
        eta="30 min"
      />

      {/* ================= DRIVER PERFORMANCE ================= */}
      <View style={styles.headerRow}>
        <Text style={styles.sectionTitle}>Top Performers</Text>
        <TouchableOpacity onPress={() => navigation.navigate("Driver Performance")}>
          <Text style={styles.viewAllText}>View All</Text>
        </TouchableOpacity>
      </View>

      <DriverPerformanceItem 
        name="Rajesh Kumar"
        trips={45}
        rating={4.8}
        rank={1}
      />
      <DriverPerformanceItem 
        name="Amit Singh"
        trips={42}
        rating={4.7}
        rank={2}
      />
      <DriverPerformanceItem 
        name="Suresh Yadav"
        trips={38}
        rating={4.6}
        rank={3}
      />

      <View style={{ height: 20 }} />
    </ScrollView>
  );
};

export default TransporterDashboard;

/* ================= COMPONENTS ================= */

const StatCard = ({ icon, label, value, color, widthPercent }) => (
  <View style={[styles.statCard, { width: widthPercent }]}>
    <View style={[styles.iconContainer, { backgroundColor: color + '15' }]}>
      <MaterialCommunityIcons name={icon} size={26} color={color} />
    </View>
    <Text style={styles.statValue}>{value}</Text>
    <Text style={styles.statLabel}>{label}</Text>
  </View>
);


const ActionButton = ({ icon, label, color, onPress }) => (
  <TouchableOpacity
    style={[styles.actionBtn, { backgroundColor: color }]}
    onPress={onPress}
    activeOpacity={0.8}
  >
    <MaterialCommunityIcons name={icon} size={28} color="#fff" />
    <Text style={styles.actionText}>{label}</Text>
  </TouchableOpacity>
);

const FleetStatusItem = ({ label, count, total, color, icon }) => (
  <View style={styles.fleetStatusCard}>
    <MaterialCommunityIcons name={icon} size={24} color={color} />
    <View style={{ marginLeft: 10, flex: 1 }}>
      <Text style={styles.fleetLabel}>{label}</Text>
      <View style={styles.progressBar}>
        <View 
          style={[
            styles.progressFill, 
            { width: `${(count/total) * 100}%`, backgroundColor: color }
          ]} 
        />
      </View>
    </View>
    <Text style={styles.fleetCount}>{count}/{total}</Text>
  </View>
);

const TripCard = ({ tripId, driver, vehicle, from, to, status, progress, eta }) => {
  const getStatusColor = () => {
    if (status === "In Transit") return "#0c497c";
    if (status === "Loading") return "#ffc107";
    if (status === "Near Delivery") return "#28a745";
    return "#6c757d";
  };

  return (
    <View style={styles.tripCard}>
      <View style={styles.tripHeader}>
        <Text style={styles.tripId}>{tripId}</Text>
        <View style={[styles.statusBadge, { backgroundColor: getStatusColor() }]}>
          <Text style={styles.statusText}>{status}</Text>
        </View>
      </View>

      <View style={styles.tripDetails}>
        <View style={styles.tripRow}>
          <MaterialCommunityIcons name="account" size={16} color="#6c757d" />
          <Text style={styles.tripDetailText}>{driver}</Text>
        </View>
        <View style={styles.tripRow}>
          <MaterialCommunityIcons name="truck" size={16} color="#6c757d" />
          <Text style={styles.tripDetailText}>{vehicle}</Text>
        </View>
      </View>

      <View style={styles.routeContainer}>
        <View style={styles.routePoint}>
          <View style={styles.fromDot} />
          <Text style={styles.routeText}>{from}</Text>
        </View>
        <MaterialCommunityIcons name="arrow-right" size={20} color="#6c757d" />
        <View style={styles.routePoint}>
          <View style={styles.toDot} />
          <Text style={styles.routeText}>{to}</Text>
        </View>
      </View>

      <View style={styles.progressContainer}>
        <View style={styles.progressBarLarge}>
          <View 
            style={[
              styles.progressFillLarge, 
              { width: `${progress}%`, backgroundColor: getStatusColor() }
            ]} 
          />
        </View>
        <Text style={styles.etaText}>ETA: {eta}</Text>
      </View>
    </View>
  );
};

const DriverPerformanceItem = ({ name, trips, rating, rank }) => (
  <View style={styles.performanceCard}>
    <View style={styles.rankBadge}>
      <Text style={styles.rankText}>#{rank}</Text>
    </View>
    
    <Image
      source={require("../../assets/driver.png")}
      style={styles.driverAvatar}
    />
    
    <View style={{ flex: 1, marginLeft: 12 }}>
      <Text style={styles.driverName}>{name}</Text>
      <View style={styles.performanceRow}>
        <MaterialCommunityIcons name="truck" size={14} color="#6c757d" />
        <Text style={styles.performanceText}>{trips} trips</Text>
        <MaterialCommunityIcons name="star" size={14} color="#ffc107" style={{ marginLeft: 10 }} />
        <Text style={styles.performanceText}>{rating}</Text>
      </View>
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
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
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

  company: {
    fontSize: width * 0.035,
    color: "#0c497c",
    marginTop: 2,
    fontWeight: "600",
  },

  location: {
    fontSize: width * 0.032,
    color: "#6c757d",
    marginTop: 4,
  },

  statusRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 6,
  },

  activeDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#28a745",
    marginRight: 6,
  },

  activeText: {
    color: "#28a745",
    fontWeight: "600",
    fontSize: 12,
  },

  fleetText: {
    color: "#6c757d",
    fontSize: 12,
    marginLeft: 8,
  },

  /* STATS */
  statsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: width * 0.04,
  },

  statCard: {
    width: "31.5%",
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 14,
    alignItems: "center",
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },

  iconContainer: {
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 8,
  },

  statValue: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#051370",
    marginTop: 4,
  },

  statLabel: {
    fontSize: 12,
    color: "#6c757d",
    marginTop: 2,
  },

  /* REVENUE */
  revenueCard: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 16,
    marginBottom: width * 0.04,
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },

  revenueHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
  },

  periodText: {
    fontSize: 12,
    color: "#6c757d",
    backgroundColor: "#f4f6f9",
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 12,
  },

  revenueStats: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  revenueItem: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },

  revenueDivider: {
    width: 1,
    height: 40,
    backgroundColor: "#e0e0e0",
    marginHorizontal: 16,
  },

  revenueLabel: {
    fontSize: 12,
    color: "#6c757d",
  },

  revenueValue: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#051370",
    marginTop: 2,
  },

  /* SECTIONS */
  sectionTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#051370",
    marginBottom: 12,
    marginTop: 8,
  },

  headerRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 12,
    marginTop: 8,
  },

  viewAllText: {
    fontSize: 14,
    color: "#0c497c",
    fontWeight: "600",
  },

  /* ACTIONS */
  actionsGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginBottom: width * 0.04,
  },

  actionBtn: {
    width: "48%",
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    alignItems: "center",
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },

  actionText: {
    color: "#fff",
    marginTop: 8,
    fontWeight: "600",
    fontSize: 13,
  },

  /* FLEET STATUS */
  fleetContainer: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 16,
    marginBottom: width * 0.04,
    elevation: 2,
  },

  fleetStatusCard: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
  },

  fleetLabel: {
    fontSize: 13,
    color: "#051370",
    fontWeight: "600",
    marginBottom: 6,
  },

  fleetCount: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#051370",
    marginLeft: 10,
  },

  progressBar: {
    height: 6,
    backgroundColor: "#e0e0e0",
    borderRadius: 3,
    overflow: "hidden",
  },

  progressFill: {
    height: "100%",
    borderRadius: 3,
  },

  /* TRIP CARDS */
  tripCard: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },

  tripHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 12,
  },

  tripId: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#051370",
  },

  statusBadge: {
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 12,
  },

  statusText: {
    color: "#fff",
    fontSize: 11,
    fontWeight: "600",
  },

  tripDetails: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 12,
  },

  tripRow: {
    flexDirection: "row",
    alignItems: "center",
  },

  tripDetailText: {
    fontSize: 12,
    color: "#6c757d",
    marginLeft: 6,
  },

  routeContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 12,
    paddingVertical: 8,
    paddingHorizontal: 12,
    backgroundColor: "#f4f6f9",
    borderRadius: 8,
  },

  routePoint: {
    flexDirection: "row",
    alignItems: "center",
  },

  fromDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: "#28a745",
    marginRight: 8,
  },

  toDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: "#dc3545",
    marginRight: 8,
  },

  routeText: {
    fontSize: 13,
    fontWeight: "600",
    color: "#051370",
  },

  progressContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  progressBarLarge: {
    flex: 1,
    height: 8,
    backgroundColor: "#e0e0e0",
    borderRadius: 4,
    overflow: "hidden",
    marginRight: 12,
  },

  progressFillLarge: {
    height: "100%",
    borderRadius: 4,
  },

  etaText: {
    fontSize: 12,
    color: "#6c757d",
    fontWeight: "600",
  },

  /* DRIVER PERFORMANCE */
  performanceCard: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 14,
    marginBottom: 10,
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },

  rankBadge: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: "#0c497c",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12,
  },

  rankText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 12,
  },

  driverAvatar: {
    width: 45,
    height: 45,
    borderRadius: 8,
  },

  driverName: {
    fontSize: 14,
    fontWeight: "600",
    color: "#051370",
    marginBottom: 4,
  },

  performanceRow: {
    flexDirection: "row",
    alignItems: "center",
  },

  performanceText: {
    fontSize: 12,
    color: "#6c757d",
    marginLeft: 4,
  },
});