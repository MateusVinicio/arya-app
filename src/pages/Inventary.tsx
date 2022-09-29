import { View, Text, StyleSheet, FlatList } from "react-native";
import React from "react";

import data from "../../services/inventary.json";

export default function Inventary() {
  return (
    <View style={styles.container}>
      <FlatList
        data={data.data}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <Text>{item.trading_name}</Text>
            <Text>{item.iccid}</Text>
            <Text>{item.msisdn}</Text>
            <Text>{item.provider}</Text>
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
