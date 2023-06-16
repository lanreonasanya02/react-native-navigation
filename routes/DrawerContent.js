import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { DrawerContentScrollView } from "@react-navigation/drawer";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";

const DrawerContent = ({ navigation, state }) => {
  const menuItems = [
    {
      name: "Home",
      icon: "home",
      iconOutline: "home-outline",
      family: "ionicons",
    },
    {
      name: "Chat",
      icon: "chatbox-ellipses",
      iconOutline: "chatbox-ellipses-outline",
      family: "ionicons",
    },
    {
      name: "About",
      icon: "information-circle",
      iconOutline: "information-circle-outline",
      family: "ionicons",
    },
    {
      name: "Contacts",
      icon: "contacts",
      iconOutline: "contacts-outline",
      family: "material-community",
    },
  ];

  //   console.log("state.routeNames:", state.routeNames);
  //   console.log("state.index:", state.index);

  return (
    <DrawerContentScrollView>
      {menuItems.map((item, index) => (
        <TouchableOpacity
          key={index}
          onPress={() => navigation.navigate(item.name)}
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginVertical: 10,
            marginLeft: 10,
          }}
        >
          <View
            style={{
              marginRight: 20,
              backgroundColor:
                state.routeNames[state.index] === item.name
                  ? "coral"
                  : "transparent",

              borderRadius: 5,
              padding: 15,
            }}
          >
            {item.family === "ionicons" ? (
              <Ionicons
                name={
                  state.routeNames[state.index] === item.name
                    ? item.icon
                    : item.iconOutline
                }
                size={24}
                color="#000"
              />
            ) : (
              <MaterialCommunityIcons
                name={
                  state.routeNames[state.index] === item.name
                    ? item.icon
                    : item.iconOutline
                }
                size={24}
                color="#000"
              />
            )}
          </View>
          <Text
            style={{
              fontSize: 20,
              fontWeight: "bold",
              color:
                state.routeNames[state.index] === item.name ? "coral" : "black",
            }}
          >
            {item.name}
          </Text>
        </TouchableOpacity>
      ))}
    </DrawerContentScrollView>
  );
};

export default DrawerContent;
