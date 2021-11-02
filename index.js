const express =  require('express');
const bodyParser = require('body-parser');
const exphbs = require('express-handlebars');
const nodemailer = require('nodemailer');

const app = express();

//  View engine setup
app.engine('handlebars', exphbs);
app.set('view engine', 'handlebars');

// Body parser middleware
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send("Hello from express server")
});


const PORT=process.env.PORT||3000;

app.listen(3000, () => {
    console.log("server running on port "+ PORT);
})