import styled from 'styled-components';

export const NavbarContainer = styled.div`
    width: 100%;
    height: 15%;
    display: flex;
    justify-content: space-around;
    border-radius: 5% 5% 0 0 ;    
    @import url('https://fonts.googleapis.com/css2?family=Kodchasan:wght@700&display=swap');
    overflow: no-scroll;
    
    `;

export const NavbarLogoWrap = styled.div`
    display: flex;
    width: 100%;
`;

export const NavbarLogo = styled.h1`
    margin: auto;
    color: #5AC5E6;
    width: 160px;
    text-align: center;
    font-size: 30px;
    display: flex;
    font-family: 'Kodchasan';
    -webkit-text-stroke: 1px #5AC5E6;
    font-style: normal;
    font-weight: 700;
    font-size: 30px;
    line-height: 39px;

`;

export const NavBarUsername = styled.p`
    font-weight: bold;
    font-size: 24px;
    color: #5ac5e6;
    width: 100vw;
    text-align: center;
    margin: auto;
    -webkit-text-stroke: 1px #5AC5E6;
`;

export const NavBarDeconnexion = styled.p`
    margin: auto;
    font-weight: bold;
    color: #5ac5e6;
    cursor: pointer;
`;

export const  NavBarSpan = styled.span`

    @media screen and (max-width: 780px){
        display: none;
    }
`;



export const NavbarLogoImg = styled.img`
    width: 40px;
    height: 40px;
    margin: auto;
`;