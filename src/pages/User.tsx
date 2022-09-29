import { View, Text, StyleSheet, FlatList } from "react-native";
import React from "react";

import data from "../../services/userData.json";

export default function User() {
  return (
    <View style={styles.container}>
      <FlatList
        data={data.data}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <Text>{item.id}</Text>
            <Text>{item.name}</Text>
            <Text>{item.permission}</Text>
          </View>
        )}
      />
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
  itemContainer: {
    marginTop: 16,
  },
});
