const models = require("../models")
const Category = models.Category;

const display = data => {
    const convert = data.map(item => {
        let result = {
            id: item.id,
            name: item.name
        }
        return result
    })
    return convert
}

module.exports = {

    list: (req, res) => {
        Category.findAll({})
            .then(categories => {
                res.status(200).json(display(categories))
            })
            .catch(err => {
                res.status(500).json({
                    msg: 'Internal Server Error',
                    Error: err
                })
            })
    },
}