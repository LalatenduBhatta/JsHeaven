const mongoose = require("mongoose")

async function dbConnect() {
    try {
        await mongoose.connect("mongodb://127.0.0.1:27017/JSHEAVEN")
        console.log("DATABASE SUCESSFULLY CONNECTED")
    } catch (error) {
        console.log("DATABASE CONNECTION FAILED", error)
    }
}

module.exports = dbConnect;