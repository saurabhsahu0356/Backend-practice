const dns = require("dns");

dns.setServers(["8.8.8.8", "1.1.1.1"]);// Dns change prograam 


require("dotenv").config()
const conntodb = require("./src/config/database")
const app = require("./src/app")



 conntodb ()
  

app.listen(3000,()=>{
    console.log("server is running on port 3000")
})

