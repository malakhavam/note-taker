// Dependencies
const express = require('express');
const path = require("path");
const fs = require('fs');
const notestore = require('./db/notestore.js')

// Setup database
let db = require('./db/db.json');

// Setup PORT
const app = express();
const PORT = process.env.PORT || 3000;

// Setting up middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public")) 

// Setting the routes

// HTML routes main page
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '/public/index.html'));
  });
  
// HTML routes notes page
app.get('/notes', function(req, res) {
    res.sendFile(path.join(__dirname, '/public/notes.html'));
  });

// Return all saved notes
  app.get(`/api/notes`, (req, res) => {
    var notetake = notestore.getNotes()
    res.json(notetake);
});

// Create a new note
app.post('/api/notes', (req, res) => {
    var addNote = req.body;
console.log(addNote);
notestore.addNote(addNote)
    res.json(addNote);
    
});

// Delete note

app.delete("/api/notes/:id",function(req,res){
    notestore.deleteNote(req.params.id);
    res.json({ok:true})
  })

// Starting the server
app.listen(PORT, () => {
    console.log(`Now listening on port ${PORT}!`);
});