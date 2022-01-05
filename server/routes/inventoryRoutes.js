const express = require("express");
const { v4: uuidv4 } = require("uuid");
const fs = require("fs");

const inventoryRouter = express.Router();

//post a new inventory item
inventoryRouter.post("/", (req, res) => {
  // validation
  if (
    !req.body.warehouseID ||
    !req.body.warehouseName ||
    !req.body.itemName ||
    !req.body.description ||
    !req.body.category ||
    !req.body.status ||
    !req.body.quantity
  ) {
    res.status(400).json({
      message:
        "please include warehouse ID, warehouse name, item name, item description, item category, item status, item quantity",
    });
  }
  //newInventory structure should be like this
  /*
 const newInventory = {
   id: uuidv4(),
   warehouseID: req.body.warehouseID,
   warehouseName: req.body.warehouseName,
   itemName: req.body.itemName,
   description: req.body.description,
   category: req.body.category,
   status: req.body.status,
   quantity: req.body.quantity
 };
 */

  //read file & write file
  try {
    let currentInventoryList = JSON.parse(
      fs.readFileSync("./data/inventories.json")
    );
    let newInventory = { id: uuidv4(), ...req.body };
    console.log(newInventory);
    let updatedInventoryList = { ...currentInventoryList, newInventory };
    fs.writeFileSync(
      "./data/inventories.json",
      JSON.stringify(updatedInventoryList)
    );
    res.status(200).send(newInventory);
  } catch (e) {
    console.log(e);
    res.status(400).json({ message: "something went wrong" });
  }
});

module.exports = inventoryRouter;
