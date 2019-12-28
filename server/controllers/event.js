const models = require("../models")
const Event = models.Event;
const Category = models.Category;
const User = models.User;

const Sequelize = require("sequelize");
const Op = Sequelize.Op;

const displayList = data => {
    const convert = data.map(item => {
        let result = {
            id: item.id,
            title: item.title,
            category: {
                id: item.category.id,
                name: item.category.name
            },
            start_time: item.start_time,
            end_time: item.end_time,
            price: item.price,
            description: item.description,
            address: item.address,
            url_maps: item.url_maps,
            image: item.image,
            createdBy: {
                id: item.createdBy.id,
                name: item.createdBy.name,
                phone: item.createdBy.phone,
                email: item.createdBy.email,
                image: item.createdBy.image
            }

        }
        return result
    })
    return convert
}

const displayDetailById = data => {
    const convert = data.map(item => {
        let result = {
            id: item.id,
            title: item.title,
            category: {
                id: item.category.id,
                name: item.category.name
            },
            start_time: item.start_time,
            end_time: item.end_time,
            price: item.price,
            description: item.description,
            address: item.address,
            url_maps: item.url_maps,
            image: item.image,
            createdBy: {
                id: item.createdBy.id,
                name: item.createdBy.name,
                phone: item.createdBy.phone,
                email: item.createdBy.email,
                image: item.createdBy.image
            }

        }
        return result
    })
    return convert
}

module.exports = {

    list: (req, res) => {
        let title = req.query.title
        let time = req.query.start_time

        let qWhere
        if(req.query.title) {
            qWhere = {
                title: {
                    [Op.like]: `${title}`
                }
            }
        } else if (req.query.start_time) {
            qWhere = {
                title: {
                    [Op.like]: `${time}`
                }
            }
        } else {
            qWhere = null
        }
        
        console.log(time)
        Event.findAll({
            where: qWhere,
            include: [
                {
                    model: Category,
                    as: "category"
                },
                {
                    model: User,
                    as: "createdBy"
                }
            ]
        })
            .then(events => {
                if (events) {
                    res.status(200).json(displayList(events))
                } else {
                    res.status(404).json({
                        msg: "Ups, we can't get what you looking for.."
                    })
                }
            })
            .catch(err => {
                res.status(500).json({
                    msg: 'Internal Server Error',
                    Error: err
                })
            })
    },

    byCategoryId: (req, res) => {
        const { id } = req.params

        Event.findAll({
            include: [
                {
                    model: Category,
                    as: "category"
                },
                {
                    model: User,
                    as: "createdBy"
                }
            ],
            where: { category_id: id }
        })
            .then(categories => {
                if (categories.length > 0) {
                    res.status(200).json(displayDetailById(categories))
                } else {
                    res.status(404).json({
                        msg: "Ups, we can't get events you looking for.."
                    })
                }
            })
            .catch(err => {
                res.status(500).json({
                    msg: 'Internal Server Error',
                    Error: err
                })
            })
    },

    byEventId: (req, res) => {
        const { id } = req.params

        Event.findAll({
            include: [
                {
                    model: Category,
                    as: "category"
                },
                {
                    model: User,
                    as: "createdBy"
                }
            ],
            where: { id }
        })
            .then(event => {
                if (event.length > 0) {
                    res.status(200).json(displayDetailById(event))
                } else {
                    res.status(404).json({
                        msg: "Ups, we can't get events from that Category.."
                    })
                }
            })
            .catch(err => {
                res.status(500).json({
                    msg: 'Internal Server Error',
                    Error: err
                })
            })
    },

    create: (req, res) => {

        User.findOne({
            where: { id: req.currentUser.id }
        })
        .then(user => {
            Category.findOne({
                where: { id: req.body.category }
            })
            .then(category => {
                Event.create({
                    title: req.body.title,
                    category_id: req.body.category,
                    start_time: req.body.start_time,
                    end_time: req.body.end_time,
                    price: req.body.price,
                    description: req.body.description,
                    address: req.body.address,
                    url_maps: req.body.url_maps,
                    image: req.body.image,
                    user_id: req.currentUser.id
                })
                .then(event => {
                    res.status(201).json({
                        id: event.id,
                        title: event.title,
                        category: {
                            id: category.id,
                            name: category.name
                        },
                        start_time:event.start_time,
                        end_time:event.end_time,
                        price:event.price,
                        description:event.description,
                        address:event.address,
                        url_maps:event.url_maps,
                        image: event.image,
                        createBy: {
                            id: user.id,
                            name: user.name,
                            phone: user.phone,
                            email: user.email,
                            image: user.image
                        }
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

}