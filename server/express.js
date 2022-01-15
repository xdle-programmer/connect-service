const express = require('express');
const fs = require('fs');
const path = require('path');
const React = require('react');
const ReactDOMServer = require('react-dom/server');
const { StaticRouter } = require('react-router-dom');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const jwt = require('jsonwebtoken');
const session = require('express-session');
const bodyParser = require('body-parser');
const errorHandler = require('../utilites/errorHandler/errorHandler').default;
const User = require('../models/user/User').default;
const App = require('../src/provider/Provider.jsx').default;
const dotenv = require('dotenv');

dotenv.config();
console.log(process.env.TOKEN_SECRET);

function generateAccessToken(username) {
    return jwt.sign(username, process.env.TOKEN_SECRET, { expiresIn: '1800s' });
}

function authenticateToken(req, res, next) {
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]

    if (token == null) return res.sendStatus(401)

    jwt.verify(token, process.env.TOKEN_SECRET, (err, user) => {
        console.log("JWT_____")
        console.log(err)

        if (err) return res.sendStatus(403)

        console.log(user)
        req.user = user
        console.log("_____JWT")
        next()
    })
}

passport.serializeUser((user, done) => {
    done(null, user);
});
passport.deserializeUser((user, done) => {
    done(null, user);
});
passport.use(new GoogleStrategy(
    {
        clientID: '798018949279-hlrf9bbvn3csejj3tfg0jh3ceugjui8u.apps.googleusercontent.com',
        clientSecret: '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',
        callbackURL: 'http://localhost:9000/oauth2/redirect/accounts.google.com',
    },
    ((accessToken, refreshToken, profile, cb) => {
        console.log('CREATE USER');
        console.log(accessToken);
        console.log(refreshToken);
        console.log(profile);
        console.log('_----_');
        console.log(cb);
        console.log('_----_');

        const user = {
            id: 1,
            name: 'ART',
        };
        cb(null, user);
    }),
));


// create express application
const app = express();

User.manualLogin('TestMai895234733','2222333').then(res=>{
    console.log(res);
})


app.use(session({ secret: 'cats' }));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(passport.initialize());
app.use(passport.session());


// serve static assets
app.get(/\.(js|css|map|ico)$/, express.static(path.resolve(__dirname, '../dist')));

app.get('/login/test', (req,res) => {
    const token = generateAccessToken({ username: "Vasya" });
    res.json(token);
});

app.get('/login/test3', authenticateToken, (req,res) => {
    res.json("AAAAAAAA");
});

app.get(
    '/login/google',
    passport.authenticate('google', { scope: ['profile'] }),
);

app.get(
    '/oauth2/redirect/accounts.google.com',
    passport.authenticate('google', {
        failureRedirect: '/login',
        failureMessage: true,
    }),
    (req, res) => {
        console.log('RES REDIRECT ___________________________');
        console.log(req.user);
        console.log(' ___________________________ RES REDIRECT');

        res.user = req.user;
        res.redirect('/');
    },
);

// for any other requests, send `index.html` as a response
app.use('*', async (req, res) => {
    console.log('USE______');
    console.log(req.user);
    console.log('_____USE');
    // console.log(res)
    // get matched route
    // const matchRoute = routes.find((route) => matchPath(req.originalUrl, route));

    // fetch data of the matched component
    const componentData = {};

    componentData.user = req.user;
    const userTest = req.user;
    console.log('userTest');
    console.log(userTest);

    // read `index.html` file
    let indexHTML = fs.readFileSync(path.resolve(__dirname, '../dist/index.html'), {
        encoding: 'utf8',
    });

    // get HTML string from the `App` component
    const appHTML = ReactDOMServer.renderToString(
        // eslint-disable-next-line react/jsx-filename-extension
        <StaticRouter location={req.originalUrl} context={componentData}>
            <App user={userTest} />
        </StaticRouter>,
    );

    // populate `#app` element with `appHTML`
    indexHTML = indexHTML.replace('<div id="app"></div>', `<div id="app">${appHTML}</div>`);

    // set value of `initial_state` global variable
    indexHTML = indexHTML.replace(
        'var initial_state = null;',
        `var initial_state = ${JSON.stringify(componentData)};`,
    );

    // set header and status
    res.contentType('text/html');
    res.status(200);

    console.log('CD');
    console.log(componentData);

    return res.send(indexHTML);
});

// run express server on port 9000
app.listen('9000', () => {
    console.log('Express server started at http://localhost:9000');
});
