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
        font-family: 'Gugi', cursive;
        background-color: #bdc3c7;
        overflow: hidden;
    }
`;

export const GlobalContainer = styled.div`
    position: fixed;
    max-width: 350px;
    left: 0;
    right: 0;
    top: 100px;
    margin: auto;
    animation: ${HomeAni} 0.4s linear forwards;
`;

export const HomeBtn = styled.button`
    position: fixed;
    top: 45px;
    left: 20px;
    width: 35px;
    height: 35px;
    background-color: transparent;
    border: none;
    outline: none;
    display: flex;
    justify-content: center;
    align-items: center;
    i {
        font-size: 30px;
    }
    cursor: pointer;
`;