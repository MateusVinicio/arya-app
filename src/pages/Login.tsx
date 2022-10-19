import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <View style={styles.container}>
      <View style={styles.cardLogin}>
        <Text style={styles.textLogo}>ARYA - APP</Text>
        <TextInput
          style={styles.input}
          onChangeText={setEmail}
          value={email}
          placeholder="Digite seu email"
          keyboardType="email-address"
        />
        <TextInput
          style={styles.input}
          onChangeText={setPassword}
          value={password}
          placeholder="Digite sua senha"
          secureTextEntry={true}
        />
        <TouchableOpacity style={styles.button}>
          <Text style={styles.loginText}>LOGIN</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
  cardLogin: {
    backgroundColor: "#1e2022",
    width: 360,
    height: 360,
    alignItems: "center",
    borderRadius: 10,
  },
  input: {
    width: 300,
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    marginTop: 30,
    backgroundColor: "#fff",
  },
  button: {
    alignItems: "center",
    backgroundColor: "#3e83a1",
    padding: 10,
    marginTop: 50,
    width: 200,
  },
  loginText: {
    color: "#d0d0d0",
    fontWeight: "700",
  },
  textLogo: {
    color: "#d0d0d0",
    fontSize: 25,
    fontWeight: "700",
    marginTop: 20,
  },
});
