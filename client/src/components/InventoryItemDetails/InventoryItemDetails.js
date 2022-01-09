import React from "react";
import { Link } from "react-router-dom";
import "./InventoryItemDetails.scss";
//import editImg from "../../assets/icons/edit-24px.svg";
//import arrowBackImg from "../../assets/icons/arrow_back-24px.svg";

const InventoryItemDetails = () => {
  return (
    <>
      <div>
        <div className="item-container">
          <div className="item-container__header">
            <Link to={`/`} className="item-container__link-back">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20 11H7.83L13.42 5.41L12 4L4 12L12 20L13.41 18.59L7.83 13H20V11Z"
                  fill="#2E66E6"
                />
              </svg>
              {/* <img src={arrowBackImg} alt="arrow-back"></img> */}
            </Link>
            <h1 className="item-container__title">Television</h1>

            <div className="item-container__edit-background">
              <Link to={`/`} className="item-container__link">
                <svg
                  className="item-container__edit-img"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="#FFFFFF"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3 17.25V21H6.75L17.81 9.94L14.06 6.19L3 17.25ZM20.71 7.04C21.1 6.65 21.1 6.02 20.71 5.63L18.37 3.29C17.98 2.9 17.35 2.9 16.96 3.29L15.13 5.12L18.88 8.87L20.71 7.04V7.04Z"
                    fill="#FFFFFF"
                  />
                </svg>
                <p className="edit-text">Edit</p>
                {/* <img src={editImg} alt="edit"></img>Edit */}
              </Link>
            </div>
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
                <div className="stock-info__status">
                  <p className="item-info__title item-info__title-status">
                    STATUS:
                  </p>
                  <p className="item-info__detail-status">IN STOCK</p>
                </div>
                <div className="stock-info__qty">
                  <p className="item-info__title item-info__title-quantity">
                    QUANTITY:
                  </p>
                  <p className="item-info__detail">500</p>
                </div>
              </div>
              <div>
                <div className="warehouse-info">
                  <p className="item-info__title item-info__title-warehouse">
                    WAREHOUSE:
                  </p>
                  <p className="item-info__detail">Manhattan</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default InventoryItemDetails;
