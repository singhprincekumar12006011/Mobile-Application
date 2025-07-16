import React, { useRef, useEffect, useState } from "react";
import { View, ScrollView, Image, StyleSheet, Dimensions } from "react-native";

const { width } = Dimensions.get("window");

const images = [
  require("../assets/image1.jpg"),
  require("../assets/image2.jpg"),
  require("../assets/image3.jpg"),
  require("../assets/image4.jpg"),
  require("../assets/image5.jpg"),
  require("../assets/image6.jpg"),
  require("../assets/image7.jpg"),
  require("../assets/image8.jpg"),
];

const Hero = () => {
  const scrollRef = useRef(null);
  const [index, setIndex] = useState(0);

  // Auto-scroll once on mount
  useEffect(() => {
    const interval = setInterval(() => {
      let nextIndex = (index + 1) % images.length;
      setIndex(nextIndex);
      scrollRef.current?.scrollTo({ x: nextIndex * width, animated: true });
    }, 5000);

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, [index]);

  return (
    <View style={styles.container}>
      <ScrollView
        ref={scrollRef}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        scrollEventThrottle={16}
        onMomentumScrollEnd={(event) => {
          const scrollPosition = event.nativeEvent.contentOffset.x;
          const newIndex = Math.round(scrollPosition / width);
          setIndex(newIndex);
        }}
      >
        {images.map((img, i) => (
          <Image key={i} source={img} style={styles.image} />
        ))}
      </ScrollView>
    </View>
  );
};

export default Hero;

const styles = StyleSheet.create({
  container: {
    margin: 10,
    borderRadius: 15,
    overflow: "hidden",
  },
  image: {
    width: width,
    height: 250,
    resizeMode: "cover",
  },
});
