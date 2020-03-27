const userModel = require('../models/users.model.server')

const findAllUsers = () =>
    userModel.find()

const createUser = (user) => {
    return userModel.create(user)
}
const deleteUser = (userId) => {}

const findUserByCredentials = (username, password) =>
    userModel.findOne({
        username: username,
        password: password
    })

module.exports = {
    findAllUsers,
    createUser,
    deleteUser,
    findUserByCredentials
}
