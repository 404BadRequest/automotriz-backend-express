const express = require("express");
const app = express();

app.use(express.json());


app.get("/", (req, res) => {
    res.send("Hello World");
});

app.post("/user/:id", (req, res) => {
    console.log(req.params);
    console.log(req.body);
    res.send("Welcome to world");
});

app.put("/test", (req, res) => {
    res.send("<h1>Test<h1>");
});

app.delete("/user/:userId", (req, res) => {
    res.send('User ${req.params.userId} deleted');
});

app.listen(5000, () => {
    console.log("Listen on port 5000");
});