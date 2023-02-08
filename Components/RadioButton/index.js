import styles from "./styles";
import { View, Text } from "react-native";

const RadioButton = ({ text, checked = false, size = 17 }) => {
  return (
    <View style={styles.container}>
      <View style={[styles.circleEmpty, { width: size + 2, height: size + 2 }]}>
        {checked ? (
          <View
            style={[styles.circleFill, { width: size - 7, height: size - 7 }]}
          />
        ) : null}
      </View>
      <Text style={[styles.text, { fotnSize: size }]}>{text}</Text>
    </View>
  );
};
export default RadioButton;
