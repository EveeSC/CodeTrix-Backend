// import { Request, Response } from 'express'
// import {BoardSchema} from '../models/board.schema';
// import mongoose from 'mongoose';

// export const obtenerPinesSegunTablero = async (req:Request, res:Response)=>{
//     const board = await BoardSchema.aggregate([
//         {
//             $lookup: {
//                 from: 'pins',
//                 localField: 'pins._id', 
//                 foreignField: '_id',
//                 as: 'detallePin'
//             }
//         },
//         {
//             $match: {
//                 _id : new mongoose.Types.ObjectId(req.params.id)
//             }
//         },
//         {
//             $project: {
//                 boardTitle: true,
//                 boardImage: true,
//                 detallePin: true
//             }
//         }
//     ]);
    
//     res.send(board);
//     res.end();
// }


// export const guardarPin = async (req:Request, res:Response)=>{
//     //usando update
//     const resultado1 = await BoardSchema.updateOne({_id: req.params.id},
//         {
//             $push:{
//                 pins :{
//                     _id: new mongoose.Types.ObjectId(req.body._id),
//                     img: req.body.img
//                 }
//             }
//         })
    
//     res.send(resultado1);
//     res.end();
// }

