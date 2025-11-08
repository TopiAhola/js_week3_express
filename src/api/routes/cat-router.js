import express from 'express';
import {
    getCat,
    getCatById,
    postCat,
    putCat,
    deleteCat,
} from '../controllers/cat-controller.js';

const catRouter = express.Router();


//
//endpoint http://localhost:3000/api/v1/cats
//endpoint http://localhost:3000/api/v1/cat
catRouter.get('/',getCat)
    .post('/', postCat);

//endpoint http://localhost:3000/api/v1/cats/:id
//endpoint http://localhost:3000/api/v1/cat/:id
catRouter.route('/:id').get(getCatById)
    .put(putCat)
    .delete(deleteCat);


export default catRouter;




