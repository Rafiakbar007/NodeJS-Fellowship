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

    createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
}
})

const MovieModel = mongoose.model(
    "Movie",
    movieSchema
);

module.exports = MovieModel;