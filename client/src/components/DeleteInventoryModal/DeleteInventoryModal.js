// need to hook up with inventory list delete icon, use state to toggle display
// the route in the app.js is dummy route just to see the component
import React, { Component } from "react";
import axios from "axios";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";
import "./DeleteInventoryModal.scss";

export default class DeleteInventoryModal extends Component {
  constructor(props) {
    super(props);
  }

  handleCancel = () => {
    this.props.closeModal();
  };

  handleDelete = () => {
    axios
      .delete(`http://localhost:8080/inventory/${this.props.inventoryId}`)
      .then((res) => {
        console.log(res);
      })
      .catch((e) => {
        console.error(e);
        alert("something went wrong");
      });
    this.props.closeModal();
    window.location.reload(true);
  };

  render() {
    console.log(this.props.inventoryId);
    return (
      <div className="modal">
        <article className="notice-card">
          <div className="notice-card__info">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="notice-card__close"
              onClick={this.handleCancel}
            >
              <path
                d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z"
                fill="#13182C"
              />
            </svg>
            <h1 className="notice-card__title">
              Delete {this.props.itemName} inventory item?
            </h1>
            <p className="notice-card__text">
              Please confirm that you'd like to delete {this.props.itemName}{" "}
              form the inventory list. You won't be able to undo this action.
            </p>
          </div>
          <div className="notice-card__buttons">
            <button
              type="button"
              className="notice-card__cancel"
              onClick={this.handleCancel}
            >
              Cancel
            </button>
            <button
              type="button"
              className="notice-card__delete"
              onClick={this.handleDelete}
            >
              Delete
            </button>
          </div>
        </article>
      </div>
    );
  }
}
