import React from 'react';
import {
  NavbarContainer,
  NavbarLogo,
  NavBarUsername,
  NavBarSpan,
  NavbarLogoWrap,
  NavbarLogoImg
} from './NavbarElements';

import LogoTextMii from '../../../src/Images/LogoTextMii.svg'

const Navbar = (props) => {

  return (

    <NavbarContainer>
      <NavbarLogoWrap>
        <NavbarLogo>Text Mii<NavbarLogoImg src={LogoTextMii} /></NavbarLogo>
      </NavbarLogoWrap>
      <NavBarUsername>
        <NavBarSpan>Bienvenue </NavBarSpan>{props.username}
      </NavBarUsername>
    </NavbarContainer>

  )
}

export default Navbar