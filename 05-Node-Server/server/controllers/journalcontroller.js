let express = require('express');
let router = express.Router();

router.get('/practice', function (req, res) {
  res.send('This is a practice routes!');
});

module.exports = router;
