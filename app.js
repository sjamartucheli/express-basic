var express = require('express')
var app = express()

app.get('/', function (req, res) {
  res.send('Express is running on port 3000.')
})

app.listen(3000, function() {
  console.log('Express app listening on port 3000!')
})

