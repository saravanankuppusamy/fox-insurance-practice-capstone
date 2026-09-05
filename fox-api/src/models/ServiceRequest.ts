import mongoose,{Schema} from 'mongoose';
const noteSchema=new Schema({author:{type:Schema.Types.ObjectId,ref:'User'},text:{type:String,required:true},createdAt:{type:Date,default:Date.now}},{_id:true});
const schema=new Schema({
 requestNumber:{type:String,required:true,unique:true}, customer:{type:Schema.Types.ObjectId,ref:'Customer',required:true}, policy:{type:Schema.Types.ObjectId,ref:'Policy'},
 category:{type:String,enum:['billing','coverage-change','documents','address-change','cancellation','other'],required:true}, description:{type:String,required:true},
 priority:{type:String,enum:['low','medium','high'],default:'medium'}, status:{type:String,enum:['open','in-progress','resolved','closed'],default:'open'},
 assignedTo:{type:Schema.Types.ObjectId,ref:'User'}, notes:[noteSchema]
},{timestamps:true});
export const ServiceRequest=mongoose.model('ServiceRequest',schema);
