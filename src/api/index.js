import express from 'express';
const router = express.Router();


import {catRouter, catRouterAssignment1 }from './routes/cat-router.js';


console.log('api/index router käynnistyi');

//jatkaa /api/v1 polkua...
router.use('/cat',catRouterAssignment1);
router.use('/cats', catRouter);





//router.use('/stuff', stuffRouter);

//tämä nimetään uudestaan 'api' app.js koodissa?
export default router;
