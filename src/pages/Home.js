import { GlobalStyle } from "../styles/globalStyle";
import { Aside } from "../styles/asideStyle";

import controleImg from "../assests/images/controle.svg"
import logoImg from "../assests/images/logo.svg"
import facebookImg from "../assests/images/facebook.svg"
import instagramImg from "../assests/images/instagram.svg"

export function Home() {
  return (
      <>
        <GlobalStyle />
        <Aside>
          <img id="icon-controle-aside" src={controleImg} alt="imagem controle" />
          <img id="icon-logo-aside" src={logoImg} alt="imagem logo" />
          <div id="redes-sociais-div">
            <img id="icon-facebook-aside" src={facebookImg} alt="imagem facebook" />
            <img id="icon-instagram-aside" src={instagramImg} alt="imagem instagram" />
          </div>
        </Aside>
      </>
  );
}
