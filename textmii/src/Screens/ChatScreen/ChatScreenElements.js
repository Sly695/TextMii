import styled from 'styled-components';

export const ChatWrap = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  background: rgb(53,68,73);
  background: radial-gradient(circle, rgba(53,68,73,1) 0%, rgba(0,0,0,1) 100%);
  
`;

export const ChatContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 60vw;
  height: 80vh;
  margin: auto;

  background: rgb(241,252,255);

  border-radius: 20px;
`;

export const NavBarWrap = styled.div`
  height: 10%;
  width: 100%;
`;

export const TextMiiWrap = styled.div``;

export const UserChatWrap = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  margin: 0;

`;


export const ChatWrapContainer = styled.div``;

export const ChatDisplayConversation = styled.div``;

export const ChatDisplayUser = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-around;
  width: 100%;
  margin: 0;
  padding: 0;
`;

export const ChatConversation = styled.li`
`;