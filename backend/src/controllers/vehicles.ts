import express, {Router, Request, Response} from 'express'
const vehicles: Router = express.Router()

vehicles.get('/', async (req: Request, res: Response) => {
    res.status(200).json({
        message: 'You are at vehicles/'
    })
})

export default vehicles 