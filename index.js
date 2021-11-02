const express =  require('express');
const bodyParser = require('body-parser');
const path =  require('path');
const exphbs = require('express-handlebars');
const nodemailer = require('nodemailer');

const app = express();

//  View engine setup
app.engine(
    'handlebars', 
    exphbs({
        extname: "hbs",
        defaultLayout: false
    })
  );

app.set('view engine', 'handlebars');

// static folder
app.use('/public', express.static(path.join(__dirname, 'public')));

// Body parser middleware
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.render('contact');
});


const PORT=process.env.PORT||3000;

app.listen(3000, () => {
    console.log("server running on port "+ PORT);
})