let express = require('express');
const nodemon = require('nodemon');
let app = express();
var testController = require('./controllers/testcontroller');
var calculatorController = require('./controllers/calculatorController');
// req an res request and response NOTE that you can be specific on the app.post /app.delete
app.use(express.json());

app.use('/test', testController);
app.use('/calculator', calculatorController);

app.listen(3000, function () {
  console.log('app is listening on port 3000');
});
