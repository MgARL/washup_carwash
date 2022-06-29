import express, { Router, Request, Response} from 'express'
const appointments: Router = express.Router()

appointments.get('/', async (req: Request, res: Response) => {
    res.status(200).json({
        message: 'You are at appointments/'
    })
})

export default appointments 