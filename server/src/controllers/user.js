const User = require('../models/user')

// signup
module.exports.signup = async (req, res) => {
  const { username, password, passwordConfirm } = req.body
  try {
    if (password !== passwordConfirm) {
      return res.json({ msg: '密码与确认密码不一致！' })
    } else {
      const u = new User({
        username,
        password
      })
      const user = await u.save()
      res.json(user)
    }
  } catch (error) {
    res.status(500).json({ msg: error })
  }
}
// login
