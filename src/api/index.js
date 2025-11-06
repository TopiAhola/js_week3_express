import express from 'express';
const router = express.Router();


import catRouter from './routes/cat_router.js';


console.log('api/index router käynnistyi');

//jatkaa /api/v1 polkua...
router.use('/cats', catRouter);



//router.use('/stuff', stuffRouter);

//tämä nimetään uudestaan 'api' app.js koodissa?
export default router;