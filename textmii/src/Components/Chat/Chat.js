import React, { useEffect, useState, useContext } from 'react';
import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { SocketContext } from '../../App';
import {

  ChatContainer,
  ChatWrap,
  ChatWrapContainer,

  //EXPEDITEUR
  ChatExpWrap,
  AvatarExpWrap,
  AvatarExp,
  MessageExpWrap,
  MessageExp,
  DateExp,
  ChatExpContainer,

  //LISTE EXPEDITITEUR
  ExpItemWrap,
  ExpItem,

  //DESTINATAIRE
  ChatDestWrap,
  AvatarDestWrap,
  AvatarDest,
  MessageDestWrap,
  MessageDest,
  DateDest,
  ChatDestContainer,

  //SendMessage
  ChatInput,
  ChatButton,
  ChatSend


} from './ChatElements'


const Chat = (props) => {

  const [message, setMessage] = useState([]);
  const [listDestinataire, setListDestinataire] = useState([]);
  const [room, setRoom] = useState("");
  const [listMessage, setListMessage] = useState([]);
  const socket = useContext(SocketContext);

  const styled = {
    display: "none"
  }

  useEffect(() => {

    //L'ouverture d'la page va requete l'idSocket
    socket.on('sendMessageFromBack', (message, room, socketExp) => {
      setListMessage([...listMessage, { messageDest: message, room: room, socketExp : socketExp}]);
    });


  }, [listMessage, props.socket])


  useEffect(() => {
    setRoom(props.socketRoomId)
    if (props.socketRoomId !== "" && props.destinataire !== "") {
      setListDestinataire(listDestinataire => [...listDestinataire, { "roomId": props.socketRoomId, "destinataire": props.destinataire }])
    }

  }, [props.socketRoomId])

  let displayMessage = listMessage.filter(message => message.room === props.socketRoomId || message.socketExp === props.socketRoomId).map(function (message, i) {

    console.log(listMessage)
    for (const [key, value] of Object.entries(message)) {
      console.log({"value" : listMessage[i]})
      if (key === "messageDest") {

        return (
          <ChatExpWrap>
            <ChatExpContainer>
              <AvatarExpWrap>
                <AvatarExp>
                  <Avatar icon={<UserOutlined />} />
                </AvatarExp>
              </AvatarExpWrap>
              <MessageExpWrap>
                <MessageExp>{value}</MessageExp>
                <DateExp></DateExp>
              </MessageExpWrap>
            </ChatExpContainer>
          </ChatExpWrap>
        )
      } else if(key === "messageExt") {
        return (
          <ChatDestWrap>
            <ChatDestContainer>
              <MessageDestWrap>
                <DateDest></DateDest>
                <MessageDest>{value}</MessageDest>
              </MessageDestWrap>
              <AvatarDestWrap>
                <AvatarDest><Avatar icon={<UserOutlined />} /></AvatarDest>
              </AvatarDestWrap>
            </ChatDestContainer>
          </ChatDestWrap>
        )
      }
    }


  })


  return (
    <ChatContainer>
        <ChatWrap>
          {displayMessage}
        </ChatWrap>
        <ChatSend>
          <ChatInput placeholder="Message" value={message} onChange={(arg) => setMessage(arg.target.value)}></ChatInput>
          <ChatButton
            onClick={() => {
              socket.emit('sendMessage', message, room);
              setMessage("");
              setListMessage([...listMessage, { messageExt: message, room: props.socketRoomId, socketExp: socket.id }]);
            }}>Envoyer</ChatButton>
        </ChatSend>
    </ChatContainer >
  )
}

export default Chat