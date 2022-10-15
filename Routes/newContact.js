const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
mongoose.connect(process.env.connect, { UseNewUrlParser: true });
const User = require('../schema');

router.get("/newContact", (req, res) => {
    res.render("newContact")
})

router.post("/addContact", (req, res) => {


    const fname = req.body.fname;
    const lname = req.body.lname;
    const gender = req.body.gender;
    const mobile = req.body.mobile;
    const address = req.body.address;

    const instance = new User();
    instance.fname = fname;
    instance.lname = lname;
    instance.gender = gender;
    instance.mobile = mobile;
    instance.address = address;

    instance.save((err) => {
        if (err) {
            console.log(err);
        } else {
            res.render("home");
        }
    });

})

router.get("/newbulkContact", (req, res) => {
    res.render("newbulkContact")
})


module.exports = router;