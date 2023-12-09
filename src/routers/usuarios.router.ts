import express from 'express';
import {obtenerUsuarios,login, obtenerUsuariosCompartir, registrarNuevoUsuario} from '../controllers/usuarios.controller';
const router = express.Router();


//(POST  Login Controlador Usuarios)
//http://localhost:3003/usuarios/login
router.post('/login', login);

// (GET-Controlador Usuarios)     Obtener todos los usuarios
//http://localhost:3003/usuarios
router.get('/', obtenerUsuarios);

//Obtener Usaurios para compartir
// http://localhost:3003/usuarios/compartir
router.get('/compartir', obtenerUsuariosCompartir);

// (POST-Controlador Usuarios)     registrar un usuario
//http://localhost:3003/usuarios/registro
router.get('/registro', registrarNuevoUsuario);


// (GET-Controlador Usuarios) 
//http://localhost:3002/users/id/boards
// router.get('/:id/boards',listaTablerosUsuario);


export default router;