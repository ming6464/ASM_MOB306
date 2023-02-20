import { View, Image, Text, TouchableOpacity } from "react-native";
import tagconst, { URL_USER } from "../../contains/tagconst";
import styles from "./styles";
import { useState, useEffect } from "react";
import { useIsFocused } from "@react-navigation/native";
const Home = (props) => {
  const navi = props.navigation;
  const [infoHome, setInfoHome] = useState({});
  useEffect(() => {
    fetch(URL_USER)
      .then((res) => res.json())
      .then((data) => setInfoHome(data));
  }, [useIsFocused()]);
  return (
    <View style={styles.container}>
      <View>
        <Image
          style={styles.user_imgCover}
          source={{
            uri: "https://duhocvietglobal.com/wp-content/uploads/2018/12/dat-nuoc-va-con-nguoi-anh-quoc.jpg",
          }}
        />
        <TouchableOpacity
          style={{ flexDirection: "row" }}
          onPress={() =>
            navi.navigate(tagconst.USERINFOMATION, { setInfoHome: setInfoHome })
          }
        >
          <Image
            style={styles.user_imgAvatar}
            source={{
              uri: infoHome.avatar,
            }}
          />
          <View style={{ width: "100%", marginStart: 5 }}>
            <Text style={{ fontWeight: "500", fontSize: 22 }}>
              {infoHome.name}
            </Text>
            <Text style={{ fontSize: 14 }}>{infoHome.email}</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View
        style={{
          height: 7,
          borderWidth: 2.5,
          borderBottomWidth: 0,
          borderTopStartRadius: 10,
          borderTopEndRadius: 10,
          marginStart: 5,
          marginEnd: 5,
          marginTop: 15,
        }}
      />
      <TouchableOpacity
        style={styles.opa}
        onPress={() => navi.navigate(tagconst.MANAGERSTORE)}
      >
        <Image
          style={styles.img_btnOpa}
          source={{
            uri: "https://www.shutterstock.com/image-vector/red-store-vector-sign-promotion-600w-1918121837.jpg",
          }}
        />
        <Text style={styles.text_btnOpa}>Manager Store</Text>
      </TouchableOpacity>
    </View>
  );
};
export default Home;
