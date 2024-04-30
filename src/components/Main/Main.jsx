import * as S from "./main_styled"
import siteselfcare from "../../assets/siteselfcare.png"
import github from "../../assets/github.png"
import siteprime from "../../assets/siteprime.png"
import sitemac from "../../assets/sitemac.png"
import html from "../../assets/html.png"
import css from "../../assets/css.png"
import java from "../../assets/java.png"
import reacticon from "../../assets/reacticon.png"
import styledicon from "../../assets/styledicon.png"
import Card from "./Card"




export default function Main() {
  return (
   <main>
    <S.Box>
      <S.Divinicio>
    <h1>Seja bem vindo(a), meu nome é Maisa Castro</h1>
      <h2>Desenvolvedora Front-End</h2>
      
      </S.Divinicio>
      
   </S.Box>





     <S.BoxSM id="sobremim">
      <S.DivSM >
        <h2> <S.Span>Sobre</S.Span> mim</h2>
        <p>
          Meu nome é Maisa Castro Sathler, nasci em Belo Horizonte-Mg, mas morei a minha vida toda em Contagem-Mg. Estou sempre disposta a aprender e conhecer
          algo novo e foi assim que me encontrei na programação, foi como uma paixão à primeira vista. Sempre fui uma pessoa ligada na internet e em computadores,
          sempre tive muita facilidade para manusear e entender as funcionalidades do mesmo. Desde muito nova é uma área na qual eu me interesso. Meu primeiro curso foi 
          em 2023, no VnW, e foi a melhor experiência da minha vida. Meu objetivo como desenvolvedora Front-End é 
         usar minhas habilidades, designs e criatividade para moldar e aprimorar ideias ou soluções que aspirem a mudar a sociedade e beneficiar cada pessoa, independentemente da sua origem.
         Acredito muito no meu potencial e espero que esse portfólio te traga um pouquinho da minha essência. Vamos nessa juntos!

        </p>
      </S.DivSM>
    </S.BoxSM> 




    { <S.BoxTrabalhos id="trabalhos">


    <h2><S.Span>Meus</S.Span> Trabalhos</h2>


       <S.DivTB>

       <Card linksite={"https://prime-video-omega.vercel.app/"} siteimg={siteprime} texto={"Meu primeiro site"} descricao={"HTML, CSS"} repositorio={"https://github.com/MaisaSathler/Prime-video"} gitsymbol={github}/>
       <Card linksite={"https://self-care-tau.vercel.app/"}  siteimg={siteselfcare} texto={"Primeiro site responsivo"} descricao={"HTML, CSS"} repositorio={"https://github.com/MaisaSathler/SelfCare"} gitsymbol={github}/>
       <Card linksite={"https://mc-donald-s.vercel.app/"} siteimg={sitemac} texto={"Site utilizando JS"} descricao={"HTML, CSS, JS, React, Styled"} repositorio={"https://github.com/MaisaSathler/Mc-Donald-s"} gitsymbol={github}/>
       
       </S.DivTB>

       <S.Icons>
       <h2><S.Span>Habili</S.Span>dades</h2>
        <div>
         <S.Figure>
       <img src={html} alt="" />
       </S.Figure>
       
       <S.Figure>
        <img src={css} alt="" />
        </S.Figure>
      
        <S.Figure>
        <img src={java} alt="" />
        </S.Figure>

        <S.Figure>
        <img src={reacticon} alt="" />
        </S.Figure>

        <S.Figure>
        <img src={styledicon} alt="" />
        </S.Figure>
       
        
        
        </div>
       </S.Icons>

    </S.BoxTrabalhos> }
    


    
   

   </main>
  )
}
