import {Router} from 'express'; import {Policy} from '../models/Policy.js'; import {auth} from '../middleware/auth.js';
const r=Router(); r.use(auth);
r.get('/',async(req,res,next)=>{try{const q:any={}; if(req.query.type)q.type=req.query.type;if(req.query.status)q.status=req.query.status;res.json(await Policy.find(q).populate('customer','customerNumber firstName lastName').sort({createdAt:-1}));}catch(e){next(e)}});
r.post('/',async(req,res,next)=>{try{res.status(201).json(await Policy.create(req.body));}catch(e){next(e)}});
r.get('/:id',async(req,res,next)=>{try{res.json(await Policy.findById(req.params.id).populate('customer'));}catch(e){next(e)}});
r.put('/:id',async(req,res,next)=>{try{res.json(await Policy.findByIdAndUpdate(req.params.id,req.body,{new:true,runValidators:true}));}catch(e){next(e)}});
r.delete('/:id',async(req,res,next)=>{try{await Policy.findByIdAndDelete(req.params.id);res.status(204).end();}catch(e){next(e)}}); export default r;
