"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.registrarNuevoUsuario = exports.obtenerUsuariosCompartir = exports.obtenerUsuarios = exports.login = void 0;
const usuarios_schema_1 = require("../models/usuarios.schema");
const mongoose_1 = __importDefault(require("mongoose"));
const login = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    //al json se le va a quitar el password
    const usuario = yield usuarios_schema_1.UsuariosSchema.findOne({ usuario: req.body.correoElectronico, contraseña: req.body.contraseña }, { contraseña: false });
    //si hay un usuario se envia si no es un error
    if (usuario) {
        res.send({ status: true, message: 'Login Correcto', usuario });
    }
    else {
        res.send({ status: false, message: 'Login Incorrecto' });
        res.end();
    }
});
exports.login = login;
const obtenerUsuarios = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const usuarios = yield usuarios_schema_1.UsuariosSchema.find();
    res.send(usuarios);
    res.end();
});
exports.obtenerUsuarios = obtenerUsuarios;
const obtenerUsuariosCompartir = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const usuarios = yield usuarios_schema_1.UsuariosSchema.find({}, { img: true, nombreUsuario: true });
    res.send(usuarios);
    res.end();
});
exports.obtenerUsuariosCompartir = obtenerUsuariosCompartir;
const registrarNuevoUsuario = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const nuevoUsuario = new usuarios_schema_1.UsuariosSchema({
        _id: new mongoose_1.default.Types.ObjectId(),
        nombreCompleto: req.body.nombreCompleto,
        nombreusuario: req.body.nombreUsuario,
        identidad: req.body.identidad,
        correoElectronico: req.body.correoElectronico,
        fechaNacimiento: req.body.fechaNacimiento,
        numeroTelefono: req.body.numeroTelefono,
        contraseña: req.body.contraseña
    });
    const resultado = yield nuevoUsuario.save();
    res.send({ message: "usuario registrado", resultado });
    res.end();
});
exports.registrarNuevoUsuario = registrarNuevoUsuario;
