const users = require('express').Router()

users.get('/', async (req, res) => {
    res.status(200).json({
        message: 'You are at users/'
    })
})

module.exports = users 