const express = require("express");
const { v4: uuidv4 } = require("uuid");
const fs = require("fs");

const warehouseRouter = express.Router();

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

// update a warehouse
warehouseRouter.patch("/:warehouseID/edit", (req, res) => {
  const warehouseID = req.params.warehouseID;
  let warehouseList = readFile();
  // let warehouseList = JSON.parse(fs.readFileSync("./data/warehouses.json"));

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
    writeFile(warehouseList);
    // fs.writeFileSync("./data/warehouses.json", JSON.stringify(warehouseList));
    res.status(200).send(targetWarehouse);
  } else {
    res.status(400).json({ message: "warehouse not found" });
  }
});

<<<<<<< HEAD
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

=======
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
    return res.status(400).send("Please provide all information.");
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

>>>>>>> develop
module.exports = warehouseRouter;
