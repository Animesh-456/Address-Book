const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
mongoose.connect(process.env.connect, { UseNewUrlParser: true });
const User = require('../schema');


router.get("/search", (req, res) => {
    res.render("search")
})

router.post("/search", (req, response) => {
    const phn = req.body.phno;

    User.find({ mobile: phn }, (err, res) => {
        if (!err) {

            response.render("searchresults", { search: res })
        } else {
            response.redirect("search")
        }
    })

})

router.get("/searchresults", (req, res) => {
    res.render("searchresults")
})

//Updating Contacts
router.post("/updatecontact", (req, res) => {
    const id = req.body.searchid;
    const fname = req.body.fname;
    const lname = req.body.lname;
    const contact = req.body.contact;
    const address = req.body.address;
    const gender = req.body.gender;

    User.updateOne({ _id: id }, {
        $set: {
            fname: fname,
            lname: lname,
            address: address,
            mobile: contact,
            address: address,
            gender: gender
        }
    }, (err, docs) => {
        if (!err) {
            res.redirect("/search");
        } else {
            console.log(err);
        }
    })
})

// Deleting Users
router.post("/deletesearch/:id", (req, res) => {
    const id = req.params.id
    User.findByIdAndDelete({ _id: id }, (err, docs) => {
        if (!err) {
            res.render("/search")
        } else {
            console.error(err);
        }
    })
})

module.exports = router;