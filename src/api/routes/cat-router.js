import express from 'express';
import {
    getCat,
    getCatById,
    postCat,
    putCat,
    deleteCat,
} from '../controllers/cat-controller.js';

const catRouter = express.Router();



//multer
import multer from "multer";
const uploadMulter = multer({
    dest: './uploads/'  //uploads kansio
});



//endpoint http://localhost:3000/api/v1/cats
//endpoint http://localhost:3000/api/v1/cat
// console.log('http://localhost:3000/api/v1/cats .get kutsu')
catRouter.get('/',getCat)
    .post('/', uploadMulter.single('file'), postCat); //multer välissä

//endpoint http://localhost:3000/api/v1/cats/:id
//endpoint http://localhost:3000/api/v1/cat/:id
catRouter.route('/:id').get(getCatById)
    .put(putCat)
    .delete(deleteCat);


export default catRouter;




