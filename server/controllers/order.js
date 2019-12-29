const models = require("../models")
const Order = models.Order;
const Event = models.Event;
const Category = models.Category;
const User = models.User;

const Sequelize = require("sequelize");
const Op = Sequelize.Op;

module.exports = {
    
    create: (req, res) => {
        Event.findOne({
            where: { id: req.body.id }
        })
        .then(event => {
            Category.findOne({
                where: { id: event.categoryId}
            })
            .then(category => {
                User.findOne({
                    where: { id: event.userId }
                })
                .then(user => {
                    Order.create({
                        eventId: req.body.id,
                        buyerId: req.currentUser.id,
                        quantity: req.body.quantity,
                        totalPrice: (req.body.quantity*event.price)
                    })
                    .then(order => {
                        res.status(201).json({
                            id: order.id,
                            event: {
                                id: event.id,
                                title: event.title,
                                category: {
                                    id: category.id,
                                    name: category.name
                                },
                                startTime: event.startTime,
                                endTime: event.endTime,
                                price: event.price,
                                description: event.description,
                                address: event.address,
                                urlMaps: event.urlMaps,
                                img: event.img,
                                createdBy: {
                                    id: user.id,
                                    name: user.name,
                                    phone: user.phone,
                                    email: user.email,
                                    img: user.img
                                }
                            },
                            quantity: order.quantity,
                            totalPrice: order.totalPrice,
                            status: order.status,
                            attachment: (!order.attachment ? "" : order.attachment)
                        })
                    })
                })
            })
        })
        .catch(err => {
            res.status(500).json({
                msg: 'Internal Server Error',
                Error: err
            })
        })
    },

    payment: (req, res) => {

        Order.findOne({
            where: { id: req.params.id }
        })
        .then(order => {
            if(order.buyerId === req.currentUser.id) {
                Event.findOne({
                    where: { id: order.eventId }
                })
                .then(event => {
                    Category.findOne({
                        where: { id: event.categoryId }
                    })
                    .then(category => {
                        User.findOne({
                            where: { id: event.userId }
                        })
                        .then(user => {
                            Order.update({
                                status: 'confirmed',
                                attachment: 'optional'
                            },
                            {
                                where: { id: req.params.id }
                            })
                            .then(updated => {
                                Order.findOne({
                                    where: { id: req.params.id }
                                })
                                .then(fresh => {
                                    res.status(202).json({
                                        id: order.id,
                                        event: {
                                            id: event.id,
                                            title: event.title,
                                            category: {
                                                id: category.id,
                                                name: category.name
                                            },
                                            startTime: event.startTime,
                                            endTime: event.endTime,
                                            price: event.price,
                                            description: event.description,
                                            address: event.address,
                                            urlMaps: event.urlMaps,
                                            img: event.img,
                                            createdBy: {
                                                id: user.id,
                                                name: user.name,
                                                phone: user.phone,
                                                email: user.email,
                                                img: user.img
                                            }
                                        },
                                        quantity: order.quantity,
                                        totalPrice: order.totalPrice,
                                        status: fresh.status,
                                        attachment: fresh.attachment
                                    })
                                })
                            })
                        })
                    })
                })
            } else {
                res.status(403).json({
                    msg: 'Unauthorized'
                })
            }
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({
                msg: 'Internal Server Error',
                Error: err
            })
        })
    },

    approval: (req, res) => {

        Order.findOne({
            where: { id: req.params.id }
        })
        .then(order => {
                Event.findOne({
                    where: { id: order.eventId }
                })
                .then(event => {
                    if(event.userId === req.currentUser.id) {
                        Category.findOne({
                            where: { id: event.categoryId }
                        })
                        .then(category => {
                            User.findOne({
                                where: { id: event.userId }
                            })
                            .then(user => {
                                Order.update({
                                    status: 'approved',
                                    attachment: 'optional'
                                },
                                {
                                    where: { id: req.params.id }
                                })
                                .then(updated => {
                                    Order.findOne({
                                        where: { id: req.params.id }
                                    })
                                    .then(fresh => {
                                        res.status(202).json({
                                            id: order.id,
                                            event: {
                                                id: event.id,
                                                title: event.title,
                                                category: {
                                                    id: category.id,
                                                    name: category.name
                                                },
                                                startTime: event.startTime,
                                                endTime: event.endTime,
                                                price: event.price,
                                                description: event.description,
                                                address: event.address,
                                                urlMaps: event.urlMaps,
                                                img: event.img,
                                                createdBy: {
                                                    id: user.id,
                                                    name: user.name,
                                                    phone: user.phone,
                                                    email: user.email,
                                                    img: user.img
                                                }
                                            },
                                            quantity: order.quantity,
                                            totalPrice: order.totalPrice,
                                            status: fresh.status,
                                            attachment: fresh.attachment
                                        })
                                    })
                                })
                            })
                        })

                    } else {
                        res.status(403).json({
                            msg: 'Unauthorized'
                        })
                    }
                })
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({
                msg: 'Internal Server Error',
                Error: err
            })
        })
    },

    myTicket: (req, res) => {
        let status = req.query.status

        Order.findOne({
            where: { buyerId: req.currentUser.id }
        })
        .then(user => {
            Order.findAll({
                where: {
                    status: {
                        [Op.like]: `${status}`
                    }
                }
            })
            .then(approved => {
                res.send(approved)
            })
        })
        .catch(err => {
            res.status(500).json({
                msg: 'Internal Server Error',
                Error: err
            })
        })
    }

}