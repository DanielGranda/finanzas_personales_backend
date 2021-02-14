const express = require('express')
const path = require('path');
require('dotenv').config();
const port = process.env.PORT

//.app express
const app = express()

//node server
const server = require('http').createServer(app);
module.exports.io = require('socket.io')(server);
require('./sockets/socket')



//Path publico
const publicPath = path.resolve(__dirname, 'public');


app.use(express.static(publicPath));

server.listen(port, () => console.log(`Servidor corriendo en puerto`, port))