import axios from "axios";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";
import InventoryCard from "../../components/InventoryCard/InventoryCard";
import "./inventoryPage.scss";
import SortIcon from "../../assets/icons/sort-24px.svg";

class InventoryList extends Component {
  state = {
    inventoriesData: [],
    categories: [],
    warehouses: [],
  };
  //   for unique categories
  getCategories = (arr) => {
    let categories = [];
    arr.forEach((element) => {
      categories.push(element.category);
    });
    return categories;
  };
  //   for unique warehouse list
  getWarehouses = (arr) => {
    let warehouses = [];
    arr.forEach((element) => {
      warehouses.push(element.warehouseName);
    });
    return warehouses;
  };

  componentDidMount() {
    axios.get("http://localhost:8080/inventory").then((resolve) => {
      console.log(resolve.data);
      this.setState({
        inventoriesData: resolve.data,
        // to get unique list of categories and warehouses
        categories: [...new Set(this.getCategories(resolve.data))],
        warehouses: [...new Set(this.getWarehouses(resolve.data))],
      });
      console.log(this.state.warehouses, this.state.categories);
    });
  }

  render() {
    return (
      <div className="container">
        <section className="inventory">
          <div className="inventory__header">
            <h1 className="inventory__title">Inventory</h1>
            <div className="inventory__header-container">
              <input
                className="inventory__search-bar"
                placeholder="Search..."
              ></input>
              {this.state.categories.length === 0 &&
              this.state.warehouses.length === 0 &&
              this.state.inventoriesData.length === 0 ? (
                <LoadingSpinner />
              ) : (
                <Link
                  to={{
                    pathname: "/inventory/add",
                    state: {
                      inventoriesData: this.state.inventoriesData,
                      categories: this.state.categories,
                      warehouses: this.state.warehouses,
                    },
                  }}
                >
                  <button className="inventory__addButton">
                    Add Inventory
                  </button>
                </Link>
              )}
            </div>
            {/* <button>Search</button> */}
            {/* <Link
              to={{
                pathname: "/inventory/add",
                state: { categories: this.state.categories },
              }}
            >
              <button>Add Inventory</button>
            </Link> */}
          </div>

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

          <div className="inventory__inventory-cards">
            {this.state.inventoriesData.length === 0 ? (
              <p>Loading...</p>
            ) : (
              this.state.inventoriesData.map((data) => {
                return (
                  <InventoryCard
                    id={data.id}
                    key={data.id}
                    itemName={data.itemName}
                    description={data.description}
                    category={data.category}
                    status={data.status}
                    quantity={data.quantity}
                    warehouseName={data.warehouseName}
                  />
                );
              })
            )}
          </div>
        </section>
      </div>
    );
  }
}

export default InventoryList;
