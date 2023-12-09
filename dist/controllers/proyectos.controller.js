"use strict";
// import { Request, Response } from 'express'
// import {PinSchema} from '../models/proyectos.schema';
// export const obtenerPines = async (req:Request, res:Response)=>{
//     const pines= await PinSchema.find();
//     res.send(pines);
//     res.end();
// }
// export const obtenerPinesSegunTag = async (req:Request, res:Response)=>{
//     const tags = await PinSchema.find(
//             {
//                 tags: { $in: [req.params.tag] }
//             }, 
//             {
//                 _id: true,
//                 title:true,
//                 description:true,
//                 likes:true,
//                 img:true,
//                 tags:true
//             });
//     res.send(tags);
// }
