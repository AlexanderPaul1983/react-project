import express from 'express';
import jwt from'jsonwebtoken';
import mongoose from 'mongoose';
import {registerValidator} from './validations/auth.js';
import {validationResult} from 'express-validator';

mongoose.connect('mongodb+srv://alexanderpaulrosenheim:d3eOYazu5gPFofkA@cluster0.fjdqu.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0').then(()=>{console.log('DB ok')}).catch((err)=>{console.log(err)});

const app = express();
app.use(express.json());



app.post('/auth/register', registerValidator, (req, res)=>{
        const errors = validationResult(req);
        if(!errors.isEmpty()){
            return res.status(400).json(errors.array());
        }
        res.json({
            success: true,
        });
});

app.listen(4444, (err)=>{
    if(err){
        console.log(err);
    }
    console.log('server läuft on port 4444');
});