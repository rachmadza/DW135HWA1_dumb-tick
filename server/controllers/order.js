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
                where: { id: event.category_id}
            })
            .then(category => {
                User.findOne({
                    where: { id: event.user_id }
                })
                .then(user => {
                    Order.create({
                        event_id: req.body.id,
                        buyer_id: req.currentUser.id,
                        quantity: req.body.quantity,
                        total_price: (req.body.quantity*event.price)
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
                                start_time: event.start_time,
                                end_time: event.end_time,
                                price: event.price,
                                description: event.description,
                                address: event.address,
                                url_maps: event.url_maps,
                                image: event.image,
                                createdBy: {
                                    id: user.id,
                                    name: user.name,
                                    phone: user.phone,
                                    email: user.email,
                                    image: user.image
                                }
                            },
                            quantity: order.quantity,
                            total_price: order.total_price,
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
            if(order.buyer_id === req.currentUser.id) {
                Event.findOne({
                    where: { id: order.event_id }
                })
                .then(event => {
                    Category.findOne({
                        where: { id: event.category_id }
                    })
                    .then(category => {
                        User.findOne({
                            where: { id: event.user_id }
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
                                            start_time: event.start_time,
                                            end_time: event.end_time,
                                            price: event.price,
                                            description: event.description,
                                            address: event.address,
                                            url_maps: event.url_maps,
                                            image: event.image,
                                            createdBy: {
                                                id: user.id,
                                                name: user.name,
                                                phone: user.phone,
                                                email: user.email,
                                                image: user.image
                                            }
                                        },
                                        quantity: order.quantity,
                                        total_price: order.total_price,
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
                    where: { id: order.event_id }
                })
                .then(event => {
                    if(event.user_id === req.currentUser.id) {
                        Category.findOne({
                            where: { id: event.category_id }
                        })
                        .then(category => {
                            User.findOne({
                                where: { id: event.user_id }
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
                                                start_time: event.start_time,
                                                end_time: event.end_time,
                                                price: event.price,
                                                description: event.description,
                                                address: event.address,
                                                url_maps: event.url_maps,
                                                image: event.image,
                                                createdBy: {
                                                    id: user.id,
                                                    name: user.name,
                                                    phone: user.phone,
                                                    email: user.email,
                                                    image: user.image
                                                }
                                            },
                                            quantity: order.quantity,
                                            total_price: order.total_price,
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
            where: { buyer_id: req.currentUser.id }
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