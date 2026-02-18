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

/* -------- HEADER -------- */
const HeaderTitle = () => (
  <View style={{ flexDirection: "row", alignItems: "center" }}>
    <Image
      source={require("../../assets/jsfc_logo_m.png")}
      style={{ width: 34, height: 34, marginRight: 8 }}
      resizeMode="contain"
    />
    <Text style={{ fontSize: 18, fontWeight: "700", color: "#0A2A66" }}>
      AGM Panel
    </Text>
  </View>
);

/* -------- CUSTOM DRAWER -------- */
function CustomDrawerContent(props) {
  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>

      <TouchableOpacity
        style={styles.logoutBtn}
        onPress={() => props.navigation.navigate("logout")}
      >
        <Text style={styles.logoutText}>Log out</Text>
      </TouchableOpacity>
    </View>
  );
}

export default function Layout() {
  return (
    <>
      <StatusBar backgroundColor="#FFFFFF" barStyle="dark-content" />

      <Drawer
        drawerContent={(props) => <CustomDrawerContent {...props} />}
        screenOptions={({ navigation }) => ({
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
          drawerPosition: "right",
          drawerStyle: {  width: "60%" },
          drawerIcon: () => null,
          drawerActiveTintColor: "#0A2A66",
        })}
      >
        <Drawer.Screen name="home" options={{ title: "Dashboard" }} />
        <Drawer.Screen
          name="notification"
          options={{ title: "Notification" }}
        />
        <Drawer.Screen name="report" options={{ title: "Report" }} />

        {/* hidden logout screen */}
        <Drawer.Screen
          name="logout"
          options={{ drawerItemStyle: { display: "none" } }}
        />
      </Drawer>
    </>
  );
}

const styles = StyleSheet.create({
  logoutBtn: {
    padding: 18,
    borderTopWidth: 1,
    borderColor: "#E0E0E0",
  },
  logoutText: {
    color: "#D32F2F",
    fontWeight: "600",
    fontSize: 15,
  },
});
