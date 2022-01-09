const express = require("express");
const { v4: uuidv4 } = require("uuid");
const fs = require("fs");

const inventoryRouter = express.Router();

// function for write file
const writeFile = (inventoriesData) => {
  fs.writeFileSync(
    "./data/inventories.json",
    JSON.stringify(inventoriesData, null, 2)
  );
};

//to read inventories.json
const readData = () => {
  const inventoriesData = fs.readFileSync("./data/inventories.json");
  return JSON.parse(inventoriesData);
};

//post a new inventory item
inventoryRouter.post("/", (req, res) => {
  // validation
  console.log(req.body);
  console.log(req.body.warehouseName);
  console.log(req.body.itemName);
  if (
    req.body.warehouseName &&
    req.body.itemName &&
    req.body.description &&
    req.body.category &&
    req.body.status &&
    req.body.quantity >= 0
  ) {
    //read file & write file
    try {
      let currentInventoryList = readData();
      let newInventory = { id: uuidv4(), ...req.body };
      console.log(newInventory);
      let updatedInventoryList = [...currentInventoryList, newInventory];
      writeFile(updatedInventoryList);
      return res.status(200).send(newInventory);
    } catch (e) {
      console.log(e);
      return res.status(400).json({ message: "something went wrong" });
    }
  } else {
    res.status(400).json({
      message:
        "please include warehouse name, item name, item description, item quantity",
    });
  }
});

// GET List Of All INVENTORY
inventoryRouter.get("/", (req, res) => {
  let inventoriesData = readData();
  return res.status(200).send(inventoriesData);
});

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

//// get an inventory by ID
inventoryRouter.get("/:id", (req, res) => {
  const inventoriesData = readData();
  let targetInventory = inventoriesData.filter(
    (inventory) => inventory.id === req.params.id
  );
  if (targetInventory.length === 0) {
    return res.status(404).send("inventory is not found.");
  }
  res.status(200).json(targetInventory[0]);
});

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
