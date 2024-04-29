import * as S from "./footer_styled"
import insta from "../../assets/insta.png"
import git from "../../assets/git.png"
import linkedin from "../../assets/linkedin.png"
import gmail from "../../assets/gmail.png"

export default function Footer() {
  return (
    <S.Footer>
      <S.BoxFoot id="contato">
      <p>Caso queira entrar em contato</p>
        <S.DivFoot>
      
     <a href="https://www.instagram.com/maisa.sthlr/"  target="_blank">
      <img src={insta} alt="ícone do instagram" /></a>

     <a href="https://github.com/MaisaSathler"  target="_blank">
      <img src={git} alt="icone do github" /></a>

     <a href="https://www.linkedin.com/in/maisa-castro-2901831b1/" target="_blank">
      <img src={linkedin} alt="icone do linkedin" /></a>

     <a href="https://mail.google.com/mail/u/0/?pli=1#inbox?compose=GTvVlcSDZdBrcdCjZBkHVjKXgKPcfwgphMrKjQQbslFTZgCBPmdbRpkwvHRbjMBLDnDrNDdZxjxNq"  target="_blank">
      <img src={gmail} alt="icone do email" /></a>

     </S.DivFoot>
    <S.DivFoot2>
     <a href="#inicio">Inicio</a>
     <a href="#sobremim">Sobre mim</a>
     <a href="#trabalhos">Trabalhos</a>
     </S.DivFoot2>
     </S.BoxFoot>
     <S.Pé>
     <p>© 2024 Todos os direitos reservados.</p>
     </S.Pé>
    </S.Footer>
  )
}
