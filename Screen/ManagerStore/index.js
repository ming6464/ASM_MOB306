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
import DB from "../../db.json";

const ManagerStore = (props) => {
  const navi = props.navigation;
  const [isShowBtn, setIsShowBtn] = useState(true);
  const [listItemStore, setListItemStore] = useState(DB.Store);
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
        onPress: () => {
          ToastAndroid.show("Xoá thành công !", ToastAndroid.SHORT);
          onDelete(id);
        },
      },
      {
        text: "No",
      },
    ]);
  };
  const onDelete = (id) => {
    const newList = listItemStore.filter((item) => item.id != id);
    setListItemStore(newList);
    DB.Store = newList;
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
    DB.Store = newList;
  };
  return (
    <View>
      {isShowBtn ? (
        <Button
          title="Add"
          onPress={() => {
            navi.navigate(tagconst.ADDSTORE, {
              AddOfEditList: AddOfEditList,
              isEdit: false,
            });
          }}
        />
      ) : null}
      <FlatList
        style={{ height: "95%" }}
        data={listItemStore}
        renderItem={({ item }) => {
          return (
            <ItemStore
              itemStore={item}
              onEdit={onEdit}
              DeleteItem={DeleteItem}
            />
          );
        }}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};
export default ManagerStore;
