
console.log("Primeiro app em node.js")

var express = require('express');
app = express();

app.get('/', function (req, res) {
  res.send('Página prncipal!\n');
});

app.get('/Contatos', function (req, res) {
  res.send('Página de Contatos!\n');
});

app.listen(8080, function () {
  console.log('Aplicaçõe escutando na porta 8080!');
});

