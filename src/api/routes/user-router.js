import express from 'express';
import {
    getUser,
    getUserById,
    postUser,
    putUser,
    deleteUser,
} from '../controllers/user-controller.js';
import {authenticateToken} from "../../middlewares.js";

const userRouter = express.Router();


//
//endpoint http://localhost:3000/api/v1/users
//endpoint http://localhost:3000/api/v1/user
userRouter.get('/',getUser)
    .post('/', postUser);

//endpoint http://localhost:3000/api/v1/users/:id
//endpoint http://localhost:3000/api/v1/user/:id
userRouter.route('/:id')
    .get(authenticateToken, getUserById)
    .put(authenticateToken, putUser)
    .delete(authenticateToken, deleteUser);


export default userRouter;




