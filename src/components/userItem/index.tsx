import React from "react";
import { Text, View, StyleSheet } from "react-native";

interface UserItemProps {
  trading_name: string;
  email: string;
  permission: string;
}

export default function UserItem({
  trading_name,
  email,
  permission,
}: UserItemProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.textItem}>{trading_name}</Text>
      <Text style={styles.textItem}>{email}</Text>
      <Text style={styles.textItem}>{permission}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "#1e2022",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 16,
    borderWidth: 1,
    borderBottomColor: "#8f8f8f",
  },
  textItem: {
    marginTop: 10,
    color: "#8f8f8f",
  },
});
