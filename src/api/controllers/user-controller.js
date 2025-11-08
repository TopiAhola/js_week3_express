'use strict';

import {addUser, findUserById, listAllUsers} from "../models/user-model.js";


const getUser = (req, res) => {
    res.json(listAllUsers());
    console.log('getUser in user-controller')
};

const getUserById = (req, res) => {
    console.log('getUserById in user-controller')
    console.log(req.params.id);
    const user = findUserById(req.params.id);
    if (user !== null) {
        res.json(user);
        console.log('return user: '+user)
    } else {
        res.sendStatus(404);
    }

};

const postUser = (req, res) => {
    console.log('postUser in user-controller')
    console.log(req.body);
    const result = addUser(req.body);
    if (result) {
        res.status(201);
        res.json({message: 'New user added.', result});
    } else {
        res.sendStatus(400);
    }

};

const putUser = (req, res) => {
    // return hard coded json response: {message: 'User item updated.'}
    console.log('putUser in user-controller')
    res.json(
        {message: 'User item updated.'}
    );
};

const deleteUser = (req, res) => {
    // return hard coded json response: {message: 'User item deleted.'}
    console.log('deleteUser in user-controller: hard coded response')
    res.json(
        {message: 'User item deleted.'}
    );
};

export {getUser, getUserById, postUser, putUser, deleteUser};