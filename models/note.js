const db = require('../utils/database');

module.exports = class Note {
    constructor(id, title, content, user_id, created_at, updated_at) {
        this.id = id;
        this.title = title;
        this.content = content;
        this.user_id = user_id;
        this.created_at = created_at;
        this.updated_at = updated_at;
    }

    save () {
        db.execute('INSERT INTO notes (title, content) ')
    }


}