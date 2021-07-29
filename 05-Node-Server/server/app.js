let express = require('express');
let app = express();
const sequelize = require('./db');
let journal = require('./controllers/journalcontroller');
let user = require('./controllers/usercontroller');

// .js is not needed. when calling "require" - the assumpton is that it is a js file. reminder req and res request and response -- always has two peramiters can be get,push
// app.use('/test', function (req, res) {
//   res.send('this is a test route');
// });
// app.use('/myname', function (req, res) {
//   res.send('myName is qco');
// });
// have endpoint of journal/practice - send a response from that endpoint (This is a practice route)cthis works but not the cleanest code
//app.use('/journal', require('./controllers/journalcontroller'));
//cleaner code throws the address into a variable then call the variable
app.use(express.json());
app.use('/journal', journal);
app.use('/user', user);

sequelize.sync();
// sequelize.sync({ force: true });

app.listen(3000, function () {
  console.log('App is listening on port 3000');
});
