const path = require('path');
const express = require('express');
const app = express();

app.set('view engine', 'pug');
app.set('viewss', 'views');

const noteRoute = require('./routers/note');
const db = require('./utils/database');

app.use(noteRoute);
app.use(express.static(path.join(__dirname, 'public')));

// db.execute('SELECT * FROM notes')
//     .then(result => {
//         console.log(result[0])
//     })
//     .catch(err => console.log(err));

app.use((req, res, next) => {
    res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
});
app.listen(3000)