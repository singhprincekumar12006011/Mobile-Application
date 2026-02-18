import React from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StatusBar,
  StyleSheet,
} from "react-native";
import { Drawer } from "expo-router/drawer";
import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from "@react-navigation/drawer";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";

/* ---------------- HEADER TITLE ---------------- */
const HeaderTitle = () => (
  <View style={styles.headerTitle}>
    <Image
      source={require("../../assets/jsfc_logo_m.png")}
      style={styles.logo}
      resizeMode="contain"
    />
    <Text style={styles.headerText}>JSFC</Text>
  </View>
);

/* ---------------- CUSTOM DRAWER ---------------- */
function CustomDrawerContent(props) {
  // 🔹 Replace later with real auth data
  const user = {
    name: "Prince Kumar",
    role: "Transporter",
    userId: "JSFC-1024",
  };

  return (
    <View style={{ flex: 1 }}>
      {/* ===== PROFILE SECTION ===== */}
      <View style={styles.profileBox}>
        <View style={styles.avatar}>
          <Text style={styles.avatarText}>{user.name.charAt(0)}</Text>
        </View>

        <View>
          <Text style={styles.userName}>{user.name}</Text>
          <Text style={styles.userRole}>{user.role}</Text>
          <Text style={styles.userId}>ID: {user.userId}</Text>
        </View>
      </View>

      <View style={styles.divider} />

      {/* ===== MENU ITEMS ===== */}
      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>

      {/* ===== LOGOUT (BOTTOM) ===== */}
      <DrawerItem
        label="Log out"
        icon={({ size, color }) => (
          <Ionicons name="log-out-outline" size={size} color="#D32F2F" />
        )}
        labelStyle={{ color: "#D32F2F", fontWeight: "600" }}
        onPress={() => props.navigation.navigate("logout")}
      />
    </View>
  );
}

/* ---------------- LAYOUT ---------------- */
export default function Layout() {
  return (
    <>
      <StatusBar backgroundColor="#FFFFFF" barStyle="dark-content" />

      <Drawer
        drawerContent={(props) => <CustomDrawerContent {...props} />}
        screenOptions={({ navigation }) => ({
          /* HEADER */
          headerTitle: () => <HeaderTitle />,
          headerLeft: () => null,
          headerRight: () => (
            <TouchableOpacity
              onPress={() => navigation.toggleDrawer()}
              style={{ marginRight: 16 }}
            >
              <Ionicons name="menu" size={26} color="#0A2A66" />
            </TouchableOpacity>
          ),
          headerStyle: { backgroundColor: "#FFFFFF" },
          headerTitleAlign: "left",

          /* DRAWER */
          drawerPosition: "right",
          drawerStyle: { width: "60%" },
          drawerActiveTintColor: "#0A2A66",
          drawerLabelStyle: {
            fontSize: 15,
            fontWeight: "500",
          },
          overlayColor: "rgba(0,0,0,0.2)",
        })}
      >
        {/* ---------- VISIBLE SCREENS ---------- */}
        <Drawer.Screen
          name="dashboard"
          options={{
            title: "Home",
            drawerIcon: ({ color, size }) => (
              <Ionicons name="home-outline" color={color} size={size} />
            ),
          }}
        />
        <Drawer.Screen
          name="LiftingDashboard"
          options={{
            title: "Lifting Dashboard",
            drawerIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                name="warehouse"
                color={color}
                size={size}
              />
            ),
          }}
        />
        <Drawer.Screen
          name="TranspoterDashboard"
          options={{
            title: "Dashboard",
            drawerIcon: ({ color, size }) => (
              <Ionicons name="document-text-outline" color={color} size={size} />
            ),
          }}
        />
        <Drawer.Screen
          name="TransportTripHistory"
          options={{
            title: "Notification",
            drawerIcon: ({ color, size }) => (
              <Ionicons name="notifications-outline" color={color} size={size} />
            ),
          }}
        />

        {/* ---------- HIDDEN LOGOUT SCREEN ---------- */}
        <Drawer.Screen
          name="logout"
          options={{
            title: "Log out",
            drawerItemStyle: { display: "none" },
          }}
        />
      </Drawer>
    </>
  );
}

/* ---------------- STYLES ---------------- */
const styles = StyleSheet.create({
  /* Header */
  headerTitle: {
    flexDirection: "row",
    alignItems: "center",
  },
  logo: {
    width: 34,
    height: 34,
    marginRight: 8,
  },
  headerText: {
    fontSize: 18,
    fontWeight: "700",
    color: "#0A2A66",
  },

  /* Profile */
  profileBox: {
    padding: 16,
    paddingTop: 60,
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "#F5F7FA",
  },
  avatar: {
    width: 88,
    height: 88,
    borderRadius: 44,
    backgroundColor: "#0A2A66",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 12,
  },
  avatarText: {
    color: "#FFF",
    fontSize: 25,
    fontWeight: "700",
  },
  userName: {
    fontSize: 20,
    paddingTop: 4,
    fontWeight: "700",
    color: "#0A2A66",
    textAlign: "center",
  },
  userRole: {
    fontSize: 13,
    color: "#555",
    marginTop: 2,
    textAlign: "center",
  },
  userId: {
    fontSize: 12,
    color: "#777",
    marginTop: 1,
    textAlign: "center",
  },

  divider: {
    height: 1,
    backgroundColor: "#E0E0E0",
    marginHorizontal: 12,
    marginBottom: 4,
  },
});
