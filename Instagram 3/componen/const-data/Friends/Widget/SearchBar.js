import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";

const UserItems = ({ item }) => {
  return (
    <View style={styles.search_container}>
      <View style={styles.search_account}>
        <Image
          source={require("../../../../assets/profile.png")}
          style={styles.story_ava}
        />
        <View>
          <Text style={{ ...styles.story_name, fontWeight: "bold" }}>
            {item.name}
          </Text>
          <Text style={styles.story_name}>{item.fullname}</Text>
        </View>
      </View>
      <View>
        <TouchableOpacity activeOpacity={0.6} style={styles.btn_follow}>
          <Text style={styles.story_name}>Follow</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default UserItems;

const styles = StyleSheet.create({
  search_container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 15,
  },
  search_account: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  story_ava: {
    width: 40,
    height: 40,
    borderRadius: 100,
    backgroundColor: "#f0f0f0",
    marginRight: 15,
  },
  story_name: {
    fontSize: 16,
    color: "white",
    textAlign: "left",
  },
  btn_follow: {
    backgroundColor: "purple",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
  },
});