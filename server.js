const express = require('express');
const http = require('http');
const socket = require('socket.io');
const next = require('next');

const app = express();
const server = http.Server(app);
const io = socket(server);

const dev = process.env.NODE_ENV !== 'production';
const nextApp = next({ dev });
const nextHandler = nextApp.getRequestHandler();

const port = 3000;

io.on('connect', socket => {
  socket.emit('now', { message: 'Hello' });
});

nextApp.prepare().then(() => {
  app.get('*', nextHandler);

  server.listen(port, exception => {
    if (exception) throw exception;
    console.log(`> Listen on port: ${port}`);
  })
});
