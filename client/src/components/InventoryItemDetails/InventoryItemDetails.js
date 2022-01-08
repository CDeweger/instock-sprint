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
          <img src={arrowBackImg} alt="arrow-back"></img>
          <h1 className="item-container__title">Television</h1>
          <Link to={`/`}>
            <img src={editImg} alt="edit"></img>Edit
          </Link>
        </div>
        <div className="item-info">
          <p className="item-info__description">ITEM DESCRIPTION</p>
          <p>
            This 50", 4K LED TV provides a crystal-clear picture and vivid
            colors.
          </p>
          <p>CATEGORY</p>
          <p>Electronics</p>
        </div>
        <div className="stock-status">
          <div>
            <p>STATUS</p>
            <p>IN STOCK</p>
          </div>
          <div>
            <p>QUANTITY</p>
            <p>500</p>
          </div>
        </div>
        <div>
          <p>WAREHOUSE:</p>
          <p>Manhattan</p>
        </div>
      </div>
    </>
  );
};

export default InventoryItemDetails;
