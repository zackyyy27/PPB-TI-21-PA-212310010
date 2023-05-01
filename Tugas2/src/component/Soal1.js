import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const Soal1 = () => {
  return (
    <View style={styles.box}>
      <View style={styles.container}>
        <View style={styles.contentContainer}>
          <Text
            style={{
              fontSize: 20,
              fontWeight: "bold",
              backgroundColor: "brown",
              color: "#fff",
              textAlign: "center",
              textDecorationLine: "underline",
              padding: 10,
              marginBottom: 10,
            }}
          >
            History of Bicycle
          </Text>
          <Text style={styles.paragrapf}>
            A Bicycle, also called a pedal cycle, bike, push-bike, or cycle, is a 
            human-powered or motor powered assisted, single-track vehicle having 
            two wheels attached to a frame, one behind the other. A bicycle rider
            is called a cyclist or bicyclist.
          </Text>
        </View>
      </View>
      <View style={styles.avatarContainer}>
            <Image source={require('../../assets/avatar.png')} style={styles.img} />
          </View>
    </View>
  );
};

export default Soal1;

const styles = StyleSheet.create({
  paragrapf: {
    fontSize: 20,
    textAlign: "justify",
  },
  box: {
    width: 200,
  },
  img: {
    width: 128,
    height: 128,
    borderWidth: 2,
    borderStyle: "solid",
    borderColor: "black",
    borderRadius: 3,
  },
  container: {
    padding: 10,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 2,
    borderColor: "black",
    borderRadius: 5,
  },
  contentContainer: {
    alignItems: "center",
  },
  avatarContainer: {
    backgroundColor: "#00FFFF",
    padding: 5,
    borderRadius: 5,
    marginBottom: 10,
    alignItems: "center",
  },
});
