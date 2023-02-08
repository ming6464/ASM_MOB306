import { useState } from "react";
import {
  Button,
  FlatList,
  View,
  TouchableOpacity,
  ToastAndroid,
  Alert,
} from "react-native";
import ItemStore from "../../Components/ItemStore";
import tagconst from "../../contains/tagconst";

const ManagerStore = (props) => {
  const navi = props.navigation;
  let itemStore = {
      id: 0,
      avatar:
        "https://www.shutterstock.com/image-vector/red-store-vector-sign-promotion-600w-1918121837.jpg",
      name: "Đồ lưu niệm",
      phone: "092889388293",
      address: "Hàng đông, Hà Nội",
      state: 1,
    },
    itemStore1 = {
      id: 1,
      avatar:
        "https://www.shutterstock.com/image-vector/red-store-vector-sign-promotion-600w-1918121837.jpg",
      name: "Đồ lưu niệm",
      phone: "092889388293",
      address: "Hàng đông, Hà Nội",
      state: 0,
    };
  const [listItemStore, setListItemStore] = useState([itemStore, itemStore1]);
  const onEdit = (item) => {
    navi.navigate(tagconst.EDITSTORE, {
      AddOfEditList: AddOfEditList,
      isEdit: true,
      itemStore: item,
    });
  };
  const DeleteItem = (id) => {
    Alert.alert("Delete ?", "Are you sure to detele id : " + id, [
      {
        text: "Yes",
        onPress: () => onDelete(id),
      },
      {
        text: "No",
      },
    ]);
  };
  const onDelete = (id) => {
    const newList = listItemStore.filter((item) => item.id != id);
    setListItemStore(newList);
  };
  const AddOfEditList = (item, isEdit) => {
    let newList;
    if (isEdit) {
      newList = listItemStore.map((e) => {
        if (e.id == item.id) {
          return item;
        }
        return e;
      });
    } else {
      let length = listItemStore.length;
      item.id = length == 0 ? length : listItemStore[length - 1].id + 1;
      newList = [...listItemStore, item];
    }
    setListItemStore(newList);
  };
  return (
    <View>
      <Button
        title="Add"
        onPress={() => {
          navi.navigate(tagconst.ADDSTORE, {
            AddOfEditList: AddOfEditList,
            isEdit: false,
          });
        }}
      />
      <FlatList
        data={listItemStore}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() => onEdit(item)}
              onLongPress={() => DeleteItem(item.id)}
            >
              <ItemStore itemStore={item} />
            </TouchableOpacity>
          );
        }}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};
export default ManagerStore;
