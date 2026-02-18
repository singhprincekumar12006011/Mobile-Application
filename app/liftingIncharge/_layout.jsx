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
} from "@react-navigation/drawer";
import { Ionicons } from "@expo/vector-icons";

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
  const user = {
    name: "Lifting Incharge",
    role: "District Lifting Incharge",
    userId: "LIC-2045",
  };

  return (
    <View style={{ flex: 1 }}>
      {/* ===== PROFILE ===== */}
      <View style={styles.profileBox}>
        <View style={styles.avatar}>
          <Text style={styles.avatarText}>
            {user.name.charAt(0)}
          </Text>
        </View>
        <Text style={styles.userName}>{user.name}</Text>
        <Text style={styles.userRole}>{user.role}</Text>
        <Text style={styles.userId}>ID: {user.userId}</Text>
      </View>

      {/* ===== MENU ===== */}
      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>

      {/* ===== LOGOUT ===== */}
      <TouchableOpacity
        style={styles.logoutBtn}
        onPress={() => {
          props.navigation.closeDrawer();
          props.navigation.navigate("logout");
        }}
        activeOpacity={0.7}
      >
        <Ionicons name="log-out-outline" size={20} color="#D32F2F" />
        <Text style={styles.logoutText}>Log out</Text>
      </TouchableOpacity>
    </View>
  );
}

/* ---------------- MAIN LAYOUT ---------------- */
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
          drawerStyle: { width: "65%" },
          drawerActiveTintColor: "#0A2A66",
          drawerInactiveTintColor: "#444",
          drawerLabelStyle: {
            fontSize: 15,
            fontWeight: "500",
          },
          overlayColor: "rgba(0,0,0,0.2)",
        })}
      >
        {/* ===== SCREENS ===== */}
        <Drawer.Screen
          name="dashboard"
          options={{
            title: "Home",
            drawerIcon: ({ color, size }) => (
              <Ionicons name="home-outline" size={size} color={color} />
            ),
          }}
        />

        <Drawer.Screen
          name="LiftingDashboard"
          options={{
            title: "Lifting Dashboard",
            drawerIcon: ({ color, size }) => (
              <Ionicons name="grid-outline" size={size} color={color} />
            ),
          }}
        />

        <Drawer.Screen
          name="LiftingNotifiction"
          options={{
            title: "Notification",
            drawerIcon: ({ color, size }) => (
              <Ionicons
                name="notifications-outline"
                size={size}
                color={color}
              />
            ),
          }}
        />

        {/* HIDDEN LOGOUT ROUTE */}
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
    paddingTop: 60,
    paddingBottom: 20,
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
    fontSize: 28,
    fontWeight: "700",
  },
  userName: {
    fontSize: 18,
    fontWeight: "700",
    color: "#0A2A66",
  },
  userRole: {
    fontSize: 13,
    color: "#555",
    marginTop: 2,
  },
  userId: {
    fontSize: 12,
    color: "#777",
    marginTop: 2,
  },

  /* Logout */
  logoutBtn: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    paddingVertical: 18,
    paddingHorizontal: 20,
    borderTopWidth: 1,
    borderTopColor: "#E0E0E0",
    backgroundColor: "#FFFFFF",
  },
  logoutText: {
    color: "#D32F2F",
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 10,
  },
});
