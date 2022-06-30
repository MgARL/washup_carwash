const appointments = require('express').Router()

appointments.get('/', async (req, res) => {
    res.status(200).json({
        message: 'You are at appointments/'
    })
})

module.exports = appointments