const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.send("Hello World");
});

app.get("/welcome", (req, res) => {
    res.send("Welcome to world");
});

app.listen(3000, () => {
    console.log("Listen on port 3000");
});