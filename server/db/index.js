const Sequelize = require("sequelize");
// const UserModel = require("../models/User");

const db = new Sequelize("login", null, null, {
  host: "localhost",
  dialect: "postgres",
  logging: false,
});

// const User = UserModel(db);

module.exports = db;
