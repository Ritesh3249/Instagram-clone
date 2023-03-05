const router = require("express").Router()
const AuthenticateUser = require("../../controllers/user/auth.controller")

router.post("/register",AuthenticateUser.register)
router.post("/login",AuthenticateUser.login)


module.exports =router

