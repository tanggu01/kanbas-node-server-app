// Entry point of server application
// use library - express library
// npm install express
//node_modules shouldn't be in source

// equivalent to import; before es6
// const express = require("express");
import cors from "cors";
import CourseRoutes from "./Kanbas/courses/routes.js";
import ModuleRoutes from "./Kanbas/Modules/routes.js";


// common.js is default: package.json
import express from "express";
import Hello from "./Hello.js";
import Lab5 from "./Lab5.js";
import Modules from "./Kanbas/Database/modules.js";
//create instance
const app = express();
app.use(cors());
app.use(express.json());

Lab5(app); // pass reference to express module
Hello(app); //pass app instance
CourseRoutes(app);
ModuleRoutes(app);

app.listen(process.env.PORT || 4000);
//run server by ' node App.js'