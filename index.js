var express = require('express');
var app = express();



console.log(process.env.PORT, 'port');
app.listen(process.env.PORT);
console.log('Listening on ', process.env.PORT);