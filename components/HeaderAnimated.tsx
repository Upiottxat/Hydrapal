import LottieView from "lottie-react-native";
import React from "react";
import { Dimensions, StyleSheet, Text, View } from "react-native";

const { width: screenWidth } = Dimensions.get("window");

const HeaderAnimated = ({ HeaderTitle }: { HeaderTitle: string }) => {
  return (
    
      <View style={styles.header}>
        <LottieView
          autoPlay
          loop
          resizeMode="cover"
          source={require("../assets/Animations/Waves.json")}
          style={styles.wavesAnimation}
        />
        <Text style={styles.title}>{HeaderTitle}</Text>
      </View>
    
  );
};

const styles = StyleSheet.create({
  header: {
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    overflow: "hidden",
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
    width: "100%",
    height: 120, // 💖 header height
    marginBottom:0,
    padding:10,
    
  },
  title: {
    fontSize: 25,
    fontWeight: "700",
    color: "#333",
    zIndex: 2,
  },
  wavesAnimation: {
    position: "absolute",
    bottom: -screenWidth * 0.18,
    left: 0,
    width: screenWidth, // 💖 full screen width
    height: 60, // 💖 match header height
    zIndex: 1,

  },
});

export default HeaderAnimated;
