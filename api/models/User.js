const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const User = new Schema({
    namename: { type: String, maxLength: 255 },
    password: { type: String, maxLength: 255}
});

module.exports = mongoose.model('User', User);