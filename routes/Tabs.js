import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AboutStack, ChatStack, ContactStack, HomeStack } from "./Stack";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";

const Tabs = createBottomTabNavigator();

const tabsOptionsStyle = {
  headerStyle: { backgroundColor: "#fff" },
  headerTitle: "",
  tabBarLabelStyle: { fontSize: 13, fontWeight: "bold" },
};

const MyTabs = () => {
  return (
    <Tabs.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, focused }) => {
          let iconName;

          if (route.name === "Home") {
            iconName = focused ? "home" : "home-outline";
            return <Ionicons name={iconName} size={24} color={color} />;
          } else if (route.name === "Chat") {
            iconName = focused
              ? "chatbox-ellipses"
              : "chatbox-ellipses-outline";
            return <Ionicons name={iconName} size={24} color={color} />;
          } else if (route.name === "About") {
            iconName = focused
              ? "information-circle"
              : "information-circle-outline";
            return <Ionicons name={iconName} size={24} color={color} />;
          } else if (route.name === "Contact") {
            iconName = focused ? "contacts" : "contacts-outline";
            return (
              <MaterialCommunityIcons name={iconName} size={24} color={color} />
            );
          }
          return null;
        },
        tabBarInactiveTintColor: "gray",
        tabBarActiveTintColor: "coral",
      })}
    >
      <Tabs.Screen
        name="Home"
        component={HomeStack}
        options={tabsOptionsStyle}
      />
      <Tabs.Screen
        name="Chat"
        component={ChatStack}
        options={{
          ...tabsOptionsStyle,
          tabBarBadge: 15,
        }}
      />
      <Tabs.Screen
        name="About"
        component={AboutStack}
        options={tabsOptionsStyle}
      />
      <Tabs.Screen
        name="Contact"
        component={ContactStack}
        options={{
          ...tabsOptionsStyle,
          tabBarBadge: 350,
        }}
      />
    </Tabs.Navigator>
  );
};

export default MyTabs;
