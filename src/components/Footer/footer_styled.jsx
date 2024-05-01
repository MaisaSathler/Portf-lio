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
@media (max-width: 690px) {
     
     width: 70vw;
     
      
    }
    @media (max-width: 500px) {
     
     width: 100%;
     
      
    }
p{
    /* border: solid 1px red; */
    color: white;
    font-family:"Platypi", serif ;
    font-size: 1.5rem;
    @media (max-width: 360px) {
     
     font-size: 1.3rem;
     
      
    }
    @media (max-width: 280px) {
     
     font-size: 1rem;
     
      
    }
    @media (max-width: 200px) {
     
    font-size: 0.8rem;
     
      
    }
}
`

export const DivFoot = styled.div`
/* border: solid 1px yellow; */
${center}
img{
    width: 5vw;
    @media (max-width: 580px) {
     
     width: 8vw;
     
      
    }
    @media (max-width: 500px) {
     
     width: 14vw;
     
      
    }
    @media (max-width: 360px) {
     
     width: 19vw;
     
      
    }
    @media (max-width: 280px) {
     
     width: 15vw;
     
      
    }
    @media (max-width: 200px) {
     
     width: 18vw;
     
      
    }
    
}

`

export const DivFoot2 = styled.div`
/* border: solid 1px orange; */
width: 25vw;
${center}
justify-content: space-around;
@media (max-width: 690px) {
     
     width: 50vw;
     
      
    }
    @media (max-width: 500px) {
     
     width: 75vw;
     
      
    }
    @media (max-width: 360px) {
     
     width: 85vw;
      
       
     }
    @media (max-width: 280px) {
     
     width: 100%;
     
      
    }
a{
    text-decoration: none;
    font-family: "poppins";
    color: white;
    @media (max-width: 360px) {
     
    font-size:19px ;
     
      
    }
    @media (max-width: 200px) {
     
     font-size:13px;
     
      
    }

}
a:hover{
   text-decoration: underline;
   color:#671699 ;
}
`

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
    @media (max-width: 200px) {
     
     font-size: 0.8rem;
      
       
     }
}



`

