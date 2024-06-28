const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors());

app.use(bodyParser.urlencoded({extended: false}));

app.set('view engine', 'pug');
app.set('views', 'views');

const noteRoute = require('./routers/note');
const db = require('./utils/database');

app.use(noteRoute);
app.use(express.static(path.join(__dirname, 'public')));

app.use((req, res, next) => {
    res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
  });