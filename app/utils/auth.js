import AsyncStorage from "@react-native-async-storage/async-storage";

const TOKEN_KEY = "APP_TOKEN";
const USER_KEY = "APP_USER";

// Generate simple token
export const generateToken = () => {
  return "token_" + Math.random().toString(36).substring(2) + Date.now();
};

// Save session (token + user)
export const saveSession = async (user) => {
  const token = generateToken();
  await AsyncStorage.setItem(TOKEN_KEY, token);
  await AsyncStorage.setItem(USER_KEY, JSON.stringify(user));
  return token;
};

// Get token
export const getToken = async () => {
  return await AsyncStorage.getItem(TOKEN_KEY);
};

// Get user
export const getUser = async () => {
  const user = await AsyncStorage.getItem(USER_KEY);
  return user ? JSON.parse(user) : null;
};

// Logout
export const logout = async () => {
  await AsyncStorage.removeItem(TOKEN_KEY);
  await AsyncStorage.removeItem(USER_KEY);
};
