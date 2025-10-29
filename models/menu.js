import mongoose from "mongoose";

const menuSchema = mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  taste: { type: String, enum: ["sweet", "spicy", "sour"], required: true },
  sales: { type: Number, default: 0 },
});

const Menu = mongoose.model("Menu", menuSchema);

export default Menu;
