import mongoose from "mongoose";
import { Files, Proyectos } from "./proyectos.model";

const schema = new mongoose.Schema<Proyectos>({
    proyectos:Array<Files>
})

export const ProyectosSchema = mongoose.model('proyectos', schema);