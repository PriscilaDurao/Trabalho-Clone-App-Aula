import logo from "../../../assets/logo.png";
import colors from "../../themes/colors.js";
import { AntDesign } from "@expo/vector-icons";
import { Container, Title, Logo } from "./styles.js";
import { TouchableOpacity } from "react-native";

export const Header = ({ title }) => {
  function Login() {
    navigation.navigate("Login");
  }

  return (
    <Container>
      <TouchableOpacity onPress={Login}>
        <AntDesign name="logout" size={24} color={`${colors.secondary}`} />
      </TouchableOpacity>
      <Title>{title}</Title>
      <Logo source={logo} />
    </Container>
  );
};
