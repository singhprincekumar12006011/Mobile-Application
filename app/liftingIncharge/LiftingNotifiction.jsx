import React, { useState, useEffect } from "react";
import { 
  View, 
  Text, 
  FlatList, 
  StyleSheet, 
  TouchableOpacity 
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

// Sample notifications (replace with API data)
const initialNotifications = [
  { id: "1", title: "Trip Assigned", message: "Vehicle V123 assigned to Trip T001", read: false, time: "10:30 AM" },
  { id: "2", title: "Delay Alert", message: "Trip T002 delayed by 15 mins", read: false, time: "11:00 AM" },
  { id: "3", title: "Completed Trip", message: "Trip T003 has been completed", read: true, time: "Yesterday" },
];

const NotificationScreen = () => {
  const [notifications, setNotifications] = useState(initialNotifications);

  // Mark a notification as read
  const markAsRead = (id) => {
    const updated = notifications.map(n => 
      n.id === id ? { ...n, read: true } : n
    );
    setNotifications(updated);
  };

  // Render each notification
  const renderItem = ({ item }) => (
    <TouchableOpacity 
      style={[styles.notificationCard, item.read ? styles.read : styles.unread]}
      onPress={() => markAsRead(item.id)}
    >
      <View style={styles.notificationHeader}>
        <Text style={styles.notificationTitle}>{item.title}</Text>
        {!item.read && <MaterialIcons name="fiber-new" size={20} color="#ff3b30" />}
      </View>
      <Text style={styles.notificationMessage}>{item.message}</Text>
      <Text style={styles.notificationTime}>{item.time}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Notifications</Text>
      <FlatList
        data={notifications}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ paddingBottom: 20 }}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default NotificationScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    padding: 16,
  },
  header: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 12,
    color: "#333",
  },
  notificationCard: {
    backgroundColor: "#fff",
    padding: 12,
    borderRadius: 8,
    marginBottom: 12,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
  },
  notificationHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 4,
  },
  notificationTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#111",
  },
  notificationMessage: {
    fontSize: 14,
    color: "#555",
  },
  notificationTime: {
    fontSize: 12,
    color: "#999",
    marginTop: 4,
    textAlign: "right",
  },
  unread: {
    borderLeftWidth: 4,
    borderLeftColor: "#007bff",
  },
  read: {
    borderLeftWidth: 0,
  },
});
