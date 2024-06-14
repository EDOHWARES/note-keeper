const path = require('path');

exports.getIndex = (req, res, next) => {
    res.sendFile(path.join(__dirname, '../', 'views', 'note.html'));
};