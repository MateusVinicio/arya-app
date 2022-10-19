import * as React from 'react';
import { DataTable } from 'react-native-paper';
import { ScrollView} from "react-native";

import data from "../../services/inventary.json";

interface TestProps {
    navigation: any;
  }

export default function Test({ navigation }: TestProps) {
    return (
        <ScrollView>
  <DataTable>
    <DataTable.Header>
      <DataTable.Title>Nome</DataTable.Title>
      <DataTable.Title>ICCID</DataTable.Title>
      <DataTable.Title>Número</DataTable.Title>
      <DataTable.Title>Operadora</DataTable.Title>
    </DataTable.Header>

    {data.data.map((d) => (
        <DataTable.Row>
        <DataTable.Cell>{d.trading_name}</DataTable.Cell>
        <DataTable.Cell>{d.iccid}</DataTable.Cell>
        <DataTable.Cell>{d.msisdn}</DataTable.Cell>
        <DataTable.Cell>{d.provider}</DataTable.Cell>
      </DataTable.Row>
      ))}


    <DataTable.Pagination
      page={1}
      numberOfPages={3}
      onPageChange={(page) => {
        console.log(page);
      }}
      label="1-2 of 6"
    />
  </DataTable>
  </ScrollView>
    );
}
