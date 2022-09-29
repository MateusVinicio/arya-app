import React from "react";
import { Text, View, StyleSheet } from "react-native";

interface InvetaryItemProps {
  trading_name: string;
  iccid: string;
  msisdn: string;
  provider: string;
}

export default function InvetaryItem({
  trading_name,
  iccid,
  msisdn,
  provider,
}: InvetaryItemProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.textItem}>{trading_name}</Text>
      <Text style={styles.textItem}>{iccid}</Text>
      <Text style={styles.textItem}>{msisdn}</Text>
      <Text style={styles.textItem}>{provider}</Text>
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
    marginTop: 16,
    color: "#8f8f8f",
  },
});
