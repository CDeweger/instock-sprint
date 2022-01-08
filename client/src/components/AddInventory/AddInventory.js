import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
// use parse from html-react-parser make html text react readable
import parse from "html-react-parser";

class AddInventory extends Component {
  state = {
    warehouse: "Please select",
    category: "Please select",
    status: "",
  };

  //   for categories options
  handleChange = (e) => {
    this.setState({ category: e.target.value });
  };
  //   to get the options for select tag
  getOptions = (arr) => {
    let optionValue = "";
    for (let i = 0; i < arr.length; i++) {
      optionValue += `<option value="${arr[i]}">${arr[i]}</option>;`;
    }
    return optionValue;
  };

  //   handle form submit
  handleSubmit = (event) => {
    event.preventDefault();
    const itemName = event.target.itemName.value;
    const description = event.target.description.value;
    const quantity = event.target.quantity.value;
    const status = event.target.status.value;
    const category = event.target.categoryOption.value;
    const warehouse = event.target.warehouseOption.value;
    // need to add functionality to capture the values of  status, category, warehouse
    console.log(itemName, description, quantity, status, category, warehouse);
    // make post request
    const body = { itemName, description, quantity };
    axios
      .post("http://localhost:8080/inventory")
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
    event.target.reset();
    window.history.back();
  };
  //   console.log(getCategoriesOptions(props.location.state.categories));
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
            {/* to get select options for categories */}
            {parse(`<select name="" id="" placeholder="Please select" name="categoryOption" >
            <option value="Please select">Please select</option>;
            ${this.getOptions(this.props.location.state.categories)}
          </select>`)}
          </div>
          <div>
            <h2>Item Availability</h2>
            <h3>Status</h3>
            <label htmlFor="in-stock">In-stock</label>
            <input type="radio" id="in-stock" name="status" />
            <label htmlFor="out-of-stock">out-of-stock</label>
            <input type="radio" id="out-of-stock" name="status" />
            <label htmlFor="quantity">Quantity</label>
            <input type="number" placeholder="0" name="quantity" />
            <h3>Warehouse</h3>
            {/* to get select options for warehouses */}
            {parse(`<select name="" id="" placeholder="Please select" name="warehouseOption">
            <option value="">Please select</option>;
            ${this.getOptions(this.props.location.state.warehouses)}
          </select>`)}
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
