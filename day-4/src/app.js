const express = require("express")

const app =  express() // server Create ho jata hai 

app.use(express.json())

const notes=[]

app.get("/", (req, res)=>{
     res.send("hello bahi")
})

app.post("/notes",(req, res)=>{
    console.log(req.body)
    notes.push(req.body)

    console.log(notes)

    res.send("note created")
})


app.get("/notes", (req, res)=>{
     res.send(notes)
})

app.delete("/notes/:index", (req, res)=>{
     delete notes[ req.params.index]
       
     res.send("note delete succesfully")
})

app.patch("/notes/:index",(req, res)=>{
    notes[req.params.index].description = req.body.description

    res.send("note Updated successful")
})

module.exports = app