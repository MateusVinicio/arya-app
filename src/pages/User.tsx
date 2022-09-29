import { View, Text, StyleSheet } from "react-native";
import React from "react";

interface UserProps {
  route: any;
}

export default function User({ route }: UserProps) {
  return (
    <View style={styles.container}>
      <Text>User</Text>
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
