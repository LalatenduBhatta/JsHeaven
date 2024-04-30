const express = require("express")

const PORT = 7777
const hostname = "127.0.0.7"
const app = express()
//db
const dbConnect = require("./db/db")

//cors
const cors = require("cors")
app.use(cors())

//routing files
const studentRoute = require("./routers/student.router")

//middleware
app.use(express.json())

//route
app.use("/student", studentRoute)




//server listening
app.listen(PORT, hostname, async () => {
    await dbConnect()
    console.log(`server started at http://${hostname}:${PORT}`)
})