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

//ticket15: delete a warehouse and delete all inventory items in the given warehouse - by Yuxian
warehouseRouter.delete("/:warehouseID", (req, res) => {
  const warehouseID = req.params.warehouseID;
  const warehouseList = JSON.parse(fs.readFileSync("./data/warehouses.json"));

  // find the target warehouse
  const targetWarehouse = warehouseList.find((warehouse) => {
    return warehouse.id === warehouseID;
  });

  if (targetWarehouse) {
    //remove the target warehouse from the array of warehouse list data.
    warehouseList.splice(warehouseList.indexOf(targetWarehouse), 1);

    fs.writeFile(
      "./data/warehouses.json",
      JSON.stringify(warehouseList),
      (err) => {
        if (err) {
          res.status(500).send(err);
        }
        res.status(200).json(warehouseList);
      }
    );

    //delete the inventories data as well
    let inventoriesData = [];

    fs.readFile("./data/inventories.json", (err, data) => {
      if (err) {
        console.log(err);
        return;
      }
      inventoriesData = JSON.parse(data);

      let newInventory = inventoriesData.filter(
        (data) => data.warehouseID !== warehouseID
      );

      fs.writeFile(
        "./data/inventories.json",
        JSON.stringify(newInventory),
        (err, data) => {
          if (err) {
            console.log(err);
            return;
          }
        }
      );
    });
  } else {
    res.status(404).send("Cannot find that warehouse");
  }
});

module.exports = warehouseRouter;
