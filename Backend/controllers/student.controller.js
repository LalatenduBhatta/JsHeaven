const studentModel = require("../db/model/student.model")

const postController = async (req, res) => {
    // console.log(req.body);
    let { email } = req.body
    console.log(email);
    //creating fields in mongodb(inserting data)
    let isUserAvailable = await studentModel.findOne({ email: email })
    console.log(isUserAvailable);
    if (isUserAvailable) {
        res.send({ message: "Email Address Alreday Existed" })
    }
    else {
        const student = new studentModel(req.body)
        student.save()
        res.status(201).send({ message: "Data Stored in DB" })
    }
}

const getController = async (req, res) => {
    let data = await studentModel.find()
    console.log(data);
    res.json(data)
}

const studentLoginControll = async (req, res) => {
    console.log(req.body);

    let studentDetails = await studentModel.findOne({ email: req.body.email })

    if (studentDetails) {
        // res.send(studentEmail)
        if (studentDetails.password == req.body.password) {
            let studentData = await studentModel.findOne({ email: req.body.email }).select("-password")
            res.send(studentData)
        }
        else {
            res.send({ message: "Password is incorrect!!! try again" })
        }

    } else {
        res.send({ message: "USER NOT FOUND" })
    }

}

module.exports = { postController, getController, studentLoginControll }