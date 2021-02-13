import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';

const Room = ({ room }) => {
  const [socket, setSocket] = useState();

  useEffect(() => {
    setSocket(io());
  }, []);

  useEffect(() => {
    if (!socket) return;

    
  }, [socket]);

  return <h1>Salinha { room.participants }</h1>
}

export const getStaticPaths = async () => ({
  paths: [{ params: { id: 'fake' } }, { params: { id: 'real' } }],
  fallback: false
});

export const getStaticProps = async ({ params }) => {
  const room = params.id === 'fake' 
    ? { participants: 2 }
    : { participants: 50 }
  return {
    props: {
      room
    }
  }
}

export default Room;
