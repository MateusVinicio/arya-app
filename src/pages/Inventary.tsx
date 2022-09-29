import { View, Text, StyleSheet, FlatList } from "react-native";
import React from "react";
import InvetaryItem from "../components/InventaryItem";

import data from "../../services/inventary.json";

export default function Inventary() {
  return (
    <View style={styles.container}>
      <FlatList
        data={data.data}
        renderItem={({ item }) => (
          <View>
            <InvetaryItem
              trading_name={item.trading_name}
              iccid={item.iccid}
              msisdn={item.msisdn}
              provider={item.provider}
            />
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
    //alignItems: "center",
    justifyContent: "center",
  },
});
