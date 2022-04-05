var path = require('path');
var express = require('express');
var app = express();
var port = 9000

var htmlPath = path.join(__dirname, 'web');

app.use(express.static(htmlPath));

var server = app.listen(port, function () {
    console.log(`listening on port ${port}`);
});
