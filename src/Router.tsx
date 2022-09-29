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
  User = "Usuários",
}

ScreenNames.Home;

export default function Router() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name={ScreenNames.Home}
          component={Home}
          options={{
            title: `AryaApp - ${ScreenNames.Home}`,
            headerTitleAlign: "center",
            headerStyle: {
              backgroundColor: "#1e2022",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
            },
          }}
        />
        <Stack.Screen
          name={ScreenNames.Dashboard}
          component={Dashboard}
          options={{
            title: `AryaApp - ${ScreenNames.Dashboard}`,
            headerTitleAlign: "center",
            headerStyle: {
              backgroundColor: "#1e2022",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
            },
          }}
        />
        <Stack.Screen
          name={ScreenNames.Inventary}
          component={Inventary}
          options={{
            title: `AryaApp - ${ScreenNames.Inventary}`,
            headerTitleAlign: "center",
            headerStyle: {
              backgroundColor: "#1e2022",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
            },
          }}
        />
        <Stack.Screen
          name={ScreenNames.User}
          component={User}
          options={{
            title: `AryaApp - ${ScreenNames.User}`,
            headerTitleAlign: "center",
            headerStyle: {
              backgroundColor: "#1e2022",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
