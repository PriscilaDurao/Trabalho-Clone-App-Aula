import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import logo from "../../../assets/logo.png";
import { Gradiente } from "../../components/Gradiente";
import { Container, Logo, Title, LoginButton, LoginText } from "./style.js";

export default function SenhaAlterada() {
  const [user, setUser] = useState({});
  const navigation = useNavigation();

  function Login() {
    navigation.navigate("Login");
  }

  return (
    <Container>
      <Gradiente />
      <Logo source={logo} />
      <Title>Senha alterada com sucesso!</Title>

      <LoginButton onPress={Login}>
        <LoginText>Login</LoginText>
      </LoginButton>

      <StatusBar style="auto" />
    </Container>
  );
}
