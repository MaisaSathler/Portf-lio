import styled,{css} from "styled-components";


const center = css`
 display: flex;
 justify-content: center;
 align-items: center;
`

export const Footer = styled.footer`
height: 35vh;
background-color: #050933;
`

export const BoxFoot = styled.section`
/* border: solid 1px magenta; */
height: 35vh;
${center}
flex-direction: column;
justify-content: space-evenly;
p{
    color: white;
    font-family:"Platypi", serif ;
    font-size: 1.6rem;
}
`

export const DivFoot = styled.div`
/* border: solid 1px yellow; */
${center}

`

export const DivFoot2 = styled.div`
/* border: solid 1px orange; */
width: 25vw;
${center}
justify-content: space-around;
a{
    text-decoration: none;
    font-family: "poppins";
    color: white;

}
a:hover{
   text-decoration: underline;
   color:#671699 ;
}
`

export const Pé = styled.div`
/* border: solid 1px green; */

height: 7vh;
background-color: #010214;
p{
    color: white;
/* border: solid 1px green; */
    width: 20vw;
    height: 6.8vh;
    ${center}
}
`

