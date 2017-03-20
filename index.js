//Za pomoc¹ directive require ³adujemy (load) modu³ express
var express = require('express')
var app = express()


//definiujemy response dla requestów w root URL (/)
app.get('/', function (req, res) {
  res.send('Hello World!')
})


//aplikacja uruchamia serwer s³uchaj¹cy na porcie 8081
app.listen(8081, function () {
  console.log('app listening on port 8081!')
})