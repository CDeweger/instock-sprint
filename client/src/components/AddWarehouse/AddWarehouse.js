import React from "react";
import BackIcon from "../../assets/icons/arrow_back-24px.svg";
import "../AddWarehouse/AddWarehouse.scss";
import { Link } from "react-router-dom";

function AddWarehouse() {
  return (
    <>
      <section className="newWarehouse">
        <div className="newWarehouse__header">
          <Link to='/warehouse'>
            <img
              className="newWarehouse__header-back"
              src={BackIcon}
              alt="going back button"
            />
          </Link>
          <h2 className="newWarehouse__header-title">Add New Warehouse</h2>
        </div>

        <form className="newWarehouse__form">
          <div className="newWarehouse__form-container">
            <div className="newWarehouse__form-details">
              <h3 className="newWarehouse__details-title">Warehouse Details</h3>
              <div className="newWarehouse__details-container">
                <div className="newWarehouse__details-element">
                  <p className="newWarehouse__element-title">Warehouse Name</p>
                  <input
                    className="newWarehouse__details-input"
                    name="warehouseName"
                    placeholder="Warehouse Name"
                  ></input>
                </div>
                <div className="newWarehouse__details-element">
                  <p className="newWarehouse__element-title">Street Address</p>
                  <input
                    className="newWarehouse__details-input"
                    name="address"
                    placeholder="Street Address"
                  ></input>
                </div>
                <div className="newWarehouse__details-element">
                  <p className="newWarehouse__element-title">City</p>
                  <input
                    className="newWarehouse__details-input"
                    name="city"
                    placeholder="City"
                  ></input>
                </div>
                <div className="newWarehouse__details-element">
                  <p className="newWarehouse__element-title">Country</p>
                  <input
                    className="newWarehouse__details-input"
                    name="country"
                    placeholder="Country"
                  ></input>
                </div>
              </div>
            </div>

            <div className="newWarehouse__form-details">
              <h3 className="newWarehouse__details-title">Contact Details</h3>
              <div className="newWarehouse__details-container">
                <div className="newWarehouse__details-element">
                  <p className="newWarehouse__element-title">Contact Name</p>
                  <input
                    className="newWarehouse__details-input"
                    name="contactName"
                    placeholder="Contact name"
                  ></input>
                </div>
                <div className="newWarehouse__details-element">
                  <p className="newWarehouse__element-title">Position</p>
                  <input
                    className="newWarehouse__details-input"
                    name="position"
                    placeholder="Position"
                  ></input>
                </div>
                <div className="newWarehouse__details-element">
                  <p className="newWarehouse__element-title">Phone Number</p>
                  <input
                    className="newWarehouse__details-input"
                    name="phoneNumber"
                    placeholder="Phone Number"
                  ></input>
                </div>
                <div className="newWarehouse__details-element">
                  <p className="newWarehouse__element-title">Email</p>
                  <input
                    className="newWarehouse__details-input"
                    name="email"
                    placeholder="Email"
                  ></input>
                </div>
              </div>
            </div>
          </div>
          <div className="newWarehouse__buttons">
            <div className="newWarehouse__buttons-container">
              <button className="newWarehouse__buttons-cancel">Cancel</button>
              <button className="newWarehouse__buttons-add" type="submit">
                + Add Warehouse
              </button>
            </div>
          </div>
        </form>
      </section>
    </>
  );
}

export default AddWarehouse;
