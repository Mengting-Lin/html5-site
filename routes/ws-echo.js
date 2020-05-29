const WebSocket = require('ws');
const createEchoServer = server=>{
    const wsServer = new WebSocket.Server({server});

    wsServer.on('connection',(ws,req)=>{
        console.log('連線數:',wsServer.clients.size);
        console.log('IP:',req.connection.remoteAddress);
        console.log('port:',req.connection.remotePort);
        console.log('url:', req.url);
        ws.on('message',message=>{
            ws.send(message);
        });        
        ws.send('成功連線！');
    });
};

module.exports = createEchoServer;