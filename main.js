const express = require('express');
const layouts = require('express-ejs-layouts');
const home_controller = require('./controllers/home_controller');
const myydaan_controller = require('./controllers/myydaan_controller');
const ostetaan_controller = require('./controllers/ostetaan_controller');
const saannot_controller = require('./controllers/saannot_controller');
const kirjaudu_controller = require('./controllers/kirjaudu_controller');

const app = express();

app.set('port', process.env.PORT || 3000);
app.set('view engine', 'ejs'); 


app.use(express.static('public'));
app.use(express.static('views'))
app.use(express.static('models'))

app.use(express.urlencoded({
    extended: false
}));

app.use(express.json());
app.use(layouts);


app.get('/', home_controller.respondWithName);

app.post('/', (req, res) => {
    console.log(req.body);
    console.log(req.query);
    console.log('POST succesful');

});
app.get('/', myydaan_controller.respondWithMyydaan);

app.post('/', (req, res) => {
    console.log(req.body);
    console.log(req.query);
    console.log('POST succesful');
});

app.get('/', ostetaan_controller.respondWithOstetaan);

app.post('/', (req, res) => {
    console.log(req.body);
    console.log(req.query);
    console.log('POST succesful');
});

app.get('/', saannot_controller.respondWithSaannot);

app.post('/', (req, res) => {
    console.log(req.body);
    console.log(req.query);
    console.log('POST succesful');
});


app.get('/', kirjaudu_controller.respondWithKirjaudu);

app.post('/', (req, res) => {
    console.log(req.body);
    console.log(req.query);
    console.log('POST succesful');
});

app.listen(app.get('port'),() => {
   console.log(`Server is running at the port ${app.get('port')}`);
});