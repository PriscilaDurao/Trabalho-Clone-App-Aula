import { StatusBar } from "expo-status-bar";
import { Gradiente } from "../../components/Gradiente";
import { Container, Logo, Fav } from "./styles.js";
import fav from "../../../assets/fav.svg";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";

export default function Favoritos() {
  return (
    <Container>
      <Gradiente />
      <Header title="Favoritos" />
      <Fav source={fav} />
      <StatusBar style="auto" />
      <Footer />
    </Container>
  );
}
