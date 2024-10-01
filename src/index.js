const path = require('path')
// const morgan = require('morgan');

const express = require('express');
const { engine } = require('express-handlebars');
const sass = require('sass');

const app = express();
const port = 3000;
const route = require('./routes')

app.use(express.static(path.join(__dirname, 'public')));

//add middleware cho post method
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//http logger
// app.use(morgan('combined'));

//template engine
app.engine('.hbs', engine({ extname: '.hbs' }));
app.set('view engine', '.hbs');
console.log('PATH', path.join(__dirname, 'resources/views'));
app.set('views', path.join(__dirname, 'resources/views'));

//route init
route(app)


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});