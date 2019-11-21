const mockMap = {
  'GET /api/user': {
    // obj
    id: 1,
    username: 'kenny',
    sex: 6
  },
  'GET /api/user/list': [
    // array
    {
      id: 1,
      username: 'tom',
      sex: 10,
      address: '广东'
    },
    {
      id: 2,
      username: 'tomy',
      sex: 12,
      address: '广西'
    },
    {
      id: 3,
      username: 'jely',
      sex: 16,
      address: '北京'
    }
  ],
  'POST /api/login/account': (req, res) => {
    // express router style
    const { password, username } = req.body
    if (password === '888888' && username === 'admin') {
      return res.json({
        status: 'ok',
        code: 0,
        token: 'sdfsdfsdfdsf',
        data: {
          id: 1,
          username: 'kenny',
          sex: 6
        }
      })
    } else {
      return res.json({
        status: 'error',
        code: 403
      })
    }
  },
  'DELETE /api/user/:id': (req, res) => {
    console.log('---->', req.body)
    console.log('---->', req.params.id) // request params
    res.send({ status: 'ok', message: 'delete success!' })
  }
}
module.exports = mockMap
