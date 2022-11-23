import styled from 'styled-components';

//EXPEDITEUR
export const ChatContainer = styled.div`
    width: 100%;
    height: 100%;
    position: relative;
`;

export const ChatWrap = styled.div`
    width: 100%;
    height: 30.90em;
    overflow-y: scroll;
    overflow-x: hidden;
    scroll-behavior: smooth;
    top: 0;

`;

export const ChatSend = styled.div`
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 10%;
    display: flex;
    flex: flex-end;
    align-items: end;
    border-radius: 0 0 5% 0;

`;

export const ChatWrapContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`;

//EXPEDITEUR

export const ChatExpWrap = styled.div`
    height: 10%;
    width: 97%;
    display: flex;
    padding: 10px;
`;

export const ChatExpContainer = styled.div`
    display: flex;
    justify-content: flex-start;
    width: 100%;
`;


export const AvatarExpWrap = styled.div`
    width: 50px;
    display: flex;
`;

export const AvatarExp = styled.div`
    margin: auto;
    padding: 10px;
    text-align: center;
`;

export const MessageExpWrap = styled.div`
    display: flex;
    justify-content: space-between;
    width: 70%;
`;

export const MessageExp = styled.p`
    border: 2px solid #5AC5E6;
    margin: auto;
    padding: 10px;
    border-radius: 15px;
    width: 100%;
    text-align: center;
    background-color: #FFF;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;    
    
`;

export const DateExp = styled.p`
    font-size: 10px;
    margin: auto;
`;


/////////////////////////////////////////////////DEST FORM
export const ChatDestWrap = styled.div`
    height: 10%;
    width: 97%;
    display: flex;
    padding: 10px;
`;

export const ChatDestContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    width: 100%;

`;

export const AvatarDestWrap = styled.div`
    width: 10%;
    display: flex;
    justify-content: center;
    padding: 5px;
`;


export const AvatarDest = styled.div`
    display: flex;
    margin: auto;

`;

export const MessageDestWrap = styled.div`
    display: flex;
    justify-content: space-between;
    width: 70%;
`;

export const MessageDest = styled.p`
    margin: auto;
    border: 3px solid #5AC5E6;
    padding: 10px;
    border-radius: 15px;
    background-color: #5AC5E6;
    width: 100%;
    text-align: center;
    color: #FFF;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
    
    
    `;

export const DateDest = styled.p`
    font-size: 10px;
    margin: auto;
`;



/////////////////////////////////////////////////CHAT FORM

export const ChatInput = styled.input`
    width: 62%;
    border-radius: 50px;
    height: 70%;
    text-align: left;
    padding-left: 20px;
    margin: auto;
    border: 1px solid #5AC5E6;
    outline-color: #000;
    outline: none;
    box-sizing: border-box;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;    

`;


export const ChatButton = styled.button`
    width: 32%;
    border-radius: 50px;
    height: 70%;
    text-align: center;
    margin: auto;
    border: none;
    border: 1px solid #5AC5E6;
    background-color : #5AC5E6;
    color: #fff;
    box-sizing: border-box;
    cursor: pointer;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;    

    &:hover {
        transform: scale(1.05);
        transition: all 0.2s ease-in-out;
        cursor: pointer;
    }
`;

//LISTE EXPEDITEUR

export const ExpItemWrap = styled.ul`
    width: 30%;
`;

export const ExpItem = styled.li`
    width: 100%;
`;