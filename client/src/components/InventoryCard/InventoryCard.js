import React from "react";
import deleteIcon from "../../assets/icons/delete_outline-24px.svg";
import editIcon from "../../assets/icons/edit-24px.svg";
import "./InventoryCard.scss";
import { Link } from "react-router-dom";

function InventoryCard({
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
    <div className="inventory-card">
      <div>
        <h1>INVENTORY ITEM</h1>
        <Link
          to={{
            pathname: "/inventory/:id/details",
            state: {},
          }}
        >
          <p>{itemName}</p>
        </Link>
      </div>
      <div>
        <h1>CATEGORY</h1>
        <p>{category}</p>
      </div>
      <div className={status === "Out of Stock" ? "out-of-stock" : "in-stock"}>
        <h1>Status</h1>
        <p>{status}</p>
      </div>
      <div>
        <h1>QTY</h1>
        <p>{quantity}</p>
      </div>
      <div>
        <h1>WAREHOUSE</h1>
        <p>{warehouseName}</p>
      </div>
      <div>
        <Link
          to={{
            pathname: "/inventory/:id/warehouse/:id/delete",
            state: {},
          }}
        >
          <img src={deleteIcon} alt="Delete icon" />
        </Link>
        {/* Please add pathname: "./inventory/:id/warehouse/:id/edit" ones edit inventory component is setup*/}
        <Link
          to={{
            pathname: "./inventory/",
            state: {},
          }}
        >
          <img src={editIcon} alt="Edit icon" />
        </Link>
      </div>
    </div>
  );
}

export default InventoryCard;
