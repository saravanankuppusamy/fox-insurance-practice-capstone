import type {Request,Response,NextFunction} from 'express';
import jwt from 'jsonwebtoken';
import {User} from '../models/User.js';
export async function auth(req:Request,res:Response,next:NextFunction){
 try { const h=req.header('Authorization'); if(!h?.startsWith('Bearer ')) return res.status(401).json({message:'Authentication required'});
 const payload=jwt.verify(h.slice(7),process.env.JWT_SECRET!) as {id:string};
 const user=await User.findById(payload.id); if(!user) return res.status(401).json({message:'Invalid token'}); req.user=user; next();
 } catch { return res.status(401).json({message:'Invalid or expired token'}); }
}
