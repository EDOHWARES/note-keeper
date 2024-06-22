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
    res.sendFile(path.join(__dirname, '../', 'views', 'create-note.html'))
}

exports.addNote = async (req, res, next) => {
        const title = req.body.title;
        const content = req.body.content;
        const note = new Note(null, title, content, null);
        note
            .save()
            .then(() => {
                res.redirect('/');
            })
            .catch(err => console.log(err));

}