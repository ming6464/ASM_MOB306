import { useIsFocused } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { Button, FlatList, View, ToastAndroid, Alert } from "react-native";
import ItemStore from "../../Components/ItemStore";
import tagconst, { URL_STORE } from "../../contains/tagconst";

const ManagerStore = (props) => {
  const navi = props.navigation;
  const [listItemStore, setListItemStore] = useState([]);
  const isFocus = useIsFocused();
  const getList = () => {
    fetch(URL_STORE)
      .then((res) => res.json())
      .then((data) => {
        setListItemStore(data);
      })
      .catch(() => {
        ToastAndroid.show("lỗi", ToastAndroid.SHORT);
      });
  };

  useEffect(() => {
    getList();
  }, [isFocus]);

  const onEdit = (itemId) => {
    fetch(URL_STORE + "/" + itemId)
      .then((res) => res.json())
      .then((data) => navi.navigate(tagconst.EDITSTORE, { editItem: data }))
      .catch(() => ToastAndroid.show("Lỗi", ToastAndroid.SHORT));
  };
  const onDelete = (id) => {
    Alert.alert("Delete ?", "Are you sure to detele id : " + id, [
      {
        text: "Yes",
        onPress: () => {
          ToastAndroid.show("successful delete !", ToastAndroid.SHORT);
          fetch(URL_STORE + "/" + id, { method: "DELETE" }).then((res) => {
            ToastAndroid.show("error", ToastAndroid.SHORT);
            getList();
          });
        },
      },
      {
        text: "No",
      },
    ]);
  };

  return (
    <View>
      <Button
        title="Add"
        onPress={() => {
          navi.navigate(tagconst.ADDSTORE);
        }}
      />
      <FlatList
        style={{ height: "95%" }}
        data={listItemStore}
        renderItem={({ item }) => {
          return (
            <ItemStore itemStore={item} onEdit={onEdit} onDelete={onDelete} />
          );
        }}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};
export default ManagerStore;
