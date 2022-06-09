import  {createGlobalStyle} from "styled-components";


export const GlobalStyle =  createGlobalStyle`
    #root {
        display: flex;
        flex-direction: column;
        min-height: 100vh;
    }
    body{
        font-family: 'Poppins', sans-serif;
        background: #4B69FD;
        border: 2px solid black;
    }
`;