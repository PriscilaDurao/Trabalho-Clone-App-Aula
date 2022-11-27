import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import React from "react";
import logo from "../../../assets/logo.png";
import {
  Container,
  Logo,
  Title,
  InputPassword,
  AlterarButton,
  AlterarText,
} from "./styles";
import { Gradiente } from "../../components/Gradiente";
import { Header2 } from "../../components/Header2";

export default function AlterarSenha() {
  const [user, setUser] = useState({
    password: "",
  });
  const navigation = useNavigation();

  function SenhaAlterada() {
    navigation.navigate("SenhaAlterada");
  }

  return (
    <Container>
      <Gradiente />
      <Header2 />
      <Logo source={logo} />
      <Title>Criar Senha</Title>
      <InputPassword
        value={user.password}
        onChangeText={setUser}
        placeholder={"Digite sua nova senha"}
        placeholderTextColor={"gray"}
      />
      <InputPassword
        value={user.password}
        onChangeText={setUser}
        placeholder={"Repita sua nova sua Senha"}
        placeholderTextColor={"gray"}
      />

      <AlterarButton onPress={SenhaAlterada}>
        <AlterarText>ALTERAR</AlterarText>
      </AlterarButton>

      <StatusBar style="auto" />
    </Container>
  );
}
