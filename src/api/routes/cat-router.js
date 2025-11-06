import express from 'express';
import {
    getCat,
    getCatById,
    postCat,
    putCat,
    deleteCat,
} from '../controllers/cat-controller.js';


const catRouter = express.Router();


//endpoint http://localhost:3000/api/v1/cats  console.log('http://localhost:3000/api/v1/cats .get kutsu')
catRouter.get('/',getCat)
    .post('/', postCat);


catRouter.route('/:id').get(getCatById)
    .put(putCat)
    .delete(deleteCat);


export default catRouter;




