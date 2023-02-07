import { StyleSheet } from "react-native";
import color from "../../contains/color";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    marginTop: 100,
  },
  form: {
    alignItems: "center",
    marginTop: 50,
    width: "90%",
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
    color: color.black,
    fontWeight: "bold",
    fontSize: 20,
  },
  btn: {
    borderRadius: 30,
    backgroundColor: "#645CBB",
    alignItems: "center",
    justifyContent: "center",
    height: 50,
    width: "100%",
    borderColor: "#BFACE2",
    borderWidth: 2,
    marginTop: 70,
  },
  textBtn: {
    color: color.white,
    fontSize: 20,
    fontWeight: "bold",
  },
});
export default styles;
