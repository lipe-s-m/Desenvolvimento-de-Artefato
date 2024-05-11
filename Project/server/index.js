const express = require("express");
const app = express();
const db = require("mysql");

app.get("/", (req, res) =>{
    res.send("Hello world")
})

app.listen(3001, () => {
    console.log("Rodando servidor")
})