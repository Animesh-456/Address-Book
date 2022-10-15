const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
mongoose.connect(process.env.connect, { UseNewUrlParser: true });
const User = require('../schema');

router.get("/allcontacts", (req, res) => {

    const pageNumber = 0;
    const limit = 3;

    User.find((err, docs) => {
        if (!err) {
            res.render("allcontacts", { search: docs, pageno: 1 });
        } else {
            res.redirect("/");
        }
    }).skip(pageNumber * limit).limit(limit);
})


router.get("/allcontacts/:id", (req, res) => {
    const pageNumber = req.params.id - 1;
    const limit = 3;
    User.find((err, docs) => {
        if (!err) {
            res.render("allcontacts", { search: docs, pageno: pageNumber });
        } else {
            res.redirect("/");
        }
    }).skip(pageNumber * limit).limit(limit);

})

module.exports = router;