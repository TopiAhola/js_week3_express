import express from 'express';
import {
    getCat,
    getCatById,
    postCat,
    putCat,
    deleteCat,
    getCatsByOwner
} from '../controllers/cat-controller.js';

//multer
import multer from "multer";
const multerUpload = multer({
    dest: './uploads/'  //uploads kansio
});

//createThumbnail
import {authenticateToken, createThumbnail} from '../../middlewares.js';
import cors from "cors";
import authRouter from "./auth-router.js";


const catRouter = express.Router();

//endpoint http://localhost:3000/api/v1/cat
catRouter.get('/', getCat)
    .post('/',
        multerUpload.single('file'),
        createThumbnail,
        postCat
    ); //multer välissä:  multerUpload.single('file')


//endpoint http://localhost:3000/api/v1/cat/:id
catRouter.route('/:id').get(getCatById)
    .put(authenticateToken,putCat)
    .delete(authenticateToken,deleteCat);


catRouter.route('/owner/:id').get(getCatsByOwner);


export default catRouter;




