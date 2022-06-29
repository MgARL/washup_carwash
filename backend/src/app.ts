import express, { Application, Request, Response } from 'express'
require('dotenv').config()

import users from './controllers/users'
import appointments from './controllers/appointments'
import services from './controllers/services'
import vehicles from './controllers/vehicles'

const app: Application = express()



app.use(express.urlencoded({ extended: true }))
app.use(express.json())

//  controllers
app.use('/users', users)
app.use('/appointments', appointments)
app.use('/services', services)
app.use('/vehicles', vehicles)

app.get('*', (req: Request, res: Response) => {
    res.status(404).json({
        message: 'Not Found'
    })
})

export default app