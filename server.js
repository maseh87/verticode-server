var express = require('express');
var app = express();


app.get('data', function(req, res, next) {
  res.send('Hello World');
});


console.log(app, 'app');
app.listen(process.env.PORT);
console.log('Listening on ', process.env.PORT);