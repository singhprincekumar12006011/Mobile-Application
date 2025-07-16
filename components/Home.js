import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  SafeAreaView,
  StatusBar,
} from "react-native";
import Hero from "../pages/Hero";
import Menu from "../pages/Menu";
import FoodItems from "../pages/FoodItems";

const Home = ({ navigation }) => {
  const [search, setSearch] = useState("");

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar backgroundColor="#2E4374" barStyle="light-content" />

      <View style={styles.header}>
        <Text style={styles.headerTitle}>Anpurna</Text>
        <TextInput
          style={styles.input}
          placeholder="Search here..."
          placeholderTextColor="#999"
          value={search}
          onChangeText={(text) => setSearch(text)}
        />
      </View>
      <Hero />

      <View style={styles.body}>
        <Text style={styles.bodyline}>Your favorites are just a tap away!</Text>

        <View style={styles.bodyMenu}>
          <Text style={styles.bodyText}>Explore Our Menu</Text>
          <Menu />
        </View>
        <View style={styles.bodyFoodItems}>
          <FoodItems />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  header: {
    backgroundColor: "#d85139ff",
    padding: 15,
    paddingTop: 25,
    // borderBottomLeftRadius: 20,
    // borderBottomRightRadius: 20,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#ffffff",
    marginBottom: 10,
  },
  input: {
    height: 40,
    backgroundColor: "#ffffff",
    borderRadius: 20,
    paddingHorizontal: 15,
    fontSize: 16,
  },
  bodyline: {
    fontFamily: "cursive",
    fontSize: 20,
    fontWeight: "bold",
    color: "#333",
    textAlign: "center",
    marginBottom: 15,
    backgroundColor: "#d85139ff",
    padding: 10,
    color: "#ffffff",
    borderRadius: 25,
  },
  body: {
    padding: 10,
  },
  buttonContainer: {},
  bodyText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },
  bodyMenu: {
    borderBottomWidth: 1,
    borderBottomColor: "#4e4c4cff",
    borderTopWidth: 1,
    borderTopColor: "#4e4c4cff",
    paddingTop: 5,
    backgroundColor: "#f0d0cbff",
    marginHorizontal: -5,
    paddingHorizontal: 10,
  },
  bodyFoodItems: {
    marginTop: 10,
    
  },
});
