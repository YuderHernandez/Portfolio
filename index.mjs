import 'dotenv/config'
import express from 'express'
import http from 'http'
import path from 'path'
import url from 'url';

const __filename = url.fileURLToPath(import.meta.url);  // app.set('views', path.join(__dirname, 'views'));  para manipulacion del __dirname en ESM
const __dirname = path.dirname(__filename);

const app = express()

app.use(express.static('public')); //se declaran carpetas del contenido interactivo, para facil acceso en html, css y js
app.use(express.static('views'));
const Port = process.env.PORT || 3001;
const hostname = "http://127.0.0.1";


app.get("/",(req, res, next)=>{
    res.render(process.cwd() + '/views/index')   //http://localhost:3000/
})

app.get("/Utilidades",(req, res)=>{
    res.sendFile(process.cwd() + '/views/Utilidades.html')    //http://localhost:3000/catalogo
})

app.get("/Topics_informaticos",(req, res)=>{
    res.sendFile(process.cwd() + '/views/Topics_informaticos.html')     //http://localhost:3000/curiosidades
})
app.get("/Proyectos",(req, res)=>{
    res.sendFile(process.cwd() + '/views/Proyectos.html')     //http://localhost:3000/curiosidades
})
app.get("/Registro",(req, res)=>{
    res.sendFile(process.cwd() + '/views/Registro.html')     //http://localhost:3000/curiosidades
})


// app.use("/api", require)("./routers") //http://localhost:3000/api
// app.listen(Port, ()=>{
//     console.log(`${hostname}:${Port}`)
//     console.log(process.cwd() + '/views/catalogo.html')
// })


http.createServer(app).listen(Port) // se deja en escucha permanente el servidor http

