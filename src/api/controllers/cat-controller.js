'use strict';

import {addCat, findCatById, listAllCats, removeCat} from "../models/cat-model.js";




// http://localhost:3000/api/v1/cat
const getOneCat = (req, res) => {
    res.json(findCatById(2));
}


const getCat = (req, res) => {
    console.log('getCat in cat-controller')
    res.json(listAllCats());
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
    console.log(req.file); //Multerin lisäämää paskaa

    const result = addCat(req.body);
    if (result.cat_id) {
        res.status(201);
        res.json({message: 'New cat added.', result});
    } else {
        res.sendStatus(400);
    }

};

const putCat = (req, res) => {
    // not implemented in this example, this is future homework
    console.log('putCat in cat-controller')
    console.log(req.body);
    const result = addCat(req.body);
    if (result.cat_id) {
        res.status(201);
        res.json({message: 'New cat added.', result});
    } else {
        res.sendStatus(400);
    }

};

const deleteCat = (req, res) => {
    // not implemented in this example, this is future homework
    console.log('deleteCat in cat-controller')
    let success = removeCat(req.params.id);
    if (success) {
        res.sendStatus(200);
    } else {
        res.sendStatus(404);
    }



};

export {getOneCat,getCat, getCatById, postCat, putCat, deleteCat};
