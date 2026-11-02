const express = require("express")
const app = express() 

app.use(express.json())

const notes = [] 

app.post("/notes", (req, res)=>{

    console.log(req.body)
    
      notes.push(req.body)

     res.send("node Create")
})

app.listen(3000, ()=>{
    console.log("server is runnning on port 3000")
})