import express from 'express'
const appointments = express.Router()

appointments.get('/', async (req: any, res: any) => {
    res.status(200).json({
        message: 'You are at appointments/'
    })
})

export { appointments }