const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose")

const app = express();
const PORT = 3000;
const DB_URL ="mongodb://0.0.0.0:27017/test";

app.use(bodyParser.json());

const bookschema = new mongoose.Schema({
    bodyId: Number,
    title: String,
    author: String,
    publishedDate: Date,
})
const Book = mongoose.model("Book", bookschema);

mongoose
.connect(DB_URL, {})
.then(() => console.log("Connected to MongoDB"))
.catch((err) => console.log("Could not connect to MongoDB", err));


app.post("/book",async (req, res) => {
    const book = new Book(req.body);
    try {
        const savedBook = await book.save();
        res.status(201).send(savedBook);
    } catch (err) {
        res.status(400).send(err.messege)
    }
})

app.get("/books", async (req, res)  => {
    try {
        const books = await Book.find();
        res.status(201).send(books);
    } catch (err) {
        res.status(400).send(err.messege);
    }
});

app.get("/books/:id", async (req, res) => {
    try{
        const books = await Book.findById(req.params.id);
        if (book){
        res.status(201).send(books);
    } else {
        res.status(404).send("Book not found!!")
    }
    } catch (err) {
        res.status(400).send(err.messege);
    }
})

app.put("/book/:id", async (req, res) => {
    try {
        const book = await Book.findByIdAndUpdate(req.params.id, req.body, {
           new: true, 
        })
        if (book){
            res.status(201).send(books);
        } else {
            res.status(404).send("Book not found!!")
        }
        } catch (err) {
            res.status(400).send(err.messege);
        }
})

app.delete("/books/:id", async (req, res) => {
    try{
        const books = await Book.findByIdAndDelete(req.params.id);
        if (book){
        res.status(201).send(books);
    } else {
        res.status(404).send("Book not found!!")
    }
    } catch (err) {
        res.status(400).send(err.messege);
    }
})


app.get("/", (req, res) => {
    res.status(200).send("Hi, hello!! welcome");
  });

  

  app.listen(PORT, () => {
    console.log("Server is running on port", PORT);
  });

