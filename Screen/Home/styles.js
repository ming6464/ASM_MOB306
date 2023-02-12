import { StyleSheet } from "react-native";
import color from "../../contains/color";
const styles = StyleSheet.create({
  container: {},
  user_imgCover: {
    height: 195,
    width: "110%",
    color: color.black,
    marginLeft: -10,
  },
  user_imgAvatar: {
    marginTop: -50,
    height: 130,
    width: 130,
    borderWidth: 6,
    borderColor: color.white,
    borderRadius: 65,
  },
  user_text: {
    fontWeight: "500",
  },
  opa: {
    width: "90%",
    height: 62,
    marginTop: 15,
    alignSelf: "center",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#b3e5fc",
    borderRadius: 10,
    borderWidth: 1,
  },
  text_btnOpa: {
    fontSize: 20,
    width: "100%",
    fontWeight: "500",
  },
  img_btnOpa: {
    height: 60,
    width: 60,
    borderRadius: 10,
    marginRight: 15,
  },
});
export default styles;
