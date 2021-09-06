const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    type: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    weight: {
        type: Number,
    },
    sets: {
        type: Number,
    },
    reps: {
        type: Number,
    },
    distance: {
        type: Number,
    },
    duration: {
        type: Number,
        required: true,
    }
})

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;