import React, { Component } from "react";
import axios from "axios";
import "./EditInventoryItem.scss";
import BackIcon from "../../assets/icons/arrow_back-24px.svg";
import ErrorIcon from "../../assets/icons/error-24px.svg";
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";
import { Link } from "react-router-dom";
const { REACT_APP_API_URL } = process.env;

export default class EditInventoryItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      warehouseID: null,
      warehouseName: null,
      itemName: null,
      description: null,
      category: null,
      status: null,
      quantity: null,
      loading: true,
      warehouseList: null,
    };
  }

  //get a list of warehouse
  getWarehouseList = () => {
    axios
      .get(`http://localhost:8080/warehouse`)
      .then((res) => {
        this.setState({
          warehouseList: res.data,
          loading: false,
        });
      })
      .catch((e) => {
        console.error(e);
        alert("something went wrong");
      });
  };

  //get inventory data for pre-fill the form
  getInventoryData = (id) => {
    axios
      .get(`http://localhost:8080/inventory/${id}`)
      .then((res) => {
        this.getWarehouseList();
        this.setState({
          warehouseID: res.data.warehouseID,
          warehouseName: res.data.warehouseName,
          itemName: res.data.itemName,
          description: res.data.description,
          category: res.data.category,
          status: res.data.status,
          quantity: res.data.quantity,
        });
      })
      .catch((e) => {
        console.error(e);
        alert("something went wrong");
      });
  };

  handleCancel = () => {
    this.props.history.goBack();
  };

  handleEditInventory = (e) => {
    e.preventDefault();
    if (
      this.state.itemName === "" ||
      this.state.description === "" ||
      this.state.quantity === ""
    ) {
      alert("This field is required");
    } else if (this.state.quantity < 0) {
      alert("Quantity should be greater than 0");
    } else {
      axios
        .patch(
          `http://localhost:8080/inventory/${this.props.match.params.id}/edit`,
          {
            warehouseName: this.state.warehouseName,
            itemName: this.state.itemName,
            description: this.state.description,
            category: this.state.category,
            status: this.state.status,
            quantity: this.state.quantity,
          }
        )
        .then((res) => {
          this.props.history.push("/inventory");
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  componentDidMount() {
    this.getInventoryData(this.props.match.params.id);
  }

  componentDidUpdate(prevProps) {
    const currentInventoryId = this.props.match.params.id;
    const previousInventoryId = prevProps.match.params.id;
    if (currentInventoryId !== previousInventoryId) {
      this.getInventoryData();
    }
  }

  //update item name
  handleChangeName = (e) => {
    this.setState({ itemName: e.target.value });
  };

  //update item description by input value
  handleChangeDescription = (e) => {
    this.setState({ description: e.target.value });
  };

  //update itm category
  handleChangeCategory = (e) => {
    this.setState({ category: e.target.value });
  };

  //update item quantity by input value
  handleChangeQuantity = (e) => {
    this.setState({ quantity: e.target.value });
  };
  //update ware house information
  handleChangeWarehouse = (e) => {
    this.state.warehouseList.forEach((warehouse) => {
      if (warehouse.id === e.target.value) {
        this.setState({
          warehouseID: e.target.value,
          warehouseName: warehouse.name,
        });
      }
    });
  };

  //update stock status
  handleChangeStatus = (e) => {
    if (e.target.value === "Out of Stock") {
      this.setState({
        status: e.target.value,
        quantity: 0,
      });
    } else {
      this.setState({ status: e.target.value });
    }
  };

  render() {
    if (this.state.loading) return <LoadingSpinner />;
    return (
      <form className="editInventory" onSubmit={this.handleEditInventory}>
        <div className="editInventory__header">
          <Link to="/inventory">
            <img
              src={BackIcon}
              alt="back icon"
              className="editInventory__back-icon"
            />
          </Link>
          <h1 className="editInventory__header-title">Edit Inventory Item</h1>
        </div>
        <div className="editInventory__container">
          <div className="editInventory__details">
            <h2 className="editInventory__details-title">Item Details</h2>
            <div className="editInventory__detail-element">
              <label
                htmlFor="itemName"
                className="editInventory__element-label"
              >
                Item Name
                <input
                  type="text"
                  required
                  name="itemName"
                  defaultValue={this.state.itemName}
                  onChange={this.handleChangeName}
                  className="editInventory__text-input editInventory__item-name"
                />
              </label>
              {this.state.itemName === "" && (
                <div className="editInventory__warning">
                  <img
                    src={ErrorIcon}
                    alt="error icon"
                    className="editInventory__error-icon"
                  />
                  <p className="editInventory__warning-text">
                    This field is required
                  </p>
                </div>
              )}

              <label htmlFor="" className="editInventory__element-label">
                Description
                <textarea
                  typeof="text"
                  name="description"
                  defaultValue={this.state.description}
                  onChange={this.handleChangeDescription}
                  className="editInventory__text-input editInventory__description"
                />
              </label>
              {this.state.description === "" && (
                <div className="editInventory__warning">
                  <img
                    src={ErrorIcon}
                    alt="error icon"
                    className="editInventory__error-icon"
                  />
                  <p className="editInventory__warning-text">
                    This field is required
                  </p>
                </div>
              )}

              <label className="editInventory__element-label">
                Category
                <select
                  name="category"
                  defaultValue={this.state.category}
                  onChange={this.handleChangeCategory}
                  className="editInventory__select-input editInventory__category"
                >
                  <option value="Electronics">Electronics</option>
                  <option value="Gear">Gear</option>
                  <option value="Apparel">Apparel</option>
                  <option value="Accessories">Accessories</option>
                  <option value="Health">Health</option>
                </select>
              </label>
            </div>
          </div>

          <div className="editInventory__availability">
            <h2 className="editInventory__availability-title">
              Item Availability
            </h2>
            <div className="editInventory__availability-element">
              <div className="editInventory__availability-radio">
                <label className="editInventory__element-label editInventory__radio-label">
                  Status
                </label>
                <div className="editInventory__radio-buttons">
                  <div className="editInventory__radio-button">
                    <input
                      type="radio"
                      value="In Stock"
                      checked={this.state.status === "In Stock"}
                      onChange={this.handleChangeStatus}
                      className="editInventory__input-select"
                    />
                    <label
                      className={`editInventory__radio-value
                            ${
                              this.state.status === "In Stock"
                                ? "editInventory__radio-active"
                                : "editInventory__radio-inactive"
                            }`}
                    >
                      In Stock
                    </label>
                  </div>
                  <div className="editInventory__radio-button">
                    <input
                      type="radio"
                      value="Out of Stock"
                      checked={this.state.status === "Out of Stock"}
                      onChange={this.handleChangeStatus}
                      className="editInventory__input-select"
                    />
                    <label
                      className={`editInventory__radio-value
                      ${
                        this.state.status === "Out of Stock"
                          ? "editInventory__radio-active"
                          : "editInventory__radio-inactive"
                      }`}
                    >
                      Out of Stock
                    </label>
                  </div>
                </div>
              </div>
              {this.state.status === "In Stock" && (
                <label
                  htmlFor="quantity"
                  className="editInventory__element-label"
                >
                  Quantity
                  <input
                    type="number"
                    min="1"
                    step="1"
                    name="quantity"
                    value={this.state.quantity}
                    onChange={this.handleChangeQuantity}
                    className="editInventory__text-input editInventory__item-quantity"
                  />
                </label>
              )}
              {this.state.quantity === "" && (
                <div className="editInventory__warning">
                  <img
                    src={ErrorIcon}
                    alt="error icon"
                    className="editInventory__error-icon"
                  />
                  <p className="editInventory__warning-text">
                    This field is required
                  </p>
                </div>
              )}
              <label className="editInventory__element-label">
                Warehouse
                <select
                  defaultValue={this.state.warehouseName}
                  onChange={this.handleChangeWarehouse}
                  className="editInventory__select-input editInventory__warehouse"
                >
                  {this.state.warehouseList.map((warehouse) => (
                    <option value={warehouse.name} key={warehouse.id}>
                      {warehouse.name}
                    </option>
                  ))}
                </select>
              </label>
            </div>
          </div>
        </div>
        <div className="editInventory__actions">
          <Link to="/inventory">
            <button className="editInventory__button-cancel">Cancel</button>
          </Link>
          <button type="submit" className="editInventory__button-save">
            Save
          </button>
        </div>
      </form>
    );
  }
}
