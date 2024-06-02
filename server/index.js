const express = require('express');
const cors = require('cors');
const SSHClient = require('ssh2').Client;

const app = express();
const server = require('http').createServer(app);
app.use(cors());
const io = require('socket.io')(server, {
    cors: {
      origin: "http://localhost:5173",
      methods: ["GET", "POST"]
    }
});

// temporary
const host = '172.20.10.4';
const port = '22';
const username = 'solarnode';
const password = 'solarnode';

app.use(express.static('public'));

server.listen(3000, function () {
  console.log('Server listening on port 3000');
});

io.on('connection', function(socket){
    const conn = new SSHClient();
    conn.on('ready', function() {
      console.log('SSH Connection :: ready');
      conn.shell(function(err, stream) {
        if (err) return socket.emit('data', err.message);
        socket.on('data', function(data) {
          stream.write(data);
        });
        stream.on('data', function(d) {
          socket.emit('data', d.toString('binary'));
        }).on('close', function() {
          conn.end();
        });
      });
    }).on('error', function(err) {
      socket.emit('data', "\r\n*** SSH CONNECTION ERROR: " + err.message + " ***\r\n");
    }).connect({
      host: host,
      port: port,
      username: username,
      password: password
    });
});