import React, { useState} from 'react'
import './App.css';
import SignInSignUp from './Screens/SignInSignUp/SignInSignUp';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ChatScreen } from './Screens/ChatScreen/ChatScreen';
import socketIOClient from "socket.io-client";
export const socket = socketIOClient("https://textmii.herokuapp.com/");
export const SocketContext = React.createContext();


function App() {
 
  const [username, setUsername] = useState("")

  const handleClick = username => {
    setUsername(username)
  };

  return (
    <SocketContext.Provider value={socket} >
      <Router>
        <Routes>
          <Route exact path='/' element={<SignInSignUp handleClick={handleClick} />} />
          <Route exact path='/chat' element={<ChatScreen username={username}/>} />
        </Routes>
      </Router>
    </SocketContext.Provider>
  );
}

export default App;
