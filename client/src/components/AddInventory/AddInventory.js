import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import BackIcon from "../../assets/icons/arrow_back-24px.svg";
import ErrorIcon from "../../assets/icons/error-24px.svg";

import "./AddInventory.scss";

class AddInventory extends Component {
  state = {
    warehouse: "Please select",
    category: "Please select",
    status: "In Stock",
  };

  //   for status
  handleStatusChange = (e) => {
    const { value } = e.target;
    this.setState({
      status: value,
    });
  };

  // to validate quantity input on keypress
  handleKeyPress = (event) => {
    if (event.target.value < 0 || event.target.value % 1 != 0) {
      alert("Please enter valid quantity, quantity should be positive integer");
    }
  };
  //   for categories options
  handleCategoryChange = (e) => {
    this.setState({ category: e.target.value });
  };

  //   for warehouse change
  handleWarehouseChange = (e) => {
    this.setState({ warehouse: e.target.value });
  };

  getWarehouseID = (arr) => {
    const warehouseElement = arr.find(
      (element) => element.warehouseName === this.state.warehouse
    );
    return warehouseElement.warehouseID;
  };

  //   handle form submit
  handleSubmit = (event) => {
    event.preventDefault();

    // to take make post request go through on out of stock
    const getQuantity = () => {
      if (event.target.quantity.value === "") {
        return 0;
      } else {
        return event.target.quantity.value;
      }
    };

    const itemName = event.target.itemName.value;
    const description = event.target.description.value;

    const quantity = getQuantity();
    const status = this.state.status;
    const category = this.state.category;
    const warehouse = this.state.warehouse;
    const inventoriesData = this.props.location.state.inventoriesData;
    const warehouseID = this.getWarehouseID(inventoriesData);

    console.log(
      itemName,
      description,
      quantity,
      status,
      category,
      warehouse,
      warehouseID
    );

    // make post request
    const body = {
      warehouseID: warehouseID,
      warehouseName: warehouse,
      itemName: itemName,
      description: description,
      category: category,
      status: status,
      quantity: quantity,
    };

    axios
      .post("http://localhost:8080/inventory", body)
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
    event.target.reset();
    this.props.history.push("/inventory");
  };

  render() {
    return (
      <form
        action=""
        id="addInventory"
        className="add-inventory"
        onSubmit={this.handleSubmit}
      >
        <div className="add-inventory__header">
          <Link to="/inventory">
            <img
              src={BackIcon}
              alt="back icon"
              className="add-inventory__back-icon"
            />
          </Link>
          <h1 className="add-inventory__header-title">
            Add New Inventory Item
          </h1>
        </div>
        <div className="add-inventory__container">
          <div className="add-inventory__details">
            <h2 className="add-inventory__details-title">Item Details</h2>
            <div className="add-inventory__detail-element">
              <label
                htmlFor="itemName"
                className="add-inventory__element-label"
              >
                Item Name
                <input
                  type="text"
                  name="itemName"
                  required
                  className="add-inventory__text-input add-inventory__item-name"
                  placeholder="Item Name"
                />
              </label>
              {this.state.itemName === "" && (
                <div className="add-inventory__warning">
                  <img
                    src={ErrorIcon}
                    alt="error icon"
                    className="add-nventory__error-icon"
                  />
                  <p className="add-nventory__warning-text">
                    This field is required
                  </p>
                </div>
              )}
              <label
                htmlFor="description"
                className="add-inventory__element-label"
              >
                Description
                <input
                  required
                  type="text"
                  name="description"
                  placeholder="Please enter a brief description"
                  className="add-inventory__text-input add-inventory__description"
                />
              </label>
              {this.state.description === "" && (
                <div className="add-inventory__warning">
                  <img
                    src={ErrorIcon}
                    alt="error icon"
                    className="add-inventory__error-icon"
                  />
                  <p className="add-inventory__warning-text">
                    This field is required
                  </p>
                </div>
              )}

              <label className="add-inventory__element-label">
                Category
                <select
                  name=""
                  className="add-inventory__select-input add-inventory__category"
                  value={this.state.category}
                  id=""
                  onChange={this.handleCategoryChange}
                >
                  {/* <option value="Please select">Please select</option> */}
                  {this.props.location.state.categories.map((option) => {
                    return (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    );
                  })}
                </select>
              </label>
            </div>
          </div>

          <div className="add-inventory__availability">
            <h2 className="add-inventory__availability-title">
              Item Availability
            </h2>
            <div className="add-inventory__availability-element">
              <div className="add-inventory__availability-radio">
                <label className="add-inventory__element-label add-inventory__radio-label">
                  Status
                </label>
                <div className="add-inventory__radio-buttons">
                  <div className="add-inventory__radio-button">
                    <input
                      type="radio"
                      value="In Stock"
                      id="in-stock"
                      name="status"
                      onChange={this.handleStatusChange}
                      className="add-inventory__input-select"
                    />
                    <label
                      className={`add-inventory__radio-value
                            ${
                              this.state.status === "In Stock"
                                ? "add-inventory__radio-active"
                                : "add-inventory__radio-inactive"
                            }`}
                      htmlFor="in-stock"
                    >
                      In Stock
                    </label>
                  </div>
                  <div className="add-inventory__radio-button">
                    <input
                      type="radio"
                      value="Out of Stock"
                      id="out-of-stock"
                      name="status"
                      onChange={this.handleStatusChange}
                      className="add-inventory__input-select"
                    />
                    <label
                      htmlFor="out-of-stock"
                      className={`add-inventory__radio-value
                      ${
                        this.state.status === "Out of Stock"
                          ? "add-inventory__radio-active"
                          : "add-inventory__radio-inactive"
                      }`}
                    >
                      Out of Stock
                    </label>
                  </div>
                </div>
              </div>

              {/* <label htmlFor="in-stock">In stock</label> */}
              {/* <input
              type="radio"
              id="out-of-stock"
              value="Out of Stock"
              name="status"
              onChange={this.handleStatusChange}
            /> */}
              {/* conditional class on quantity to make display non on out of stock */}
              <div
                className={
                  this.state.status === "In Stock" ? "active" : "not-active"
                }
              >
                <label
                  htmlFor="quantity"
                  className="add-inventory__element-label"
                >
                  Quantity
                  <input
                    type="number"
                    min="0"
                    onKeyPress={this.handleKeyPress}
                    placeholder="0"
                    name="quantity"
                    min="1"
                    step="1"
                    className="add-inventory__text-input add-inventory__item-quantity"
                  />
                </label>
              </div>
              <label className="add-inventory__element-label">
                Warehouse
                <select
                  name=""
                  value={this.state.warehouse}
                  id=""
                  onChange={this.handleWarehouseChange}
                  className="add-inventory__select-input add-inventory__warehouse"
                >
                  {/* <option value="Please select">Please select</option> */}
                  {this.props.location.state.warehouses.map((option) => {
                    return (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    );
                  })}
                </select>
              </label>
            </div>
          </div>
        </div>
        <div className="add-inventory__actions">
          <Link to="/inventory">
            <button className="add-inventory__button-cancel">Cancel</button>
          </Link>
          <button
            type="submit"
            className="add-inventory__button-save"
            form="addInventory"
          >
            + Add Item
          </button>
        </div>
      </form>
    );
  }
}

export default AddInventory;
