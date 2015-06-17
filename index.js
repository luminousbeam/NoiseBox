var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var hbs = require("hbs")

app.set("view engine", "hbs");
app.use(express.static(__dirname + '/public'));

app.get("/", function( req, res ){
  res.render("index");
});

// app.get('/', function(req, res){
//   res.sendFile(__dirname + '/views/layout.hbs');
// });

// Chat socket.io
io.on('connection', function(socket){
  socket.on('chat message', function(msg){
    io.emit('chat message', msg);
  });
});

app.listen(3000, function(){
  console.log("app listening on port 3000");
});

// I added this to correct Heroku error 10
app.listen(process.env.PORT || 3000, function(){
  console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});
