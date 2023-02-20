import { useEffect, useState } from "react";
import { View, Image, Text, TouchableOpacity } from "react-native";
import tagconst, { URL_USER } from "../../contains/tagconst";
import styles from "./styles";
import { useIsFocused } from "@react-navigation/native";
const Info = (props) => {
  const navi = props.navigation;
  const [info, setInfo] = useState({});
  const renderIcon = (src) => {
    return <Image style={styles.icon} source={src} />;
  };

  useEffect(() => {
    fetch(URL_USER)
      .then((res) => res.json())
      .then((data) => setInfo(data));
  }, [useIsFocused()]);
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.containerStore}
        onPress={() => {
          navi.navigate(tagconst.MANAGERSTORE);
        }}
      >
        <Text style={styles.textStore}>Go to store</Text>
        <Image
          style={styles.iconStore}
          source={require("../../assets/store_40.png")}
        />
      </TouchableOpacity>
      <View style={styles.avatar}>
        <Image
          style={styles.img}
          source={{
            uri: info.avatar,
          }}
        />
      </View>

      <View style={styles.form}>
        <View>
          <Text style={styles.textForm}>
            {renderIcon(require("../../assets/person_25.png"))} {info.name}
          </Text>
          <Text style={styles.textForm}>
            {renderIcon(require("../../assets/id_25.png"))} {info.studenId}
          </Text>
          <Text style={styles.textForm}>
            {renderIcon(require("../../assets/mail_25.png"))} {info.email}
          </Text>
          <Text style={styles.textForm}>
            {renderIcon(require("../../assets/phone__25.png"))} {info.phone}
          </Text>
        </View>
        <View style={styles.btn}>
          <TouchableOpacity
            style={styles.touchOpa}
            onPress={() =>
              navi.navigate(tagconst.EDITINFOMATION, {
                info: info,
                setInfo: setInfo,
              })
            }
          >
            <Text style={styles.textOpa}>Edit</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
export default Info;
