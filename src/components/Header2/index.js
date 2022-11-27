import colors from "../../themes/colors.js";
import { AntDesign } from "@expo/vector-icons";
import { Container } from "./style.js";
import { TouchableOpacity } from "react-native";

export const Header2 = ({ title }) => {
  function Login() {
    navigation.navigate("Login");
  }

  return (
    <Container>
      <TouchableOpacity onPress={Login}>
        <AntDesign name="logout" size={24} color={`${colors.secondary}`} />
      </TouchableOpacity>
    </Container>
  );
};
