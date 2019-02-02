var express = require('express');
var productController = require('./controllers/productController');

var app = express();

productController(app);//fire controllers
app.set('view engine', 'ejs'); //setup template engine
app.use(express.static('./public')); //static files

app.listen(3000); //listen to port