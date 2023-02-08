import { Button, View } from "react-native";
import tagconst from "../../contains/tagconst";
import styles from "./styles";
const Home = (props) => {
  const navi = props.navigation;
  return (
    <View>
      <Button
        onPress={() => {
          navi.navigate(tagconst.USERINFOMATION);
        }}
        title="User Infomation"
      />
      <Button
        onPress={() => {
          navi.navigate(tagconst.MANAGERSTORE);
        }}
        title="Manager Store"
      />
    </View>
  );
};
export default Home;
