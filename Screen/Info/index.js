import { useState } from "react";
import { View, Image, Text, TouchableOpacity } from "react-native";
import styles from "./styles";
const Info = (props) => {
  const navi = props.navigation;
  const [info, setInfo] = useState({
    name: "Nguyễn Gia Minh",
    studenId: "PH25430",
    email: "mingph25430@fpt.edu.vn",
    phone: "01983884928",
  });
  const UpdateInfo = (info) => {
    setInfo(info);
  };
  const changeScreen = (name, data = {}) => {
    navi.navigate(name, data);
  };

  return (
    <View style={styles.container}>
      <View style={styles.avatar}>
        <Image
          style={styles.img}
          source={{
            uri: "https://scontent.fhan14-3.fna.fbcdn.net/v/t39.30808-6/277519151_1433428187089496_6333398984156131861_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=XgKzLr1FHzMAX8T3PYC&_nc_ht=scontent.fhan14-3.fna&oh=00_AfApOMLavWkLTXvjWq6cx_YIRUasFyCuzje_8ViIhq42LQ&oe=63E6E924",
          }}
        />
      </View>

      <View style={styles.form}>
        <Text style={styles.textForm}>Name : {info.name}</Text>
        <Text style={styles.textForm}>Student Id : {info.studenId}</Text>
        <Text style={styles.textForm}>Email : {info.email}</Text>
        <Text style={styles.textForm}>Phone : {info.phone}</Text>
        <TouchableOpacity
          style={styles.btn}
          onPress={() =>
            changeScreen("Edit Info", { info: info, setInfo: setInfo })
          }
        >
          <Text style={styles.textBtn}>Edit</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default Info;
