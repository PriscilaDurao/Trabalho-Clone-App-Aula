import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { TouchableOpacity } from "react-native";
import logo from "../../../assets/logo.png";
import { Gradiente } from "../../components/Gradiente";
import {
  Container,
  Logo,
  Title,
  InputLogin,
  InputPassword,
  Recover,
  EntrarButton,
  EntrarText,
} from "./style.js";

export default function Login() {
  const [user, setUser] = useState({
    login: "",
    password: "",
  });

  const navigation = useNavigation();

  function RecSenha() {
    navigation.navigate("RecSenha");
  }

  function Home() {
    navigation.navigate("Home");
  }
  function Cadastro() {
    navigation.navigate("Cadastro");
  }

  return (
    <Container>
      <Gradiente />
      <Logo source={logo} />
      <Title>Login</Title>
      <InputLogin
        value={user.login}
        onChangeText={setUser}
        placeholder={"Digite seu Login"}
        placeholderTextColor={"gray"}
      />
      <InputPassword
        value={user.password}
        onChangeText={setUser}
        placeholder={"Digite sua Senha"}
        placeholderTextColor={"gray"}
      />
      <TouchableOpacity onPress={RecSenha}>
        <Recover>Esqueceu sua senha? Clique aqui</Recover>
      </TouchableOpacity>
      <EntrarButton onPress={Home}>
        <EntrarText>ENTRAR</EntrarText>
      </EntrarButton>
      <TouchableOpacity onPress={Cadastro}>
        <Recover>Não possui cadastro? Cadastre-se!</Recover>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </Container>
  );
}
