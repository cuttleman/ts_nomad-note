import styled,{createGlobalStyle, keyframes} from "styled-components";

export const BtnAni = keyframes`
    from{
        transform: scale(0.8);
        color: white;
    }to{
        transform: scale(1);
        color: black;
    }
`;

export const TitleAni = keyframes`
    0%{
        transform: translateY(-5px);
    }
    50%{
        transform: translateY(2px);
    }
    100%{
        transform: translateY(-5px);
    }
`;

export const HomeAni = keyframes`
    from{
        transform: scale(0.9);
        opacity: 0.6;
    }to{
        transform: scale(1);
        opacity: 1;
    }
`;

export default createGlobalStyle`
    a {
        text-decoration-line: none;
        color: inherit;
    }
    body, html {
        padding: 6% 0;
        font-family: 'Gugi', cursive;
        background-color: #bdc3c7;
        overflow: hidden;
    }
`;

export const GlobalContainer = styled.div`
    position: absolute;
    max-width: 350px;
    left: 0;
    right: 0;
    margin: auto;
    animation: ${HomeAni} 0.4s linear forwards;
`;