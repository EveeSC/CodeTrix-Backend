import mongoose from 'mongoose';
import { BaseProyecto } from './proyectos.model';

export interface Usuarios{
    _id:mongoose.Types.ObjectId;
    nombreCompleto:string;
    nombreUsuario:string;
    identidad:string;
    correoElectronico:string;
    fechaNacimiento:Date;
    numeroTelefono:string;
    img?:string;
    contraseña:string;
    plan?:string;
    proyectos?:Array<BaseProyecto>;
}