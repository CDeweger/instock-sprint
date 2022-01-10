import axios from "axios";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import WarehouseInventories from "../WarehouseInventories/WarehouseInventories";

class WarehouseInventoryList extends Component {
  state = {
    inventoryData: [],
  };
  componentDidMount() {
    axios
      .get(
        "http://localhost:8080/inventory/warehouse/5bf7bd6c-2b16-4129-bddc-9d37ff8539e9"
      )
      .then((resolve) => {
        console.log(resolve.data);
        this.setState({
          inventoryData: resolve.data,
        });
      })
      .catch((err) => err);
  }
  render() {
    console.log(this.state.inventoryData);
    return (
      <div className="inventory-list">
        <h1 className="inventory-list__title">King West</h1>
        <div className="inventory-list__address-contacts-container">
          <div className="inventory-list__address-container">
            <h2>WAREHOUSE ADDRESS</h2>
            <p>469 King Street West</p>
          </div>
          <div className="inventory-list__contacts-container">
            <div className="inventory-list__contacts-name">
              <h2>CONTACT NAME</h2>
              <p>Graeme Lyon</p>
              <p>Warehouse Manager</p>
            </div>
            <div className="inventory-list__contacts-contact">
              <p>+5555555</p>
              <p>sdsd@instock.com</p>
            </div>
          </div>
        </div>
        <WarehouseInventories inventories={this.state.inventoryData} />
      </div>
    );
  }
}

export default WarehouseInventoryList;
