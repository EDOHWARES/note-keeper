const db = require('../utils/database');

module.exports = class Note {
    constructor(id, title, content, category, created_at) {
        this.id = id;
        this.title = title;
        this.content = content;
        this.category = category;
        this.created_at = created_at;
    }

    static fetchNoteByCategory (category) {
        return db.execute('SELECT * FROM notes WHERE category=?', 
            [category]
        )
    };

    static fetchAllNotes () {
        return db.execute('SELECT * FROM notes');
    };

    static findNote (id) {
        return db.execute(`SELECT * FROM notes WHERE id = ${id}`)
    };

    static editNote (id, title, content, category) {
        return db.execute(`UPDATE notes SET title =?, content=?, category=? WHERE id=?`,
            [title, content, category, id]
        )
    }

    static delete (id) {
        return db.execute(`DELETE FROM notes WHERE id=?`, 
        [id])
    }

    save () {
        return db.execute('INSERT INTO notes (title, content, category) VALUES (?, ?, ?) ',
            [this.title, this.content, this.category]
        )
    };


}