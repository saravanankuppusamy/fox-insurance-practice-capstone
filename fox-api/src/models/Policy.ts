import mongoose,{Schema} from 'mongoose';
const schema=new Schema({
 policyNumber:{type:String,required:true,unique:true,uppercase:true}, customer:{type:Schema.Types.ObjectId,ref:'Customer',required:true},
 type:{type:String,enum:['auto','home','travel','health'],required:true}, premium:{type:Number,min:0,required:true},
 status:{type:String,enum:['active','pending','cancelled','expired'],default:'active'}, effectiveDate:{type:Date,required:true}, expirationDate:{type:Date,required:true}
},{timestamps:true});
export const Policy=mongoose.model('Policy',schema);
