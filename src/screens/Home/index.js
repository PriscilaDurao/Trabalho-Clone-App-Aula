import { View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { TouchableOpacity } from "react-native";
import { Gradiente } from "../../components/Gradiente";
import {
  Text,
  TextUp,
  TextCat,
  CatContainer,
  TextCriadores,
  IconContainer,
  Container,
  Image1,
  Image2,
  Image3,
  Criadores,
  Criador,
  NomeCriador,
  ContCriador,
} from "./style.js";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import colors from "../../themes/colors.js";
import { MaterialIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import imagem1 from "../../../assets/imagem1.svg";
import imagem2 from "../../../assets/imagem2.svg";
import imagem3 from "../../../assets/imagem3.svg";
import criador1 from "../../../assets/criador1.svg";
import criador2 from "../../../assets/criador2.svg";
import criador3 from "../../../assets/criador3.svg";
import criador4 from "../../../assets/criador4.svg";

export default function Home() {
  const navigation = useNavigation();

  function CadastroCategoria() {
    navigation.navigate("CadastroCategoria");
  }

  function AlteracaoCategoria() {
    navigation.navigate("AlteracaoCategoria");
  }

  return (
    <Container>
      <Gradiente />
      <Header title="Marketplace" />

      <TextUp>Sobre nós.. </TextUp>
      <Text>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's unchanged. It was
        popularised in the 1960s with the release of Letraset sheets containing
        Lorem Ipsum passages, and more recently with desktop publishing software
        like Aldus PageMaker including versions of Lorem Ipsum.
      </Text>
      <CatContainer>
        <TextCat>Categoria </TextCat>
        <TouchableOpacity onPress={CadastroCategoria}>
          <AntDesign name="plus" size={24} color="black" />
        </TouchableOpacity>
      </CatContainer>

      <IconContainer>
        <MaterialIcons name="delete-outline" size={24} color="red" />
        <TouchableOpacity onPress={AlteracaoCategoria}>
          <AntDesign name="edit" size={24} color={colors.secondary} />
        </TouchableOpacity>
      </IconContainer>
      <Image1 source={imagem1} />
      <Image2 source={imagem2} />
      <Image3 source={imagem3} />
      <TextCriadores>Criadores</TextCriadores>
      <Criadores>
        <Criador source={criador1} />
        <Criador source={criador2} />
        <Criador source={criador3} />
        <Criador source={criador4} />
      </Criadores>
      <ContCriador>
        <NomeCriador>Alex</NomeCriador>
        <NomeCriador>Beatriz</NomeCriador>
        <NomeCriador>Carlos</NomeCriador>
        <NomeCriador>Alie</NomeCriador>
      </ContCriador>

      <StatusBar style="auto" />
      <Footer />
    </Container>
  );
}
