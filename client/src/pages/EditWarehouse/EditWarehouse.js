import React, { Component } from "react";
import axios from "axios";
import { isPossiblePhoneNumber } from "react-phone-number-input";
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";
import "./EditWarehouse.scss";

export default class EditWarehouse extends Component {
  constructor(props) {
    super(props);
    this.state = {
      warehouseDetails: null,
    };
  }

  getWarehouseData = (id) => {
    axios
      .get(`http://localhost:8080/warehouse/${id}`)
      .then((res) => {
        console.log(res.data);
        this.setState({ warehouseDetails: res.data });
        console.log(this.state.warehouseDetails);
      })
      .catch((e) => {
        console.error(e);
        alert("something went wrong");
      });
  };

  handleCancel = () => {
    this.props.history.goBack();
  };

  handleEditWarehouse = (e) => {
    e.preventDefault();
    let phoneValidationResult = isPossiblePhoneNumber(e.target.phone.value);
    if (!phoneValidationResult) {
      alert("not valid number");
    } else {
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

      axios
        .patch(
          `http://localhost:8080/warehouse/${this.props.match.params.id}/edit`,
          warehouseUpdatedDetails
        )
        .then((res) => {
          console.log(res);
        })
        .catch((e) => {
          console.error(e);
          alert("something went wrong");
        });
      this.props.history.goBack();
    }
  };

  componentDidMount() {
    this.getWarehouseData(this.props.match.params.id);
    //  console.log(this.state.warehouseDetails);
  }

  componentDidUpdate(prevProps) {
    const currentWarehouseId = this.props.match.params.id;
    const previousWarehouseId = prevProps.match.params.id;
    if (currentWarehouseId !== previousWarehouseId) {
      this.getWarehouseData();
    }
  }

  render() {
    return (
      <div className="edit-container">
        <section className="edit-warehouse">
          <div className="edit-warehouse__top">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              onClick={this.handleCancel}
            >
              <path
                d="M20 11H7.83L13.42 5.41L12 4L4 12L12 20L13.41 18.59L7.83 13H20V11Z"
                fill="#2E66E6"
              />
            </svg>
            <h1 className="edit-warehouse__title">Edit Warehouse</h1>
          </div>

          {!this.state.warehouseDetails && <LoadingSpinner />}

          {this.state.warehouseDetails && (
            <form className="editWH-form" onSubmit={this.handleEditWarehouse}>
              <div className="editWH-form__warehouse">
                <h2 className="editWH-form__title">Warehouse Details</h2>
                <div className="editWH-form__entries">
                  <label
                    htmlFor="warehouse-name"
                    className="editWH-form__label"
                  >
                    Warehouse Name
                  </label>
                  <input
                    id="warehouse-name"
                    type="text"
                    name="name"
                    className="editWH-form__input"
                    defaultValue={this.state.warehouseDetails.name}
                    required
                  ></input>
                </div>

                <div className="editWH-form__entries">
                  <label
                    htmlFor="warehouse-street"
                    className="editWH-form__label"
                  >
                    Street Address
                  </label>
                  <input
                    id="warehouse-street"
                    type="text"
                    name="address"
                    className="editWH-form__input"
                    defaultValue={this.state.warehouseDetails.address}
                    required
                  ></input>
                </div>

                <div className="editWH-form__entries">
                  <label
                    htmlFor="warehouse-city"
                    className="editWH-form__label"
                  >
                    City
                  </label>
                  <input
                    id="warehouse-city"
                    type="text"
                    name="city"
                    className="editWH-form__input"
                    defaultValue={this.state.warehouseDetails.city}
                    required
                  ></input>
                </div>

                <div className="editWH-form__entries">
                  <label
                    htmlFor="warehouse-country"
                    className="editWH-form__label"
                  >
                    Warehouse Name
                  </label>
                  <input
                    id="warehouse-country"
                    type="text"
                    name="country"
                    className="editWH-form__input"
                    defaultValue={this.state.warehouseDetails.country}
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
                    defaultValue={this.state.warehouseDetails.contact.name}
                    required
                  ></input>
                </div>

                <div className="editWH-form__entries">
                  <label
                    htmlFor="contact-position"
                    className="editWH-form__label"
                  >
                    Position
                  </label>
                  <input
                    id="contact-position"
                    type="text"
                    name="position"
                    className="editWH-form__input"
                    defaultValue={this.state.warehouseDetails.contact.position}
                    required
                  ></input>
                </div>

                <div className="editWH-form__entries">
                  <label htmlFor="contact-phone" className="editWH-form__label">
                    Phone Number
                  </label>
                  <input
                    id="contact-phone"
                    type="tel"
                    name="phone"
                    className="editWH-form__input"
                    defaultValue={this.state.warehouseDetails.contact.phone}
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
                    defaultValue={this.state.warehouseDetails.contact.email}
                    required
                  ></input>
                </div>
              </div>

              <div className="editWH-form__buttons">
                <div className="editWH-form__buttons-container">
                  <button type="button" id="cancel" onClick={this.handleCancel}>
                    Cancel
                  </button>
                  <button type="submit" id="save">
                    Save
                  </button>
                </div>
              </div>
            </form>
          )}
        </section>
      </div>
    );
  }
}
