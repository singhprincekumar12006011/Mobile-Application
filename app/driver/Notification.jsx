
import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Dimensions,
  TouchableOpacity,
  RefreshControl,
  Modal,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const { width } = Dimensions.get("window");

const Notification = () => {
  const [refreshing, setRefreshing] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedNotification, setSelectedNotification] = useState(null);

  const [notifications, setNotifications] = useState([
    {
      id: "1",
      title: "Trip Assigned",
      message:
        "New trip from Patna to Gaya has been assigned. Please start within 30 minutes and ensure vehicle documents are ready.",
      time: "2 min ago",
      read: false,
    },
    {
      id: "2",
      title: "Trip Completed",
      message:
        "Your trip Patna ➜ Nalanda marked as completed successfully. Payment will be credited shortly.",
      time: "1 hour ago",
      read: true,
    },
    {
      id: "3",
      title: "Payment Credited",
      message:
        "₹2,450 credited to your account for last completed trip. Check wallet for details.",
      time: "Yesterday",
      read: false,
    },
  ]);

  /* ---------- Open Modal ---------- */
  const openNotification = (item) => {
    setSelectedNotification(item);
    setModalVisible(true);

    // mark as read
    const updated = notifications.map((n) =>
      n.id === item.id ? { ...n, read: true } : n
    );
    setNotifications(updated);
  };

  /* ---------- Pull Refresh ---------- */
  const onRefresh = () => {
    setRefreshing(true);
    setTimeout(() => setRefreshing(false), 1000);
  };

  /* ---------- Render Notification Item ---------- */
  const renderItem = ({ item }) => (
    <TouchableOpacity
      onPress={() => openNotification(item)}
      style={[styles.card, !item.read && styles.unreadCard]}
    >
      <View style={styles.row}>
        <MaterialCommunityIcons
          name={item.read ? "bell-outline" : "bell-ring"}
          size={22}
          color={item.read ? "#777" : "#0c497c"}
        />

        <View style={{ flex: 1, marginLeft: 10 }}>
          <Text style={styles.title}>{item.title}</Text>
          <Text numberOfLines={1} style={styles.message}>
            {item.message}
          </Text>
          <Text style={styles.time}>{item.time}</Text>
        </View>

        {!item.read && <View style={styles.unreadDot} />}
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={notifications}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      />

      {/* ---------- Modal View ---------- */}
      <Modal
        visible={modalVisible}
        animationType="slide"
        transparent={true}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalCard}>
            
            <MaterialCommunityIcons
              name="bell-ring"
              size={40}
              color="#0c497c"
              style={{ marginBottom: 10 }}
            />

            <Text style={styles.modalTitle}>
              {selectedNotification?.title}
            </Text>

            <Text style={styles.modalMessage}>
              {selectedNotification?.message}
            </Text>

            <Text style={styles.modalTime}>
              {selectedNotification?.time}
            </Text>

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

export default Notification;



/* ---------- Styles ---------- */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f4f6f9",
    padding: width * 0.04,
  },

  card: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 14,
    marginBottom: 10,
    elevation: 2,
  },

  unreadCard: {
    borderLeftWidth: 4,
    borderLeftColor: "#0c497c",
  },

  row: {
    flexDirection: "row",
    alignItems: "center",
  },

  title: {
    fontSize: width * 0.038,
    fontWeight: "700",
    color: "#051370",
  },

  message: {
    fontSize: width * 0.033,
    color: "#555",
    marginTop: 2,
  },

  time: {
    fontSize: width * 0.028,
    color: "#999",
    marginTop: 3,
  },

  unreadDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: "#0c497c",
  },

  /* ---------- Modal ---------- */
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
    elevation: 5,
  },

  modalTitle: {
    fontSize: width * 0.045,
    fontWeight: "700",
    color: "#051370",
    marginBottom: 8,
  },

  modalMessage: {
    fontSize: width * 0.036,
    color: "#444",
    textAlign: "center",
    marginBottom: 10,
  },

  modalTime: {
    fontSize: width * 0.03,
    color: "#888",
    marginBottom: 15,
  },

  closeBtn: {
    backgroundColor: "#0c497c",
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 8,
  },
});
