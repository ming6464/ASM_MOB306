import { StyleSheet } from "react-native";
import color from "../../contains/color";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: color.background,
  },
  form: {
    alignItems: "center",
    marginTop: 40,
    width: "80%",
  },
  avatar: {
    alignItems: "center",
    justifyContent: "center",
  },
  img: {
    width: 300,
    height: 300,
    borderRadius: 150,
    overflow: "hidden",
    borderWidth: 2,
    borderColor: color.primary,
  },
  textForm: {
    color: color.primary,
    fontSize: 20,
    fontWeight: "500",
    marginBottom: 20,
  },
  btn: {
    borderRadius: 30,
    height: 50,
    width: "100%",
    borderColor: color.border_btn,
    borderWidth: 2,
    marginTop: 50,
  },
  touchOpa: {
    backgroundColor: color.bg_btn,
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    borderRadius: 30,
  },
  textOpa: {
    color: color.white,
    fontSize: 20,
    fontWeight: "bold",
  },
  icon: {
    width: 25,
    height: 25,
    backgroundColor: color.black,
    resizeMode: "contain",
  },
  containerStore: {
    alignSelf: "flex-end",
    marginBottom: 30,
    flexDirection: "row",
    alignItems: "flex-end",
    marginTop: 10,
    marginEnd: 5,
    borderBottomWidth: 2,
  },
  iconStore: {
    width: 25,
    height: 25,
  },
  textStore: {
    color: color.primary,
    fontWeight: "600",
    fontSize: 16,
    width: 100,
  },
});
export default styles;
