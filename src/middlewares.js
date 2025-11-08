'use strict';


import sharp from 'sharp';

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

export { createThumbnail };
