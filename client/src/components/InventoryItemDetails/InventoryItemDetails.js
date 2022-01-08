import React from "react";
import { Link } from "react-router-dom";
import "./InventoryItemDetails.scss";
import editImg from "../../assets/icons/edit-24px.svg";
import arrowBackImg from "../../assets/icons/arrow_back-24px.svg";

const InventoryItemDetails = () => {
  return (
    <>
      <div className="item-container">
        <div className="item-container__header">
          <Link to={`/`} className="item-container__link-back">
            <img src={arrowBackImg} alt="arrow-back"></img>
          </Link>
          <h1 className="item-container__title">Television</h1>
          <Link to={`/`}>
            <img src={editImg} alt="edit"></img>Edit
          </Link>
        </div>
        <div className="item-box">
          <div className="item-info">
            <p className="item-info__title item-info__title-description">
              ITEM DESCRIPTION:
            </p>
            <p className="item-info__detail">
              This 50", 4K LED TV provides a crystal-clear picture and vivid
              colors.
            </p>
            <p className="item-info__title item-info__title-category">
              CATEGORY:
            </p>
            <p className="item-info__detail">Electronics</p>
          </div>

          <div className="stock-info">
            <div className="stock-info__status-qty">
              <p className="item-info__title item-info__title-status">
                STATUS:
              </p>
              <p className="item-info__detail-status">IN STOCK</p>
            </div>
            <div>
              <p className="item-info__title item-info__title-quantity">
                QUANTITY:
              </p>
              <p className="item-info__detail">500</p>
            </div>
          </div>

          <div className="warehouse-info">
            <p className="item-info__title item-info__title-warehouse">
              WAREHOUSE:
            </p>
            <p className="item-info__detail">Manhattan</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default InventoryItemDetails;
