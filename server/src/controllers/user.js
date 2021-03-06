const User = require('../models/user')

// signup
module.exports.signup = async (req, res) => {
  const { username, password, passwordConfirm } = req.body
  try {
    if (username) {
      if (password !== passwordConfirm) {
        return res.json({ msg: '密码与确认密码不一致！' })
      } else {
        const user = await User.findOne({ username })
        if (user) {
          return res.status(403).json({ msg: '用户名重复，请重新注册！' })
        } else {
          const u = new User({
            username,
            password
          })
          const savedUser = await u.save()
          setTimeout(() => {
            res.json({ user: savedUser, msg: '注册成功！' })
          }, 4000)
        }
      }
    } else {
      return res.status(403).json({ msg: '用户名不能为空！' })
    }
  } catch (error) {
    res.status(500).json({ msg: '注册失败！请稍后重试！' })
  }
}
// login
module.exports.login = async (req, res) => {
  const { username, password } = req.body
  try {
    if (!username) {
      return res.json({ msg: '用户名不能为空！' })
    } else {
      const u = await User.findOne({ username })
      if (password === u.password) {
        setTimeout(() => {
          return res.json({ user: u, msg: '登陆成功！' })
        }, 4000)
      } else {
        return res.status(403).json({ msg: '密码错误！' })
      }
    }
  } catch (error) {
    return res.status(400).json({ msg: '用户不存在！' })
  }
}
