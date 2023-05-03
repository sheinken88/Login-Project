const express = require("express");
// const User = require("../models/User");
const router = express.Router();
const { authController, userController } = require("../controllers/");
const authMiddleware = require("../middlewares/authMiddleware");

router.post("/signup", authController.registerUser);
router.post("/login", authController.loginUser);

// Todas las rutas siguientes van a requerir autorización
router.use(authMiddleware);

router.get("/me", userController.getUserInfo);
router.get("/all-nationality", userController.getUsersByNationality);
router.get("/all-age/:inputAge", userController.getUsersByAge);

module.exports = router;
