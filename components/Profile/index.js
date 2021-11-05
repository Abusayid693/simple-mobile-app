import React, { useState, useEffect } from "react";
import { Text, View, Image, TouchableOpacity } from "react-native";
import { styles } from "./style";

export function Profile({ numComments }) {
  const [postLike, setPostLike] = useState(0);
  const [likesCount, setLikesCount] = useState(123);

  return (
    <View style={styles.profileInfo}>
      <View style={styles.leftWrapper}>
        <View style={styles.profileInfoWrappr}>
          <TouchableOpacity onPress={() => setPostLike(!postLike)}>
            <Image
              style={{
                width: 19,
                height: 17,
              }}
              source={
                postLike
                  ? require("../../assets/like_t.png")
                  : require("../../assets/liked_t.png")
              }
            />
          </TouchableOpacity>

          <Text style={styles.text_sm}>{likesCount}</Text>
        </View>

        <View style={styles.profileInfoWrappr}>
          <Image
            style={{
              width: 18.6,
              height: 17,
            }}
            onPress={() => setPostLike(0)}
            source={require("../../assets/message.png")}
          />

          <Text style={styles.text_sm}>{numComments}</Text>
        </View>
      </View>

      <View>
        <Image
          style={{
            width: 17,
          }}
          onPress={() => setPostLike(0)}
          source={require("../../assets/save.png")}
        />
      </View>
    </View>
  );
}
