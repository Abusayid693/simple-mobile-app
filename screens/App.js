import React, { useState, useEffect } from "react";
import { View, Image } from "react-native";
import { CommentInput } from "../components/inputTaker/index";
import { UserComments } from "../components/comment/index";
import { fakeComments } from "../Constants/fakeComments";
import { styles } from "./style";
import { Profile } from "../components/Profile/";

export default function App() {
  const [inputComment, setInputComment] = React.useState("");
  const [comments, setComments] = useState(fakeComments);
  const [commentsCount, setCommentsCount] = useState(comments.length);

  const handleNewComment = () => {
    const commentSample = {
      imageSrc: require("../assets/boy_profile.jpeg"),
      userName: "Janner",
      content: inputComment,
      liked: true,
    };
    setInputComment("");
    setComments((comments) => [...comments, commentSample]);
    setCommentsCount(commentsCount + 1);
  };

  return (
    <View style={styles.container}>
      <View style={styles.cardBody}>
        <View style={styles.card}>
          <Image
            style={styles.tinyLogo}
            source={require("../assets/Vector.png")}
          />
          <Image
            style={styles.prfile_logo}
            source={require("../assets/boy_profile.jpeg")}
          />
          <Image source={require("../assets/Group.png")} />
        </View>
        <Image
          style={[styles.profile_pic, styles.shadow]}
          source={require("../assets/profile.png")}
          onPress={() => setPostLike(1)}
        />
        <Profile numComments={commentsCount} />
      </View>

      <UserComments comments={comments} />
      <CommentInput
        text={inputComment}
        onInputChange={(text) => setInputComment(text)}
        insertNewComment={handleNewComment}
      />
    </View>
  );
}
