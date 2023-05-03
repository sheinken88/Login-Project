const User = require("../models/User");
const { Op } = require("sequelize");

const getUserInfo = (req, res) => {
  // caputar los campos del req.user que se decodean en authMiddleware
  const { id } = req.user;

  User.findOne({ where: { id } })
    .then((user) => {
      res.status(200).json(user);
    })
    .catch((error) =>
      res.status(500).json({ error: "Error al buscar usuarios por email" })
    );
};

const getUsersByNationality = (req, res) => {
  // caputar los campos del req.user que se decodean en authMiddleware
  const { nationality } = req.user;

  User.findAll({ where: { nationality } })
    .then((users) => {
      res.status(200).json(users);
    })
    .catch((error) =>
      res
        .status(500)
        .json({ error: "Error al buscar usuarios por nacionalidad" })
    );
};

const getUsersByAge = (req, res) => {
  // caputar los campos del req.user que se decodean en authMiddleware
  const inputAge = Number(req.params.inputAge);

  // Validar si inputAge es un número
  if (isNaN(inputAge)) {
    return res.status(400).json({ error: "La edad ingresada no es válida" });
  }

  User.findAll({ where: { age: { [Op.gt]: inputAge } } })
    .then((users) => {
      res.status(200).json(users);
    })
    .catch((error) =>
      res.status(500).json({ error: "Error al buscar usuarios por edad" })
    );
};

module.exports = { getUserInfo, getUsersByNationality, getUsersByAge };
