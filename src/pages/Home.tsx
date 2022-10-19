import { View, Text, StyleSheet, Button } from "react-native";
import React from "react";
import { ScreenNames } from "../services/screenNames";

interface HomeProps {
  navigation: any;
}

export default function Home({ navigation }: HomeProps) {
  const handleDashboard = () => {
    navigation.navigate(ScreenNames.Dashboard);
  };

  const handleInventary = () => {
    navigation.navigate(ScreenNames.Inventary);
  };

  const handleUser = () => {
    navigation.navigate(ScreenNames.User);
  };

  const handleTest = () => {
    navigation.navigate(ScreenNames.Test);
  };

  const handleLogin = () => {
    navigation.navigate(ScreenNames.Login);
  };

  return (
    <View style={styles.container}>
      <Text>Home</Text>

      <Button title="Login" onPress={handleLogin} />
      <Button title="Dashboard" onPress={handleDashboard} />
      <Button title="Inventário" onPress={handleInventary} />
      <Button title="Usuários" onPress={handleUser} />
      <Button title="Test" onPress={handleTest} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
