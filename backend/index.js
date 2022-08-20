const express = require("express");

const connect = require("./configs/db");

const userController = require("./controller/user");

var cookieParser = require('cookie-parser')


const PORT = process.env.PORT || 5000 
const cors = require('cors')

const app = express();


app.use(cors())


app.use(express.json());

app.use(cookieParser())

app.use("/", userController)



app.listen(PORT, async function () {
    try {
        await connect();
        console.log("listening on port 5000");
    } catch (err) {
        console.error(err.message);
    }
});