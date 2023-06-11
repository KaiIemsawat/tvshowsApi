const mongoose = require("mongoose");

const TvShow = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Title is required"],
        minLength: [3, "The title must be 3 or more characters"],
        maxLength: [10, "The title can't be over 10 characters"],
    },
    releaseYear: {
        type: Number,
        min: [1980, "No show before 1980 allowed"],
    },
    network: {
        type: String,
        required: [true, "Network is required"],
        minLength: [3, "The network must be 3 or more characters"],
        maxLength: [10, "The network can't be over 10 characters"],
    },
    creater: {
        type: String,
    },
    genre: {
        type: String,
    },
});

const Show = mongoose.model("Show", TvShow);

module.exports = Show;
