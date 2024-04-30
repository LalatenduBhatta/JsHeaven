const { model } = require("mongoose")

const studentSchema = require("../schema/student.schema")

const studentModel = model("students", studentSchema)

module.exports = studentModel;
