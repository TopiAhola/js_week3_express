import express from 'express';
const router = express.Router();

import catRouter from './routes/cat-router.js';
import userRouter from './routes/user-router.js';
import authRouter from './routes/auth-router.js';


//cat-router
router.use('/cat', catRouter);
router.use('/cats', catRouter);

//user-router
router.use('/user', userRouter);

//auth-router
router.use('/auth', authRouter);

//tämä nimetään uudestaan 'api' app.js koodissa
export default router;
