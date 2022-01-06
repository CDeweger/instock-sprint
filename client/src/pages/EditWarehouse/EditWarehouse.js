import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";

const EditWarehouse = () => {
  //const [warehouseDetails, setWarehouseDetails] = useState(null);
  const [warehouseDetails, setWarehouseDetails] = useState({
    id: "5bf7bd6c-2b16-4129-bddc-9d37ff8539e9",
    name: "King West",
    address: "469 King Street West",
    city: "Toronto",
    country: "CAN",
    contact: {
      name: "Greame Lyon",
      position: "Warehouse Manager",
      phone: "+1 (646) 123-1234",
      email: "glyon@instock.com",
    },
  });
  const { name, address, city, country, contact } = warehouseDetails;

  const params = useParams();
  const warehouseId = params.id;

  //get warehouse info & deconstruct for use as pre-filled input filed
  /* 
    useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/warehouse/${warehouseId}`)
      .then((res) => {
        setWarehouseDetails(response.data);
        const { name, address, city, country, contact } = warehouseDetails;
      })
      .catch((e) => {
        console.error(e);
        alert("something went wrong");
      });
  }, [warehouseId]);

  */

  const handleEditWarehouse = (e) => {
    e.preventDefault();
    const warehouseUpdatedDetails = {
      name: e.target.name.value,
      address: e.target.address.value,
      city: e.target.city.value,
      country: e.target.country.value,
      contact: {
        name: e.target.contactName.value,
        position: e.target.position.value,
        phone: e.target.phone.value,
        email: e.target.email.value,
      },
    };
    console.log(warehouseUpdatedDetails);

    /*  axios
      .put(`${process.env.REACT_APP_API_URL}/warehouse/${warehouseId}/edit`, warehouseUpdatedDetails)
      .then((res) => {
       console.log(res)
      })
      .catch((e) => {
        console.error(e);
        alert("something went wrong");
      }); */
  };

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
      {!warehouseDetails && <LoadingSpinner />}
      {warehouseDetails && (
        <form className="editWH-form" onSubmit={handleEditWarehouse}>
          <div className="editWH-form__warehouse">
            <h2 className="editWH-form__title">Warehouse Details</h2>
            <div className="editWH-form__entries">
              <label htmlFor="warehouse-name" className="editWH-form__label">
                Warehouse Name
              </label>
              <input
                id="warehouse-name"
                type="text"
                name="name"
                className="editWH-form__input"
                defaultValue={name}
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
                name="address"
                className="editWH-form__input"
                defaultValue={address}
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
                name="city"
                className="editWH-form__input"
                defaultValue={city}
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
                name="country"
                className="editWH-form__input"
                defaultValue={country}
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
                name="contactName"
                className="editWH-form__input"
                defaultValue={contact.name}
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
                name="position"
                className="editWH-form__input"
                defaultValue={contact.position}
                required
              ></input>
            </div>

            <div className="editWH-form__entries">
              <label htmlFor="contact-phone" className="editWH-form__label">
                Phone Number
              </label>
              <input
                id="contact-phone"
                type="text"
                name="phone"
                className="editWH-form__input"
                defaultValue={contact.phone}
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
                name="email"
                className="editWH-form__input"
                defaultValue={contact.email}
                required
              ></input>
            </div>
          </div>

          <div>
            <button type="button">Cancel</button>
            <button type="submit">Save</button>
          </div>
        </form>
      )}
    </section>
  );
};

export default EditWarehouse;
