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

// function for write file
const writeFile = (warehousesData) => {
  fs.writeFileSync(
    "./data/warehouses.json",
    JSON.stringify(warehousesData, null, 2)
  );
};

//GET /warehouse/:warehouseId
warehouseRouter.get("/:warehouseId", (req, res) => {
  const warehouseId = req.params.warehouseId;
  const warehousesData = readFile().find(
    (warehouse) => warehouse.id === warehouseId
  );

  if (warehousesData) {
    res.status(200).json(warehousesData);
  } else {
    res.status(404).send("Warehouse not found");
  }
});

//POST (create) a new warehouse
warehouseRouter.post("/", (req, res) => {
  const warehousesData = readFile();

  if (
    !req.body.warehouseName ||
    !req.body.address ||
    !req.body.city ||
    !req.body.country ||
    !req.body.contactName ||
    !req.body.position ||
    !req.body.phoneNumber ||
    !req.body.email
  ) {
    return res.status(400).send("please provide all required information.");
  }

  const newWarehouseObj = {
    id: uuidv4(),
    name: req.body.warehouseName,
    address: req.body.address,
    city: req.body.city,
    country: req.body.country,
    contact: {
      name: req.body.contactName,
      position: req.body.position,
      phone: req.body.phoneNumber,
      email: req.body.email,
    },
  };
  warehousesData.push(newWarehouseObj);
  writeFile(warehousesData);
  res.status(201).json(newWarehouseObj);
});

module.exports = warehouseRouter;
