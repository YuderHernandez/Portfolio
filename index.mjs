import 'dotenv/config'
import express from 'express'
const app = express()

const Port = process.env.PORT || 3001;
app.use(express.json);

// app.use("/api", require)("./routers") //http://localhost:3000/api
app.listen(Port, ()=>{
    console.log(`http://localhost: ${Port}`)
})

