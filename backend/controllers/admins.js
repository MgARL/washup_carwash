const admins = require('express').Router()
require('dotenv').config()
const db = require('../models')
const bcrypt = require('bcrypt')

const { user } = db

admins.post('/signup', async (req, res) => {
    const { password, ...rest } = req.body
    try {
        const User = await user.create({
            ...rest,
            role: 'admin',
            password: await bcrypt.hash(password,12)
        })
        console.log(User)
         res.status(201).json({
            message: 'user created'
         })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            message: 'something went wrong please try again'
    })
    }
})

admins.put('/change-role', async (req, res) => {
    const { user_id, role } = req.body
    try {
        await user.update({ role }, {
            where: {
                user_id
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

admins.get('/all-users', async (req, res) => {
    try {
        const allUsers = await user.findAll()

        res.status(200).json({
            allUsers
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            message: 'something went wrong please try again'
    })
    }
})

module.exports = admins