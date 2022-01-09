import axios from "axios";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";
import FakeInventoryCard from "../FakeInventoryCard/FakeInventoryCard";

class FakeInventoryList extends Component {
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
      <div>
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
            <button>Add Inventory</button>
          </Link>
        )}
        {/* <Link
          to={{
            pathname: "/inventory/add",
            state: { categories: this.state.categories },
          }}
        >
          <button>Add Inventory</button>
        </Link> */}

        {this.state.inventoriesData.length === 0 ? (
          <p>Loading...</p>
        ) : (
          this.state.inventoriesData.map((data) => {
            return (
              <FakeInventoryCard
                id={data.id}
                key={data.id}
                itemName={data.itemName}
                description={data.description}
                category={data.category}
                status={data.status}
                quantity={data.quantity}
                warehouse={data.warehouse}
              />
            );
          })
        )}
      </div>
    );
  }
}

export default FakeInventoryList;
