const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.send("Hello World");
});

app.get("/welcome", (req, res) => {
    res.send("Welcome to world");
});

app.get("/test", (req, res) => {
    res.send("<h1>Test<h1>");
});

app.listen(5000, () => {
    console.log("Listen on port 5000");
});