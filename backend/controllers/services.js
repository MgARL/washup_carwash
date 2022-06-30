const services = require('express').Router()

services.get('/', async (req, res) => {
    res.status(200).json({
        message: 'You are at services/'
    })
})
module.exports = services 