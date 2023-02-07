import { useState } from "react";
import {
  TextInput,
  View,
  Text,
  ToastAndroid,
  TouchableOpacity,
} from "react-native";
import color from "../../contains/color";
import styles from "./styles";

const EditInfo = (props) => {
  const navi = props.navigation;
  var name, phone, email, studenId;
  const route = props.route;
  const setInfo = route.params.setInfo;
  const info = route.params.info;

  name = info.name;
  email = info.email;
  (phone = info.phone), (studenId = info.studenId);

  const resetData = () => {
    name = "";
    email = "";
    phone = "";
    studenId = "";
  };

  return (
    <View style={styles.container}>
      <View style={styles.containerTextInput}>
        <TextInput
          placeholder="Name"
          defaultValue={name}
          placeholderTextColor={color.black}
          style={styles.textInput}
          onChangeText={(value) => (name = value)}
        />
        <TextInput
          placeholder="Student Id"
          defaultValue={studenId}
          placeholderTextColor={color.black}
          style={styles.textInput}
          onChangeText={(value) => (studenId = value)}
        />
        <TextInput
          placeholder="Email"
          defaultValue={email}
          placeholderTextColor={color.black}
          style={styles.textInput}
          onChangeText={(value) => (email = value)}
        />
        <TextInput
          placeholder="Phone"
          defaultValue={phone}
          placeholderTextColor={color.black}
          style={styles.textInput}
          onChangeText={(value) => (phone = value)}
        />
      </View>
      <View style={styles.containerBtn}>
        <View style={styles.btn}>
          <TouchableOpacity
            style={styles.touchOpa}
            onPress={() => navi.navigate("Home")}
          >
            <Text style={styles.textTouchOpa}>Cancle</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.btn}>
          <TouchableOpacity
            style={styles.touchOpa}
            onPress={() => {
              setInfo({ name, studenId, email, phone });
              navi.navigate("Info");
            }}
          >
            <Text style={styles.textTouchOpa}>Save</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default EditInfo;
