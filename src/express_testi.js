'use strict';
import express from 'express';
import {someFunction} from "./app.js";


const expressApp = express(); //returns an express app
const hostname = '127.0.0.1';
const port = 3000;

//express returns 404 for all bad URL requests




//luodaan staattisten sivujen palvelin
//Polku joko absoluuttinen tai suhteessa kansioon jossa node-prosessi käynnistetään
expressApp.use("/sivusto" ,express.static('C:\\REPOSITIOT\\WebSovelluskehitysTehtavat\\js_week3_express\\public'));
expressApp.use( express.static('public'));


//tämä ajaa jutun kaikille pyynnöille. (parsii jsonin objektiksi?)
app.use(express.json());


expressApp.listen(port, hostname, () => {
    console.log('Express server listening on port ' + port   );
});  //callback called when server running

expressApp.get('/',
    (req, res) => {
    res.send('Response text');
    });

expressApp.get('/api/test1', (req, res) => {
    res.json("asdasd : 5 ");  //palauttaa jsonin jossa lukee "asdasd : 5 "
});

expressApp.get('/api/test2', (req, res) => {
    const someObject = {vastaus : "toimii"};
    res.json(someObject);  //palauttaa jsonin jossa lukee "asdasd : 5 "
});

expressApp.get('/api/test3', (req, res) => {
    let someObject = someFunction(req);
    someObject.request_count += 1;
    res.json(someObject);  //palauttaa jsonin jossa lukee "asdasd : 5 "
});

expressApp.post('/', (req, res) => {

    //sends status code 200, 404 ...
    res.sendStatus(200);
});


