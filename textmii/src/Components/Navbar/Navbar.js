import React, { useContext} from 'react';
import { SocketContext } from '../../App';
import {
  NavbarContainer,
  NavbarLogo,
  NavBarUsername,
} from './NavbarElements';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';

const Navbar = (props) => {

  const socket = useContext(SocketContext);

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