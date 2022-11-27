import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import React from "react";
import { Gradiente } from "../../components/Gradiente";
import {
  Container,
  InputLogin,
  LoginButton,
  LoginText,
  Recover,
} from "./style.js";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { AntDesign } from "@expo/vector-icons";

export default function CadastroCategoria() {
  const [user, setUser] = useState({
    nome: "",
    Imagem: "",
  });
  const navigation = useNavigation();

  function Home() {
    navigation.navigate("Home");
  }

  return (
    <Container>
      <Gradiente />
      <Header title="Cadastro de Categoria" />
      <InputLogin
        value={user.nome}
        onChangeText={setUser}
        placeholder={"Nome"}
        placeholderTextColor={"gray"}
      />
      <InputLogin
        value={user.Imagem}
        onChangeText={setUser}
        placeholder={"Imagem"}
        placeholderTextColor={"gray"}
      />
      <Recover>
        Selecionar Imagem <AntDesign name="upload" size={12} color="#120a8f" />
      </Recover>

      <LoginButton onPress={Home}>
        <LoginText>CADASTRAR</LoginText>
      </LoginButton>

      <StatusBar style="auto" />
      <Footer />
    </Container>
  );
}
