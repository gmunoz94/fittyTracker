const router = require("express").Router();
const workout = require("../../models/workout");

router.post("/api/workout", async ({ body }, res) => {
    try {
        const workoutData = await workout.create(body)

        res.json(workoutData);
    } catch (err) {
        res.status(500).json(err);
    }
});


module.exports = router;
