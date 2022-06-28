import express from 'express'
const users = express.Router()

users.get('/', async (req: any, res: any) => {
    res.status(200).json({
        message: 'You are at users/'
    })
})

export default users 