const router = require("express").Router();
const workout = require("../../models/workout");

const urlParams = new URL(document.location).searchParams
var search = urlParams.get('id')

router.post("/workouts", async ({ body }, res) => {
    try {
        const workoutData = await workout.create(body)

        console.log(workoutData)
        res.json(workoutData);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get("/workouts", async ({ body }, res) => {
    try {
        const workoutData = await workout.find({})

        console.log(workoutData)
        res.json(workoutData);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.put(`/workouts/${search}`, async ({ body }, res) => {
    try {
        const workoutData = await workout.findOneAndUpdate({})
    } catch (err) {
        res.status(500).json(err);
    }
})


module.exports = router;
