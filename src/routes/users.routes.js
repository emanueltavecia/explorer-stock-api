const { Router } = require("express");
const UsersController = require("../controllers/UsersController");
const UserValidateController = require("../controllers/UserValidateController");
const ensureAuthenticated = require("../middlewares/ensureAuthenticated");

const usersRoutes = Router();

const usersController = new UsersController();
const userValidateController = new UserValidateController();

usersRoutes.post("/", usersController.create);
usersRoutes.get('/validate', ensureAuthenticated, userValidateController.index)

module.exports = usersRoutes;