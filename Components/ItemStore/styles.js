import { useState } from "react";
import { StyleSheet } from "react-native";
import color from "../../contains/color";

const styles = StyleSheet.create({
  container: {
    height: 100,
    flexDirection: "row",
    borderWidth: 3,
    borderRadius: 30,
    backgroundColor: "#43a047",
    borderColor: "#a5d6a7",
    width: "90%",
    alignSelf: "center",
    marginTop: 10,
  },
  container_avatar: {
    flex: 2.5,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: -10,
  },
  img_avatar: {
    height: 70,
    width: 70,
    borderRadius: 35,
  },
  text_id: {
    color: color.white,
    fontWeight: "bold",
    fontSize: 11,
    width: "100%",
    textAlign: "center",
  },
  container_info: {
    flex: 7.5,
    justifyContent: "center",
  },
  text_info: {
    fontSize: 18,
    fontWeight: "500",
    color: color.white,
    flex: 1,
  },
});

export default styles;
