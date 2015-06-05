var express = require("express")
var app = express()
// var hbs = require("hbs")
app.set("view engine", "hbs");
// hbs.registerPartials(__dirname+"/views/partials")
//

//WEBSOCKET
// var http = require('http').Server(app);
// var io = require('socket.io');
// var io = io(http);
//
// io.on('connection', function(socket){
//   socket.on("chatsend", function(message){
//     io.emit("chatpost", message);
//   });
// });
//


//RETURNS INDEX.HTML W/O THE NEED OF HANDLEBARS OR MIDDLEWARE
// app.get('/', function(req, res){
//   res.sendFile(__dirname + '/public/index.html');
// });

app.use(express.static(__dirname + '/public'))

app.get("/", function( req, res ){
  res.render("index")
})



app.listen(3000, function(){
  console.log("app listening on port 3000")
})
