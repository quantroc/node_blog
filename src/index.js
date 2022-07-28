const path = require('path');
const express = require('express');
const morgan = require('morgan');
const methodOverride = require('method-override');
const handlebars = require('express-handlebars');

const route = require('./routes');
const db = require('./config/db');
//Connect to db
db.connect();

const app = express();
const port = 3000;



app.use(express.static(path.join(__dirname, 'public')));

app.use(
    express.urlencoded({
        extended: true,
    }),
);
app.use(express.json());

//http logger
app.use(morgan('combined'));

app.use(methodOverride('_method'));

//template engine
app.engine(
    'hbs',
    handlebars.engine({
        extname: '.hbs',
        helpers: {
            sum: (a, b) => a + b,
        }
    }),
);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources','views'));
// console.log(path.join(__dirname, 'resources/views'));

//ROUTE
route(app);

// app.get('/', (req, res) => {
//   res.render('home');
// });

// app.get('/news', (req, res) => {
//   res.render('news');
// });

// app.get('/search', (req, res) => {
//   res.render('search');
// });

// app.post('/search', (req, res) => {
//   console.log(req.body);
//   res.send('');
// });

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
