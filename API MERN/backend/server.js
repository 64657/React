const express = require("express");
const notes = require("./data/notes")
const dotenv = require("dotenv");
// const connectDB = require("./config/db");
const mongoose = require("mongoose");
const cors = require("cors")
const userRoutes= require('./routes/userRoutes');
const noteRoutes = require('./routes/noteRoutes')
const { errorHandler,  notFound } = require("./middlewares/errorMiddleware");
const path = require("path")

const app = express();
dotenv.config();

const DB_URL = process.env.DB_URL;

app.use(express.json());



app.use(cors());

mongoose
  .connect(DB_URL, {})
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log("Could not connect to MongoDB", err));

app.get("/", (req,res) => {
    res.send("API is running");
})

// app.get("/api/notes", (req,res) => {
//     res.json(notes);
    
// } );

// app.get("/api/notes/:id", (req,res) => {
//     const note = notes.find((n) => n._id === req.params.id);
//     // console.log(req.params)
//     res.send(note);
// })


app.use('/api/users', userRoutes);
app.use("/api/notes", noteRoutes);

// deployment
const _dirname1 = path.resolve();
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "dist")))

  app.get('*', (res, req) => {
    res.sendFile(path.resolve(__dirname, "dist", "index.html"))
  })
} else {
  app.get("/", (req,res) => {
    res.send("API is running");
})
}

app.use(notFound);
app.use(errorHandler)

const PORT = process.env.PORT || 3001
app.listen(PORT, console.log(`Server started on PORT ${PORT}`))