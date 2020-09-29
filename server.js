const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
const port = process.env.PORT || 3000;

const router = express.Router();
const movieRoute = require('./src/routes/movie-route');
const generoRoute = require('./src/routes/genero-route');

app.use('/api/movies/', movieRoute);
app.use('/api/generos/', generoRoute);

app.listen(port, ()=>{
    console.log("server is up...on port ", port);
});