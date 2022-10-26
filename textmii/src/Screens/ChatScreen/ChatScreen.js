import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from '../../Components/Navbar/Navbar';
import Chat from '../../Components/Chat/Chat';
import Users from '../../Components/Users/Users';

import {
  ChatContainer,
  ChatWrap,
  UserChatWrap,
  ChatWrapContainer,
  ChatDisplayConversation,
  ChatDisplayUser,
  ChatConversation
}
  from './ChatScreenElements';



export const ChatScreen = (props) => {

  const [socketRoomId, setSocketRoomId] = useState("");
  const [destinataire, setDestinataire] = useState("");
  const [listConversation, setListConversation] = useState([]);

  const handleClick = (socketRoom, destinataire) => {
    setSocketRoomId(socketRoom);
    setDestinataire(destinataire);
  }

  return (
    <ChatWrap>
      <ChatContainer>
        <Navbar username={props.username} />
        <UserChatWrap>
          <Users handleClick={handleClick} username={props.username} />
          <Chat socketRoomId={socketRoomId} destinataire={destinataire} username={props.username} />
        </UserChatWrap>
      </ChatContainer>
    </ChatWrap>
  )
}
