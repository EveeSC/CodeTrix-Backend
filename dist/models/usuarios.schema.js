"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsuariosSchema = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const schema = new mongoose_1.default.Schema({
    nombreCompleto: String,
    nombreUsuario: String,
    identidad: String,
    correoElectronico: String,
    fechaNacimiento: Date,
    numeroTelefono: String,
    img: String,
    contraseña: String,
    plan: String,
    proyectos: (Array)
});
exports.UsuariosSchema = mongoose_1.default.model('usuarios', schema);
