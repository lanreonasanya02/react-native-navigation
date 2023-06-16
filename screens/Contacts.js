import { View, Text, StyleSheet } from "react-native";
import React from "react";

const Contacts = () => {
  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <Text style={styles.title}>Contact Us Page</Text>
        <Text style={styles.subtitle}>This is the first page of your app.</Text>
        <Text style={styles.subtitle}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos,
          veritatis aliquam quidem vel.
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 24,
    backgroundColor: "#fff",
  },
  main: {
    flex: 1,
    justifyContent: "center",
    maxWidth: 960,
    marginHorizontal: "auto",
  },
  title: {
    fontSize: 64,
    fontWeight: "bold",
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 36,
    color: "#38434D",
    marginBottom: 15,
  },
});

export default Contacts;
