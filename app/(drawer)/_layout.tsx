import { Drawer } from "expo-router/drawer";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function DrawerLayout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer>
        <Drawer.Screen
          name="index"
          options={{
            title: "Dashboard",
          }}
        />
        <Drawer.Screen
          name="lead"
          options={{
            title: "Lead",
          }}
        />
      </Drawer>
    </GestureHandlerRootView>
  );
}
