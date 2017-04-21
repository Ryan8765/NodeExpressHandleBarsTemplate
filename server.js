const express    = require('express');
const exphbs     = require('express-handlebars');
const bodyParser = require('body-parser');
const https      = require('https');

//custom packages
const config  = require('./config');
const routes  = require('./routes/routes');




const port = process.env.port || 3000;


var app = express();


//Small app so leaving routes contained within server.js
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

//connect routes
app.use('/', routes);
app.use(bodyParser.json());






app.listen(port,  () => {
	console.log( 'Server is up and running on ' + port );
});
