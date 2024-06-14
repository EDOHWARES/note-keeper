const path = require('path');
const express = require('express');
const app = express();
const noteRoute = require('./routers/note');

app.use(noteRoute);
app.use(express.static(path.join(__dirname, 'public')));

app.use((req, res, next) => {
    res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
});
app.listen(3000)