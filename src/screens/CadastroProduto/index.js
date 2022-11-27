import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import React from "react";
import { Container, InputLogin, LoginButton, LoginText } from "./style.js";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { Gradiente } from "../../components/Gradiente";

export default function CadastroProduto() {
  const [user, setUser] = useState({
    nome: "",
    preco: "",
    quantidade: "",
    Imagem: "",
  });

  return (
    <Container>
      <Gradiente />
      <Header title="Cadastro de Produto" />
      <InputLogin
        value={user.nome}
        onChangeText={setUser}
        placeholder={"Nome"}
        placeholderTextColor={"gray"}
      />
      <InputLogin
        value={user.preco}
        onChangeText={setUser}
        placeholder={"Preço"}
        placeholderTextColor={"gray"}
      />
      <InputLogin
        value={user.quantidade}
        onChangeText={setUser}
        placeholder={"Quantidade em estoque"}
        placeholderTextColor={"gray"}
      />
      <InputLogin
        value={user.Imagem}
        onChangeText={setUser}
        placeholder={"Imagem"}
        placeholderTextColor={"gray"}
      />

      <LoginButton>
        <LoginText>CADASTRAR</LoginText>
      </LoginButton>

      <StatusBar style="auto" />
      <Footer />
    </Container>
  );
}
