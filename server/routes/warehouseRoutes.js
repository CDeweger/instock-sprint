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

//function for read file
const readFile = () => {
  const warehousesData = fs.readFileSync("./data/warehouses.json");
  return JSON.parse(warehousesData);
};

//GET /warehouse/:warehouseId
warehouseRouter.get("/:warehouseId", (req, res) => {
  const warehousesData = readFile();
  const warehouseId = req.params.warehouseId;

  if (warehouseId) {
    res.status(200).send(
      warehousesData.filter((warehouse) => {
        return warehouse.id === warehouseId;
      })
    );
  } else {
    res.status(400).send("warehouse not found");

    // res.status(404).send("warehouse not found");
  }
});

module.exports = warehouseRouter;
