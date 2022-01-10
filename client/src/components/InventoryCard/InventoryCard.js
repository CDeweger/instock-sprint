import React from "react";
import deleteIcon from "../../assets/icons/delete_outline-24px.svg";
import editIcon from "../../assets/icons/edit-24px.svg";
import ChevronIcon from "../../assets/icons/chevron_right-24px.svg";

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
    <>
      <div className="inventory__card">
        <div className="inventory__card-container">
          <div className="inventory__card-info">
            <h3 className="inventory__card-title">INVENTORY ITEM</h3>
            <Link
              to={{
                pathname: "/inventory/:id/details",
                state: {},
              }}
              className="inventory__link"
            >
              <div className="inventory__card-name">
                <p className="inventory__card-text">{itemName}</p>
                <img
                  className="inventory__icon"
                  src={ChevronIcon}
                  alt="chevron icon"
                />
              </div>
            </Link>
          </div>

          <div className="inventory__card-info">
            <h3 className="inventory__card-title">CATEGORY</h3>
            <div className="inventory__card-name">
              <p className="inventory__card-text">{category}</p>
            </div>
          </div>

          <div
            className={status === "Out of Stock" ? "out-of-stock" : "in-stock"}
          >
            <h3 className="inventory__card-title">Status</h3>
            <div className="inventory__card-name">
              <p className="inventory__card-text">{status}</p>
            </div>
          </div>

          <div className="inventory__card-info">
            <h3 className="inventory__card-title inventory__card-quantity">QTY</h3>
            <div className="inventory__card-name">
              <p className="inventory__card-text">{quantity}</p>
            </div>
          </div>

          <div className="inventory__card-info">
            <h3 className="inventory__card-title">WAREHOUSE</h3>
            <p className="inventory__card-text">{warehouseName}</p>
          </div>

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
    </>
  );
}

export default InventoryCard;
