var fs = require('fs')
const uuidv1 = require('uuidv1')

class Storage{

getNotes(){
    var notetake = fs.readFileSync('./db/db.json','utf8')
    var jsonnotetake = JSON.parse(notetake)
    console.log('jsonnotetake',jsonnotetake)
    return jsonnotetake
};

addNote(note){
    var notetake = fs.readFileSync('./db/db.json','utf8')
    var jsonnotetake = JSON.parse(notetake)
    var {title,text} = note
    var addNote = {title,text,id:uuidv1()}
    var notes = [...jsonnotetake,addNote]
    var stringnotes = JSON.stringify(notes)
    fs.writeFileSync('./db/db.json',stringnotes)
    console.log(notes)
};
deleteNote(id){
    var notetake = fs.readFileSync('./db/db.json','utf8')
    var jsonnotetake = JSON.parse(notetake)
    var updatedNotes = jsonnotetake.filter((note)=> note.id!==id)
    var stringnotes = JSON.stringify(updatedNotes)
    fs.writeFileSync('./db/db.json',stringnotes)
}

}

module.exports = new Storage();