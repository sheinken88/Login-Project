const Sequelize = require("sequelize");
const db = require("../db/index");
const bcrypt = require("bcrypt");

class User extends Sequelize.Model {
  validatePassword = (password, salt) => {
    //esta bien el salt como argumento??
    return bcrypt.hash(password, salt).then((hash) => hash === password);
  };
}

User.init(
  {
    name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    lastName: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    age: { type: Sequelize.INTEGER, allowNull: false },
    nationality: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    email: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
        isEmail: true,
      },
    },
    password: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    userName: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    salt: { type: Sequelize.STRING },
  },
  { sequelize: db, modelName: "user" }
);

User.beforeCreate((user) => {
  const salt = bcrypt.genSaltSync();
  user.salt = salt;

  return bcrypt.hash(user.password, user.salt).then((hash) => {
    user.password = hash;
  });
});

module.exports = User;
