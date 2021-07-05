import { GlobalStyle } from "../styles/globalStyle";
import { Container } from "../styles/containerStyle";
import { Aside } from "../styles/asideStyle";
import { Header } from "../styles/headerStyle";

import controleImg from "../assests/images/controle.svg"
import logoImg from "../assests/images/logo.svg"
import facebookImg from "../assests/images/facebook.svg"
import instagramImg from "../assests/images/instagram.svg"

import lupaImg from "../assests/images/lupa.svg"
import carrinhoImg from "../assests/images/carrinho.svg"

import bannerImg from "../assests/images/banner.png"

export function Home() {
  return (
      <Container>
        <GlobalStyle />
        <Aside>
          <img id="icon-controle-aside" src={controleImg} alt="imagem controle" />
          <img id="icon-logo-aside" src={logoImg} alt="imagem logo" />
          <div id="redes-sociais-div">
            <img id="icon-facebook-aside" src={facebookImg} alt="imagem facebook" />
            <img id="icon-instagram-aside" src={instagramImg} alt="imagem instagram" />
          </div>
        </Aside>
        <Header>
          <ul>
            <li>Home</li>
            <li>Categorias</li>
            <li>Cadastrar</li>
            <li>Entrar</li>
            <li><img id="icon-lupa-header" src={lupaImg} alt="imagem lupa" /></li>
            <li><img id="icon-carrinho-header" src={carrinhoImg} alt="imagem carrinho" /></li>
          </ul>
          <img src="" alt="banner" />
        </Header>
      </Container>
  );
}
