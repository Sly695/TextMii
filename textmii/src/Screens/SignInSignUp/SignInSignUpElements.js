import styled from 'styled-components';
import {Link} from 'react-router-dom';

export const LoginContainer = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    background: rgb(53,68,73);
    background: radial-gradient(circle, rgba(53,68,73,1) 0%, rgba(0,0,0,1) 100%);
`;

//////////////////// PRESENTATION 

export const PresentationWrap = styled.div`
    display: flex;
    width: 60vw;
    height: 80vh;
    background-color: #fff;
    margin: auto;
    border-radius: 20px;
    -webkit-box-shadow: -1px 3px 15px 5px rgba(0,0,0,0.44); 
    box-shadow: -1px 3px 15px 5px rgba(255,255,255,0.44)

    background: rgb(241,252,255);
    background: linear-gradient(10deg, rgba(241,252,255,1) 73%, rgba(90,197,230,1) 100%);    
    
`;

export const TextMiiWrap = styled.div`
    width: 100%;
    border: 1px solid black;

`;

export const Column1 = styled.div`
    width: 33%;
    height: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: auto;

`;

export const Column2 = styled.div`
    width: 33%;
    height: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: auto;
`;

export const Column3 = styled.div`
    width: 33%;
    height: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: auto;
`;



export const PresentationImg = styled.img`
    width: 70%;
    height: 70%;
    margin: auto;

    &:hover {
        transform: scale(1.05);
        transition: all 0.2s ease-in-out;
        cursor: pointer;
    }
`;


//////////////////// LOGIN   

export const LoginWrap = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 60vw;
    height: 80vh;
    margin: auto;
    border-radius: 20px;

    background: rgb(241,252,255);
    background: linear-gradient(10deg, rgba(241,252,255,1) 73%, rgba(90,197,230,1) 100%);

`;

export const LoginTitle = styled.h1`
    margin: auto;
    color: #5AC5E6;
    font-size: 50px;

    font-family: 'Arial black';
`;

export const LoginUsernameTitle = styled.h2`
    margin: auto;
    font-size: 30px;
`;

export const LogContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 30%;
    margin: auto;
`;

export const LoginInput = styled.input`
    text-align: center;
    border-radius: 50px;
    margin: auto;
    margin-top: 5px;
    height: 40px;
    width: 200px;
    outline: none;
    border: 1px solid #5AC5E6;

`;

export const LoginSubmitWrap = styled.div`
    display: flex;
    justify-content: space-between;
    width: 500px;
    margin: auto;
`;

export const LoginButton = styled.button`
    margin: auto;
    border-radius: 50px;
    background-color: #5AC5E6;
    border: 1px solid #fff;
    outline: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.2s ease-in-out;
    height: 45px;
    width: 205px;
    color: #fff;

    &:hover {
        font-weight: bold;
    }
`;

export const LinkLogin = styled(Link)`
    text-decoration: none;
    color: #fff;


`;


