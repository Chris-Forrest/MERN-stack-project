import express from "express";

const app = express();

app.get("/", (req, res) => {
    res.send("server is working")
})

app.listen(5000, () => {
    console.log("Server started at http://localhost:5000");
});
