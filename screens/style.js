import { StyleSheet } from "react-native";
import { Dimensions } from "react-native";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#171717",
    paddingBottom: 12,
  },
  cardBody: {
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
    width: windowWidth / 1.1,
    height: windowWidth / 1.1,
    marginLeft: "auto",
    marginRight: "auto",
    borderRadius: 20,
    overflow: "visible",
    shadowOffset: { width: 0, height: 4 },
    shadowColor: "#000",
    shadowOpacity: 0.4,
  },

  tinyLogo: {
    width: 17,
    height: 17,
  },
});
