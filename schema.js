require("dotenv").config();
const mongoose = require('mongoose');
mongoose.connect(process.env.connect, { UseNewUrlParser: true });
const AddressSchema = new mongoose.Schema({
    fname: {
        type: String,
        required: true
    },
    lname: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    mobile: {
        type: Number,
        required: true
    },
});

const User = new mongoose.model("User", AddressSchema);

module.exports = AddressSchema;
module.exports = User;