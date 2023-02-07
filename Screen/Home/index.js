import { Button, View } from "react-native";
import styles from "./styles";

const Home = (props) => {
  const navi = props.navigation;
  return (
    <View>
      <Button
        onPress={() => {
          navi.navigate("Info");
        }}
        title="Thông tin cá nhân"
      />
    </View>
  );
};
export default Home;
