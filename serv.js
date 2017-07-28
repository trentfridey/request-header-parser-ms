var express = require('express');

var app = express();

app.get('/',function(req, res){
  res.send('<h1>There\'s nothing here!</h1><p>P.S. visit /whoami</p>');  
});

app.get('/whoami', function(req, res){
  var rhp = {};
  rhp.ip = req.get('x-forwarded-for').split(',')[0];
  rhp.language = req.get('accept-language').split(',')[0];
  rhp.software = req.get('user-agent');
  res.json(rhp);
});

app.listen(3000);