const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const path = require("path");

const Task = require("./models/Task");

const app = express();
const PORT = 3000;

/* =========================
   MIDDLEWARE
========================= */

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, "public")));

/* =========================
   MONGODB CONNECTION
========================= */

mongoose.connect("mongodb://127.0.0.1:27017/todoDB")

.then(() => {
    console.log("MongoDB Connected");
})

.catch((err) => {
    console.log(err);
});

/* =========================
   GET TASKS
========================= */

app.get("/tasks", async (req, res) => {

    const tasks = await Task.find();

    res.json(tasks);
});

/* =========================
   ADD TASK
========================= */

app.post("/addTask", async (req, res) => {

    const newTask = new Task({
        text: req.body.task
    });

    await newTask.save();

    res.json({
        message: "Task Added"
    });
});

/* =========================
   UPDATE TASK
========================= */

app.put("/updateTask/:id", async (req, res) => {

    await Task.findByIdAndUpdate(req.params.id, {

        text: req.body.task

    });

    res.json({
        message: "Task Updated"
    });
});

/* =========================
   DELETE TASK
========================= */

app.delete("/deleteTask/:id", async (req, res) => {

    await Task.findByIdAndDelete(req.params.id);

    res.json({
        message: "Task Deleted"
    });
});

/* =========================
   START SERVER
========================= */

app.listen(PORT, () => {

    console.log(`Server running on http://localhost:${PORT}`);
});