//Load express module with `require` directive
var express = require('express')
var app = express()


//Define request response in root URL (/)
app.get('/', function (req, res) {
  res.send('Hello World!')
})


//Launch listening server on port 8081
app.listen(8081, function () {
  console.log('app listening on port 8081!')
})
