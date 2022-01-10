const path = require( 'path' );


//{"web":{"client_id":"798018949279-hlrf9bbvn3csejj3tfg0jh3ceugjui8u.apps.googleusercontent.com","project_id":"connect-service-335016","auth_uri":"https://accounts.google.com/o/oauth2/auth","token_uri":"https://oauth2.googleapis.com/token","auth_provider_x509_cert_url":"https://www.googleapis.com/oauth2/v1/certs","client_secret":"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","redirect_uris":["http://localhost:9000/oauth2/redirect/accounts.google.com"]}}

// const passport = require('passport');
// const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
//
// // Use the GoogleStrategy within Passport.
// //   Strategies in Passport require a `verify` function, which accept
// //   credentials (in this case, an accessToken, refreshToken, and Google
// //   profile), and invoke a callback with a user object.
// passport.use(new GoogleStrategy({
//         clientID: GOOGLE_CLIENT_ID,
//         clientSecret: GOOGLE_CLIENT_SECRET,
//         callbackURL: "http://www.example.com/auth/google/callback"
//     },
//     function(accessToken, refreshToken, profile, done) {
//         User.findOrCreate({ googleId: profile.id }, function (err, user) {
//             return done(err, user);
//         });
//     }
// ));

// ignore `.scss` imports
require( 'ignore-styles' );

// transpile imports on the fly
require( '@babel/register')( {
    configFile: path.resolve( __dirname, '../babel.config.js' ),
} );

// import express server
require( './express.js' );
