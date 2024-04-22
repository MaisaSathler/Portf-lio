import styled,{createGlobalStyle, css} from "styled-components"




export const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
`
const center = css`
 display: flex;
 justify-content: center;
 align-items: center;
`

export const Header = styled.header`
background-color:#04052B;
height: 30vh;
@media (max-width: 460px) {
    height: 50vh;
    
    }
   
`

export const Nav = styled.nav`
${center}
/* border: solid green 1px; */
height: 30vh;
gap: 90px;
@media (max-width: 710px) {
    /* border: solid 1px red; */
    gap: 60px;
    
    }
    @media (max-width: 590px) {
    /* border:solid 1px green; */
    gap: 40px;
    
    }
    @media (max-width: 460px) {
    flex-direction: column;
    /* border: solid 1px red; */
    gap: 25px;
    padding-top: 125px;
    
    }
   
a{
    text-decoration: none;
    color: white;
    font-size: large;
    font-family:"poppins";
    cursor: pointer;
    &:hover{
        color: #671699;
    }
    @media (max-width: 460px) {
    
    font-size:20px;
    border-bottom: solid 1px gray;
    }
    
    
    

}
img{
    width: 5vw;
    border-radius: 50%;
    border: solid 3px #671699;
    @media (max-width: 710px) {
    width: 7vw;
    }
    @media (max-width: 590px) {
    width: 9vw;
    
    }
   
    @media (max-width: 400px) {
    
    border: solid 1px red;
    width: 13vw;
    }
    @media (max-width: 270px) {
    
   width: 20vw;
    }
    @media (max-width: 200px) {
    
    width: 26vw;
     }
}
`