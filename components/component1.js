import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const Component = ({ name, age, city }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hello Index Page</Text>
      <Text>Name: {name}</Text>
      <Text>Age: {age}</Text>
      <Text>City: {city}</Text>
      <Image
        style={styles.image}
        source={{
          uri:
            "https://images.ctfassets.net/hrltx12pl8hq/3j5RylRv1ZdswxcBaMi0y7/b84fa97296bd2350db6ea194c0dce7db/Music_Icon.jpg",
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    backgroundColor: "green",
    alignItems: "center",
  },
  title: {
    fontSize: 30,
    color: "red",
  },
  image: {
    height: 200, // Provide a numeric value along with percentage
    width: "50%", // Provide a numeric value along with percentage
  },
});

export default Component;
