import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Dashboard from "./pages/Dashboard";
import Inventary from "./pages/Inventary";
import User from "./pages/User";
import Home from "./pages/Home";
import Login from "./pages/Login";
import { ScreenNames } from "./services/screenNames";

const Stack = createNativeStackNavigator();

export default function Router() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name={ScreenNames.Login}
          component={Login}
          options={{
            title: ScreenNames.Login,
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
          name={ScreenNames.Home}
          component={Home}
          options={{
            title: ScreenNames.Home,
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
            title: ScreenNames.Dashboard,
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
            title: ScreenNames.Inventary,
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
            title: ScreenNames.User,
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
