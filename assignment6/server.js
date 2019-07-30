const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(__dirname +'/dist/a6'));

app.get('/*', function(req,res) {
    
res.sendFile(path.join(__dirname+'/dist/a6/index.html'));
});

app.listen(process.env.PORT || 8080);
