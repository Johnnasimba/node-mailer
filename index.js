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
app.post('/send', (req, res) => {
    const output = `
    <p>You have a new contact request</p>
    <ul>
        <li>Name: ${req.body.name}</li>
        <li>company: ${req.body.company}</li>
        <li>email: ${req.body.email}</li>
        <li>Phone Number: ${req.body.phone}</li>
    </ul>
    <H3>Message</H3>
    <p> ${req.body.message}</p>       
    
    `
})

const PORT=process.env.PORT||3000;

app.listen(3000, () => {
    console.log("server running on port "+ PORT);
})