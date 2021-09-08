const router = require("express").Router();
const workout = require("../../models/workout");


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

router.put("/workouts/:id", async ({ body, params }, res) => { 

    try {
        const workoutData = await workout.findOneAndUpdate({ '_id': params.id }, {"$push": {exercises: body}})
        
        console.log(workoutData)
        res.json(workoutData);
    } catch (err) {
        console.log(err)
        res.status(500).json(err);
    }
})


module.exports = router;
