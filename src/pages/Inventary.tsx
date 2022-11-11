import React, { useState, useEffect } from "react";
import { DataTable } from "react-native-paper";
import { ScrollView } from "react-native";

import api from "../services/api";

interface InventaryProps {
  navigation: any;
}

type SimCard = {
  iccid: string;
  msisdn: string;
  provider: string;
  id_order: number;
};

type InventaryData = {
  current_page: number;
  data: Array<SimCard>;
  from: number;
  to: number;
  last_page: number;
  per_page: number;
  total: number;
  total_filtered: number;
  status: boolean;
};

const initialInventary: InventaryData = {
  current_page: 1,
  data: [],
  from: 1,
  to: 10,
  last_page: 1,
  per_page: 1,
  total: 1,
  total_filtered: 1,
  status: false,
};

export default function Inventary({ navigation }: InventaryProps) {
  const [inventary, setInventary] = useState<InventaryData>(initialInventary);

  const getInventary = () => {
    api.instanceHeaders
      .post("customer/inventary")
      .then(({ data }) => {
        setInventary(data);
      })
      .catch(({ response }) => {
        console.log(response);
      });
  };

  useEffect(() => {
    getInventary();
  }, []);

  const getTextPagination = () => {
    return `Mostrando ${inventary.from} a ${inventary.to} de ${inventary.total} resultados`;
  };

  return (
    <ScrollView>
      <DataTable>
        <DataTable.Header>
          <DataTable.Title>ICCID</DataTable.Title>
          <DataTable.Title>Número</DataTable.Title>
          <DataTable.Title>Operadora</DataTable.Title>
        </DataTable.Header>

        {inventary.data.map((d, index) => (
          <DataTable.Row key={index}>
            <DataTable.Cell>{d.iccid}</DataTable.Cell>
            <DataTable.Cell>{d.msisdn}</DataTable.Cell>
            <DataTable.Cell>{d.provider}</DataTable.Cell>
          </DataTable.Row>
        ))}

        <DataTable.Pagination
          page={inventary.current_page}
          numberOfPages={inventary.last_page}
          onPageChange={(page) => {
            console.log(page);
          }}
          label={getTextPagination()}
        />
      </DataTable>
    </ScrollView>
  );
}
