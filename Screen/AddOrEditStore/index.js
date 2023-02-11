import { useEffect, useState } from "react";
import {
  TextInput,
  View,
  Text,
  ToastAndroid,
  TouchableOpacity,
} from "react-native";
import RadioButton from "../../Components/RadioButton";
import color from "../../contains/color";
import tagconst from "../../contains/tagconst";
import styles from "./styles";

const EditStore = (props) => {
  const navi = props.navigation;
  let name, phone, address, id, avatar;
  const [state, setSate] = useState(1);
  const route = props.route;
  const AddOfEditList = route.params.AddOfEditList;
  const isEdit = route.params.isEdit;
  if (isEdit) {
    let itemStore = route.params.itemStore;
    name = itemStore.name;
    phone = itemStore.phone;
    address = itemStore.address;
    avatar = itemStore.avatar;
    id = itemStore.id;
    useEffect(() => {
      setSate(itemStore.state);
    }, []);
  }
  //   const {itemStore,isEdit} = route.params;

  const RederTextInput = (defaultValue, holder) => {
    return (
      <TextInput
        placeholder={holder}
        defaultValue={defaultValue}
        placeholderTextColor={color.black}
        style={styles.textInput}
        onChangeText={(value) => {
          ToastAndroid.show(defaultValue, ToastAndroid.SHORT);
          return (defaultValue = value + "");
        }}
      />
    );
  };
  return (
    <View style={styles.container}>
      {isEdit ? <Text style={styles.text_id}>ID : {id}</Text> : null}
      <View style={styles.containerTextInput}>
        <TextInput
          placeholder={"Name"}
          defaultValue={name}
          placeholderTextColor={color.black}
          style={styles.textInput}
          onChangeText={(value) => (name = value + "")}
        />
        <TextInput
          placeholder={"Phone"}
          defaultValue={phone}
          placeholderTextColor={color.black}
          style={styles.textInput}
          onChangeText={(value) => (phone = value + "")}
        />
        <TextInput
          placeholder={"Address"}
          defaultValue={address}
          placeholderTextColor={color.black}
          style={styles.textInput}
          onChangeText={(value) => (address = value + "")}
        />
        <TextInput
          placeholder={"Avatar"}
          defaultValue={avatar}
          placeholderTextColor={color.black}
          style={styles.textInput}
          onChangeText={(value) => (avatar = value + "")}
        />
        {isEdit ? (
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
            onPress={() => navi.navigate(tagconst.MANAGERSTORE)}
          >
            <Text style={styles.textTouchOpa}>Cancel</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.btn}>
          <TouchableOpacity
            style={styles.touchOpa}
            onPress={() => {
              let item = {
                name,
                phone,
                address,
                state,
                avatar,
              };
              if (isEdit) {
                item.id = id;
              }
              AddOfEditList(item, isEdit);
              navi.navigate(tagconst.MANAGERSTORE);
            }}
          >
            <Text style={styles.textTouchOpa}>{isEdit ? "Save" : "Add"}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default EditStore;
