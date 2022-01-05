import React from "react";

const EditWarehouse = () => {
  return (
    <section>
      <div>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M20 11H7.83L13.42 5.41L12 4L4 12L12 20L13.41 18.59L7.83 13H20V11Z"
            fill="#2E66E6"
          />
        </svg>
        <h1>Edit Warehouse</h1>
      </div>
      <form className="editWH-form">
        <div className="editWH-form__warehouse">
          <h2 className="editWH-form__title">Warehouse Details</h2>
          <div className="editWH-form__entries">
            <label htmlFor="warehouse-name" className="editWH-form__label">
              Warehouse Name
            </label>
            <input
              id="warehouse-name"
              type="text"
              className="editWH-form__input"
              required
            ></input>
          </div>

          <div className="editWH-form__entries">
            <label htmlFor="warehouse-street" className="editWH-form__label">
              Street Address
            </label>
            <input
              id="warehouse-street"
              type="text"
              className="editWH-form__input"
              required
            ></input>
          </div>

          <div className="editWH-form__entries">
            <label htmlFor="warehouse-city" className="editWH-form__label">
              City
            </label>
            <input
              id="warehouse-city"
              type="text"
              className="editWH-form__input"
              required
            ></input>
          </div>

          <div className="editWH-form__entries">
            <label htmlFor="warehouse-country" className="editWH-form__label">
              Warehouse Name
            </label>
            <input
              id="warehouse-country"
              type="text"
              className="editWH-form__input"
              required
            ></input>
          </div>
        </div>

        <div className="editWH-form__contact">
          <h2 className="editWH-form__title">Contact Details</h2>
          <div className="editWH-form__entries">
            <label htmlFor="contact-name" className="editWH-form__label">
              Contact Name
            </label>
            <input
              id="contact-name"
              type="text"
              className="editWH-form__input"
              required
            ></input>
          </div>

          <div className="editWH-form__entries">
            <label htmlFor="contact-position" className="editWH-form__label">
              Position
            </label>
            <input
              id="contact-position"
              type="text"
              className="editWH-form__input"
              required
            ></input>
          </div>

          <div className="editWH-form__entries">
            <label htmlFor="contact-phone" className="editWH-form__label">
              Phone Number
            </label>
            <input
              id="contact-phone"
              type="number"
              className="editWH-form__input"
              required
            ></input>
          </div>

          <div className="editWH-form__entries">
            <label htmlFor="contact-email" className="editWH-form__label">
              Email
            </label>
            <input
              id="contact-email"
              type="email"
              className="editWH-form__input"
              required
            ></input>
          </div>
        </div>

        <div>
          <button type="button">Cancel</button>
          <button type="submit">Save</button>
        </div>
      </form>
    </section>
  );
};

export default EditWarehouse;
