import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
} from "react-native";

export const CommentInput = ({ text, onInputChange, insertNewComment }) => {
  return (
    <View style={newCommentsWrapper.container}>
      <TouchableOpacity onPress={() => setPostLike(0)}>
        <Image
          style={newCommentsWrapper.prfile_logo}
          source={require("../../assets/boy_profile.jpeg")}
        />
      </TouchableOpacity>
      <TextInput
        style={newCommentsWrapper.input}
        onChangeText={(text) => onInputChange(text)}
        value={text}
        placeholder="useless placeholder"
        keyboardType="numeric"
      />
      <TouchableOpacity onPress={insertNewComment}>
        <Image
          style={newCommentsWrapper.tinyLogo}
          source={require("../../assets/feather_send.png")}
        />
      </TouchableOpacity>
    </View>
  );
};

const newCommentsWrapper = StyleSheet.create({
  container: {
    width: "95%",
    height: 45,
    backgroundColor: "#fff",
    borderRadius: 20,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingLeft: 10,
    paddingRight: 10,
    alignItems: "center",
    marginLeft: "auto",
    marginRight: "auto",
  },
  input: {
    height: "100%",
    width: "60%",
    borderWidth: 0,
    padding: 10,
  },
  prfile_logo: {
    width: 38,
    height: 38,
    borderRadius: 100,
    borderColor: "white",
    borderWidth: 2.5,
  },
});
