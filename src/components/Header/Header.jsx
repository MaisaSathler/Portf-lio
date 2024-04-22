import * as S from "./header_styled"
import avatar from "../../assets/avatar.jpg"
export default function Header() {
  return (
    <S.Header>
      <S.Nav  id="inicio">
      <img src={avatar} alt="" />
        <a href="#inicio">Inicio</a>
        <a href="#sobremim">Sobre mim</a>
        <a href="#trabalhos">Trabalhos</a>
        <a href="#contato">Contato</a>
       
      </S.Nav>
    </S.Header>
  )
}
