var express = require('express')
var bodyparser = require('body-parser')
var htmlRoutes = require('./app/routing/htmlRoutes.js')
var apiRoutes = require('./app/routing/apiRoutes.js')

var app = express()
const PORT = process.env.PORT || 7500
htmlRoutes(app)
apiRoutes(app)

app.listen(PORT, function() {
  console.log('Listening at PORT ' + PORT)
})
