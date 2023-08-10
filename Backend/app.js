const express = require("express")
require('dotenv').config(); 

const app = express()
app.use(express.json())


app.get("/", (req, res) => {
    res.status(200).json({ "message": "Welcome to Payse" })
})

app.get("/signup", (req, res) => {
    res.status(200).json({ "message": "Welcome to Payse" })
})

app.get("/login", (req, res) => {
    res.status(200).json({ "message": "Welcome to Payse" })
})

app.get("/history", (req, res) => {
    res.status(200).json({ "message": "Welcome to Payse" })
})

app.get("/send", (req, res) => {
    res.status(200).json({ "message": "Welcome to Payse" })
})

app.listen(3000, () => console.log("Server ready"))