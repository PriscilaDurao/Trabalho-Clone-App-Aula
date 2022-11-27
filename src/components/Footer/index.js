import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native";
import colors from "../../themes/colors.js";
import { Container } from "./styles.js";
import { SimpleLineIcons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

export const Footer = () => {
  const navigation = useNavigation();

  function Home() {
    navigation.navigate("Home");
  }

  // function Produtos() {
  //   navigation.navigate("Produtos");
  // }

  function Favoritos() {
    navigation.navigate("Favoritos");
  }

  function Carrinho() {
    navigation.navigate("Carrinho");
  }

  return (
    <Container>
      <TouchableOpacity onPress={Home}>
        <MaterialCommunityIcons
          name="home-outline"
          size={40}
          color={colors.footerIcons}
        />
      </TouchableOpacity>
      <TouchableOpacity>
        <SimpleLineIcons name="bag" size={30} color={colors.footerIcons} />
      </TouchableOpacity>
      <TouchableOpacity onPress={Favoritos}>
        <Feather name="star" size={35} color={colors.footerIcons} />
      </TouchableOpacity>
      <TouchableOpacity onPress={Carrinho}>
        <Ionicons name="cart-outline" size={35} color={colors.footerIcons} />
      </TouchableOpacity>
    </Container>
  );
};
