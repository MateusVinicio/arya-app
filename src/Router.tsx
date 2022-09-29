import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Dashboard from "./pages/Dashboard";
import Inventary from "./pages/Inventary";
import User from "./pages/User";
import Home from "./pages/Home";

const Stack = createNativeStackNavigator();

export enum ScreenNames {
  Home = "Home",
  Dashboard = "Dashboard",
  Inventary = "Inventário",
  User = "Usuário",
}

ScreenNames.Home;

export default function Router() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name={ScreenNames.Home} component={Home} />
        <Stack.Screen name={ScreenNames.Dashboard} component={Dashboard} />
        <Stack.Screen name={ScreenNames.Inventary} component={Inventary} />
        <Stack.Screen name={ScreenNames.User} component={User} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
