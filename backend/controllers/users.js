const users = require('express').Router()
require('dotenv').config()
const db = require('../models')
const userAuthorization = require('../middleware/user_auth')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const { user } = db

users.get('/authorize', userAuthorization,(req, res) => {
    res.status(200).json({
        message: 'User Authorized'
    })
})

users.get('/user-info', userAuthorization, async (req, res) => {
    try {
        const User = await user.findOne({
            attributes: ['name', 'address', 'city', 'state', 'country'],
            where: {
                user_id: req.body.user_id
            }
        })
        res.status(200).json({
            User
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            message: 'something went wrong please try again'
    })
    }
})

users.post('/signup', async (req, res) => {
    const { password, role, ...rest } = req.body
    try {
        const User = await user.create({
            ...rest,
            password: await bcrypt.hash(password,12)
        })
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

users.post('/login', async (req,res) => {
    try {
        const User = await user.findOne({
            where: {
                email: req.body.email
            }
        })

        if(!User || !await  bcrypt.compare(req.body.password, User.password)){
            res.status(403).json({
                message: 'Wrong Credentials'
            }) 
        } else {
            const token = jwt.sign({
                id: User.user_id
            }, process.env.JWT_SECRET, { expiresIn: '24h'})
            res.status(200).json({
                token
            })
        }
    } catch (error) {
        console.log(error)
        res.status(500).json({
            message: 'something went wrong please try again'
    })
    }
})

users.put('/update', userAuthorization, async (req, res) => {
    const { user_id, password , ...rest } = req.body
    try {
        await user.update( rest, {
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

users.delete('/delete', userAuthorization, async (req, res) => {
    try {
        await user.destroy({
            where: {
                user_id : req.body.user_id
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

module.exports = users 