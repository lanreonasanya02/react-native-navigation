import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import Drawer from "./routes/Drawer";

export default function App() {
  return (
    <NavigationContainer>
      <Drawer />
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}
