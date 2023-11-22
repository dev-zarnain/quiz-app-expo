import React from "react";
import { StyleSheet } from "react-native";
import { Text, View } from "react-native";

const Title = ({ text }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{text}</Text>
    </View>
  );
};

export default Title;

const styles = StyleSheet.create({
  title: {
    fontSize: 36,
    fontWeight: "600",
  },
  container: {
    paddingVertical: 16,
    justifyContent: "center",
    alignItems: "center",
  },
});
