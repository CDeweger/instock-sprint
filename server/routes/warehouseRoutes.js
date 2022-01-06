const express = require("express");
const { v4: uuidv4 } = require("uuid");
const fs = require("fs");

const warehouseRouter = express.Router();

// update a warehouse
warehouseRouter.patch("/:warehouseID/edit", (req, res) => {
  const warehouseID = req.params.warehouseID;
  let warehouseList = JSON.parse(fs.readFileSync("./data/warehouses.json"));
  //find the warehouse to edit
  let targetWarehouse = warehouseList.find(
    (warehouse) => warehouse.id === warehouseID
  );
  if (targetWarehouse) {
    targetWarehouse.name = req.body.name;
    targetWarehouse.address = req.body.address;
    targetWarehouse.city = req.body.city;
    targetWarehouse.country = req.body.country;
    targetWarehouse.contact = req.body.contact;
    // contact here is an object
    fs.writeFileSync("./data/warehouses.json", JSON.stringify(warehouseList));
    res.status(200).send(targetWarehouse);
  } else {
    res.status(400).json({ message: "warehouse not found" });
  }
});

module.exports = warehouseRouter;
