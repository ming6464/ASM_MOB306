import { useState } from "react";
import {
  TextInput,
  View,
  Text,
  ToastAndroid,
  TouchableOpacity,
} from "react-native";
import DB from "../../db.json";
import color from "../../contains/color";
import tagconst from "../../contains/tagconst";
import styles from "./styles";

const EditInfo = (props) => {
  const navi = props.navigation;
  var name, phone, email, studenId, avatar;
  const route = props.route;
  const setInfo = route.params.setInfo;
  const info = route.params.info;
  name = info.name;
  email = info.email;
  phone = info.phone;
  studenId = info.studenId;
  avatar = info.avatar;
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
        <TextInput
          placeholder="Avatar"
          defaultValue={avatar}
          placeholderTextColor={color.black}
          style={styles.textInput}
          onChangeText={(value) => (avatar = value)}
        />
      </View>
      <View style={styles.containerBtn}>
        <View style={styles.btn}>
          <TouchableOpacity
            style={styles.touchOpa}
            onPress={() => navi.navigate(tagconst.HOME)}
          >
            <Text style={styles.textOpa}>Cancle</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.btn}>
          <TouchableOpacity
            style={styles.touchOpa}
            onPress={() => {
              let coverPhoto = DB.User.coverPhoto;
              DB.User = { name, studenId, email, phone, avatar, coverPhoto };
              setInfo(DB.User);
              navi.navigate(tagconst.USERINFOMATION);
            }}
          >
            <Text style={styles.textOpa}>Save</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default EditInfo;
