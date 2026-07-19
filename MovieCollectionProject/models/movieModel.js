const mongoose = require("mongoose")

const movieSchema = new mongoose.Schema({

    movieName: {
        type: String,
        required: true
    },
     rating: {
        type: Number,
        required: true
    },

    youtubeLink: {
        type: String
    },

    watched: {
        type: Boolean,
        default: false
    },
})

const MovieModel = mongoose.model(
    "Movie",
    movieSchema
);

module.exports = MovieModel;