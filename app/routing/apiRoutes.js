var friends = require('../data/friends.js')


module.exports = function(app) {
    app.get('/api/friends', function(request, response) {
    response.json(tables)
  })

}
