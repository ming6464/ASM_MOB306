import { Text, Image, View, TouchableOpacity } from "react-native";
import styles from "./styles";
const ItemStore = ({ itemStore, onEdit, onDelete }) => {
  let bg = "#43a047",
    bordercl = "#a5d6a7",
    bg2 = "#f44336",
    bordercl2 = "#ef9a9a";
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
          <Text style={[styles.text_info, { flex: 7.5 }]}>
            Phone: {itemStore.phone}
          </Text>
          <Text style={[styles.text_info, { flex: 2.5 }]}>State: {state}</Text>
        </View>
        <Text style={styles.text_info}>Address: {itemStore.address}</Text>
        <View style={styles.container_btn}>
          <View style={styles.btn}>
            <TouchableOpacity
              style={styles.opa}
              onPress={() => onEdit(itemStore.id)}
            >
              <Image
                style={styles.img_opa}
                source={require("../../assets/edit_25_p2.png")}
              />
              <Text style={[styles.text_opa, { width: 40 }]}>Edit</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.btn}>
            <TouchableOpacity
              style={styles.opa}
              onPress={() => onDelete(itemStore.id)}
            >
              <Image
                style={styles.img_opa}
                source={require("../../assets/remove_24.png")}
              />
              <Text style={styles.text_opa}>Remove</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};
export default ItemStore;
