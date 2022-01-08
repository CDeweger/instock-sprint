import React from "react";
import "../InventoryList/InventoryList.scss";
import SortIcon from "../../assets/icons/sort-24px.svg";
import { Link } from "react-router-dom";
import DeleteIcon from "../../assets/icons/delete_outline-24px.svg";
import EditIcon from "../../assets/icons/edit-24px.svg";
import ChevronIcon from "../../assets/icons/chevron_right-24px.svg";

const InventoryList = () => {
  return (
    <>
      <section className="inventory-container">
        <div className="header">
          <h2 className="header__title">Inventory</h2>
          <div className="header-section">
            <input
              className="header-section__search"
              placeholder="Search..."
            ></input>
            <Link to="/inventory/add">
              <button className="header-section__addButton">
                + Add New Item
              </button>
            </Link>
          </div>
        </div>

        <div className="inventory-table">
          <div className="inventory-table__head">
            <div className="inventory-list">
              <h3 className="inventory-list__item">INVENTORY ITEM</h3>
              <img
                className="inventory-list__sortingImg"
                src={SortIcon}
                alt="sort icon"
              />
            </div>

            <div className="inventory-list">
              <h3 className="inventory-list__item">CATEGORY</h3>
              <img
                className="inventory-list__sortingImg"
                src={SortIcon}
                alt="sort icon"
              />
            </div>

            <div className="inventory-list">
              <h3 className="inventory-list__item">STATUS</h3>
              <img
                className="inventory-list__sortingImg"
                src={SortIcon}
                alt="sort icon"
              />
            </div>

            <div className="inventory-list">
              <h3 className="inventory-list__item">QTY</h3>
              <img
                className="inventory-list__sortingImg"
                src={SortIcon}
                alt="sort icon"
              />
            </div>

            <div className="inventory-list">
              <h3 className="inventory-list__item">WAREHOUSE</h3>
              <img
                className="inventory-list__sortingImg"
                src={SortIcon}
                alt="sort icon"
              />
            </div>

            <div className="inventory-list">
              <h3 className="inventory-list__item">ACTIONS</h3>
            </div>
          </div>

          {/* Inventory Item */}
          <div className="inventory-data">
            <div className="inventory-item">
              <h3 className="inventory-item__name">Telivision</h3>
              <img
                className="inventory-item__icon"
                src={ChevronIcon}
                alt="chevron icon"
              />
            </div>
            {/* Inventory Item Info */}
            <div className="inventory-item-info">
              <h3 className="inventory-item-info__title">STATUS</h3>
              <h3 className="inventory-item-info__data">INSTOCK</h3>
            </div>

            <div className="inventory-item-info">
              <h3 className="inventory-item-info__title">CATEGORY</h3>
              <h3 className="inventory-item-info__data">Electronics</h3>
            </div>

            <div className="inventory-item-info">
              <h3 className="inventory-item-info__title">QTY</h3>
              <h3 className="inventory-item-info__data">500</h3>
            </div>

            <div className="inventory-item-info">
              <h3 className="inventory-item-info__title">WAREHOUSE</h3>
              <h3 className="inventory-item-info__data">Manhattan</h3>
            </div>

            {/* Adding Delete and Edit Icons */}
            <div className="inventory-item-icon">
              <img
                className="inventory-item-icon__delete"
                src={DeleteIcon}
                alt="delete icon"
              />
              <img
                className="inventory-item-icon__edit"
                src={EditIcon}
                alt="edit icon"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default InventoryList;
