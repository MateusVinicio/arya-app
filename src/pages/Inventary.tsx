import { View, Text, StyleSheet } from "react-native";
import React from "react";

interface InventaryProps {
  route: any;
}

export default function Inventary({ route }: InventaryProps) {
  return (
    <View style={styles.container}>
      <Text>Inventary</Text>
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
