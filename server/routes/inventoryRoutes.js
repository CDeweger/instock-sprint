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

  /*
  //newInventory structure should be like this
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

//to read inventories.json
const readData = () => {
  const inventoriesData = fs.readFileSync("./data/inventories.json");
  return JSON.parse(inventoriesData);
};

// get inventory for given warehouse ID
inventoryRouter.get("/warehouse/:warehouseID", (req, res) => {
  const inventoriesData = readData();
  let warehouseInventories = inventoriesData.filter(
    (inventory) => inventory.warehouseID === req.params.warehouseID
  );
  if (warehouseInventories.length === 0) {
    return res.status(404).send("Warehouse is not found.");
  }
  res.status(200).json(warehouseInventories);
});

// function for write file
const writeFile = (inventoriesData) => {
  fs.writeFileSync(
    "./data/inventories.json",
    JSON.stringify(inventoriesData, null, 2)
  );
};

inventoryRouter.patch("/:id/edit", (req, res) => {
  const inventoriesData = readData();
  const inventoryId = req.params.id;

  let targetInventoryItem = inventoriesData.find(
    (inventoryItem) => inventoryItem.id === inventoryId
  );

  if (targetInventoryItem) {
    targetInventoryItem.itemName = req.body.itemName;
    targetInventoryItem.description = req.body.description;
    targetInventoryItem.category = req.body.category;
    targetInventoryItem.status = req.body.status;
    targetInventoryItem.quantity = req.body.quantity;
    targetInventoryItem.warehouseName = req.body.warehouseName;
    writeFile(inventoriesData);
    res.status(200).send(targetInventoryItem);
  } else {
    res.status(400).send("Inventory item not found");
  }
});

module.exports = inventoryRouter;
