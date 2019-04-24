const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(__dirname));
app.use(express.static(__dirname + '/app'));


app.get('/*', function(req,res){
    console.log(req);
    console.log(__dirname);
    res.sendFile(path.join(__dirname +'/app/index.html'));
});


app.listen(process.env.PORT || 8080);