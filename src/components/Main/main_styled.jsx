import styled,{css} from "styled-components";


const center = css`
 display: flex;
 justify-content: center;
 align-items: center;
`
// -------------inicio----------------------




export const Box = styled.section`
/* border: solid 1px green; */
height: 70vh;
${center}
background-color:#04052B;
@media (max-width: 430px) {
        height: 85vh;
    
    }
    @media (max-width: 340px) {
        height: 100vh;
    
    }



`

export const Divinicio = styled.div`
/* border: solid 1px red; */
color: white;
font-family: "poppins";
width: 60%;
height: 70vh;
${center}
gap: 40px;
padding-bottom: 40px;
@media (max-width: 900px) {
    width: 75%;
    
    }
    @media (max-width: 690px) {
    width: 85%;
    
    }
    @media (max-width: 590px) {
    width: 90%;
    
    }
    @media (max-width: 430px) {
    flex-direction: column;
    width: 60%;
    
     
    
    }
    @media (max-width: 340px) {
        height: 90vh;
        width: 70%;
    
    }
    @media (max-width: 230px) {
       width: 95%;
    
    }
   
h1{
    font-size: 40px;
    /* border: solid 1px orange; */
    border-right:solid 1px white;
    @media (max-width: 590px) {
    font-size: 30px;
    
    }
    @media (max-width: 430px) {
        border-right: none;
        border-bottom    :solid 1px white ;
        height: 40vh;
        ${center}
    
    }
    @media (max-width: 340px) {
        height: 55vh;
    
    }
    @media (max-width: 230px) {
      font-size:25px;
    
    }
}
h2{
    color: #671699;
}
@media (max-width: 230px) {
      font-size:13px;
    
    }
`

// --------------fim do inicio-----------------





// -----------sobre mim-------------


export const BoxSM = styled.section`
height: 100vh;
background-color: #050933;
border: solid 1px green;
${center}
padding-bottom: 50px;
padding-top: 50px;
@media (max-width: 320px) {
     
     
     padding-top: 25px;
   }
   @media (max-width: 260px) {
     
     padding-bottom: 25px;
     
   }
   @media (max-width: 200px) {
     
    height: 150vh;
    
     
   }
   

`

export const DivSM = styled.div`
color: white;
${center}
flex-direction: column;
border: solid 1px red;
padding-bottom: 50px;
width: 65vw;
height: 61vh;
justify-content: space-between;

@media (max-width: 890px) {
      height: 64vh;
      width: 75vw;
      justify-content: space-evenly
    }
    @media (max-width: 690px) {
      height: 85vh;
      
      
    }
    @media (max-width: 570px) {
      height: 90vh;
      width:80vw;
      
      
    }
    @media (max-width: 450px) {
     
      height: 95vh;
      padding-bottom: 20px;
    }
    @media (max-width: 390px) {
     width: 90vw;
     justify-content: space-evenly
     
   }
   @media (max-width: 320px) {
     width: 95%;
     
   }
   @media (max-width: 200px) {
     
     height: 100%;
     
     
      
    }
  
  
  
   
   

h2{
    font-family:"Platypi", serif ;
    font-size: 40px;
    @media (max-width: 690px) {
     font-size: 35px;
      
    }
    @media (max-width: 390px) {
     font-size:30px;
     
   }
    
   
}



p{
    font-family: "poppins";
    font-size: 15px;
    border: solid 1px orange;
    @media (max-width: 890px) {
      font-size: 20px;
    }
    @media (max-width: 690px) {
     font-size: 15px;
      
    }
    @media (max-width: 570px) {
      font-size:16px;
      
      
      
    }
    @media (max-width: 390px) {
     font-size:15px;
     
   }
   @media (max-width: 320px) {
     padding-top: 17px;
     
   }
   @media (max-width: 300px) {
    font-size: 12px;
     
   }
   @media (max-width: 260px) {
     
     font-size:11px;
     
   }
   @media (max-width: 200px) {
     
     padding-top:10px;
     font-size: 12px;
     
      
    }
  
  
}

`













// -----------fim do sobre mim---------------

// --------------------começo meus trabalhos-------------


export const BoxTrabalhos = styled.section`
background-color:#04052B;
text-align: center;
font-size: 27px;
font-family:"Platypi", serif ;
color: white;
height: 130vh;
/* border: green solid 1px; */
padding-top:35px;

`
export const DivTB = styled.div`
/* border: solid 1px blue; */
height: 80vh;
${center}
justify-content: space-evenly;


`

export const Card = styled.div`
border-radius: 20%;
background-color: #050933;
/* border: solid 1px green; */
width: 20vw;
height: 50vh;
display: flex;
flex-direction: column;
justify-content: space-evenly;
align-items: center;
font-family: "poppins";
box-shadow: 8px 5px 5px #4c1b6b;
img{
    width: 17vw;
    border-radius: 20%;
    
}

.git{
    width: 2.5vw;
}
p{
    font-size: 17px;
    color: white;
    border-bottom: solid 1px gray;
}
`
export const Figure = styled.figure`
overflow: hidden;
transition: transform 0.5s ease;
cursor: pointer;
&:hover{
    transform: scale(1.1);
}

`



export const Icons = styled.div`

${center}
flex-direction: column;
/* border: solid 1px green; */
height: 20vh;
div{
    /* border: solid 1px green; */
    ${center}
    
    width: 45vw;
    border-top: solid 1px white;
    height: 20vh;
    padding-top: 40px;
}


`

export const Span = styled.span`
color:#671699
`
// ------------------fim meus trabalhos----------