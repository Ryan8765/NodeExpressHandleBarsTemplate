const routes = require('express').Router();


routes.get('/', (req, res) => {
  res.render('home');
});

//url posted to for rfid scan
app.post('/rfidscan',  (req, res) => {

});


//used for view of order details after an order update
app.get('/orderupdate',  (req, res) => {

});

module.exports = routes;