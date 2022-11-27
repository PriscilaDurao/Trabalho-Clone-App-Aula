import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import React from "react";
import logo from "../../../assets/logo.png";
import { Gradiente } from "../../components/Gradiente";
import {
  Container,
  Logo,
  Title,
  InputLogin,
  InputPassword,
  LoginButton,
  LoginText,
} from "./style.js";

export default function Cadastro() {
  const [user, setUser] = useState({
    nome: "",
    CPF: "",
    DataDeNascimento: "",
    password: "",
  });
  const navigation = useNavigation();

  function ConfirmacaoCadastro() {
    navigation.navigate("ConfirmacaoCadastro");
  }

  return (
    <Container>
      <Gradiente />
      <Logo source={logo} />
      <Title>Cadastro</Title>
      <InputLogin
        value={user.nome}
        onChangeText={setUser}
        placeholder={"Nome"}
        placeholderTextColor={"gray"}
      />
      <InputLogin
        value={user.CPF}
        onChangeText={setUser}
        placeholder={"CPF"}
        placeholderTextColor={"gray"}
      />
      <InputLogin
        value={user.DataDeNascimento}
        onChangeText={setUser}
        placeholder={"Data de Nascimento"}
        placeholderTextColor={"gray"}
      />
      <InputPassword
        value={user.password}
        onChangeText={setUser}
        placeholder={"Digite sua Senha"}
        placeholderTextColor={"gray"}
      />
      <InputPassword
        value={user.password}
        onChangeText={setUser}
        placeholder={"Confirmar Senha"}
        placeholderTextColor={"gray"}
      />

      <LoginButton onPress={ConfirmacaoCadastro}>
        <LoginText>CADASTRAR</LoginText>
      </LoginButton>

      <StatusBar style="auto" />
    </Container>
  );
}
