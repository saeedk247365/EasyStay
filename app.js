const express = require("express");
const path = require("path");

const app = express();
const port = 8000;

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.set('views', path.join(__dirname, 'views'));




app.get('/', (req, res) => {
    res.render('index');
});

app.get('/about', (req, res) => {
    res.render('about');
});


app.get('/rooms', (req, res) => {
    res.render('rooms');
});

app.get('/contact', (req, res) => {
    res.render('contact');
});

app.get('/blog', (req, res) => {
    res.render('blog');
});

app.get('/reservation', (req, res) => {
    res.render('reservation');
});


app.get('/loginorsignup', (req, res) => {
    res.render('loginorsignup');
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
