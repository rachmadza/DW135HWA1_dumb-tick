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
            startTime: item.startTime,
            endTime: item.endTime,
            price: item.price,
            description: item.description,
            address: item.address,
            urlMaps: item.urlMaps,
            img: item.img,
            createdBy: {
                id: item.createdBy.id,
                name: item.createdBy.name,
                phoneNumber: item.createdBy.phoneNumber,
                email: item.createdBy.email,
                img: item.createdBy.img
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
            startTime: item.startTime,
            endTime: item.endTime,
            price: item.price,
            description: item.description,
            address: item.address,
            urlMaps: item.urlMaps,
            img: item.img,
            createdBy: {
                id: item.createdBy.id,
                name: item.createdBy.name,
                phoneNumber: item.createdBy.phoneNumber,
                email: item.createdBy.email,
                img: item.createdBy.img
            }

        }
        return result
    })
    return convert
}

module.exports = {

    list: (req, res) => {
        let title = req.query.title
        let time = req.query.startTime

        let qWhere
        if(req.query.title) {
            qWhere = {
                title: {
                    [Op.substring]: `${title}`
                }
            }
        } else if (req.query.startTime) {
            qWhere = {
                startTime: {
                    [Op.substring]: `${time}`
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
            where: { categoryId: id }
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
                    res.status(200).json({
                        id: event[0].id,
                        title: event[0].title,
                        category_id: event[0].category.id,
                        category_name: event[0].category.name,
                        startTime: event[0].startTime,
                        endTime: event[0].endTime,
                        price: event[0].price,
                        description: event[0].description,
                        address: event[0].address,
                        urlMaps: event[0].urlMaps,
                        img: event[0].img,
                        createdBy_id: event[0].createdBy.id,
                        createdBy_name: event[0].createdBy.name,
                        createdBy_phone: event[0].createdBy.phoneNumber,
                        createdBy_email: event[0].createdBy.email,
                        createdBy_img: event[0].createdBy.img
                    })
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
                    categoryId: req.body.category,
                    startTime: req.body.startTime,
                    endTime: req.body.endTime,
                    price: req.body.price,
                    description: req.body.description,
                    address: req.body.address,
                    urlMaps: req.body.urlMaps,
                    img: req.body.img,
                    userId: req.currentUser.id
                })
                .then(event => {
                    res.status(201).json({
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