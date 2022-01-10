import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
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
      <div>
        <h1>Add New Inventory Item</h1>
        <form action="" id="addInventory" onSubmit={this.handleSubmit}>
          <div>
            <h2>Item Details</h2>
            <label htmlFor="itemName">Item Name</label>
            <input type="text" name="itemName" placeholder="Item Name" />
            <label htmlFor="description">Description</label>
            <input
              type="text"
              name="description"
              placeholder="Please enter a brief description"
            />
            <h3>Category</h3>
            <select
              name=""
              value={this.state.category}
              id=""
              onChange={this.handleCategoryChange}
            >
              <option value="Please select">Please select</option>
              {this.props.location.state.categories.map((option) => {
                return (
                  <option key={option} value={option}>
                    {option}
                  </option>
                );
              })}
            </select>
          </div>
          <div>
            <h2>Item Availability</h2>
            <h3>Status</h3>
            <label htmlFor="in-stock">In stock</label>
            <input
              type="radio"
              value="In Stock"
              id="in-stock"
              name="status"
              onChange={this.handleStatusChange}
            />
            <label htmlFor="out-of-stock">Out of Stock</label>
            <input
              type="radio"
              id="out-of-stock"
              value="Out of Stock"
              name="status"
              onChange={this.handleStatusChange}
            />
            {/* conditional class on quantity to make display non on out of stock */}
            <div
              className={
                this.state.status === "In Stock" ? "active" : "not-active"
              }
            >
              <label htmlFor="quantity">Quantity</label>
              <input
                type="number"
                min="0"
                onKeyPress={this.handleKeyPress}
                placeholder="0"
                name="quantity"
              />
            </div>
            <h3>Warehouse</h3>
            <select
              name=""
              value={this.state.warehouse}
              id=""
              onChange={this.handleWarehouseChange}
            >
              <option value="Please select">Please select</option>
              {this.props.location.state.warehouses.map((option) => {
                return (
                  <option key={option} value={option}>
                    {option}
                  </option>
                );
              })}
            </select>
          </div>
        </form>
        <Link to="/inventory">
          <button>Cancel</button>
        </Link>
        <button type="submit" form="addInventory">
          + Add Item
        </button>
      </div>
    );
  }
}

export default AddInventory;
