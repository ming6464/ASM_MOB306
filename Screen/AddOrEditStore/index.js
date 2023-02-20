import { useEffect, useState } from "react";
import { TextInput, View, Text, TouchableOpacity, Alert } from "react-native";
import RadioButton from "../../Components/RadioButton";
import color from "../../contains/color";
import tagconst, { URL_STORE } from "../../contains/tagconst";
import styles from "./styles";

const EditStore = (props) => {
  const navi = props.navigation;
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [avatar, setAvatar] = useState("");
  const [state, setSate] = useState(1);
  const editItem = props.route.params?.editItem;

  useEffect(() => {
    if (editItem) {
      setName(editItem.name);
      setPhone(editItem.phone);
      setAddress(editItem.address);
      setAvatar(editItem.avatar);
      setSate(editItem.state);
    }
  }, [editItem?.id]);

  const onSave = () => {
    if (
      !tagconst.regex_name.test(name) ||
      !tagconst.regex_phone.test(phone) ||
      address.length <= 0 ||
      avatar.length <= 0
    ) {
      Alert.alert("Error !", "Dữ liệu không đúng, hoặc chưa đầy đủ !", [
        {
          text: "close",
        },
      ]);
      return;
    }
    fetch(editItem ? URL_STORE + "/" + editItem.id : URL_STORE, {
      method: editItem ? "PUT" : "POST",
      body: JSON.stringify({ name, phone, address, avatar, state }),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    }).then((res) => navi.goBack());
  };
  return (
    <View style={styles.container}>
      {editItem ? <Text style={styles.text_id}>ID : {editItem.id}</Text> : null}
      <View style={styles.containerTextInput}>
        <TextInput
          placeholder={"Name"}
          value={name}
          placeholderTextColor={color.black}
          style={styles.textInput}
          onChangeText={(value1) => setName(value1)}
        />
        <TextInput
          placeholder={"Phone"}
          value={phone}
          placeholderTextColor={color.black}
          style={styles.textInput}
          onChangeText={(value1) => setPhone(value1)}
        />
        <TextInput
          placeholder={"Address"}
          value={address}
          placeholderTextColor={color.black}
          style={styles.textInput}
          onChangeText={(value1) => setAddress(value1)}
        />
        <TextInput
          placeholder={"Avatar"}
          value={avatar}
          placeholderTextColor={color.black}
          style={styles.textInput}
          onChangeText={(value1) => setAvatar(value1)}
        />
        {editItem ? (
          <View style={styles.container_state}>
            <Text style={styles.text_state}>State : </Text>
            <View>
              <TouchableOpacity onPress={() => setSate(1)}>
                <RadioButton
                  text={"Active (1)"}
                  checked={state === 1 ? true : false}
                  size={20}
                />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => setSate(0)}>
                <RadioButton
                  text={"Inactive (0)"}
                  checked={state === 0 ? true : false}
                  size={20}
                />
              </TouchableOpacity>
            </View>
          </View>
        ) : null}
      </View>
      <View style={styles.containerBtn}>
        <View style={styles.btn}>
          <TouchableOpacity
            style={styles.touchOpa}
            onPress={() => navi.goBack()}
          >
            <Text style={styles.textOpa}>Cancel</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.btn}>
          <TouchableOpacity
            style={styles.touchOpa}
            onPress={() => {
              onSave();
            }}
          >
            <Text style={styles.textOpa}>{editItem ? "Save" : "Add"}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default EditStore;
