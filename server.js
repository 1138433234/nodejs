var ws = require('nodejs-websocket');
var moment=require('moment');


var server = ws.createServer(function (conn) {
    console.log('new connection');
    conn.on('text',function(str){
   
   
    
    var time=moment(new Date()).format('YYYY-MM-DD hh:mm:ss');
   
    
    boardcast(time+':'+str);
    });
    conn.on('err',function(err){
       if(err){
           console.log('connection false');
       }
    });
   
    

})
server.listen(8088);

function boardcast(str){
    server.connections.forEach(function(conn){
        conn.sendText(str);
    });
}