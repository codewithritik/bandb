const express = require("express");
const router = express.Router();
const userModal = require("../model/user");
const { body, validationResult } = require("express-validator");
const bcrypt = require("bcrypt")
const jwt = require('jsonwebtoken');
require('dotenv').config()

const generateToken = (user) => {
    return jwt.sign({ user }, process.env.SECRET_KEY)
}

router.get("/", async (req, res) => {
    try {
        res.status(200).send("wokring")
        
    }
    catch (err) {
        res.send(err).status(500)
    }
})

//sing in part
router.post( "/register",
    body("email")
        .isEmail()
        .withMessage("Please Enter valid Email")
        .custom(async (value) => {
            const user = await userModal.findOne({ email: value });
            if (user) {
                throw new Error("Email is already exist");
            }
            return true;
        }),
    body("password")
        .not()
        .isEmpty()
        .withMessage("Password is required")
        .custom((value) => {
            const passw = /^(?=.*\d)(?=.*[a-z])(?=.*[^a-zA-Z0-9])(?!.*\s).{7,15}$/;
            if (!value.match(passw)) {
                throw new Error("password should contain a minimum of 8 characters with 1 special 1 letter and 1 numeric");
            }
            return true;
        })
        .custom((value, { req }) => {
            if (value !== req.body.confirmpassword) {
                throw new Error("Password and confirm password should match");
            }
            return true;
        }),
    async (req, res) => {
        try {
          
            const errors = validationResult(req);
    
            if (!errors.isEmpty()) {
                return res.status(400).send({ errors: errors.array() });
            }

            const textpassword = req.body.password
            
            const newpassword = await bcrypt.hash(textpassword, 8)

            const userdetails = await userModal.create({
                Name: req.body.Name,
                role: req.body.role,
                DOB: req.body.DOB,
                email: req.body.email,
                password: newpassword
            });

            return res.status(201).send(userdetails);

        } catch (err) {
            return res.status(500).send({ message: err.message });
        }
    }
);



//login post part
router.post("/login", async (req, res) => {
        try {
           
            const { email, password: textpassword } = req.body

            const userdetails = await userModal.findOne({ email }).lean()

            if (!userdetails) {
                return res.status(301).send("Your email is wrong or not register")
            }

            let match = await bcrypt.compare(textpassword, userdetails.password)

            if (match) {
                let token = generateToken({ _id: userdetails._id, email: userdetails.email, role: userdetails.role }, );       
                // res.cookie('Bearer', token, {
                //     expires: new Date(Date.now() + 258920000),
                //     httpOnly:true
                // })
                return res.status(200).send({ userdetails, token })
            }
            else {

                return res.status(300).send("password wrong")
            }
        }
        catch (err) {
            return res.status(500).send({ message: err.message });
        }
    }
);



//for admin
router.post("/admin", async(req, res) => { 
    try {

        const token = req.body.Bearer
        
        if (!token) {
            return res.status(500).send( "please login again" )
        }

        const decoded = jwt.verify(token, process.env.SECRET_KEY);
       
       
        if (decoded.user.role != "admin"  ) {
            return res.status(401).send( "you are not authorised")
        }


        
        const userdeatils = await userModal.find()
        return res.send(userdeatils).status(200)

        

    }
    catch (err){
        return res.send(err.message).status(500)
    }
})



module.exports = router;