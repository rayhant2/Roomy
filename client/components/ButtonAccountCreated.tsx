import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";

const Button = ({
  title,
  onPress,
  style,
}: {
  title: string;
  onPress: () => void;
  style: any;
}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.shadowContainer}>
      <Image
        source={require("@/assets/images/account_created_button.png")}
        style={styles.button}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  shadowContainer: {
    position: "relative",
    alignItems: "center",
    justifyContent: "center",
  },
  shadowBox: {
    position: "absolute",
    top: -1,
    left: 30,
    width: 300,
    height: 56, // Adjust height to match button height
    borderRadius: 0,
    borderWidth: 2,
    borderColor: "#000",
    backgroundColor: "transparent",
    zIndex: 5,
  },
  button: {
    backgroundColor: "#FFD600", // Yellow color
    padding: 5,
    width: 320,
    height: 62, // Adjust height to match shadowBox height
    borderRadius: 0,
    alignItems: "flex-start",
    justifyContent: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 23,
    fontWeight: "bold",
    position: "relative",
    bottom: 5,
    left: 10,
  },
});

export default Button;
