const users = require('express').Router()
require('dotenv').config()
const db = require('../models')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const { user } = db

users.get('/', async (req, res) => {
    res.status(200).json({
        message: 'You are at users/'
    })
})

users.post('/admin-signup', async (req, res) => {
    const { password, ...rest } = req.body
    try {
        const User = await user.create({
            ...rest,
            role: 'admin',
            password: await bcrypt.hash(password,12)
        })
        console.log(User)
         res.status(200).json({
            message: 'user created'
         })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            message: 'something went wrong please try again'
    })
    }
})

module.exports = users 