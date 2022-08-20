const mongoose = require("mongoose")
require('dotenv').config()

const MongoDBurl = process.env.MongoDBurl


const connect = () => {
    return mongoose.connect(MongoDBurl, {
        useNewUrlParser: true,
    })
}


module.exports = connect