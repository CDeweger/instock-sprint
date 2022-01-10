import React from "react";
import WarehouseInventoryCard from "../WarehouseInventoryCard/WarehouseInventoryCard";

function WarehouseInventories(props) {
  //   console.log(props.inventories);

  return (
    <div className="inventory__inventory-cards">
      {props.inventories.map((inventory) => {
        return (
          <WarehouseInventoryCard
            id={inventory.id}
            key={inventory.id}
            itemName={inventory.itemName}
            category={inventory.category}
            status={inventory.status}
            quantity={inventory.quantity}
          />
        );
      })}
    </div>
  );
}

export default WarehouseInventories;
