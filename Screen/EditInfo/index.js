import { useEffect, useState } from "react";
import { TextInput, View, Text, TouchableOpacity, Alert } from "react-native";
import color from "../../contains/color";
import tagconst, { URL_USER } from "../../contains/tagconst";
import styles from "./styles";

const EditInfo = (props) => {
  const navi = props.navigation;
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [studenId, setStudenId] = useState("");
  const [avatar, setAvatar] = useState("");
  const info = props.route.params.info;
  useEffect(() => {
    setName(info.name);
    setPhone(info.phone);
    setEmail(info.email);
    setStudenId(info.studenId);
    setAvatar(info.avatar);
  }, []);
  const onSave = () => {
    if (
      !tagconst.regex_name.test(name) ||
      !tagconst.regex_phone.test(phone) ||
      email.length <= 0 ||
      studenId.length <= 0
    ) {
      Alert.alert("Error !", "Dữ liệu không đúng, hoặc chưa đầy đủ !", [
        {
          text: "close",
        },
      ]);
      return;
    }
    fetch(URL_USER, {
      method: "PUT",
      body: JSON.stringify({ name, studenId, email, phone, avatar }),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    }).then((res) => navi.goBack());
  };
  return (
    <View style={styles.container}>
      <View style={styles.containerTextInput}>
        <TextInput
          placeholder="Name"
          value={name}
          placeholderTextColor={color.black}
          style={styles.textInput}
          onChangeText={(value1) => setName(value1)}
        />
        <TextInput
          placeholder="Student Id"
          value={studenId}
          placeholderTextColor={color.black}
          style={styles.textInput}
          onChangeText={(value1) => setStudenId(value1)}
        />
        <TextInput
          placeholder="Email"
          value={email}
          placeholderTextColor={color.black}
          style={styles.textInput}
          onChangeText={(value1) => setEmail(value1)}
        />
        <TextInput
          placeholder="Phone"
          value={phone}
          placeholderTextColor={color.black}
          style={styles.textInput}
          onChangeText={(value1) => setPhone(value1)}
        />
        <TextInput
          placeholder="Avatar"
          value={avatar}
          placeholderTextColor={color.black}
          style={styles.textInput}
          onChangeText={(value1) => setAvatar(value1)}
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
              onSave();
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
