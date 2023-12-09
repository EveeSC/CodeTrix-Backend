import { Request, Response } from 'express'
import {UsuariosSchema} from '../models/usuarios.schema';
import mongoose from 'mongoose';


export const login = async (req:Request, res:Response)=>{
    //al json se le va a quitar el password
    const usuario = await UsuariosSchema.findOne({usuario:req.body.correoElectronico, contraseña: req.body.contraseña}, {contraseña:false});
    //si hay un usuario se envia si no es un error
    if(usuario){
        res.send({status: true, message:'Login Correcto', usuario});
    }
    else{
        res.send({status:false, message:'Login Incorrecto'});
        res.end();
    }
    
}


export const obtenerUsuarios = async (req:Request, res:Response)=>{
    const usuarios= await UsuariosSchema.find();
    res.send(usuarios);
    res.end();
}

export const obtenerUsuariosCompartir = async (req:Request, res:Response)=>{
    const usuarios= await UsuariosSchema.find({}, {img:true, nombreUsuario:true});
    res.send(usuarios);
    res.end();
}

export const registrarNuevoUsuario = async (req:Request, res:Response)=>{
    const nuevoUsuario = new UsuariosSchema ({
        _id: new mongoose.Types.ObjectId(),
        nombreCompleto: req.body.nombreCompleto,
        nombreusuario:req.body.nombreUsuario,
        identidad:req.body.identidad,
        correoElectronico: req.body.correoElectronico,
        fechaNacimiento: req.body.fechaNacimiento,
        numeroTelefono: req.body.numeroTelefono,
        contraseña:req.body.contraseña
    })
    const resultado = await nuevoUsuario.save();
    
    res.send({message:"usuario registrado", resultado});
    res.end();
}



