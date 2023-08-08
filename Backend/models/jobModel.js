const { Int32 } = require("mongodb");
const mongoose = require("mongoose");

const jobSchema = mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "user",
      },

    title: {
        type: String,
        required: ["Please fill job title correctly"]
    },

    comments: {
        type: String,
        required: ["Please give full details about the project"]
    },

    photo: {
        type: String,
        required: [true, "Please add a photo"]
    },

    item: {
        type: String,
        required: [true, "Please select number of items"]
    },

    critical: {
        type: String,
        required: ["State situation of your project"]
    },

    createdAt: {
        type: Date,
        required: true,
      },
});

const Job = mongoose.model("Job", jobSchema);
module.exports = Job;