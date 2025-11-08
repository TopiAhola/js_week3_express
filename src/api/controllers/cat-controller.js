'use strict';

import {addCat, findCatById, listAllCats} from "../models/cat-model.js";


const getCat = (req, res) => {
    res.json(listAllCats());
    console.log('getCat in cat-controller')
};

const getCatById = (req, res) => {
    console.log('getCatById in cat-controller')
    console.log(req.params.id);
    const cat = findCatById(req.params.id);
    if (cat !== null) {
        res.json(cat);
        console.log('return cat: '+cat)
    } else {
        res.sendStatus(404);
    }

};

const postCat = (req, res) => {
    console.log('postCat in cat-controller')
    console.log(req.body);
    const result = addCat(req.body);
    if (result) {
        res.status(201);
        res.json({message: 'New cat added.', result});
    } else {
        res.sendStatus(400);
    }

};

const putCat = (req, res) => {
    // return hard coded json response: {message: 'Cat item updated.'}
    console.log('putCat in cat-controller')
   res.json(
       {message: 'Cat item updated.'}
   );
};

const deleteCat = (req, res) => {
    // return hard coded json response: {message: 'Cat item deleted.'}
    console.log('deleteCat in cat-controller: hard coded response')
    res.json(
        {message: 'Cat item deleted.'}
    );
};

export {getCat, getCatById, postCat, putCat, deleteCat};