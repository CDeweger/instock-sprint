import React from "react";

function FakeInventoryCard({
  id,
  warehouseID,
  warehouseName,
  itemName,
  description,
  category,
  status,
  quantity,
}) {
  return (
    <div>
      <h1>{itemName}</h1>
      <h1>{description}</h1>
      <h1>{category}</h1>
      <h1>{status}</h1>
      <h1>{quantity}</h1>
    </div>
  );
}

export default FakeInventoryCard;
