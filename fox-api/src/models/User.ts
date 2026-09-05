import mongoose, { Schema, type HydratedDocument } from 'mongoose';
import bcrypt from 'bcryptjs';
export interface IUser { name:string; email:string; password:string; role:'representative'|'admin'; comparePassword(p:string):Promise<boolean>; }
const schema = new Schema<IUser>({
  name:{type:String,required:true,trim:true},
  email:{type:String,required:true,unique:true,lowercase:true,trim:true},
  password:{type:String,required:true,minlength:8,select:false},
  role:{type:String,enum:['representative','admin'],default:'representative'}
},{timestamps:true});
schema.pre('save', async function(){ if(this.isModified('password')) this.password = await bcrypt.hash(this.password,12); });
schema.methods.comparePassword = function(password:string){ return bcrypt.compare(password,this.password); };
schema.set('toJSON',{transform:(_doc,ret:any)=>{ delete ret.password; return ret; }});
export type UserDocument = HydratedDocument<IUser>;
export const User = mongoose.model<IUser>('User',schema);
