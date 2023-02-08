import { useState } from "react";
import {
  View,
  Image,
  Text,
  TouchableOpacity,
  ToastAndroid,
} from "react-native";
import tagconst from "../../contains/tagconst";
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
  const renderIcon = (src) => {
    return <Image style={styles.icon} source={src} />;
  };

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
            uri: "https://scontent.fhan14-3.fna.fbcdn.net/v/t39.30808-6/277519151_1433428187089496_6333398984156131861_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=XgKzLr1FHzMAX8T3PYC&_nc_ht=scontent.fhan14-3.fna&oh=00_AfApOMLavWkLTXvjWq6cx_YIRUasFyCuzje_8ViIhq42LQ&oe=63E6E924",
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
        <TouchableOpacity
          style={styles.btn}
          onPress={() =>
            navi.navigate(tagconst.EDITINFOMATION, {
              info: info,
              setInfo: setInfo,
            })
          }
        >
          <Text style={styles.textBtn}>Edit</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default Info;
