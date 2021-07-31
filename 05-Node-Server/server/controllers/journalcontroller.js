let express = require('express');
let router = express.Router();
let validateSession = require('../middleware/validate-session');

router.get('/practice', validateSession, function (req, res) {
  res.send('This is a practice routes!');
});

module.exports = router;
