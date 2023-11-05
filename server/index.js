const express = require('express');
const mongoose = require('mongoose');
const app = express();
const path = require('path')
const bodyParser = require('body-parser');
const dotenv = require('dotenv').config();

const notes = require('./routes/notes')
const auth = require('./routes/auth')
const passport = require('./config/passport')

const PORT = 8080;

passport();

mongoose.set('strictQuery', true);
mongoose.connect(`${process.env.DATABASE_URL}`);
const database = mongoose.connection;

database.on('error', (error) => {
    console.log(error)
})

database.once('connected', () => {
    console.log('Database Connected');
})

app.use(express.json());
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json());
app.set('views', __dirname + '/views');
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs');

app.use("/",express.static(path.join(__dirname, 'dist')));
app.use("/login",express.static(path.join(__dirname, 'dist')));
app.use("/notes",express.static(path.join(__dirname, 'dist')));
app.use("/register",express.static(path.join(__dirname, 'dist')));

app.use('/api/notes', notes);
app.use('/api/auth', auth);

app.get("*", function(req, res, next){
    res.status(404).render('error.html');
});

app.listen(PORT, () => console.log(`Server has started! http://localhost:${PORT}/`));

module.exports = app;