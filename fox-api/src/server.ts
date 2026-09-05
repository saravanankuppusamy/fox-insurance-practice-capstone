import 'dotenv/config'; import express from 'express'; import cors from 'cors'; import {connectDB} from './config/db.js'; import authRoutes from './routes/auth.js'; import customerRoutes from './routes/customers.js'; import policyRoutes from './routes/policies.js'; import requestRoutes from './routes/requests.js'; import dashboardRoutes from './routes/dashboard.js'; import {errorHandler} from './middleware/error.js';
const app=express(); app.use(cors({origin:process.env.CLIENT_ORIGIN?.split(',')||true})); app.use(express.json());
app.get('/api/health',(_req,res)=>res.json({status:'ok',app:'fox-insurance-practice'}));
app.use('/api/auth',authRoutes);app.use('/api/customers',customerRoutes);app.use('/api/policies',policyRoutes);app.use('/api/requests',requestRoutes);app.use('/api/dashboard',dashboardRoutes);app.use(errorHandler);
const port=Number(process.env.PORT||4000); await connectDB(process.env.MONGODB_URI!); app.listen(port,()=>console.log(`API listening on ${port}`));
