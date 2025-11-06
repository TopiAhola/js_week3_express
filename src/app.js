import express from 'express';
const hostname = '127.0.0.1';
const port = 3000;
const app = express();



// ???
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
  res.send('Welcome to my REST API!');
});

app.get('/api/test', (request, response) => {
  const responseData = {vastaus: 'toimii myös näin'};
  response.send(responseData);
});

/* poistetaan ??

// Cats endpoints
app.get('/api/v1/cats', (req, res) => {
  res.json(cats);
});
*/

app.get('/api/v1/cats/:id', (req, res) => {
  //console.log('cat id', req.params.id);
  const cat = cats.find(cat => cat.cat_id === parseInt(req.params.id));
  if (cat) {
    res.json(cat);
  } else {
    //res.sendStatus(404);
    res.status(404).json({message: 'cat not found'});
  }
});

app.post('/api/v1/cats', (req, res) => {
  console.log(req.body);
  // TODO: add posted cat to data
  res.sendStatus(201);
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
    },



    );





export default app;
