import React from "react";

import deleteIcon from "../../assets/icons/delete_outline-24px.svg";
import editIcon from "../../assets/icons/edit-24px.svg";

function WarehouseInventoryCard({ itemName, category, status, quantity }) {
  //   console.log(props);
  return (
    <article>
      <div>
        <h1>INVENTORY ITEM</h1>
        <p>{itemName}</p>
      </div>
      <div>
        <h1>STATUS</h1>
        {/* conditional className */}
        <p className={status === "Out of Stock" ? "out-of-stock" : "in-stock"}>
          {status}
        </p>
      </div>
      <div>
        <h1>CATEGORY</h1>
        <p>{category}</p>
      </div>
      <div>
        <h1>QTY</h1>
        <p>{quantity}</p>
      </div>
      <div>
        <img src={deleteIcon} alt="Delete icon." />
        <img src={editIcon} alt="Edit icon." />
      </div>
    </article>
  );
}

export default WarehouseInventoryCard;
