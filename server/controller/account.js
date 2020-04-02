const accountService = require('../service/account')
const jwt = require('jsonwebtoken')
const bcryptjs = require('bcryptjs')
const SECRET = 'asdafadfadgaag' // token 秘钥

// 注册接口，添加用户
exports.addAccount = async function (req, res) {
  const { tel, password, accountType } = req.body
  try {
    const data = await accountService.addAccount({ tel, password, accountType })
    res.send({
      code: '200', 
      data: {
        accountType,
        tel,
        _id: data._doc._id
      }
    })
  } catch (error) {
    console.error(error)
  }
}

// 查询手机号是否存在
exports.findTel = async function (req, res) {
  const { tel } = req.query
  try {
    const account = await accountService.findAccount(tel)
    if (!!account) res.send({ code: '200', data: { message: '该手机号已被注册' } })
    else res.send({ code: '200', data: { account } })
  } catch (error) {
    console.error(error)
  }
}

// 登录接口，用户鉴权
exports.findAccount = async function (req, res) {
  const { tel, password } = req.body
  try {
    const account = await accountService.findAccount(tel)
    if (!account) return res.send({ code: '200', data: { message: '手机号码不存在' } })

    const isTrue = await bcryptjs.compare(password, account.password)
    if (!isTrue) return res.send({ code: '200', data: { message: '密码错误' } })

    const token = jwt.sign({
      id: String(account._id)
    }, SECRET, {
      expiresIn: 60 * 60 * 24 * 7 // 过期时间为 7 天
    })
    req.session.userInfo = {
      tel: account.tel,
      accountType: account.accountType,
      userId: account._id,
      token
    }
    res.send({ code: '200', data: { ...req.session.userInfo, code: 0 } })
  } catch (error) {
    console.error(error)
  }
}

// 判断用户是否登录
exports.getUserInfo = async function (req, res) {
  console.info('----session----')
  console.info(req.session.userInfo)
  if (req.session.userInfo) {
    res.send({ code: '200', data: { ...req.session.userInfo, code: 0 } })
  } else {
    res.send({ code: '200', data: { code: -1 } })
  }
}

// 退出
exports.logout = async function (req, res) {
  Reflect.deleteProperty(req.session, 'userInfo')
  res.send({ code: '200', data: { message: '成功退出', code: 0 } })
}

// 更新密码
exports.updatePsd = async function (req, res) {
  const { tel, password, newPassword } = req.body
  console.info(tel, password, newPassword)
  try {
    const account = await accountService.findAccount(tel)
    if (password) {
      const isTrue = await bcryptjs.compare(password, account.password)
      if (!isTrue) return res.send({ code: '200', data: { message: '密码错误', code: -1 } })
    }
    const result = await accountService.updatePsd(tel, { password: bcryptjs.hashSync(newPassword, 10) })
    console.info(result)
    if (result) res.send({ code: '200', data: { message: '修改成功', code: 0 } })
  } catch (error) {
    res.send({ code: '200', data: { code: -1 } })
  }
}

// exports.getAccountInfo = async function (req, res, next) {
//   const raw = String(req.headers.authorization)
//   const { id } = jwt.verify(raw, SECRET)
//   const account = await accountService.findAccountById(id)
//   next()
// }