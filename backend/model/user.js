const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
        Name: { type: String, required: true },
        role: { type: String, required: true },
        email: { type: String, required: true, unique: true },
        password: { type: String, required: true }
    },
    {
        versionKey: false,
        timestamps: true,
    }
);

const userModal = mongoose.model("register", userSchema);

module.exports = userModal

// {
//     "firstName"  : "ritik",
//         "lastName"  : "ritik",
//             "role"  : "user",
//                 "DOB"  : "12/03/2002",
//                     "email"  : "ritikadvice@gmail.com",
//                         "password"  : "852058520",
//                             "confirmPassword"  : "852058520"
// }