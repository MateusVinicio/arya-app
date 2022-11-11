import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { VictoryPie, VictoryChart, VictoryTheme } from "victory-native";
import { Dimensions } from "react-native";

interface DashboardProps {
  navigation: any;
}

const windowWidth = Dimensions.get("window").width;

const data = [
  { x: "Cats", y: 35 },
  { x: "Dogs", y: 40 },
  { x: "Birds", y: 55 },
];

export default function Inventary({ navigation }: DashboardProps) {
  return (
    <View style={styles.container}>
      <Text>Dash</Text>
      <VictoryPie data={data} />
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
