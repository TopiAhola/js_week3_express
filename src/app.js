import express from 'express';
import cors from 'cors';


const hostname = '127.0.0.1';
const port = 3000;
const app = express();


// nimeää routerin api:ksi
import api from './api/index.js';


/*
//Assignment 6 cors
const corsOptions = {
    origin: [
        'https://api.mapbox.com/mapbox-gl-js/v2.5.1/mapbox-gl.css',
        "https://cdnjs.cloudflare.com/ajax/libs/luxon/2.0.2/luxon.min.js",
    ]
}
const corsWithOptions = cors(corsOptions);
app.use(corsWithOptions);

*/


app.use(cors());

// Web sivusto tarjoillaan public-kansiosta
//app.use('/sivusto', express.static('public')); // aliosoite /sivusto
// tai palvelimen juuri /
app.use(express.static('public'));

// parsii json-datan http-pyynnöstä  ?
app.use(express.json());

//formdataa varten... ?
app.use(express.urlencoded({extended: true}));

//lisää prefixin ohjaa api routerin sisällä oleville routeille ?
app.use('/api/v1', api);

// kuva: http://localhost:3000/public/myimage.jpg
app.use('/public', express.static('public'));


//////////////////////

// http://localhost:3000/api/v1/ -polun juuri
app.use('/api/v1', (req, res) => {
    res.send('/api/v1 polun juuri');
});


app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});


export default app;
