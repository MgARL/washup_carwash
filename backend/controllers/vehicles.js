const vehicles = require('express').Router()

vehicles.get('/', async (req, res) => {
    res.status(200).json({
        message: 'You are at vehicles/'
    })
})

module.exports = vehicles 