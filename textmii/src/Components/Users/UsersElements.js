import styled from 'styled-components';

export const UserContainer = styled.div`
    width: 30%;
    height: 100%;
    display: flex;
    flex-direction: column;
    border-right: 1px solid #EDEDED;
    border-radius: 0 0 0 5%;
`;


export const UserInfo = styled.div`
    height: 100%;
    width: 80%;


`;

export const UserAvatar = styled.div`
    display: flex;
    justify-content: center;    
    height: 100%;
    width: 20%;
    margin: auto;
    
`;

export const UserName = styled.p`
    text-align: left;
    margin: auto;
    width: 70px;


`;

export const UserDesc = styled.p`

`;

export const UserStatus = styled.div`
    display: flex;
    justify-content: center;   
    height: 100%;
    width: 20%;
    color: green;
    margin-top: 25px;
    text-align: left;
`;

export const UsernameLabel = styled.label`
    list-style-type: none;
    font-size: 14px;
    text-align: left;
    cursor: pointer;
    padding: 8px;

    color: #5ac5e6;
    font-weight: ${({ select, i }) => (select === i ? 'bold' : 'normal')};
    font-size: ${({ select, i }) => (select === i ? '18px' : '14px')};




`;

export const LabelWrap = styled.div`
    margin-left: 10px;
    margin-top: 10px;
    margin: auto;
    width: 100%;
    height: 50px;
    text-align: center;
    margin: auto;
`;

export const UserWrap = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    padding: 10px;
`;

export const LabelTitle = styled.p`

`;

export const Button = styled.button`
    width: 94%;
    border-radius: 50px;
    height: 50px;
    text-align: center;
    margin: 8px;
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
