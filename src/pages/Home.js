import { GlobalStyle } from "../styles/globalStyle";
import { Container } from "../styles/containerStyle";
import { Aside } from "../styles/asideStyle";
import { Header } from "../styles/headerStyle";
import { Main } from "../styles/mainStyle";

import controleImg from "../assests/images/controle.svg";
import logoImg from "../assests/images/logo.svg";
import facebookImg from "../assests/images/facebook.svg";
import instagramImg from "../assests/images/instagram.svg";

import lupaImg from "../assests/images/lupa.svg";
import carrinhoImg from "../assests/images/carrinho.svg";

import bannerImg from "../assests/images/banner.jpg";
import miniBanner1Img from "../assests/images/mini_banner_1.png";
import miniBanner2Img from "../assests/images/mini_banner_2.png";
import miniBanner3Img from "../assests/images/mini_banner_3.png";
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
        </Header>
        <Main>
          <img id="imagem-banner-main" src={bannerImg} alt="banner" />
          <span>
            Destaques
          </span>
          <section>
            <img className="mini-banner-main" src={miniBanner1Img} alt="imagem minibanner 1"/>
            <img className="mini-banner-main" src={miniBanner2Img} alt="imagem minibanner 2"/>
            <img className="mini-banner-main" src={miniBanner3Img} alt="imagem minibanner 2"/>
          </section>
        </Main>
      </Container>
  );
}
