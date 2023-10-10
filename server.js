<<<<<<< HEAD
var express = require('express');
var app = express();
var mysql= require('mysql');
const http = require('http');
var session=require('express-session');
// var session=require('cookie-session');
const server = http.createServer(app)
const { Server } = require("socket.io");
var bodyParser=require('body-parser');
// db = mysql_connect();

const io= new Server(server,{
  cors:{
    origin:"http://192.168.0.144:3000",
    method:['POST', 'PUT', 'GET', 'OPTIONS', 'HEAD'],
    credentials: true
  },
});
// const lib = require('./functions.js');
app.use(express.static(__dirname + '/public'));
app.use(express.json());
app.use(session({secret: 'ssshhhhh',saveUninitialized: true,resave: false}));
// app.use(
//     session({
//         name: 'session',
//         secret: 'secretKeyWooo'        
//     })
// );
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.set('view-engine','ejs');
var os=require('os');
var network=os.networkInterfaces();
var networksIps=[];
for (const Ips of Object.keys(network)) {    
    networksIps.push(network[Ips][1]['address']);
}

// cors policy start here


// decalring variables globally


var UserIdarray=[];


// end here

const cors = require("cors");
app.use(cors({
  origin: '*'
}));
app.use(cors({
  origin: 'http://192.168.0.144:3000',
  methods: ['POST', 'PUT', 'GET', 'OPTIONS', 'HEAD'],
  credentials: true
}));

app.all("/*", function(req, res, next){
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
  next();
});

// cors policy end here

app.get('/',async(req,res)=>{
  if(req.session.page_view){    
  }else{
    req.session.page_view=1; 
  }  
  res.render('index.ejs',{msg:'success'});
})


const PORT = process.env.PORT || 9999;
server.listen(9999,()=>{
  console.log(`server runs`);
=======
var express = require('express');
var app = express();
var mysql= require('mysql');
const http = require('http');
var session=require('express-session');
// var session=require('cookie-session');
const server = http.createServer(app)
const { Server } = require("socket.io");
var bodyParser=require('body-parser');
// db = mysql_connect();

const io= new Server(server,{
  cors:{
    origin:"http://192.168.0.144:3000",
    method:['POST', 'PUT', 'GET', 'OPTIONS', 'HEAD'],
    credentials: true
  },
});
// const lib = require('./functions.js');
app.use(express.static(__dirname + '/public'));
app.use(express.json());
app.use(session({secret: 'ssshhhhh',saveUninitialized: true,resave: false}));
// app.use(
//     session({
//         name: 'session',
//         secret: 'secretKeyWooo'        
//     })
// );
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.set('view-engine','ejs');
var os=require('os');
var network=os.networkInterfaces();
var networksIps=[];
for (const Ips of Object.keys(network)) {    
    networksIps.push(network[Ips][1]['address']);
}

// cors policy start here


// decalring variables globally


var UserIdarray=[];


// end here

const cors = require("cors");
app.use(cors({
  origin: '*'
}));
app.use(cors({
  origin: 'http://192.168.0.144:3000',
  methods: ['POST', 'PUT', 'GET', 'OPTIONS', 'HEAD'],
  credentials: true
}));

app.all("/*", function(req, res, next){
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
  next();
});

// cors policy end here

app.get('/',async(req,res)=>{
  if(req.session.page_view){    
  }else{
    req.session.page_view=1; 
  }  
  res.render('index.ejs',{msg:'success'});
})


const PORT = process.env.PORT || 9999;
server.listen(9999,()=>{
  console.log(`server runs`);
>>>>>>> 8d9dfa61f8add68d1538ace61da24cf88b9e0786
})