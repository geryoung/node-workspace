var express = require('express');

var app = new express();


app.get('/', function(req, res, next) {
  res.json({
    result:'hello world'
  })
});

app.listen(3000);
