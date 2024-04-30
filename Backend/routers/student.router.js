const express = require("express")

const studentRoute = express.Router()

const { postController, getController, studentLoginControll } = require("../controllers/student.controller")

studentRoute.post("/", postController)

studentRoute.post("/login", studentLoginControll)

studentRoute.get("/", getController)

studentRoute.delete("/",)
studentRoute.put("/",)


module.exports = studentRoute;