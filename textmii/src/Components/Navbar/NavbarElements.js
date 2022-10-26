import styled from 'styled-components';

export const NavbarContainer = styled.div`
    width: 100%;
    height: 15%;
    display: flex;
    justify-content: space-around;
    border-radius: 5% 5% 0 0 ;
    
`;

export const NavbarLogo = styled.h1`
    margin: auto;
    color: #5ac5e6;
    width: 600px;
    text-align: center;
`;

export const NavBarUsername = styled.p`
    margin: auto;
    font-weight: bold;
    font-size: 24px;
    color: #5ac5e6;
    width: 70%;
    text-align: center;
`;

export const NavBarDeconnexion = styled.p`
    margin: auto;
    font-weight: bold;
    color: #5ac5e6;
    cursor: pointer;
`;
