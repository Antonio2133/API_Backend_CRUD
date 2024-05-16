const { getAll, createUser, getOne, removeUser, updateUser } = require('../controllers/user.controllers');
const express = require('express');

const userRouter = express.Router();

userRouter.route("/users")
		.get(getAll)
		.post(createUser);

userRouter.route("/users/:id")
		.get(getOne)
		.delete(removeUser)
		.patch(updateUser);

module.exports = userRouter;