import express from "express";
const router = express.Router();
import Menu from "../models/menu.js";

//Post method to post MenuData
router.post("/", async (req, res) => {
  try {
    const response = req.body;
    const NewMenu = new Menu(response);
    const savedMenuData = await NewMenu.save();
    console.log("data saved successfully...");
    res.status(200).json(savedMenuData);
  } catch (error) {
    console.log("Error saving menuData:", error);
    res.status(500).json({ message: "Internel server error" });
  }
});

//Get method to fetch Menu data
router.get("/", async (req, res) => {
  try {
    const data = await Menu.find();
    console.log("data fetched successfully...");
    res.status(200).json(data);
  } catch (error) {
    console.log("Error fetching menuData:", error);
    res.status(500).json({ message: "Internel server error" });
  }
});

router.get("/:tasteType", async (req, res) => {
  try {
    const tasteType = req.params.tasteType;
    if (
      tasteType === "sweet" ||
      tasteType === "spicy" ||
      tasteType === "sour"
    ) {
      const response = await Menu.find({ taste: tasteType });
      console.log("Menu fetched..");
      res.status(200).json(response);
    } else {
      res.status(404).json({ error: "Invalid tasteType" });
    }
  } catch (error) {
    res.status(500).json({ error: "Internel server error" });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const menuItemId = req.params.id;
    const menuItem = req.body;

    const response = await Menu.findByIdAndUpdate(menuItemId, menuItem, {
      new: true,
      runValidators: true,
    });

    if (!response) {
      return res.status(400).json({ error: "Menu not found!" });
    }
    console.log("MenuItem Updated successfully");
    res.status(200).json(response);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internel server error" });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const itemId = req.params.id;
    const deletedItem = await Menu.findByIdAndDelete(itemId);

    if (!deletedItem) {
      return res.status(400).json({ error: "MenuItem not found!" });
    }

    console.log("MenuItem deleted successfully...");
    res.status(200).json({ message: "MenuItem deleted successfully..." });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internel server error" });
  }
});

export default router;
