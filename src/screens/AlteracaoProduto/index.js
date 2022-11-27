import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import React from "react";
import { Gradiente } from "../../components/Gradiente";
import { Container, InputLogin, LoginButton, LoginText } from "./style.js";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";

export default function AlteracaoProduto() {
  const [user, setUser] = useState({
    nome: "Tec1",
    valor: "25,00",
    quantidade: "10",
    imagem: "imagem1.pnj",
  });

  return (
    <Container>
      <Gradiente />
      <Header title="Alterar Produto" />
      <InputLogin
        value={user.nome}
        onChangeText={setUser}
        placeholder={"Nome"}
        placeholderTextColor={"gray"}
      />
      <InputLogin
        value={user.valor}
        onChangeText={setUser}
        placeholder={"Valor"}
        placeholderTextColor={"gray"}
      />
      <InputLogin
        value={user.quantidade}
        onChangeText={setUser}
        placeholder={"Quantidade"}
        placeholderTextColor={"gray"}
      />
      <InputLogin
        value={user.imagem}
        onChangeText={setUser}
        placeholder={"Imagem"}
        placeholderTextColor={"gray"}
      />

      <LoginButton>
        <LoginText>ALTERAR</LoginText>
      </LoginButton>

      <StatusBar style="auto" />
      <Footer />
    </Container>
  );
}
