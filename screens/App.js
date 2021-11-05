import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  SafeAreaView
} from "react-native";
import { CommentInput } from "../components/inputTaker/index";
import { UserComments } from "../components/comment/index";
import {fakeComments} from "../Constants/fakeComments"
import {styles} from "./style"

export default function App() {

  const [postLike, setPostLike] = useState(0);
  const [likesCount, setLikesCount] = useState(123);

  const [inputComment, setInputComment] = React.useState("");
  const [comments, setComments] = useState(fakeComments);
  const [commentsCount, setCommentsCount] = useState(comments.length);

  const handleNewComment = () => {
    // alert(inputComment)
    const commentSample = {
      imageSrc: require("../assets/boy_profile.jpeg"),
      userName: "Janner",
      content: inputComment,
      liked: true,
    };
    setInputComment("");
    setComments((comments) => [...comments, commentSample]);
    setCommentsCount(commentsCount+1);
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
          <Image
            // style={styles.tinyLogo}
            source={require("../assets/Group.png")}
          />
        </View>
        <Image
          style={styles.profile_pic}
          source={require("../assets/profile.png")}
          onPress={() => setPostLike(1)}
        />
        <View></View>

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
                      ? require("../assets/like_t.png")
                      : require("../assets/liked_t.png")
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
                  source={require("../assets/message.png")}
                />

              <Text style={styles.text_sm}>{commentsCount}</Text>
            </View>
          </View>

          <View>
            <Image
              style={{
                width: 17,
                // height: 17,
              }}
              onPress={() => setPostLike(0)}
              source={require("../assets/save.png")}
            />
          </View>
        </View>
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

