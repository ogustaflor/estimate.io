import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';

const App = () => {
  const [socket, setSocket] = useState();
  const [message, setMessage] = useState('');

  useEffect(() => {
    setSocket(io());
  }, []);

  useEffect(() => {
    if (!socket) return;

    socket.on('now', payload => {
      setMessage(payload.message);
    });
  }, [socket]);

  return <h1>Via servidor: { message }</h1>
}

export default App;
