import express from 'express';

const catRouter = express.Router();


//endpoint http://localhost:3000/api/v1/cats
catRouter.get('/', (req, res) => {
    console.log('http://localhost:3000/api/v1/cats .get kutsu')
    res.send('http://localhost:3000/api/v1/cats/ endpoint');

});




export default catRouter;




