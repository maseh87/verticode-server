var express = require('express');
var app = express();



console.log(app, 'app');
app.listen(process.env.PORT);
console.log('Listening on ', process.env.PORT);