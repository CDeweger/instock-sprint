import React from "react";

import deleteIcon from "../../assets/icons/delete_outline-24px.svg";
import editIcon from "../../assets/icons/edit-24px.svg";
import "./WarehouseInventoryCard.scss";

function WarehouseInventoryCard({ itemName, category, status, quantity }) {
  //   console.log(props);
  return (
    <div>
      <article className="warehouse-inventory-card">
        <div className="warehouse-inventory-card__wrapper">
          <div className="warehouse-inventory-card__outer-flex">
            <div className="warehouse-inventory-card__inner-flex">
              <div className="warehouse-inventory-card__item">
                <h2 className="warehouse-inventory-card__subtitle">
                  INVENTORY ITEM
                </h2>
                <p>{itemName}</p>
              </div>
              <div className="warehouse-inventory-card__status">
                <h2 className="warehouse-inventory-card__subtitle">STATUS</h2>
                {/* conditional className */}
                <p
                  className={
                    status === "Out of Stock" ? "out-of-stock" : "in-stock"
                  }
                >
                  {status}
                </p>
              </div>
            </div>
            <div className="warehouse-inventory-card__inner-flex">
              <div className="warehouse-inventory-card__category">
                <h2 className="warehouse-inventory-card__subtitle">CATEGORY</h2>
                <p>{category}</p>
              </div>
              <div className="warehouse-inventory-card__qty">
                <h2 className="warehouse-inventory-card__subtitle">QTY</h2>
                <p>{quantity}</p>
              </div>
            </div>
          </div>
          <div className="warehouse-inventory-card__icons">
            <img src={deleteIcon} alt="Delete icon." />
            <img src={editIcon} alt="Edit icon." />
          </div>
        </div>
      </article>
    </div>
  );
}

export default WarehouseInventoryCard;
