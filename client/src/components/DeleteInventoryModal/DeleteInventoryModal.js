// need to hook up with inventory list delete icon, use state to toggle display
import React, { Component } from "react";
import axios from "axios";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";
import "./DeleteInventoryModal.scss";

export default class DeleteInventoryModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inventoryData: null,
    };
  }

  getInventoryData = (warehouseId, inventoryId) => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/inventory/${inventoryId}`)
      .then((res) => {
        //  console.log(res.data);
        this.setState({ inventoryData: res.data });
      })
      .catch((e) => {
        console.error(e);
        alert("something went wrong");
      });
  };

  handleCancel = () => {
    this.props.history.goBack();
  };

  handleDelete = () => {
    console.log(this.props.match.params.inventoryId);
    axios
      .delete(
        `${process.env.REACT_APP_API_URL}/inventory/${this.props.match.params.inventoryId}`
      )
      .then((res) => {
        console.log(res);
      })
      .catch((e) => {
        console.error(e);
        alert("something went wrong");
      });
    //  this.props.history.goBack();
  };

  componentDidMount() {
    this.getInventoryData(
      this.props.match.params.warehouseId,
      this.props.match.params.inventoryId
    );
  }

  render() {
    return (
      <>
        {!this.state.inventoryData && <LoadingSpinner />}
        {this.state.inventoryData && (
          <div className="modal">
            <article className="notice-card">
              <div className="notice-card__info">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z"
                    fill="#13182C"
                  />
                </svg>
                <h1 className="notice-card__title">
                  Delete {this.state.inventoryData.itemName} inventory item?
                </h1>
                <p className="notice-card__text">
                  Please confirm that you'd like to delete
                  {this.state.inventoryData.itemName} form the inventory list.
                  You won't be able to undo this action.
                </p>
              </div>
              <div className="notice-card__buttons">
                <button type="button" onClick={this.handleCancel}>
                  Cancel
                </button>
                <button type="button" onClick={this.handleDelete}>
                  Delete
                </button>
              </div>
            </article>
          </div>
        )}
      </>
    );
  }
}
