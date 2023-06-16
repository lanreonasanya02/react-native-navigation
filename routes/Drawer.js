import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { AboutStack, ChatStack, ContactStack } from "./Stack";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import MyTabs from "./Tabs";
import DrawerContent from "./DrawerContent";

const Drawer = createDrawerNavigator();

const drawerOptionsStyle = {
  headerStyle: { backgroundColor: "coral" },
  headerTintColor: "#fff",
  headerTitleStyle: { fontWeight: "bold", fontSize: 20 },
};

const MyDrawer = () => {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <DrawerContent {...props} />}
      drawerStyle={{
        backgroundColor: "#fff",
        width: 200,
      }}
      drawerContentOptions={{
        drawerActiveTintColor: "coral",
        drawerLabelStyle: {
          fontSize: 20,
          fontWeight: "bold",
          marginBottom: 15,
          paddingTop: 5,
        },
      }}
    >
      <Drawer.Screen
        name="Home"
        component={MyTabs}
        options={drawerOptionsStyle}
      />

      <Drawer.Screen
        name="Chat"
        component={ChatStack}
        options={drawerOptionsStyle}
      />

      <Drawer.Screen
        name="About"
        component={AboutStack}
        options={drawerOptionsStyle}
      />

      <Drawer.Screen
        name="Contacts"
        component={ContactStack}
        options={drawerOptionsStyle}
      />
    </Drawer.Navigator>
  );
};

export default MyDrawer;
