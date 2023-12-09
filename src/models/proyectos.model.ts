import mongoose from "mongoose";

export interface BaseProyecto{
    _id:mongoose.Types.ObjectId;
    nombreProyecto:string;
}

export interface Files extends BaseProyecto{
    files:Array<string>;
}

export interface Proyectos{
    proyectos:Array<Files>;
}