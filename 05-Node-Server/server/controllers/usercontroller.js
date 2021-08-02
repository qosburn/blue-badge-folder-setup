// let express = require('express');
// let router = express.Router();
// let sequelize = require('../db');
// let User = sequelize.import('../models/user.js');

const { use } = require('./journalcontroller');
const router = require('express').Router();
const User = require('../db').import('../models/user');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

// this is from 4:02 token
router.post('/create', function (req, res) {
  User.create({
    email: req.body.user.email,
    password: bcrypt.hashSync(req.body.user.password, 13),
  })
    .then(function createSuccess(user) {
      let token = jwt.sign(
        { id: user.id, email: user.email },
        process.env.JWT_SECRET,
        {
          expiresIn: 60 * 60 * 24,
        }
      );
      res.json({
        user: user,
        message: 'User successfully created',
        sessionToken: token,
      });
    })
    .catch(function (err) {
      res.status(500).json({ error: err });
    });
});

// this is taken form the module 9.2.4 -- note no video beleve that it was covered in video on mod 9.2.3
//this commented out because video on 9.2.5 is not using it this way
// router.post('/create', function (req, res) {
//   User.create({
//     email: req.body.user.email,
//     password: req.body.user.password,
//   })
//   .then(res.send('This is our user/create endpoint'));
// });

/* *******************
 *** User Signin ****
 **********************/
// code vid - 7:24
// router.post('/login', function (req, res) {
//   User.findOne({ where: { email: 'thiscworks@eww.com' } }).then(function (
//     user
//   ) {
//     res.json({ user: user });
//   });
// });

// code vid - 7:24
// router.post('/login', function (req, res) {
//   User.findOne({ where: { email: 'thiscworks@eww.com' } }).then(
//     function loginSuccess(user) {
//       if (user) {
//         res.status(200).json({ user: user });
//       } else {
//         res.send('User not found');
//       }
//     }
//   );
// });

// router.post('/login', function (req, res) {
//   User.findOne({ where: { email: req.body.user.email } })
//     .then(function loginSuccess(user) {
//       if (user) {
//         res.status(200).json({ user: user });
//       } else {
//         res.send('User not found');
//       }
//     })
//     .catch(function (err) {
//       res.status(500).json({ error: err });
//     });
// });

router.post('/login', function (req, res) {
  User.findOne({ where: { email: req.body.user.email } })
    .then(function loginSuccess(user) {
      if (user) {
        bcrypt.compare(
          req.body.user.password,
          user.password,
          function (err, matches) {
            if (matches) {
              let token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
                expiresIn: 60 * 60 * 24,
              });
              res.status(200).json({
                user: user,
                message: 'User successfully logged in!',
                sessionToken: token,
              });
            } else {
              res.status(502).send({ error: 'Login Failed' });
            }
          }
        );
      } else {
        res.status(500).json({ error: 'User does not exist.' });
      }
    })
    .catch((err) => res.status(500).json({ error: err }));
});

module.exports = router;
