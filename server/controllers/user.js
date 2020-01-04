const models = require("../models")
const User = models.User;

const bcrypt = require("bcrypt")
const encryptPass = require('../helpers/bcrypt')
const generateToken = require('../helpers/jwt')

module.exports = {

    detail: (req, res) => {
        // const { id } = req.currentUser.id
        // console.log(req.currentUser.id)

        User.findOne({
            where: { id: req.currentUser.id }
        })
            .then(user => {
                res.status(200).json({
                    id: user.id,
                    name: user.name,
                    phoneNumber: user.phoneNumber,
                    email: user.email,
                    username: user.username,
                    img: user.img
                })
            })
            .catch(err => {
                res.status(500).json({
                    msg: 'Internal Server Error',
                    Error: err
                })
            })
    },

    register: (req, res) => {
        let input = {
            name: req.body.name,
            phoneNumber: '+62',
            email: req.body.email,
            username: req.body.username,
            password: encryptPass(req.body.password),
            img: 'https://cutt.ly/UruwRFB'
        }

        User.findAll({
            where: { username: req.body.username }
        })
            .then(username => {
                if (username.length > 0) {
                    res.status(400).json({
                        msg: 'Username already taken'
                    })
                } else {
                    User.findAll({
                        where: { email: req.body.email }
                    })
                        .then(email => {
                            if (email.length > 0) {
                                res.status(400).json({
                                    msg: 'Email has been registered'
                                })
                            } else {
                                User.create(input)
                                    .then(newUser => {
                                        let payload = {
                                            id: newUser.id,
                                            email: newUser.email
                                        }
                                        res.status(201).json({
                                            msg: 'Register Success',
                                            token: generateToken(payload)
                                        })
                                    })
                            }
                        })
                }
            })
            .catch(err => {
                res.status(500).json({
                    msg: 'Internal server error',
                    Error: err
                })
            })
    },

    login: (req, res) => {
        let { username, password} = req.body

        User.findOne(
            {
                where: { username }
            }
        )
            .then(user => {
                if (user) {
                    if (bcrypt.compareSync(password, user.password)) {
                        let payload = {
                            id: user.id,
                            email: user.email
                        }
                        res.status(200).json({
                            msg: 'Login Success',
                            email: user.email,
                            token: generateToken(payload)
                        })
                    } else {
                        res.status(400).json({
                            msg: 'Wrong password'
                        })
                    }
                } else {
                    res.status(400).json({
                        msg: 'Wrong username or password'
                    })
                }
            })
            .catch(err => {
                res.status(500).json({
                    msg: 'Internal Server Error',
                    Error: err
                })
            })
    }
}