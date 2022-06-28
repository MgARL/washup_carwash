import express from 'express'
const vehicles = express.Router()

vehicles.get('/', async (req: any, res: any) => {
    res.status(200).json({
        message: 'You are at vehicles/'
    })
})

export default vehicles 