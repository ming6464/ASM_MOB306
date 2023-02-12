import { useState } from "react";
import { StyleSheet } from "react-native";
import color from "../../contains/color";

const styles = StyleSheet.create({
  container: {
    height: 150,
    flexDirection: "row",
    borderWidth: 3,
    borderRadius: 30,
    backgroundColor: "#43a047",
    borderColor: "#a5d6a7",
    width: "90%",
    alignSelf: "center",
    marginTop: 15,
    paddingBottom: 5,
    paddingTop: 5,
  },
  container_avatar: {
    flex: 2.5,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: -7,
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
  container_btn: {
    flex: 1,
    flexDirection: "row",
    height: 30,
    width: "70%",
    justifyContent: "space-between",
  },
  btn: {
    borderRadius: 5,
    borderColor: "#bbdefb",
    borderWidth: 1.7,
    height: "100%",
  },
  opa: {
    flexDirection: "row",
    backgroundColor: color.white,
    height: "100%",
    paddingStart: 5,
    paddingEnd: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  img_opa: {
    width: 20,
    height: 20,
    marginEnd: 5,
  },
  text_opa: {
    fontSize: 15,
    color: color.primary,
    fontWeight: "500",
    width: 65,
  },
});

export default styles;
