import express from 'express';
const router = express.Router();


import catRouter from './routes/cat-router.js';
import userRouter from './routes/user-router.js';

console.log('api/index router käynnistyi');

//jatkaa /api/v1 polkua...
router.use('/cats', catRouter);
//Assignment 2 haluaa tämän polun:
router.use('/cat', catRouter);

//user-router
router.use('/user', userRouter);


//tämä nimetään uudestaan 'api' app.js koodissa
export default router;
