import { View, Text, StyleSheet } from "react-native";
import React from "react";

interface DashboardProps {
  route: any;
}

export default function Inventary({ route }: DashboardProps) {
  return (
    <View style={styles.container}>
      <Text>Dash</Text>
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
