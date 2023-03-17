/*const express = require("express");
const server = express();
const PORT = 3001; 
const router = require("./index.js");
const bodyParser = require('body-parser'); 

server.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));
server.use(bodyParser.json({ limit: '50mb' })); 
// Configuración con problema de CORS
// npm install cors --save
// ---
const cors = require("cors");
const corsOptions = {
    origin: "*",
    credentials: true, // access-control-allow-credentials: true
    optionSuccessStatus: 200,
};
//server.use(cors(corsOptions)); // Use this after the variable declaration
// ---


server.use(express.json());

server.use("/", router);

server.listen(PORT, () => {
    console.log("Server raised in port " + PORT);
});*/

const express = require('express');
const cors = require("cors")
const server = express();
const morgan = require("morgan");
const PORT = 3001;
const router = require("./index")


server.use(express.json());
server.use(cors());
server.use(morgan("dev"));
// DELETE/rickandmorty/fav/:id


 server.use("/rickandmorty",router)
// server.use("/user",router)


server.listen(PORT, () => {
   console.log('Server raised in port ' + PORT);
});