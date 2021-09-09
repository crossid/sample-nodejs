const express = require('express')
const createError = require('http-errors')
const { auth, requiresAuth } = require('express-openid-connect')

const app = express()
const port = process.env.PORT || 3000

// view
app.set('view engine', 'pug')

// auth middleware
// this also listens to /login path for login
app.use(
  auth({
    authRequired: false,
    // idpLogout: true,
    authorizationParams: {
      response_type: 'code id_token',
      scope: 'openid profile email',
    },
  })
)

// anonymous route
app.get('/', (req, res) => {
  res.render('index', { req, title: 'Home' })
})

// protected route
app.get('/whoami', requiresAuth(), async (req, res) => {
  // we can use req.oidc.user or fetch most updated user
  const userInfo = await req.oidc.fetchUserInfo()
  res.render('whoami', {
    title: 'Who AM I',
    req,
    userInfo,
  })
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

app.use(function (req, res, next) {
  next(createError(404, 'Not found.'))
})
