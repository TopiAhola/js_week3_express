import express from 'express';
import {
    getCat,
    getCatById,
    postCat,
    putCat,
    deleteCat,
} from '../controllers/cat-controller.js';

//multer
import multer from "multer";
const multerUpload = multer({
    dest: './uploads/'  //uploads kansio
});

//createThumbnail
import { createThumbnail } from '../../middlewares.js';


const catRouter = express.Router();

//endpoint http://localhost:3000/api/v1/cats
//endpoint http://localhost:3000/api/v1/cat
// console.log('http://localhost:3000/api/v1/cats .get kutsu')
catRouter.get('/',getCat)
    .post('/',
        multerUpload.single('file'),
        createThumbnail,
        postCat
    ); //multer välissä:  multerUpload.single('file')

//endpoint http://localhost:3000/api/v1/cats/:id
//endpoint http://localhost:3000/api/v1/cat/:id
catRouter.route('/:id').get(getCatById)
    .put(putCat)
    .delete(deleteCat);


export default catRouter;




