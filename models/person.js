import mongoose from "mongoose";

const personSchema = mongoose.Schema({
  name: { type: String, required: true },
  age: { type: Number },
  work: {
    type: String,
    enum: ["chef", "woner", "manager", "waiter"],
    required: true,
  },
  mobile: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  address: { type: String, required: true },
  salary: { type: Number, required: true },
});

const Person = mongoose.model("Person", personSchema);
export default Person;
