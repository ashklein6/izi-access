
const express = require('express');
require('dotenv').config();

const app = express();
const bodyParser = require('body-parser');
const sessionMiddleware = require('./modules/session-middleware');

const passport = require('./strategies/user.strategy');

// Route includes
const userRouter = require('./routes/user.router');
const current360Router = require('./routes/current360.router');
const all360Router = require('./routes/all360.router');
const iziCategoriesRouter = require('./routes/iziCategories.router');
const allUsersRouter = require('./routes/allUsers.router');
const userControlsRouter = require('./routes/userControls.router');
const userAccessLevelRouter = require('./routes/userAccessLevel.router');
const forgotPasswordRouter = require('./routes/forgotPassword.router');
const resetPasswordRouter = require('./routes/resetPassword.router');

// Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Passport Session Configuration //
app.use(sessionMiddleware);

// start up passport sessions
app.use(passport.initialize());
app.use(passport.session());

/* Routes */
console.log('inside server.js')
app.use('/api/user', userRouter);
app.use('/current360', current360Router);
app.use('/all360', all360Router);
app.use('/iziCategories', iziCategoriesRouter);
app.use('/allUsers', allUsersRouter);
app.use('/userControls', userControlsRouter);
app.use('/userAccessLevel', userAccessLevelRouter);
app.use('/forgotPassword', forgotPasswordRouter);
app.use('/resetPassword', resetPasswordRouter);

// Serve static files
app.use(express.static('build'));

// App Set //
const PORT = process.env.PORT || 5000;

/** Listen * */
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
