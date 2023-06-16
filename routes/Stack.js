import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/Home";
import Reviews from "../screens/Reviews";
import About from "../screens/About";
import Chat from "../screens/Chat";
import Contacts from "../screens/Contacts";

const Stack = createStackNavigator();

const stackOptionsStyle = {
  headerStyle: { backgroundColor: "#fff" },
  headerTitle: "",
};

const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Homepage"
        component={Home}
        options={stackOptionsStyle}
      />
      <Stack.Screen
        name="Reviews-Details"
        component={Reviews}
        options={stackOptionsStyle}
      />
    </Stack.Navigator>
  );
};

const AboutStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Aboutpage"
        component={About}
        options={stackOptionsStyle}
      />
    </Stack.Navigator>
  );
};

const ChatStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="chatpage"
        component={Chat}
        options={stackOptionsStyle}
      />
    </Stack.Navigator>
  );
};

const ContactStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Contactpage"
        component={Contacts}
        options={stackOptionsStyle}
      />
    </Stack.Navigator>
  );
};

export { HomeStack, AboutStack, ChatStack, ContactStack };
