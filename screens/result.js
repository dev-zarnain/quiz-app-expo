import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Title from "../components/title";
const Result = ({ navigation, route }) => {
  const { score } = route.params;

  const resultBanner = score > 40 ? "../assets/winner.png" : "";

  return (
    <View style={styles.container}>
      <Title text="Result" />
      <Text
        style={{
          paddingBottom: 12,
          fontSize: 22,
          fontWeight: 600,
          textAlign: "center",
        }}
      >
        Your Total Score
      </Text>
      <Text style={styles.scoreValue}>{score}</Text>
      <View style={styles.bannerContainer}>
        <Image
          source={
            score > 49
              ? require("../assets/winner.png")
              : require("../assets/failure.avif")
          }
          style={styles.banner}
          resizeMode="contain"
        />
      </View>
      <TouchableOpacity
        onPress={() => navigation.navigate("Home")}
        style={styles.button}
      >
        <Text style={styles.buttonText}>Go to home</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Result;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    paddingTop: 40,
    paddingHorizontal: 20,
    height: "100%",
  },
  banner: {
    height: 300,
    width: 300,
  },
  bannerContainer: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  button: {
    width: "100%",
    backgroundColor: "#ff2424",
    padding: 16,
    borderRadius: 16,
    alignItems: "center",
    marginBottom: 30,
  },
  buttonText: {
    fontSize: 24,
    fontWeight: "600",
    color: "white",
  },

  scoreValue: {
    fontSize: 24,
    fontWeight: "800",
    alignSelf: "center",
  },
});
