import { StyleSheet } from "react-native";
import color from "../../contains/color";
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  containerTextInput: {
    width: "80%",
    marginTop: 50,
  },
  textInput: {
    borderWidth: 1,
    borderBottomWidth: 2.5,
    borderColor: color.textInput,
    borderRadius: 5,
    paddingLeft: 10,
    height: 40,
    fontSize: 20,
    width: "100%",
    borderBottomColor: color.black,
    marginBottom: 20,
  },
  containerBtn: {
    marginTop: 30,
    flexDirection: "row",
    justifyContent: "space-between",
    width: "80%",
  },
  btn: {
    height: 40,
    width: "40%",
    borderRadius: 20,
    borderWidth: 1.7,
    borderColor: "#8c9eff",
  },
  touchOpa: {
    backgroundColor: "#3d5afe",
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
  },
  textTouchOpa: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#ede7f6",
  },
  text_id: {
    fontSize: 20,
    color: color.primary,
    fontWeight: "500",
    alignSelf: "flex-start",
    marginStart: 10,
    width: "100%",
  },
});
export default styles;
