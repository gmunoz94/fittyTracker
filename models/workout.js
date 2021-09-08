const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    day: {
        type: Date,
        required: true,
    },
    exercises: [
        {
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
            },
        },
    ],
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;