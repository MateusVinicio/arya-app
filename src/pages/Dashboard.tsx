import { View, Text, StyleSheet } from "react-native";
import React, { useEffect, useState } from "react";
import { VictoryPie, VictoryChart, VictoryTheme } from "victory-native";

import { GraphDataProps, simsByProviderToData } from "../helpers/GraphHelper";
import api from "../services/api";

interface DashboardProps {
  navigation: any;
}

export default function Inventary({ navigation }: DashboardProps) {
  const [graphData, setGraphData] = useState<Array<GraphDataProps>>([]);

  const getInventary = () => {
    api.instance
      .get("dashboard")
      .then(({ data }) => {
        setGraphData(simsByProviderToData(data.data.simsByProvider));
      })
      .catch(({ response }) => {
        console.log(response);
      });
  };

  useEffect(() => {
    getInventary();
  }, []);

  if (graphData.length == 0) return <Text>Loading...</Text>;

  return (
    <View style={styles.container}>
      <VictoryPie
        style={{
          data: {
            fillOpacity: 0.9,
            stroke: "#3e83a1",
            strokeWidth: 3,
          },

          labels: {
            fontSize: 10,
            fill: "#8f8f8f",
          },
        }}
        innerRadius={110}
        colorScale="grayscale"
        data={graphData}
        labels={({ datum }) => `${datum.x}: ${datum.y}`}
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
});
