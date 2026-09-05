import type {Request,Response,NextFunction} from 'express';
export function errorHandler(err:any,_req:Request,res:Response,_next:NextFunction){
 if(err?.name==='ValidationError') return res.status(400).json({message:'Validation failed',errors:err.errors});
 if(err?.code===11000) return res.status(409).json({message:'Duplicate value',fields:err.keyValue});
 if(err?.name==='CastError') return res.status(400).json({message:'Invalid identifier'});
 console.error(err); return res.status(500).json({message:'Internal server error'});
}
