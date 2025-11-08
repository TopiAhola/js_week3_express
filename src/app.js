import express from 'express';
const hostname = '127.0.0.1';
const port = 3000;
const app = express();


// nimeää routerin api:ksi
import api from './api/index.js';

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

//Assignment1 10.
// kuva: http://localhost:3000/public/myimage.jpg
app.use('/public', express.static('public'));


//////////////////////

// '/api'-polun juuri
app.get('/api/v1', (req, res) => {
  res.send('/api/v1 polun juuri');
});

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});


//middleware esimerkki  http://localhost:3000/example/middleware
app.get('/example/middleware',
    (req, res, next) => {
        console.log('ennen middlewarea ajaa');
        next();
    },
    (req, res, next) => {
        console.log('middleware ajaa');
        next();
    },
    (req, res) => { //no next...
        console.log('middleware ajettu');
        res.send("Middleware ajettu");
    }

    );


export default app;
