'use strict';


import sharp from 'sharp';
import jwt from 'jsonwebtoken';
import 'dotenv/config';
/*
import dotenv from 'dotenv';
dotenv.config({ path: './.env' });*/


const createThumbnail = async (req, res, next) => {
    if (!req.file) {
        next();
        return;
    }
    console.log(req.file.path);
    // TODO: use file path to create 160x160 png thumbnail with sharp
    const inputName = req.file.filename;
    const outputpath = './uploads/'+inputName+'_thumb';

    //add path to request
    req.file.thumbnailPath = outputpath;
    console.log('request modified by middleware: ');
    console.log(req.body);

    //function sharp(sharp.SharpInput, sharp.SharpOptions)
    await sharp(req.file.path)
        .resize(160, 160)
        .toFile(outputpath)
        .then(
            (output) => {
                console.log('thumbnail created');
                console.log(output);
            },
            (err) => {
                console.log('error resizing image');
                console.log(err);
            }
        );

    next();
};

const authenticateToken = (req, res, next) => {
    console.log('authenticateToken', req.headers);
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    console.log('token', token);
    if (token == null) {
        console.log('token is null in authenticateToken');
        return res.sendStatus(401);
    }

    try {
        res.locals.user = jwt.verify(token, process.env.JWT_SECRET);
        console.log('added:');
        console.log(res.locals.user);
        next();

    } catch (err) {
        res.status(403).send({message: 'invalid token'});
    }
};

export { createThumbnail, authenticateToken };
