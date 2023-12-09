"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const board_controller_1 = require("../controllers/board.controller");
const router = express_1.default.Router();
// (GET-Controlador Boards)Obtener el detalle de los pines de un tablero en particular hacer cruce entte pins y boards 
//http://localhost:3002/boards/id/pins-details
router.get('/:id/pins-details', board_controller_1.obtenerPinesSegunTablero);
//(POST-Controlador Boards)   Crear un endpoint para guardar un pin en un tablero en particular
//http://localhost:3002/boards/:id/save-pin
router.post('/:id/save-pin', board_controller_1.guardarPin);
exports.default = router;
