import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./Screen/Home";
import Info from "./Screen/Info";
import EditInfo from "./Screen/EditInfo";
import ManagerStore from "./Screen/ManagerStore";
import tagconst from "./contains/tagconst";
import AddOrEditStore from "./Screen/AddOrEditStore";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name={tagconst.HOME} component={Home} />
        <Stack.Screen name={tagconst.USERINFOMATION} component={Info} />
        <Stack.Screen name={tagconst.EDITINFOMATION} component={EditInfo} />
        <Stack.Screen name={tagconst.MANAGERSTORE} component={ManagerStore} />
        <Stack.Screen name={tagconst.EDITSTORE} component={AddOrEditStore} />
        <Stack.Screen name={tagconst.ADDSTORE} component={AddOrEditStore} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
