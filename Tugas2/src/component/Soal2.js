import React from "react";
import { View, StyleSheet } from "react-native";

import Soal1 from "./Soal1";

const Soal2 = () => {
  return (
    <View style={styles.container}>
      <Soal1 />
    </View>
  );
};

export default Soal2;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
