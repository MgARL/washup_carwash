const express = require('express')
const cors = require('cors')
require('dotenv').config()

const admins = require('./controllers/admins')
const users =  require('./controllers/users')
const appointments = require('./controllers/appointments')
const services = require('./controllers/services')
const vehicles = require('./controllers/vehicles')

const app = express()


// Middleware
const userAuthorization = require('./middleware/user_auth')
const adminAuthorization = require('./middleware/admin_auth')

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(cors({
    origin: "*" //use array for multiple sites ie. ['google.com', 'apple.com']
}))

//  controllers
app.use('/admins', adminAuthorization, admins)
app.use('/users', users)
app.use('/appointments', userAuthorization, appointments)
app.use('/services', services)
app.use('/vehicles', userAuthorization ,vehicles)

app.get('*', (req, res) => {
    res.status(404).json({
        message: 'Not Found'
    })
})

module.exports = app