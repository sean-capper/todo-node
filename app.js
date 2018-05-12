const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const expressValidator = require('express-validator');
const mongojs = require('mongojs');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const flash = require('connect-flash');
const routes = require('./router');

let app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.set('port', process.env.PORT || 8000);

// global vars
app.use((req, res, next) => {
    res.locals.error = '';
    next();
});

let secret = process.env.SECRET || '__secret__';
app.use(cookieParser(secret));
app.use(session({ secret: secret, resave: false, saveUninitialized: false, cookie: 60000 }));
app.use(flash());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, 'public')));

app.use(expressValidator());

app.use(routes);

app.listen(app.get('port'), () => {
    console.log(`server listening on port ${app.get('port')}`);
});

module.exports = app;