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
  <View style={{ flexDirection: "row", alignItems: "center" }}>
    <Image
      source={require("../../assets/jsfc_logo_m.png")}
      style={{ width: 34, height: 34, marginRight: 8 }}
      resizeMode="contain"
    />
    <Text style={{ fontSize: 18, fontWeight: "700", color: "#0A2A66" }}>
      DM Panel
    </Text>
  </View>
);

/* ---------------- CUSTOM DRAWER ---------------- */
function CustomDrawerContent(props) {
  const user = {
    name: "John Doe",
    role: "District Manager",
    userId: "DM-1024",
  };

  return (
    <View style={{ flex: 1 }}>
      {/* ===== PROFILE SECTION ===== */}
      <View style={styles.profileBox}>
        <View style={styles.avatar}>
          <Text style={styles.avatarText}>{user.name.charAt(0)}</Text>
        </View>
        <View style={{ alignItems: "center" }}>
          <Text style={styles.userName}>{user.name}</Text>
          <Text style={styles.userRole}>{user.role}</Text>
          <Text style={styles.userId}>ID: {user.userId}</Text>
        </View>
      </View>

      {/* ===== DRAWER MENU ITEMS ===== */}
      <DrawerContentScrollView {...props} contentContainerStyle={{ paddingTop: 0 }}>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>

      {/* ===== LOGOUT BUTTON ===== */}
      <TouchableOpacity
        style={styles.logoutBtn}
        onPress={() => props.navigation.navigate("logout")}
      >
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
          /* ---------- HEADER ---------- */
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
          headerShadowVisible: true,

          /* ---------- DRAWER ---------- */
          drawerPosition: "right",
          drawerStyle: {
            width: "60%",
          },
          overlayColor: "rgba(0,0,0,0.2)",
          drawerActiveTintColor: "#0A2A66",
          drawerLabelStyle: { fontWeight: "600", fontSize: 15 },
        })}
      >
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
          name="notification"
          options={{
            title: "Notification",
            drawerIcon: ({ color, size }) => (
              <Ionicons name="notifications-outline" size={size} color={color} />
            ),
          }}
        />
        <Drawer.Screen
          name="report"
          options={{
            title: "Report",
            drawerIcon: ({ color, size }) => (
              <Ionicons name="document-text-outline" size={size} color={color} />
            ),
          }}
        />

        {/* Hidden logout */}
        <Drawer.Screen
          name="logout"
          options={{
            drawerItemStyle: { display: "none" },
          }}
        />
      </Drawer>
    </>
  );
}

/* ---------------- STYLES ---------------- */
const styles = StyleSheet.create({
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
  avatarText: { color: "#FFF", fontSize: 25, fontWeight: "700" },
  userName: { fontSize: 20, fontWeight: "700", color: "#0A2A66", paddingBottom: 2 },
  userRole: { fontSize: 13, color: "#555" },
  userId: { fontSize: 12, color: "#777", marginTop: 1 },

  /* Logout */
  logoutBtn: {
    paddingVertical: 18,
    paddingHorizontal: 20,
    borderTopWidth: 1,
    borderColor: "#E0E0E0",
    backgroundColor: "#FFFFFF",
  },
  logoutText: { color: "#D32F2F", fontSize: 15, fontWeight: "600" },
});
