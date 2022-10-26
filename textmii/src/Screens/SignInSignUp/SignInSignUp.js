import React, { useState } from 'react';
import TextImg from '../../Images/TextImg.svg';
import DateImg from '../../Images/Date.svg';
import Play from '../../Images/play.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';

import {
    LoginContainer,
    PresentationWrap,
    PresentationImg,
    Column1,
    Column2,
    Column3,
    LinkLogin,
    LoginWrap,
    LoginTitle,
    LogContainer,
    LoginInput,
    LoginButton,
    
} from '../SignInSignUp/SignInSignUpElements';

const SignInSignUp = ({handleClick}) => {

    const [visible, setVisible] = useState(true);
    const [username, setUsername] = useState("")



    let login = "";

    if (visible) {
        login =
            <PresentationWrap onClick={() => setVisible(!visible)}>
                <Column1>
                    <PresentationImg src={TextImg}></PresentationImg>
                </Column1>
                <Column2>
                    <PresentationImg src={DateImg}></PresentationImg>
                </Column2>
                <Column3>
                    <PresentationImg src={Play}></PresentationImg>
                </Column3>
            </PresentationWrap>
    } else {
        login =
            <LoginWrap>
                <LogContainer>
                    <LoginTitle onClick={() => setVisible(!visible)}><FontAwesomeIcon icon={faPaperPlane} /> TextMii</LoginTitle>
                    <LoginInput onChange={(e) => setUsername(e.target.value)} placeholder='Prénom'></LoginInput>
                    <LinkLogin to={'/chat'} state={{ username: username }}activeClassName="active"><LoginButton disabled={username.length === 0} onClick={() => handleClick(username)}>Se connecter</LoginButton></LinkLogin>
                </LogContainer>
            </LoginWrap>

    }


    return (
        <LoginContainer handleClick={handleClick}>
            {login}
        </LoginContainer>
    )
}

export default SignInSignUp;