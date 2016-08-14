const mongoose = require('mongoose');

let notificationSchema = new mongoose.Schema({
    from: String, //ref
    to: String, //ref
    title: String,
    description: String,
    response: Boolean,
    // "message" || "invitation" 
    state: String
})

module.exports = mongoose.model('Notification', notificationSchema);