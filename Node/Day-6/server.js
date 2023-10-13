
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const fs = require("fs");
const path = require("path");

require("dotenv").config();


const app = express();

const PORT = process.env.PORT;

const outputFolder = "./output";

if(!fs.existSync(outputFolder)) {
    fs.mkdirSync(outputFolder);
}


function logRequest(req, res, next) {
    console.log (
        `Received ${req.method} request for 
        ${req.url} at ${new Date().toISOString()}`
    );
    next()
}


function sampleAuthentication(req, res, next) {
    if(req.query.token === "mentorToken") {
        req.user = { id : 1, name: "Manikandan Anbalagan"};
        next();
} else if (req.query.token === "studentToken")
req.user = { id : 2, name: "John G"};
next();
} else {
    res.status(401).send("Unauthorized!!!");
}
app.use(bodyParser.json());


app.listen(PORT, () => {
    console.log("Server is running on PORT:", PORT)
})