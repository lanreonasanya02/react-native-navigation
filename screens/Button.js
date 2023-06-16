import { Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";

const Button = ({ title, onPress }) => {
  return (
    <TouchableOpacity style={styles.btnContainer} onPress={onPress}>
      <Text style={styles.btn}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  btnContainer: {
    alignItems: "center",
    backgroundColor: "coral",
    paddingVertical: 20,
    borderRadius: 8,
    marginTop: 25,
  },

  btn: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#fff",
  },
});

export default Button;
