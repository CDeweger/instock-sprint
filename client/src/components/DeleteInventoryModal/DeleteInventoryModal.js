import React from "react";
import "./DeleteInventoryModal.scss";
// need to hook up with inventory list delete icon, use state to toggle display

const DeleteInventoryModal = () => {
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
          >
            <path
              d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z"
              fill="#13182C"
            />
          </svg>
          <h1 className="notice-card__title">
            Delete TELEVISION inventory item?
          </h1>
          <p className="notice-card__text">
            Please confirm that you'd like to delete TELEVISION form the
            inventory list. You won't be able to undo this action.
          </p>
        </div>
        <div className="notice-card__buttons">
          <button type="button">Cancel</button>
          <button type="button">Delete</button>
        </div>
      </article>
    </div>
  );
};

export default DeleteInventoryModal;
