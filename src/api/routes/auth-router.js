import express from 'express';
import {
    login
} from '../controllers/auth-controller.js';

const authRouter = express.Router();

//endpoint http://localhost:3000/api/v1/auth/login
authRouter.post('/login', login);

export default authRouter;



