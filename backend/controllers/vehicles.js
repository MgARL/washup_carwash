const vehicles = require('express').Router()
const db = require('../models')
const { vehicle } = db

vehicles.get('/all', async (req, res) => {
    try {
        const allVehicles = await vehicle.findAll({
            where: {
                user_id: req.query.user_id
            }
        })
        res.status(200).json({
            allVehicles
        })

    } catch (error) {
        console.log(error)
        res.status(500).json({
            message: 'something went wrong please try again'
        })
    }
})

vehicles.post('/add', async (req, res) => {
    const { ...body } = req.body
    try {
        const Vehicle = await vehicle.create({
            ...body
        })

        res.status(200).json({
            vehicle_id: Vehicle.vehicle_id
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            message: 'something went wrong please try again'
        })
    }
})

vehicles.get('/vehicle', async (req, res) => {
    try {
        const Vehicle = await vehicle.findOne({
            where: {
                vehicle_id: req.query.vehicle_id
            }
        })
        res.status(200).json({
            Vehicle
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            message: 'something went wrong please try again'
        })
    }
})

vehicles.put('/update', async (req, res) => {
    const { vehicle_id, ...rest } = req.body
    try {
        await vehicle.update(rest, {
            where: {
                vehicle_id
            }
        })
        res.status(204).end()
    } catch (error) {
        console.log(error)
        res.status(500).json({
            message: 'something went wrong please try again'
        })
    }
})

vehicles.delete('/delete', async (req, res) => {
    try {
        await vehicle.destroy({
            where: {
                vehicle_id: req.body.vehicle_id
            }
        })
        res.status(204).end()
    } catch (error) {
        console.log(error)
        res.status(500).json({
            message: 'something went wrong please try again'
        })
    }
})

module.exports = vehicles 