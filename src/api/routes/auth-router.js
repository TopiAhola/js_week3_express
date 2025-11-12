import express from 'express';

import {getMe, login} from '../controllers/auth-controller.js';
import {authenticateToken} from '../../middlewares.js';

import cors from 'cors';

/*
//Assignment 6 cors
const corsOptions = {
    origin: [
        'https://api.mapbox.com/mapbox-gl-js/v2.5.1/mapbox-gl.css',
        "https://cdnjs.cloudflare.com/ajax/libs/luxon/2.0.2/luxon.min.js",
    ],
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    preflightContinue: true,
    optionsSuccessStatus: 204
}

const corsOptions2 = () => {
    'Access-Control-Allow-Origin'

}
const corsWithOptions = cors(corsOptions2);*/

const authRouter = express.Router();

//pre flight jutui
//authRouter.options('/login',cors());

//endpoint http://localhost:3000/api/v1/auth/login
authRouter.post('/login', login);

//endpoint http://localhost:3000/api/v1/auth/me
authRouter.route('/me').get(authenticateToken, getMe);

export default authRouter;



