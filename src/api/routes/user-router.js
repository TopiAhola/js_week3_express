import express from 'express';
import {
    getUser,
    getUserById,
    postUser,
    putUser,
    deleteUser,
} from '../controllers/user-controller.js';

const userRouter = express.Router();


//
//endpoint http://localhost:3000/api/v1/users
//endpoint http://localhost:3000/api/v1/user
userRouter.get('/',getUser)
    .post('/', postUser);

//endpoint http://localhost:3000/api/v1/users/:id
//endpoint http://localhost:3000/api/v1/user/:id
userRouter.route('/:id').get(getUserById)
    .put(putUser)
    .delete(deleteUser);


export default userRouter;




