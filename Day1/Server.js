const exp =require("express")
const app= exp()
app.get('/',(req , res)=>{
     res.send("haii Server is Starting")
})

app.get('/about',(req , res)=>{
     res.send("This is about page ")
})
app.listen(3000)