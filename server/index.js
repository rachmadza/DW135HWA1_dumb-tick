require('express-group-routes')

const express = require('express')
const cors = require('cors')

const app = express()
const port = 5000

app.use(cors())
app.use(express.json())

const Category = require('./controllers/category')
const User = require('./controllers/user')
const Event = require('./controllers/event')
const Order = require('./controllers/order')

const Auth = require('./helpers/middleware')

app.group('/', (router) => {
    //category
    router.get('/categories', Category.list)

    //user
    router.post('/register', User.register)
    router.post('/login', User.login)
    router.get('/profile/:id', User.detail)

    //event
    router.get('/events', Event.list)
    router.get('/event/:id', Event.byEventId)
    router.get('/category/:id/events', Event.byCategoryId)
    router.post('/event', Auth.auth, Event.create)

    //order
    router.post('/order', Auth.auth, Order.create)
    router.put('/order/:id', Auth.auth, Order.payment)
    router.put('/order/:id/approval', Auth.auth, Order.approval)
    router.get('/orders', Auth.auth, Order.myTicket)
})

app.listen(port, () => console.log(`Listening on port ${port}!`))