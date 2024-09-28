import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    
 }

 :focus{
    outline: 0;
    box-shadow: 0 0 0 2px ${props => props.theme['wine-500']};
 }

 body {
    background-color: ${props => props.theme['gray-300']};
    color: ${props => props.theme['wine-gray-800']};
    -webkit-font-smoothing: antialiased;
 }

 body,input, button {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 1rem;

    @media (max-width: 768px) {
      
      font-size: 87.5%;
      background-color: ${props => props.theme['purple-900']};

    }
 }

`;