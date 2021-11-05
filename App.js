import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { CommentInput } from "./components/inputTaker/index";
import { UserComments } from "./components/comment/index";

const fakeComments = [
  {
    imageSrc: require("./assets/boy_profile.jpeg"),
    userName: "Janner",
    content: "Fuck you look",
    liked: true,
  },
  {
    imageSrc: require("./assets/boy_profile.jpeg"),
    userName: "Janner",
    content: "Fuck you look",
    liked: true,
  },

  {
    imageSrc: require("./assets/boy_profile.jpeg"),
    userName: "Janner",
    content: "Fuck you look",
    liked: true,
  },

  {
    imageSrc: require("./assets/boy_profile.jpeg"),
    userName: "Janner",
    content: "Fuck you look",
    liked: true,
  },

  {
    imageSrc: require("./assets/boy_profile.jpeg"),
    userName: "Janner",
    content: "Fuck you look",
    liked: true,
  },

  {
    imageSrc: require("./assets/boy_profile.jpeg"),
    userName: "Janner",
    content: "Fuck you look",
    liked: true,
  },
];

export default function App() {

  const [postLike, setPostLike] = useState(0);
  const [likesCount, setLikesCount] = useState(123);

  const [inputComment, setInputComment] = React.useState("");
  const [comments, setComments] = useState(fakeComments);
  const [commentsCount, setCommentsCount] = useState(comments.length);

  const handleNewComment = () => {
    // alert(inputComment)
    const commentSample = {
      imageSrc: require("./assets/boy_profile.jpeg"),
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
            source={require("./assets/Vector.png")}
          />
          <Image
            style={styles.prfile_logo}
            source={require("./assets/boy_profile.jpeg")}
          />
          <Image
            // style={styles.tinyLogo}
            source={require("./assets/Group.png")}
          />
        </View>
        <Image
          style={styles.profile_pic}
          source={require("./assets/boy.png")}
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
                      ? require("./assets/like_t.png")
                      : require("./assets/liked_t.png")
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
                  source={require("./assets/message.png")}
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
              source={require("./assets/save.png")}
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#171717",
  },
  cardBody: {
    height: "70%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    paddingBottom: 15,
    paddingTop: 30,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    backgroundColor: "#BF92EC",
  },
  card: {
    // width:'100%',
    // backgroundColor: "blue",
    height: "10%",
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: 15,
    paddingRight: 15,
  },
  prfile_logo: {
    width: 38,
    height: 38,
    borderRadius: 100,
    borderColor: "white",
    borderWidth: 2.5,
  },
  profile_pic: {
    width: "90%",
    height: 351,
    marginLeft: "auto",
    marginRight: "auto",
  },
  profileInfo: {
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
    paddingLeft: 15,
    paddingRight: 15,
  },
  leftWrapper: {
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
    width: "40%",
  },
  profileInfoWrappr: {
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
  },
  likeIcon: {
    color: "blue",
  },
  tinyLogo: {
    width: 17,
    height: 17,
  },
  text_sm: {
    color: "white",
    fontSize: 16,
    lineHeight: 30,
    marginLeft: 5,
  },
});
