import React, { useState } from "react";
import {
  View,
  Image,
  TouchableOpacity,
  TextInput,
} from "react-native";
import {styles} from "./style"

export const CommentInput = ({ text, onInputChange, insertNewComment }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => setPostLike(0)}>
        <Image
          style={styles.prfile_logo}
          source={require("../../assets/boy_profile.jpeg")}
        />
      </TouchableOpacity>
      <TextInput
        style={styles.input}
        onChangeText={(text) => onInputChange(text)}
        value={text}
        placeholder="useless placeholder"
        keyboardType="numeric"
        placeholderTextColor={'grey'}
      />
      <TouchableOpacity onPress={insertNewComment}>
        <Image
          style={styles.tinyLogo}
          source={require("../../assets/feather_send.png")}
        />
      </TouchableOpacity>
    </View>
  );
};

