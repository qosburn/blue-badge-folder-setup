const Sequelize = require('sequelize');

// Option 2: Passing parameters separately (other dialects)
const sequelize = new Sequelize('journal-walkthrough', 'postgres', 'password', {
  host: 'localhost',
  dialect: 'postgres',
});

// try {
//   await sequelize.authenticate();
//   console.log('Connection has been established successfully.');
// } catch (error) {
//   console.error('Unable to connect to the database:', error);
// }
sequelize.authenticate().then(
  function () {
    console.log('Connection has been estabished succesfully.');
  },
  function (err) {
    console.log(err);
  }
);

// sequelize
//   .authenticate()
//   .then(() => {
//     console.log('Connection has been estabished succesfully.');
//   })
//   .catch((err) => {
//     console.log('unable to connect to the database.', err);
//   });

module.exports = sequelize;
