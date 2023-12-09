import mongoose from "mongoose";
import { Usuarios } from "./usuarios.model";
import { BaseProyecto } from "./proyectos.model";

const schema = new mongoose.Schema<Usuarios>({
    nombreCompleto:String,
    nombreUsuario:String,
    identidad:String,
    correoElectronico:String,
    fechaNacimiento:Date,
    numeroTelefono:String,
    img:String,
    contraseña:String,
    plan:String,
    proyectos:Array<BaseProyecto>
    }
)

export const UsuariosSchema = mongoose.model('usuarios', schema); 