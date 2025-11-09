'use strict';

import {addCat, findCatById, listAllCats, modifyCat, removeCat, findCatsByOwner} from "../models/cat-model.js";

const getCat = (req, res) => {
    console.log('getCat in cat-controller')
    listAllCats().then(
        result => {
            res.json(result);
        },

        (result) => {
            console.log('error in listAllCats');
            console.log(result);
            res.sendStatus(500);
        }
    );
};

const getCatById = (req, res) => {
    console.log('getCatById in cat-controller')
    console.log(req.params.id);
    const cat = findCatById(req.params.id);
    cat.then(
        cat => {
            if (cat) {
                console.log('return cat: '+cat)
                res.json(cat);
            } else {
                res.sendStatus(404);
            }
        },
        result => {
            console.log('error in getCatById in cat-controller');
            console.log(result);
            res.sendStatus(500);
        }
    );
};

const postCat = (req, res) => {
    console.log('postCat in cat-controller')
    console.log(req.body);
    console.log(req.file); //Multerin lisäämä

    const result = addCat(req.body, req.file.filename);
    result.then(
        result => {
            if (result) {
                console.log('return cat: '+result)
                res.json(result);
            } else {
                res.sendStatus(404);
            }
        },
        result => {
            console.log('error in postCat in cat-controller');
            console.log(result);
            res.sendStatus(500);
        }
    );
};

const putCat = (req, res) => {
    //
    console.log('putCat in cat-controller')
    console.log(req.body);
    const result = modifyCat(req.body,req.params.id);
    result.then(
        result => {
            if (result) {
                console.log('return cat: '+result)
                res.json(result);
            } else {
                res.sendStatus(404);
            }
        },
        result => {
            console.log('error in putCat in cat-controller');
            console.log(result);
            res.sendStatus(500);
        }
    );
};

const deleteCat = (req, res) => {
    //
    console.log('deleteCat in cat-controller')
    let success = removeCat(req.params.id);
    success.then(
        success => {
            if (success) {
                console.log('deleteCat: deleted '+req.params.id);
                res.sendStatus(200);
            } else {
                console.log('deleteCat: cat not found');
                res.sendStatus(404);
            }
        },
        success => {
            console.log('error in deleteCat in cat-controller');
            console.log(success);
            res.sendStatus(500);
        }
    );
}

const getCatsByOwner = (req, res) => {
    console.log('getCatsByOwner in cat-controller')
    console.log(req.params.id);
    const cats = findCatsByOwner(req.params.id);
    cats.then(
        cats => {
            if (cats) {
                console.log('return cats: '+cats)
                res.json(cats);
            } else {
                res.sendStatus(404);
            }
        },
        result => {
            console.log('error in getCatsByOwner in cat-controller');
            console.log(result);
            res.sendStatus(500);
        }
    );
};


export {getCat, getCatById, postCat, putCat, deleteCat, getCatsByOwner};
