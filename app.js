var express = require('express');
var app = require('express')();
var http = require('http').Server(app)

app.use(express.static('public'));

http.listen(3000, function() {
  console.log('listening on 3000')
})