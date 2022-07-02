const db = require('../models')
const jwt = require('jsonwebtoken')

const { user } = db

async function userAuthorization(req, res, next) {
    try {
        const token = req.headers.authorization.split(' ')[1]

        const result = jwt.verify(token, process.env.JWT_SECRET)
        const { id } = result
        const User = await user.findOne({
            where: {
                user_id: id
            }
        })
        if (User) {
            req.body.user_id = id
            return next()
        }
        res.status(404).json({
            message: 'Please login again'
        })
    } catch (error) {
        console.error(error)
        res.status(500).json({
            message: 'Something went wrong please login again'
        })
    }
}

module.exports = userAuthorization