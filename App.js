// Entry point of server application
// use library - express library
// npm install express
//node_modules shouldn't be in source

// equivalent to import; before es6
// const express = require("express");

// common.js is default: package.json
import express from "express";
import Hello from "./Hello.js";

//create instance
const app = express();

Hello(app); //pass app instance


app.listen(4000); //react is 3000
//run server by ' node App.js'