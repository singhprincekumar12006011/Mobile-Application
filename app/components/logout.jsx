import { useEffect } from "react";
import { useRouter } from "expo-router";
import { logout } from "../utils/auth";
import { View, ActivityIndicator } from "react-native";

export default function Logout() {
  const router = useRouter();

  useEffect(() => {
    const doLogout = async () => {
      await logout();
      router.replace("/"); // go to login
    };
    doLogout();
  }, []);

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <ActivityIndicator size="large" />
    </View>
  );
}
