import express from 'express';
import {obtenerPinesSegunTablero,guardarPin} from '../controllers/board.controller';
const router = express.Router();

// (GET-Controlador Boards)Obtener el detalle de los pines de un tablero en particular hacer cruce entte pins y boards 
//http://localhost:3002/boards/id/pins-details
router.get('/:id/pins-details', obtenerPinesSegunTablero);


//(POST-Controlador Boards)   Crear un endpoint para guardar un pin en un tablero en particular
//http://localhost:3002/boards/:id/save-pin
router.post('/:id/save-pin', guardarPin);

export default router;