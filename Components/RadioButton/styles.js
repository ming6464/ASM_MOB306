import { StyleSheet } from "react-native";
import color from "../../contains/color";
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  circleEmpty: {
    width: 17,
    height: 17,
    borderColor: color.primary,
    borderWidth: 1.5,
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
  },
  circleFill: {
    width: 17,
    height: 17,
    borderRadius: 100,
    backgroundColor: color.primary,
  },
  text: {
    color: color.primary,
    fontSize: 17,
    marginStart: 3,
  },
});
export default styles;
