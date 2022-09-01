const express = require('express')
const app = express()
app.get("/",(req,res)=>{
    res.send("Home")
})

app.get("/About",(req,res)=>{
    res.send("About")
})

app.get("/Contact",(req,res)=>{
    res.send("Contact")
})

app.get("/:ani",(req,res)=>{
    const bh =req.params.ani
})

app.listen(6000,()=>{
    console.log("Server is running at 6000 port")
})