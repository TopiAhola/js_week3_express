import express from 'express';

import {getMe, login} from '../controllers/auth-controller.js';
import {authenticateToken} from '../../middlewares.js';


const authRouter = express.Router();

//endpoint http://localhost:3000/api/v1/auth/login
authRouter.post('/login', login);

//endpoint http://localhost:3000/api/v1/auth/me
authRouter.route('/me').get(authenticateToken, getMe);

export default authRouter;



