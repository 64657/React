
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

require("dotenv").config();

const Mentor = require("./models/Mentor");
const Student = require("./models/Student");

const app = express();

const PORT = 3001;
const DB_URL = "mongodb+srv://fasee:fasee1998@cluster0.y7puo7y.mongodb.net/?retryWrites=true&w=majority&appName=AtlasApp"

app.use(bodyParser.json());


mongoose
.connect(DB_URL, {})
.then(() => console.log("Connected to MongoDB"))
.catch((err) =>console.log("Could not connect to  MongoDB", err));


app.post("/mentor", async (req, res) => {
    try {
        const mentor = new Mentor(req.body);
        await mentor.save();
        res.send(mentor);
    } catch (error) {
        res.sendStatus(400).send(error);
    }
})

app.post("/student", async (req, res) => {
    try {
        const student = new Student(req.body);
        await student.save();
        res.send(student);
    } catch (error) {
        res.sendStatus(400).send(error);
    }
})

app.post("/mentor/:mentorId/assign", async (req, res) => {
    try{
        const mentor = await Mentor.findById(req.params.mentorId);

        // Student.find() is a method provided by the Student model (assuming there is
        //  a Student model in the application). It is used to query the database 
        //  and retrieve documents that match the specified conditions.
        const students = await Student.find({_id:{$in: req.body.students}});
        // _id refers to the unique identifier field in the Student documents.
        // $in is an operator in MongoDB that checks if a field's
        //  value matches any of the values in the given array. 
        //  In this case, it is used to find students whose _id matches any
        //   of the values in req.body.students array.
        students.forEach((student) => {
            student.cMentor = mentor._id;
            student.save();
        });
        mentor.students =  [
            ...mentor.students,
            ...students.map((student) => student._id),
        ];
        await mentor.save();
        res.send(mentor);
    } catch (error) {
        res.status(400).send(error);
    }
})


app.listen(PORT, () => {
    console.log("Server is running on PORT:", PORT)
})