import * as S from "./footer_styled"
import insta from "../../assets/insta.png"
import git from "../../assets/git.png"
import linkedin from "../../assets/linkedin.png"
import gmail from "../../assets/gmail.png"

export default function Footer() {
  return (
    <S.Footer>
      <section>
        <div>
      <p>Caso queira entrar em contato</p>
     <a href=""><img src={insta} alt="" /></a>
     <a href=""><img src={git} alt="" /></a>
     <a href=""><img src={linkedin} alt="" /></a>
     <a href=""><img src={gmail} alt="" /></a>
     </div>
    <div>
     <a href="#inicio">Inicio</a>
     <a href="#sobremim">Sobre mim</a>
     <a href="#trabalhos">Trabalhos</a>
     </div>
     </section>
    </S.Footer>
  )
}
