import { StatusBar } from "expo-status-bar";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import { useState } from "react";
import logo from "../../../assets/logo.png";
import { Gradiente } from "../../components/Gradiente";
import {
  Container,
  InputCPF,
  RecButton,
  RecText,
  Logo,
  Title,
} from "./styles.js";
import { Header2 } from "../../components/Header2";

export default function RecSenha() {
  const [user, setUser] = useState({
    CPF: "",
  });
  const navigation = useNavigation();

  function AlterarSenha() {
    navigation.navigate("AlterarSenha");
  }
  return (
    <Container>
      <Gradiente />
      <Header2 />
      <Logo source={logo} />
      <Title>Recuperar Senha</Title>
      <InputCPF
        value={user.CPF}
        onChangeText={setUser}
        placeholder={"Digite seu CPF"}
        placeholderTextColor={"gray"}
      />
      <RecButton onPress={AlterarSenha}>
        <RecText>RECUPERAR</RecText>
      </RecButton>
      <StatusBar style="auto" />
    </Container>
  );
}
