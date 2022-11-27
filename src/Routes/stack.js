import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../screens/Login/index.js";
import RecSenha from "../screens/RecSenha/index.js";
import AlteracaoCategoria from "../screens/AlteracaoCategoria/index.js";
import SenhaAlterada from "../screens/SenhaAlterda/index.js";
import ConfirmacaoCadastro from "../screens/ConfirmacaoCadastro/index.js";
import CadastroCategoria from "../screens/CadastroCategoria/index.js";
import AlteracaoProduto from "../screens/AlteracaoProduto/index.js";
import CadastroProduto from "../screens/CadastroProduto/index.js";
import Cadastro from "../screens/Cadastro/index.js";
import Home from "../screens/Home/index.js";
import AlterarSenha from "../screens/AterarSenha/index.js";
// import Produtos from "../screens/Produtos/index.js";
import Favoritos from "../screens/Favoritos/index.js";

const { Screen, Navigator } = createNativeStackNavigator();

export function StackRoutes() {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Screen name="Login" component={Login} />
      <Screen name="RecSenha" component={RecSenha} />
      <Screen name="AlteracaoCategoria" component={AlteracaoCategoria} />
      <Screen name="SenhaAlterada" component={SenhaAlterada} />
      <Screen name="ConfirmacaoCadastro" component={ConfirmacaoCadastro} />
      <Screen name="CadastroCategoria" component={CadastroCategoria} />
      <Screen name="AlteracaoProduto" component={AlteracaoProduto} />
      <Screen name="CadastroProduto" component={CadastroProduto} />
      <Screen name="Cadastro" component={Cadastro} />
      <Screen name="Home" component={Home} />
      <Screen name="AlterarSenha" component={AlterarSenha} />
      {/* <Screen name="Produtos" component={Produtos} /> */}
      <Screen name="Favoritos" component={Favoritos} />
    </Navigator>
  );
}
