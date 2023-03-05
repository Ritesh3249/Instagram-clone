const router = require("express").Router()
const Auth = require("./user/auth.route")

router.use("/auth",Auth)
module.exports = router