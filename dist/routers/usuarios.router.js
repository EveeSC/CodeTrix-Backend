"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const usuarios_controller_1 = require("../controllers/usuarios.controller");
const router = express_1.default.Router();
//(POST  Login Controlador Usuarios)
//http://localhost:3003/usuarios/login
router.post('/login', usuarios_controller_1.login);
// (GET-Controlador Usuarios)     Obtener todos los usuarios
//http://localhost:3003/usuarios
router.get('/', usuarios_controller_1.obtenerUsuarios);
//Obtener Usaurios para compartir
// http://localhost:3003/usuarios/compartir
router.get('/compartir', usuarios_controller_1.obtenerUsuariosCompartir);
// (POST-Controlador Usuarios)     registrar un usuario
//http://localhost:3003/usuarios/registro
router.get('/registro', usuarios_controller_1.registrarNuevoUsuario);
// (GET-Controlador Usuarios) 
//http://localhost:3002/users/id/boards
// router.get('/:id/boards',listaTablerosUsuario);
exports.default = router;
