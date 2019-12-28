const bcrypt = require("bcrypt")
const saltRounds = 10; //process.env.SALT_ROUND;

function encryptPass(pass) {
    let encrypted = bcrypt.hashSync(pass, saltRounds, function (err, hash) {
        if(err) {
            res.status(500).json({
                msg : 'Internal server error',
                Error: err
            })
        } else {
            return hash
        }
    })
    return encrypted
}

module.exports = encryptPass
