var express = require("express")
var app = express()


//
var http = require('http').Server(app);
var io = require('socket.io');
var io = io(http);

app.set("view engine", "hbs");
//



app.get('/', function(req, res){
  res.sendFile(__dirname + '/public/index.html');
});



//
io.on('connection', function(socket){
  socket.on("chatsend", function(message){
    io.emit("chatpost", message);
  });
});
//



app.listen(3000, function(){
  console.log("app listening on port 3000")
})
