import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { Text, View, Image, TouchableOpacity, ScrollView } from "react-native";
import { styles } from "./style";

const CommentDebounced = () => {
  const [commentLike, setCommentLike] = useState(0);
  return (
    <TouchableOpacity onPress={() => setCommentLike(!commentLike)}>
      <Image
        onPress={() => setPostLike(0)}
        source={ commentLike ? require("../../assets/liked_b.png") : require("../../assets/like_b.png")} />
    </TouchableOpacity>
  );
};

export const UserComments = ({ comments }) => {
  return (
    <ScrollView style={styles.container}>
      {comments.map((comment, j) => (
        <View style={styles.singleComment} key={`${j}_${comment.imageSrc}`}>
          <View style={styles.wrapper}>
            <Image style={styles.prfile_logo} source={comment.imageSrc} />
            <View style={styles.textWrapper}>
              <Text style={{ color: "#A7A7A7", fontSize: 16, lineHeight: 30}} >
                {comment.userName}
              </Text>
              <Text style={{ color: "#fff"}} >
                {comment.content}
              </Text>
            </View>
          </View>
          <CommentDebounced />
        </View>
      ))}
      <StatusBar style="auto" />
    </ScrollView>
  );
};
