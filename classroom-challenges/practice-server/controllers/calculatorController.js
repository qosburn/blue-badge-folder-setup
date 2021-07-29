let router = require('express').Router();

router.post('/add', function (req, res) {
  let number1 = req.body.num1;
  let number2 = req.body.num2;
  //const number1 = parseInt(req.body.num1) -- another way of converting a string
  //let total = number1 + number2;
  let total = Number(number1) + +number2; // this is two ways of converting a string to an intger
  res.json({ total: total });
  //   let response = { message: 'This is a test' };
  //   res.json(response);
  // res.send('It worked'); just for testing
});

module.exports = router;
