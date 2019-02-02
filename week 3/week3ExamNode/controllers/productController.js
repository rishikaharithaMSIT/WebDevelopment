var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var bodyParser = require('body-parser');
var mongoose = require('mongoose');

//db connection
mongoose.connect('mongodb://test12:test12@ds117545.mlab.com:17545/todo-list', { useNewUrlParser: true });

mongoose.connection.on('error', function(error) {
    console.error('Database connection error:', error);
});

//create schema
var productSchema = new mongoose.Schema({
    title: String,
    description: String,
    image : String,
    quantity : String
});
var Prod = mongoose.model('products', productSchema);

var urlencodedParser = bodyParser.urlencoded({extended:false});

module.exports = function(app) {

    app.get('/products', function(req, res){
        Prod.find({}, function(err,data){
            if(err) throw err;
            //console.log(data);
            res.render('products', {products : data});
        });        
    });
   
    // app.updateOne('/product/:item', function(req, res){
    //     console.log(req.url);
                
    // });
    app.post('/product/:item', urlencodedParser,function(req, res){
        //console.log(req.url);
        Prod.find({title : req.params.item.replace(/\-/g, " ")},function(err, data){
            if(err) throw err;
            //console.log(data);
            res.render('productDetails', {products : data});
        });      
    });

    app.post('/productDetails/:item', urlencodedParser,function(req, res){
        //console.log(req.url);
        //console.log(req.body.title);
        Prod.update({title : req.params.item.replace(/\-/g, " ")},{title : req.body.title, description : req.body.description, quantity :req.body.quantity},function(err, data){
            if(err) throw err;
            //console.log(data);
            return res.redirect('/Products');
        });
              
    });

    app.post('/productdel/:item', function(req, res){
        console.log(req.url);
        Prod.find({title : req.params.item.replace(/\-/g, " ")}).deleteOne(function(err, data){
            if(err) throw err;
            return res.redirect('/Products');
        });         
    });


};