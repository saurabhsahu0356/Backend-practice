const app = require("./src/app");
const mongoose= require("mongoose")

function connectTodb(){
      mongoose.connect("data base Uri ") // fake uri 
      .then(()=>{
         console.log("connected to Database")
      })
}
 
 connectTodb()

app.listen(3000,()=>{
    console.log("server is runnning on port 3000");
})