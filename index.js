var express = require("express")
var app = express()
var hbs = require("hbs")
// var synth = require("../synth.js")
// synth.play()


// app.set('view engine', 'hbs')
// app.use(express.static(__dirname + '/public'))
// hbs.registerPartials(__dirname+"/views/partials")
//
// app.get("/", function( req, res ){
//   res.send("hello world")
// })
//
// app.listen(3000, function(){
//   console.log("app listening on port 3000")
// })

app.set('view engine', 'hbs')

app.get('/', function(req, res){
  res.sendFile(__dirname + '/public/index.html');
});

app.listen(3000, function(){
  console.log("app listening on port 3000")
})
