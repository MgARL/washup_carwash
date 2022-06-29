import express, {Router, Request, Response} from 'express'
const users: Router = express.Router()

users.get('/', async (req: Request, res: Response) => {
    res.status(200).json({
        message: 'You are at users/'
    })
})

export default users 