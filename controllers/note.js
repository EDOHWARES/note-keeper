const Note = require('../models/note');
const path = require('path');
const db = require('../utils/database');

exports.getIndex = async (req, res, next) => {
        Note
            .fetchAllNotes()
            .then((arr) => {
                const [notes, fields] = arr;
                res.render('note', {
                    notes: notes
                })
            })
            .catch(err => console.log(err));
};

exports.getCreateNote = (req, res, next) => {
    // res.sendFile(path.join(__dirname, '../', 'views', 'create-note.html'))
    res.render('create-note', {
        creating: true
    });
}

exports.getViewNote = (req, res, next) => {
    const noteId = req.params.noteId;
    Note
        .findNote(noteId)
        .then(([note, fields]) => {
            res.render('create-note', {
                creating: false,
                note: note[0]
            });
        }) 
        .catch(err => console.log(err));
}

exports.postEditNotes = (req, res, next) => {
    const noteId = req.params.noteId;
    const updatedTitle = req.body.title;
    const updatedContent = req.body.content;
    Note
        .editNote(noteId, updatedTitle, updatedContent)
        .then((result) => {
            res.redirect('/');
        })
        .catch(err => console.log(err));
}

exports.addNote = async (req, res, next) => {
        const {title, content, category} = req.body;
        const note = new Note(null, title, content, category, null);
        note
            .save()
            .then(() => {
                res.redirect('/');
            })
            .catch(err => console.log(err));

}

exports.postDeleteNote = (req, res, next) => {
    const noteId = req.params.noteId;
    Note
        .delete(noteId)
        .then(result => {
            res.redirect('/');
        })
        .catch(err => console.log(err));
}