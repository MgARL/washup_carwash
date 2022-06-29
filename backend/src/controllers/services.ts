import express, { Router, Request, Response } from 'express'
const services: Router = express.Router()

services.get('/', async (req: Request, res: Response) => {
    res.status(200).json({
        message: 'You are at services/'
    })
})

export default services 