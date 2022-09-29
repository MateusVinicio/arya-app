import { View, Text, StyleSheet, Button } from "react-native";
import React from "react";
import { ScreenNames } from "../Router";

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

  return (
    <View style={styles.container}>
      <Text>Home</Text>

      <Button title="Dashboard" onPress={handleDashboard} />
      <Button title="Inventário" onPress={handleInventary} />
      <Button title="Usuário" onPress={handleUser} />
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
