import express from 'express';
const router = express.Router();

import catRouter from './routes/cat-router.js';
import userRouter from './routes/user-router.js';

// http://localhost:3000/api/v1/ -polun juuri
router.use('/', (req, res) => {
    res.send('/api/v1 polun juuri');
});

//Assignment 2 haluaa tämän polun:
router.use('/cat', catRouter);
router.use('/cats', catRouter);

//user-router
router.use('/user', userRouter);

//tämä nimetään uudestaan 'api' app.js koodissa
export default router;
