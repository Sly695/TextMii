import React from 'react';
import {
  NavbarContainer,
  NavbarLogo,
  NavBarUsername,
} from './NavbarElements';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';

const Navbar = (props) => {

  return (

      <NavbarContainer>
        <NavbarLogo>
          <FontAwesomeIcon icon={faPaperPlane}/> TextMii
        </NavbarLogo>
        <NavBarUsername>
          Bienvenue {props.username}
        </NavBarUsername>
      </NavbarContainer>

  )
}

export default Navbar