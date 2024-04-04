// Entry point of server application
// use library - express library
// npm install express
//node_modules shouldn't be in source

// equivalent to import; before es6
// const express = require("express");

// common.js is default: package.json
import express from "express";
import Hello from "./Hello.js";
import Lab5 from "./Lab5.js";

//create instance
const app = express();

Lab5(app); // pass reference to express module
Hello(app); //pass app instance


app.listen(4000); //react is 3000
//run server by ' node App.js'