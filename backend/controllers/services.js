const services = require('express').Router()
const db = require('../models')
const adminAuthorization = require('../middleware/admin_auth')

const { service } = db

services.get('/all', async (req, res) => {
    try {
        const allServices = await service.findAll()
        res.status(200).json({
            allServices
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            message: 'something went wrong please try again'
        })
    }
})

services.get('/get-one', async (req, res) => {
    try {
        const Service = await service.findOne({
            where: {
                service_id: req.query.service_id
            }
        })
        res.status(200).json({
            Service
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            message: 'something went wrong please try again'
        })
    }
})

services.post('/add', adminAuthorization, async (req, res) => {
    const { ...rest } = req.body
    try {
        const Service = await service.create({
            ...rest
        })
        console.log(Service)
        res.status(201).json({
            message: 'Service created successfully'
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            message: 'something went wrong please try again'
        })
    }
})

services.put('/update', adminAuthorization, async (req, res) => {
    const { service_id, ...rest } = req.body
    try {
        await service.update(rest, {
            where: {
                service_id
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

services.delete('/delete', adminAuthorization, async (req, res) => {
    try {
        await service.destroy({
            where: {
                service_id: req.body.service_id
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
module.exports = services 