import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";


const CommentDebounced = () => {
  const [commentLike, setCommentLike] = useState(0);
  return (
    <TouchableOpacity onPress={() => setCommentLike(!commentLike)}>
      <Image
        // style={styles.tinyLogo}
        onPress={() => setPostLike(0)}
        source={
          commentLike
            ? require("../../assets/liked_b.png")
            : require("../../assets/like_b.png")
        }
      />
    </TouchableOpacity>
  );
};

export const UserComments = ({ comments }) => {
  const [commentLike, setCommentLike] = useState(0);

  return (
    <ScrollView style={commentsStyles.container}>
      {comments.map((comment, j) => (
        <View
          style={commentsStyles.singleComment}
          key={`${j}_${comment.imageSrc}`}
        >
          <Image style={commentsStyles.prfile_logo} source={comment.imageSrc} />
          <View style={commentsStyles.textWrapper}>
            <Text
              style={{
                color: "#A7A7A7",
                fontSize: 16,
                lineHeight: 30,
              }}
            >
              {comment.userName}
            </Text>
            <Text
              style={{
                color: "#fff",
              }}
            >
              {comment.content}
            </Text>
          </View>
          <CommentDebounced />
        </View>
      ))}
      <StatusBar style="auto" />
    </ScrollView>
  );
};

const commentsStyles = StyleSheet.create({
  singleComment: {
    color: "white",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingLeft: 15,
    paddingRight: 15,
    marginTop: 30,
  },
  prfile_logo: {
    width: 38,
    height: 38,
    borderRadius: 100,
    borderColor: "white",
    borderWidth: 2.5,
  },
});
