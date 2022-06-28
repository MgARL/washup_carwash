import express from 'express'
const services = express.Router()

services.get('/', async (req: any, res: any) => {
    res.status(200).json({
        message: 'You are at services/'
    })
})

export { services }