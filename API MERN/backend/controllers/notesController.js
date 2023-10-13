const asyncHandler = require("express-async-handler")
const Note = require("../models/noteModel")


const getNotes = asyncHandler(async (req, res) => {
    const notes = await Note.find({user: req.user._id});
    // finds the notes with the help of user_id
    res.json(notes);
});

const createNote = asyncHandler(async (req, res) => {
    const { title, content, category } = req.body;

    if(!title || !content || !category) {
        res.status(400);
        throw new Error("Please Fill all the Fields");
    } else {
        const note = new Note({ user : req.user._id, title, content, category });
        // req.user coming from middleware
        const createdNote = await note.save()
        // saved in the db

        res.status(201).json(createdNote)
        // we are send it to the user
    
    }
});

const getNoteById = asyncHandler(async (req, res) => {
    const note = await Note.findById(req.params.id);

    if(note) {
        res.json(note);
    }else {
        res.status(404).json({messege : "Note Not Found"});
    }

});

const updateNote = asyncHandler(async (req, res) => {
    const { title, content, category } = req.body;

    const note = await Note.findById(req.params.id);

    if(note.user.toString() !== req.user._id.toString()) {
        res.status(401);
        throw new Error("You can't perform this action")
    }

    if(note) {
        // updating only those fields which is passed by body
        note.title = title;
        note.content = content;
        note.category = category;

        const updatedNote = await note.save();
        // saving in mongodb

        res.json(updatedNote);
        // giving response back to our user that we have updated it
    }else {
        res.status(404);
        throw new Error("Note not found")
    }
});

const deleteNote = asyncHandler(async (req, res) => {
    const note = await Note.findById(req.params.id);
  
    if (note.user.toString() !== req.user._id.toString()) {
      res.status(401);
      throw new Error("You can't perform this action");
    }
  
    if (note) {
      await note.deleteOne();
      res.json({ message: "Note Removed" });
    } else {
      res.status(404);
      throw new Error("Note not Found");
    }
  });


module.exports = {getNotes, createNote, getNoteById , updateNote, deleteNote};