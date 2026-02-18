import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
  Image,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  Dimensions,
  Modal,
  ActivityIndicator,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

import { users } from "../app/data/users";
import { getRouteByRole } from "../app/utils/roleRoute";
import { saveSession, getToken, getUser } from "../app/utils/auth";

const { width } = Dimensions.get("window");

export default function Login() {
  const router = useRouter();

  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [loading, setLoading] = useState(true); // ✅ NEW

  /* ---------------- AUTO LOGIN CHECK ---------------- */
  useEffect(() => {
    checkLogin();
  }, []);

  const checkLogin = async () => {
    try {
      const token = await getToken();
      if (!token) {
        setLoading(false);
        return;
      }

      const user = await getUser();
      if (!user) {
        setLoading(false);
        return;
      }

      const route = getRouteByRole(user.role);
      router.replace(route);
    } catch (error) {
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };

  /* ---------------- LOGIN HANDLER ---------------- */
  const handleLogin = async () => {
    if (!userId || !password) {
      Alert.alert("Error", "Enter User ID & Password");
      return;
    }

    const user = users.find(
      (u) => u.id === userId && u.password === password
    );

    if (!user) {
      Alert.alert("Login Failed", "Invalid credentials");
      return;
    }

    await saveSession(user);
    const route = getRouteByRole(user.role);
    router.replace(route);
  };

  /* ---------------- LOADING SCREEN ---------------- */
  if (loading) {
    return (
      <View style={styles.loaderContainer}>
        <ActivityIndicator size="large" color="#1a237e" />
        <Text style={styles.loaderText}>Checking session...</Text>
      </View>
    );
  }

  /* ---------------- LOGIN UI ---------------- */
  return (
    <KeyboardAvoidingView
      style={{ flex: 1, backgroundColor: "#f5f7fa" }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <ScrollView
        contentContainerStyle={styles.scroll}
        keyboardShouldPersistTaps="handled"
      >
        {/* HEADER */}
        <View style={styles.header}>
          <Image
            source={require("../assets/jsfc_logo_m.png")}
            style={styles.logo}
            resizeMode="contain"
          />
          <Text style={styles.title}>Welcome to</Text>
          <Text style={styles.titleBold}>JSFC Portal</Text>
          <Text style={styles.subtitle}>Government of Jharkhand</Text>
        </View>

        {/* CARD */}
        <View style={styles.card}>
          {/* USER ID */}
          <View style={styles.inputWrapper}>
            <Ionicons name="person-outline" size={20} color="#666" />
            <TextInput
              placeholder="Enter User ID"
              style={styles.input}
              value={userId}
              onChangeText={setUserId}
            />
          </View>

          {/* PASSWORD */}
          <View style={styles.inputWrapper}>
            <Ionicons name="lock-closed-outline" size={20} color="#666" />
            <TextInput
              placeholder="Enter Password"
              secureTextEntry={!showPassword}
              style={styles.input}
              value={password}
              onChangeText={setPassword}
            />
            <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
              <Ionicons
                name={showPassword ? "eye-outline" : "eye-off-outline"}
                size={20}
                color="#666"
              />
            </TouchableOpacity>
          </View>

          {/* FORGOT */}
          <TouchableOpacity onPress={() => setModalVisible(true)}>
            <Text style={styles.forgot}>Forgot Password?</Text>
          </TouchableOpacity>

          {/* LOGIN BTN */}
          <TouchableOpacity style={styles.loginBtn} onPress={handleLogin}>
            <Text style={styles.loginText}>LOGIN</Text>
            <Ionicons name="arrow-forward" size={20} color="#fff" />
          </TouchableOpacity>

          <Text style={styles.footer}>Authorized Personnel Only</Text>
        </View>

        {/* RESET PASSWORD MODAL */}
        <Modal visible={modalVisible} transparent animationType="slide">
          <View style={styles.overlay}>
            <View style={styles.modalBox}>
              <Text style={styles.modalTitle}>Reset Password</Text>

              <TextInput
                placeholder="Old Password"
                style={styles.modalInput}
                secureTextEntry
              />
              <TextInput
                placeholder="New Password"
                style={styles.modalInput}
                secureTextEntry
              />
              <TextInput
                placeholder="Confirm Password"
                style={styles.modalInput}
                secureTextEntry
              />

              <TouchableOpacity
                style={styles.loginBtn}
                onPress={() =>
                  Alert.alert("UI Only", "Reset logic not implemented")
                }
              >
                <Text style={styles.loginText}>RESET PASSWORD</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.cancelBtn}
                onPress={() => setModalVisible(false)}
              >
                <Text style={{ color: "#333" }}>Cancel</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

/* ---------------- STYLES ---------------- */
const styles = StyleSheet.create({
  scroll: {
    flexGrow: 1,
    justifyContent: "center",
    padding: 20,
  },

  loaderContainer: {
    flex: 1,
    backgroundColor: "#f5f7fa",
    justifyContent: "center",
    alignItems: "center",
  },

  loaderText: {
    marginTop: 10,
    color: "#555",
  },

  header: { alignItems: "center", marginBottom: 20 },
  logo: { width: 140, height: 140 },
  title: { fontSize: 18, color: "#333" },
  titleBold: { fontSize: 24, fontWeight: "bold", color: "#1a237e" },
  subtitle: { fontSize: 13, color: "#666" },

  card: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 10,
    elevation: 4,
  },

  inputWrapper: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 15,
    backgroundColor: "#f9f9f9",
  },

  input: { flex: 1, paddingVertical: 12 },

  forgot: {
    textAlign: "right",
    color: "#1a237e",
    marginBottom: 15,
    fontWeight: "600",
  },

  loginBtn: {
    flexDirection: "row",
    backgroundColor: "#1a237e",
    padding: 15,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    gap: 8,
  },

  loginText: { color: "#fff", fontWeight: "bold" },

  footer: {
    marginTop: 15,
    textAlign: "center",
    fontSize: 12,
    color: "#666",
  },

  overlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "center",
    padding: 20,
  },

  modalBox: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 10,
  },

  modalTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 15,
    color: "#1a237e",
  },

  modalInput: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    padding: 12,
    marginBottom: 10,
  },

  cancelBtn: {
    marginTop: 10,
    alignItems: "center",
  },
});
