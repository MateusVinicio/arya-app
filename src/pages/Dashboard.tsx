import { View, Text, StyleSheet } from "react-native";
import React, { useEffect, useState } from "react";
import { VictoryPie, VictoryChart, VictoryTheme } from "victory-native";
// import { Dimensions } from "react-native";

// Replace by API data
import dashDataMock from "../../services/dashData.json";
import { GraphDataProps, simsByProviderToData } from "../helpers/GraphHelper";

interface DashboardProps {
  navigation: any;
}

// const windowWidth = Dimensions.get("window").width;

export default function Inventary({ navigation }: DashboardProps) {
  const [graphData, setGraphData] = useState<Array<GraphDataProps>>([]);

  useEffect(() => {
    // fetch dashData from API...
    setGraphData(simsByProviderToData(dashDataMock.data.simsByProvider));
  }, []);

  if (graphData.length == 0) return <Text>Loading...</Text>;

  return (
    <View style={styles.container}>
      <Text>Dash</Text>
      <VictoryPie data={graphData} />
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
