import React, { useState, useEffect } from "react";
import { DataTable } from "react-native-paper";
import { ScrollView } from "react-native";

import api from "../services/api";

interface TestProps {
  navigation: any;
}

type User = {
  id: number;
  name: string;
  cpf: string;
  rg: string;
  email: string;
  permission: string;
  is_manager: number;
};

type UserData = {
  current_page: number;
  data: Array<User>;
  from: number;
  to: number;
  last_page: number;
  per_page: number;
  total: number;
  total_filtered: number;
  status: boolean;
};

const initialUser: UserData = {
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

export default function User({ navigation }: TestProps) {
  const [userData, setUserData] = useState<UserData>(initialUser);

  useEffect(() => {
    api.instanceHeaders
      .post("user/datatable")
      .then(({ data }) => {
        setUserData(data);
      })
      .catch(({ response }) => {
        console.log(response);
      });
  }, []);

  const getTextPagination = () => {
    return `Mostrando ${userData.from} a ${userData.to} de ${userData.total} resultados`;
  };

  return (
    <ScrollView>
      <DataTable>
        <DataTable.Header>
          <DataTable.Title>#</DataTable.Title>
          <DataTable.Title>Nome</DataTable.Title>
          <DataTable.Title>Permissão</DataTable.Title>
        </DataTable.Header>

        {userData.data.map((d) => (
          <DataTable.Row key={d.id}>
            <DataTable.Cell>{d.id}</DataTable.Cell>
            <DataTable.Cell>{d.name}</DataTable.Cell>
            <DataTable.Cell>{d.permission}</DataTable.Cell>
          </DataTable.Row>
        ))}

        <DataTable.Pagination
          page={userData.current_page}
          numberOfPages={userData.last_page}
          onPageChange={(page) => {
            console.log(page);
          }}
          label={getTextPagination()}
        />
      </DataTable>
    </ScrollView>
  );
}
