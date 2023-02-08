import { Text, Image, View } from "react-native";
import styles from "./styles";
const ItemStore = (props) => {
  let bg = "#43a047",
    bordercl = "#a5d6a7",
    bg2 = "#f44336",
    bordercl2 = "#ef9a9a";
  const { itemStore } = props;
  let state = itemStore.state;
  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: state == 1 ? bg : bg2,
          borderColor: state == 1 ? bordercl : bordercl2,
        },
      ]}
    >
      <View style={styles.container_avatar}>
        <Image
          style={styles.img_avatar}
          resizeMode="contain"
          source={{ uri: itemStore.avatar }}
        />
        <Text style={styles.text_id}>#{itemStore.id}</Text>
      </View>
      <View style={styles.container_info}>
        <Text style={styles.text_info}>Name: {itemStore.name}</Text>
        <View style={{ flex: 1, flexDirection: "row" }}>
          <Text style={[styles.text_info, { flex: 7 }]}>
            Phone: {itemStore.phone}
          </Text>
          <Text style={[styles.text_info, { flex: 3 }]}>State: {state}</Text>
        </View>
        <Text style={styles.text_info}>Address: {itemStore.address}</Text>
      </View>
    </View>
  );
};
export default ItemStore;
