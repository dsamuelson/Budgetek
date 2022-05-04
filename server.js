// import necessary modules to effectively run the server

const path = require('path');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');

// set up the app and deployment port

const app = express();
const PORT = process.env.PORT || 3001;

//start a sequelize connection and session storing

const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

//configuring the session keys

const sess = {
    secret: 'trytoguessthis',
    cookie: {},
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore({
        db: sequelize
    })
};

// telling the server to use the session

app.use(session(sess));

//importing helpers for formatting purposes

//const helpers = require('./utils/helpers');

// creating a handlebars instance and feeding in the helpers to use in templates

const hbs = exphbs.create();

// telling the app to use handlebars as the templating/response engine

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

// setting up app to understand and direct traffic properly

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname,'public')));

// setting up app to look for routes in designated directory

app.use(require('./controllers/'));

//starting the sequelize session, applying any changes and start listening for traffic

sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log('Now Listening'));
});