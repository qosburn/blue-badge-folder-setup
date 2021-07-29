// email - store string null = false
// does email need to be unique? -- unique: true
// password - store string null = flase

module.exports = function (sequelize, DataTypes) {
  const User = sequelize.define('user', {
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  return User;
};
