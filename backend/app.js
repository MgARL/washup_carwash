const express = require('express')
const cors = require('cors')
require('dotenv').config()

const users =  require('./controllers/users')
const appointments = require('./controllers/appointments')
const services = require('./controllers/services')
const vehicles = require('./controllers/vehicles')

const app = express()



app.use(express.urlencoded({ extended: true }))
app.use(express.json())

//  controllers
app.use('/users', users)
app.use('/appointments', appointments)
app.use('/services', services)
app.use('/vehicles', vehicles)

app.get('*', (req, res) => {
    res.status(404).json({
        message: 'Not Found'
    })
})

module.exports = app