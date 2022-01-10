import axios from "axios";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import WarehouseInventories from "../WarehouseInventories/WarehouseInventories";
import "./WarehouseInventoryList.scss";
import SortIcon from "../../assets/icons/sort-24px.svg";

class WarehouseInventoryList extends Component {
  state = {
    inventoryData: [],
  };
  componentDidMount() {
    axios
      .get(
        `http://localhost:8080/inventory/warehouse/${this.props.warehouseID}`
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
    // console.log(this.props);
    return (
      <div className="warehouse-inventory-list">
        {/* <h1 className="inventory-list__title">King West</h1>
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
        </div> */}
        <div className="inventory__container">
          <div className="inventory__head">
            <div className="inventory__head-inventoryItem">
              <h3 className="inventory__head-title">INVENTORY ITEM</h3>
              <img
                className="inventory__sortingImg"
                src={SortIcon}
                alt="sort icon"
              />
            </div>

            <div className="inventory__head-inventoryItem">
              <h3 className="inventory__head-title">CATEGORY</h3>
              <img
                className="inventory__sortingImg"
                src={SortIcon}
                alt="sort icon"
              />
            </div>

            <div className="inventory__head-inventoryItem">
              <h3 className="inventory__head-title">STATUS</h3>
              <img
                className="inventory__sortingImg"
                src={SortIcon}
                alt="sort icon"
              />
            </div>

            <div className="inventory__head-inventoryItem">
              <h3 className="inventory__head-title">QTY</h3>
              <img
                className="inventory__sortingImg"
                src={SortIcon}
                alt="sort icon"
              />
            </div>

            <div className="inventory__head-inventoryItem">
              <h3 className="inventory__head-title">WAREHOUSE</h3>
              <img
                className="inventory__sortingImg"
                src={SortIcon}
                alt="sort icon"
              />
            </div>
          </div>

          <div className="inventory__head-action">
            <h3 className="inventory__head-title">ACTION</h3>
          </div>
        </div>
        <WarehouseInventories inventories={this.state.inventoryData} />
      </div>
    );
  }
}

export default WarehouseInventoryList;
