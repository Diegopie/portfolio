const mongoose = require('mongoose');

const GamesSchema = new mongoose.Schema({
    finder: {
        type: String,
        default: 'findme',
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    // A string I create for them so they can login, save to local storage once used
    img: {
        type: String,
        required: true,
    },
    link: {
        type: String,
        required: false,
    },
    // Checks if user wants to appear in the rsvp list
    groups: {
        type: Array,
        required: false,
    },
});

const Games = mongoose.model('Games', GamesSchema);

module.exports = Games;
