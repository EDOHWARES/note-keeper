const path = require('path');
const db = require('../utils/database');

exports.getIndex = async (req, res, next) => {
    try {
        const [rows, fields] = await db.query('SELECT * FROM notes');
        console.log(rows)
        res.render('note', {
            notes: rows
        })
    } catch (error) {
        console.log(error)
    }
};

exports.getCreateNote = (req, res, next) => {
    res.sendFile(path.join(__dirname, '../', 'views', 'create-note.html'))
}