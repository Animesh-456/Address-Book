const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');



router.get("/login", (req, res) => {
    res.render("login")
})


router.post("/login", async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    //console.log(username, password);
    // if (u == process.env.username && password == process.env.password) {

    // const tok = await jwt.sign({ username: username }, process.env.TOKEN_SECRET, { algorithm: 'RS256' }, (err, token) => {
    //     if (!err) {
    //         console.log(token)
    //     }
    // });
    jwt.sign({ username: username }, process.env.TOKEN_SECRET, function (err, token) {
        if (err) {
            console.log(err)
        } else {
            console.log(token)
        }
    });


})
module.exports = router;