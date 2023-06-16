import { View, Text, StyleSheet, ScrollView } from "react-native";
import React from "react";
import Button from "./Button";

const Reviews = ({ navigation }) => {
  return (
    <ScrollView style={styles.main}>
      <Text style={styles.title}>Reviews Details Page</Text>
      <Text style={styles.subtitle}>
        This is the details page of your app. Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Nostrum sit maxime debitis cum ex ullam
        consequatur placeat, deserunt esse dignissimos a officia assumenda non
        qui natus cumque laboriosam? Accusamus similique quo soluta amet, nihil
        asperiores beatae ipsum placeat ut necessitatibus, cumque nesciunt vel
        voluptatibus hic quibusdam eos numquam alias atque.
      </Text>

      <Button title="Go Home" onPress={() => navigation.goBack()} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: "#fff",
  },

  title: {
    fontSize: 40,
    marginVertical: 30,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 25,
    color: "#38434D",
  },
});

export default Reviews;
