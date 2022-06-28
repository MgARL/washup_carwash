import express from 'express'
import { users } from './controllers/users'
import { appointments } from './controllers/appointments'
import { services } from './controllers/services'
import { vehicles } from './controllers/vehicles'
require('dotenv').config()
 const app = express()

 

 app.use(express.urlencoded({ extended: true }))
 app.use(express.json())

//  controllers
app.use('/users', users)
app.use('/appointments', appointments)
app.use('/services', services)
app.use('/vehicles', vehicles)

app.get('*', (req,res) => {
    res.status(404).json({
        message: 'Not Found'
    })
})

 export { app }