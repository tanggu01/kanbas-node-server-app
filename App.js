// Entry point of server application
// use library - express library
// npm install express
//node_modules shouldn't be in source

// equivalent to import; before es6
// const express = require("express");
import cors from "cors";


// common.js is default: package.json
import express from "express";
import Hello from "./Hello.js";
import Lab5 from "./Lab5.js";

//create instance
const app = express();
app.use(cors());
app.use(express.json());

Lab5(app); // pass reference to express module
Hello(app); //pass app instance


app.listen(4000); //react is 3000
//run server by ' node App.js'