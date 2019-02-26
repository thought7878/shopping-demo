const UserController = require('./controllers/user')

module.exports = app => {
  app.post('/user/signup', UserController.signup)
}
