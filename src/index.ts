import express, {Request, Response, Express} from 'express';
import {Database} from './utils/database';
import cors from 'cors';
import usuariosRouter from './routers/usuarios.router';
// import proyectosRouter from './routers/proyectos.router';

const app:Express = express();
const db:Database = new Database();

app.use (cors());
app.use(express.json());
app.use('/usuarios', usuariosRouter);
// app.use('/proyectos', proyectosRouter);

app.get("/", (req:Request, res:Response) => {
    res.send("Servidor para Codetrix");
    res.end();
});

app.listen(3003, ()=>{
    console.log("Servidor levantado en el puerto 3003");
});