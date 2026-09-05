import {Router} from 'express'; import {Customer} from '../models/Customer.js'; import {auth} from '../middleware/auth.js';
const r=Router(); r.use(auth);
r.get('/',async(req,res,next)=>{try{const q:any={}; if(req.query.status) q.status=req.query.status; if(req.query.search){const x=req.query.search as string;q.$or=[{firstName:{$regex:x,$options:'i'}},{lastName:{$regex:x,$options:'i'}},{customerNumber:{$regex:x,$options:'i'}}];} res.json(await Customer.find(q).populate('owner','name email').sort({createdAt:-1}));}catch(e){next(e)}});
r.post('/',async(req,res,next)=>{try{res.status(201).json(await Customer.create({...req.body,owner:req.user!._id}));}catch(e){next(e)}});
r.get('/:id',async(req,res,next)=>{try{const x=await Customer.findById(req.params.id); if(!x)return res.status(404).json({message:'Customer not found'});res.json(x);}catch(e){next(e)}});
r.put('/:id',async(req,res,next)=>{try{res.json(await Customer.findByIdAndUpdate(req.params.id,req.body,{new:true,runValidators:true}));}catch(e){next(e)}});
r.delete('/:id',async(req,res,next)=>{try{await Customer.findByIdAndDelete(req.params.id);res.status(204).end();}catch(e){next(e)}}); export default r;
