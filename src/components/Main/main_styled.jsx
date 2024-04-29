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
h1{
    font-size: 40px;
    /* border: solid 1px green; */
    border-right:solid 1px white;
}
h2{
    color: #671699;
}
`

// --------------fim do inicio-----------------





// -----------sobre mim-------------


export const BoxSM = styled.section`
height: 100vh;
background-color: #050933;
/* border: solid 1px green; */
${center}
padding-bottom: 50px;
`

export const DivSM = styled.div`
color: white;
${center}
flex-direction: column;
/* border: solid 1px red; */
padding-bottom: 50px;
width: 65vw;
height: 61vh;
justify-content: space-between;

h2{
    font-family:"Platypi", serif ;
    font-size: 40px;


}
p{
    font-family: "poppins";
    font-size: 15px;
}
span{
    color:#671699;
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
span{
    color:#671699;
}
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
// ------------------fim meus trabalhos----------