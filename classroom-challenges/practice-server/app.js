let express = require('express');
const nodemon = require('nodemon');
let app = express();
// req an res request and response NOTE that you can be specific on the app.post /app.delete
app.use('/test', function (req, res) {
  let response = { message: 'This is a test' };
  res.json(response);
});
app.listen(3001, function () {
  console.log('app is listening on port 3001');
});
