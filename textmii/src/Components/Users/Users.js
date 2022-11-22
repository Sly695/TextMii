import React, { useState, useEffect, useContext, useRef } from 'react';
import { SocketContext } from '../../App';
import {
  UserContainer,
  LabelWrap,
  UsernameLabel,
  UserWrap,
  LabelTitle,
  Button,
  ButtonWrap
} from './UsersElements';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

import { io } from "socket.io-client";

const Users = (props) => {

  const [allUsersConnected, setAllUserConnected] = useState([]);
  const [dataKey, setDataKey] = useState({});
  const [selected, setSelected] = useState("");
  const socket = useContext(SocketContext);
  const allUser = [];

  useEffect(() => {

    const token = io({
      auth: {
        token: "abc",
      }
    });

    socket.emit("login", props.username);

    socket.on('userConnected', (userConnected, sessionID) => {
      setAllUserConnected(userConnected);
      console.log(userConnected)
      console.log(sessionID)
    })

  }, [dataKey]);

  const changeColor = i => {
    setSelected(i)
  }


  for (const [key, value] of Object.entries(allUsersConnected)) {
    allUser.push({ "socketId": key, "username": value })
  }

  let displayUser = allUser.filter(user => user.username !== props.username).map((user, i) => {
    return <UsernameLabel select={selected} i={i} onClick={() => { changeColor(i); props.handleClick(user.socketId, user.username) }} key={i} ><FontAwesomeIcon style={{ marginRight: "10px" }} icon={faUser} />{user.username}</UsernameLabel>
  })

  return (
    <UserContainer handleClick={props.handleClick}>
      <LabelWrap>
        <LabelTitle>Utilisateurs connectés</LabelTitle>
      </LabelWrap>
      <UserWrap>
        {displayUser}
      </UserWrap>
      <ButtonWrap>
        <Button onClick={() => setDataKey(!dataKey)}>Rafraîchir</Button>
      </ButtonWrap>
    </UserContainer>
  )
}

export default Users;