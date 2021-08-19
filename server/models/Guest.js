const mongoose = require('mongoose');

const GuestSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    // A string I create for them so they can login, save to local storage once used
    accessKey: {
        type: String,
        required: true,
    },
    rsvp: {
        type: String,
        enum: ['Yes', 'No', 'Maybe', 'Pending'],
        default: 'Pending',
        required: false,
    },
    // Checks if user wants to appear in the rsvp list
    public: {
        type: Boolean,
        default: true,
        required: false,
    },
    // Admins will be able to shuffle groups, promote a group member to host
    role: {
        type: String,
        enum: ['guest', 'admin'],
        required: true,
    },
    // This will just have a simple visual to show they are playing the game in their group
    host: {
        type: Boolean,
        default: false,
        required: false,
    }, 
    // People marked present will be stored in an array that can be used by the grouping algorithm
    present: {
        type: Boolean,
        default: false,
        required: false,
    },
    icons: {
        type: String,
        default: "https://i.imgur.com/Zix2esr.png",
        required: false,
    }

});

const Guest = mongoose.model('Guest', GuestSchema);

module.exports = Guest;
