import React from "react";
import { View, Text, Image, StyleSheet, ScrollView } from "react-native";
import { menu_list } from "../assets/assets";

const Menu = () => {
  return (
    <View style={styles.container}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {menu_list.map((item, index) => (
          <View key={index} style={styles.card}>
            <Image source={item.menu_image} style={styles.image} />
            <Text style={styles.name}>{item.menu_name}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default Menu;

const styles = StyleSheet.create({
  container: {
    paddingBottom: 10,
    paddingTop: 5,

  },
  scrollContent: {
    flexDirection: "row",
  },
  card: {
    width: 70,
    marginRight: 0,
    alignItems: "center",
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginBottom: 8,
  },
  name: {
    fontSize: 14,
    fontWeight: "600",
    textAlign: "center",
  },
});
