import React, { useState, useEffect, useContext, useRef } from 'react';
import styled from 'styled-components';
import { SocketContext } from '../../App';
import {
  UserContainer,
  LabelWrap,
  UsernameLabel,
  UserWrap,
  LabelTitle,
  Button
} from './UsersElements';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';


const Users = (props) => {

  const [allUsersConnected, setAllUserConnected] = useState([]);
  const [dataKey, setDataKey] = useState({});
  const [selected, setSelected] = useState("");
  const socket = useContext(SocketContext);
  const allUser = [];

  useEffect(() => {

    socket.emit("login", props.username);

    socket.on('userConnected', (userConnected) => {
      setAllUserConnected(userConnected)
    })


  }, [dataKey]);

  const changeColor = i => {
    setSelected(i)
  }


  for (const [key, value] of Object.entries(allUsersConnected)) {
    allUser.push({ "socketId": key, "username": value })
  }

  let displayUser = allUser.filter(user => user.username !== props.username).map((user, i) => {
    return <UsernameLabel select={selected} i={i}  onClick={() => {changeColor( i ); props.handleClick(user.socketId, user.username) }} key={i} ><FontAwesomeIcon style={{ marginRight: "10px" }} icon={faUser} />{user.username}</UsernameLabel>
  })

  return (
    <UserContainer handleClick={props.handleClick}>
      <LabelWrap>
        <LabelTitle>Utilisateurs connectés</LabelTitle>
      </LabelWrap>
      <UserWrap>
        {displayUser}
      </UserWrap>
      <Button onClick={() => setDataKey(!dataKey)}>Rafraîchir</Button>
    </UserContainer>
  )
}

export default Users;