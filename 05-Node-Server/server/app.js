require('dotenv').config;
let express = require('express');
let app = express();
const sequelize = require('./db');

let user = require('./controllers/usercontroller');
let journal = require('./controllers/journalcontroller');

sequelize.sync();
//sequelize.sync({force: true});

// adding call for Middleware
app.use(require('./middleware/headers'));

app.use(express.json());

app.use('/user', user);

app.use('/journal', journal);

app.listen(3000, function () {
  //sequelize.sync({ force: true });
  console.log('App is listening on port 3000');
});

//*PROTECTED ROUTE to implement our middleware function
// app.use(require('./middleware/validate-session'))
//Import the validate-session middleware, which checks to see if the incoming request has a token. Anything beneath this line requires a token to access, making it protected. Anything above remains unprotected
//*HOWEVER
//we want a few routes in the journalcontroller exposed to all users, so that people can see other people's journal posts!
//so, we shouldn't use this, because we dont want everything in /journal to be protected
