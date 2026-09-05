import mongoose,{Schema} from 'mongoose';
const schema=new Schema({
 customerNumber:{type:String,required:true,unique:true,uppercase:true}, firstName:{type:String,required:true}, lastName:{type:String,required:true},
 email:{type:String,required:true,lowercase:true}, phone:String, state:String, status:{type:String,enum:['active','inactive'],default:'active'},
 owner:{type:Schema.Types.ObjectId,ref:'User',required:true}
},{timestamps:true});
export const Customer=mongoose.model('Customer',schema);
