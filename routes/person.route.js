import express from "express";
const router = express.Router();
import Person from "../models/person.js";

router.post("/", async (req, res) => {
  try {
    const data = req.body;

    //create new Person document using Mongoose Model
    const newPerson = new Person(data);

    //save the newPerson data into database
    const response = await newPerson.save();
    console.log("data saved");
    res.status(200).json(response);
  } catch (error) {
    console.log("Error saving personData:", error);
    res.status(500).json({ message: "Internel server error" });
  }
});

//Get method to fetch person data from database
router.get("/", async (req, res) => {
  try {
    const data = await Person.find();
    console.log("data saved");
    res.status(200).json(data);
  } catch (error) {
    console.log("Error fetching personData:", error);
    res.status(500).json({ message: "Internel server error" });
  }
});

router.get("/:workType", async (req, res) => {
  const workType = req.params.workType;
  try {
    if (
      workType === "chef" ||
      workType === "woner" ||
      workType === "manager" ||
      workType === "waiter"
    ) {
      const response = await Person.find({ work: workType });
      console.log("response fetched");
      res.status(200).json(response);
    } else {
      res.status(404).json({ error: "Invalid workType" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internel sever error" });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const personId = req.params.id;
    const updatedPersonData = req.body;

    const response = await Person.findByIdAndUpdate(
      personId,
      updatedPersonData,
      {
        new: true,
        runValidators: true,
      }
    );
    if (!response) {
      return res.status(404).json({ error: "Person not found" });
    }
    console.log("person updated successfully");
    res.status(200).json(response);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Interner server error" });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const personId = req.params.id;
    const deletedPerson = await Person.findByIdAndDelete(personId);

    if (!deletedPerson) {
      return res.status(404).json({ error: "Person not found!" });
    }

    console.log("Person deleted successfully");
    res.status(200).json({message: 'person Deleted successfully'});
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internel server error" });
  }
});

export default router;
