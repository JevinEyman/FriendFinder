var friends = require('../data/friends.js')


module.exports = function(app) {
  app.get('/friendsdata', function(request, response) {
    response.json(tables)
  })

}
