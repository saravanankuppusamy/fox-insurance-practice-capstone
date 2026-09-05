import {Router} from 'express'; import jwt from 'jsonwebtoken'; import {User} from '../models/User.js'; import {auth} from '../middleware/auth.js';
const r=Router(); const token=(id:string)=>jwt.sign({id},process.env.JWT_SECRET!,{expiresIn:'8h'});
r.post('/register',async(req,res,next)=>{try{const user=await User.create(req.body);res.status(201).json({token:token(String(user._id)),user});}catch(e){next(e)}});
r.post('/login',async(req,res,next)=>{try{const user=await User.findOne({email:req.body.email}).select('+password'); if(!user||!(await user.comparePassword(req.body.password))) return res.status(401).json({message:'Invalid credentials'}); res.json({token:token(String(user._id)),user});}catch(e){next(e)}});
r.get('/me',auth,(req,res)=>res.json(req.user)); export default r;
