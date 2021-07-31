require('dotenv').config();
let express = require('express');
let app = express();
const sequelize = require('./db');
let journal = require('./controllers/journalcontroller');
let user = require('./controllers/usercontroller');

sequelize.sync();
//sequelize.sync({force: true});

app.use(express.json());
///Exposed route
app.use('/user', user);

//Protected route

app.use('/journal', journal);

// sequelize.sync({ force: true });

app.listen(3000, function () {
  console.log('App is listening on port 3000');
});
