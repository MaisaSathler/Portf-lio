import styled,{css} from "styled-components";


const center = css`
 display: flex;
 justify-content: center;
 align-items: center;
`

export const Footer = styled.footer`
height: 55vh;
background-color: #050933;
${center}
flex-direction: column;
/* border: solid 1px yellow; */
`

export const BoxFoot = styled.section`
/* border: solid 1px magenta; */
height: 48vh;
${center}
flex-direction: column;
justify-content: space-evenly;
p{
    color: white;
    font-family:"Platypi", serif ;
    font-size: 1.5rem;
}
`

export const DivFoot = styled.div`
/* border: solid 1px yellow; */
${center}
img{
    width: 5vw;
}

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
// export const SecPe = styled.section`
// border: solid 1px green;
// width: 100%;

// `
export const Pe = styled.div`
/* border: solid 1px red; */
width: 100%;
height: 7vh;
${center}
flex-direction: column;
align-items: baseline;
justify-content: end;
p{
    color: white;
}



`

