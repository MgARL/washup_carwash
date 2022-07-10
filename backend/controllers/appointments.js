const appointments = require('express').Router()
const e = require('express')
const db = require('../models')
const { Op } = require("sequelize");

const { appointment, vehicle_appointment, service_appointment, service, vehicle } = db

appointments.get('/user-all', async (req, res) => {
    try {
        const allAppointments = await appointment.findAll({
            where: {
                user_id: req.body.user_id
            },
            include: [service, vehicle],
            order: [['date', 'ASC']]
        })
        if (allAppointments){
            console.log('sent')
            return res.status(200).json({
                allAppointments
            })
        }
        res.status(404).json({
            message: 'No Appointments Found'
        })
        
    } catch (error) {
        console.log(error)
        res.status(500).json({
            message: 'something went wrong please try again'
        })
    }
})

appointments.get('/user-upcoming', async (req, res) =>{
    try {
        const upcomingAppointments = await appointment.findAll({
            where: {
                user_id: req.body.user_id,
                [Op.and]: [
                    {
                        date: {
                            [Op.gte]: new Date()
                        }
                    }
                ]
            },
            include: [service, vehicle],
            order: [['date', 'ASC']]
        })
        if (upcomingAppointments){
            console.log('sent')
            return res.status(200).json({
                upcomingAppointments
            })
        }
        res.status(404).json({
            message: 'No Appointments Found'
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            message: 'something went wrong please try again'
        })
    }
})

appointments.get('/user-one', async (req, res) => {
    try {
        const Appointment = await appointment.findOne({
            where: {
                appointment_id: req.query.appointment_id
            },
            include: [service, vehicle]
        })
        if(Appointment){
            return res.status(200).json({
                Appointment
            })
        }
        res.status(404).json({
            message: 'Appointment not found'
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            message: 'something went wrong please try again'
        })
    }
})

appointments.post('/create', async (req, res) => {
    const { user_id, service_ids, vehicle_ids, ...rest } = req.body
    try {
        const Appointment = await appointment.create({
            user_id,
            ...rest
        })
        if (Appointment) {
            await service_ids.map(async (service_id) => {
                const Service = await service.findOne({
                    where: {
                        service_id
                    }
                })
                await Appointment.addService(Service)
            })

            await vehicle_ids.map(async (vehicle_id) => {
                const Vehicle = await vehicle.findOne({
                    where: {
                        vehicle_id
                    }
                })
                await Appointment.addVehicle(Vehicle)
            })
            res.status(201).json({
                appointment_id: Appointment.appointment_id
            })
        } else {
            res.status(500).json({
                message: 'Please try again'
            })
        }
    } catch (error) {
        console.log(error)
        res.status(500).json({
            message: 'something went wrong please try again'
        })
    }
})

appointments.put('/update', async (req, res) => {
    const { user_id, appointment_id, ...rest } = req.body
    try {
        await appointment.update( rest, {
            where: {
                appointment_id
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

appointments.delete('/delete', async (req, res) => {
    const { appointment_id } = req.body
    try {
        await appointment.destroy({
            where: {
                appointment_id
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


module.exports = appointments