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
        <h2>Sobre mim</h2>
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
    <h2>Meus Trabalhos</h2>
       <S.DivTB>
       <S.Card>


          <a href="https://prime-video-omega.vercel.app/" target="_blank">
            <S.Figure><img src={siteprime} alt="" /></S.Figure></a>
          <p>Meu primeiro site</p>
          <p>HTML, CSS</p>
          <a href="https://github.com/MaisaSathler/Prime-video" target="_blank">
          <img className="git" src={github} alt="" /></a>


        </S.Card>
        <S.Card>


          <a href="https://self-care-tau.vercel.app/" target="_blank" >
          <S.Figure><img src={siteselfcare} alt="" /></S.Figure></a>
          <p>Primeiro site responsivo</p>
          <p>HTML, CSS</p>
          <a href="https://github.com/MaisaSathler/SelfCare" target="_blank">
          <img className="git" src={github} alt="" /></a>


        </S.Card>


        
        <S.Card>


          <a href="https://mc-donald-s.vercel.app/" target="_blank">
          <S.Figure><img src={sitemac} alt="" /></S.Figure></a>
          <p>Site utilizando JS</p>
          <p>HTML, CSS, JS, React, Styled</p>
          <a href="https://github.com/MaisaSathler/Mc-Donald-s" target="_blank"
          ><img className="git" src={github} alt="" /></a>


        </S.Card>
        
       
       </S.DivTB>
       <S.Icons>
        <div>
          
       <img src={html} alt="" />
        <img src={css} alt="" />
        <img src={java} alt="" />
        <img src={reacticon} alt="" />
        <img src={styledicon} alt="" />
        
        </div>
       </S.Icons>

    </S.BoxTrabalhos> }
    


    
   

   </main>
  )
}
