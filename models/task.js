import mongoose from "mongoose";
const { Schema } = mongoose;
const TaskSchema = new Schema({
  name: {
    type: String,
    required: [true, "Must provide name."],
    trim: true,
    maxlength: [20, "Name can not be more then 20 characters."],
  },
  completed: {
    type: Boolean,
    default: false,
  },
});

const Task = mongoose.model("Task", TaskSchema);

export { Task };
