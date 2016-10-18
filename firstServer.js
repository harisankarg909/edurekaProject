var exp = require('express');
var bodyParser = require('body-parser');    
var app = exp();

app.use(exp.static(__dirname+"/public"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

app.get('/', function(req, res){

    res.write('Here is my first app');
    res.end();
});

app.get('/test', function(req, res){

    var name = req.query.nm;
    var age = parseInt(req.query.ag);
    res.send("Name is"+name+"\n Age is "+age);
});

app.get('/test2/:nm/:ag', function(req, res){

    var name = req.params.nm;
    var age = req.params.ag;
    res.send("Name is :"+name+"\n Age is :"+age);
});

app.post('/test', function(req, res){

    var name = req.body.nm;
    var age = req.body.ag;
    res.send("Name is"+name+"\n Age is "+age);
})

app.listen(3000, function(){

    console.log('Server listeneing to port 3000');
});