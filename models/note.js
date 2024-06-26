const db = require('../utils/database');

module.exports = class Note {
    constructor(id, title, content, created_at) {
        this.id = id;
        this.title = title;
        this.content = content;
        this.created_at = created_at;
    }

    static fetchAllNotes () {
        return db.execute('SELECT * FROM notes');
    };

    static findNote (id) {
        return db.execute(`SELECT * FROM notes WHERE id = ${id}`)
    };

    static editNote (id, title, content) {
        return db.execute(`UPDATE notes SET title =?, content=? WHERE id=?`,
            [title, content, id]
        )
    }

    save () {
        return db.execute('INSERT INTO notes (title, content) VALUES (?, ?) ',
            [this.title, this.content]
        )
    };


}