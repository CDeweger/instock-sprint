import React from "react";
import BackIcon from "../../assets/icons/arrow_back-24px.svg";
import ErrorIcon from "../../assets/icons/error-24px.svg";
import "../AddWarehouse/AddWarehouse.scss";
import { Link } from "react-router-dom";
import axios from "axios";

class AddWarehouse extends React.Component {
  state = {
    warehousecheck: false,
    addresscheck: false,
    citycheck: false,
    countrycheck: false,
    namecheck: false,
    positioncheck: false,
    numbercheck: false,
    emailcheck: false,
    numberStrcheck: false,
    emailStrcheck: false,
  };

  handleCancel = () => {
    this.props.history.goBack();
  };

  handleCheckName = (e) => {
    if (e.target.value.trim() === "" || e.target.value === " ") {
      this.setState({ warehousecheck: true });
    } else {
      this.setState({ warehousecheck: false });
    }
  };

  handleAddressCheck = (e) => {
    if (e.target.value.trim() === "") {
      this.setState({ addresscheck: true });
    } else {
      this.setState({ addresscheck: false });
    }
  };

  handleCityCheck = (e) => {
    if (e.target.value.trim() === "") {
      this.setState({ citycheck: true });
    } else {
      this.setState({ citycheck: false });
    }
  };

  handleCountryCheck = (e) => {
    if (e.target.value.trim() === "") {
      this.setState({ countrycheck: true });
    } else {
      this.setState({ countrycheck: false });
    }
  };

  handleNameCheck = (e) => {
    if (e.target.value.trim() === "") {
      this.setState({ namecheck: true });
    } else {
      this.setState({ namecheck: false });
    }
  };

  handlePositionCheck = (e) => {
    if (e.target.value.trim() === "") {
      this.setState({ positioncheck: true });
    } else {
      this.setState({ positioncheck: false });
    }
  };

  handleNumberCheck = (e) => {
    const phoneRegex = /^\(?([0-9]{3})\)?[- ]?([0-9]{3})[- ]?([0-9]{4})$/;
    if (e.target.value.trim() === "") {
      this.setState({ numbercheck: true });
    } else {
      if (!phoneRegex.test(e.target.value)) {
        this.setState({ numberStrcheck: true, numbercheck: false });
      } else {
        this.setState({ numberStrcheck: false, numbercheck: false });
      }
    }
  };

  handleEmailCheck = (e) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (e.target.value.trim() === "") {
      this.setState({ emailcheck: true });
    } else {
      if (!emailRegex.test(e.target.value)) {
        this.setState({ emailStrcheck: true, emailcheck: false });
      } else {
        this.setState({ emailStrcheck: false, emailcheck: false });
      }
    }
  };

  submitForm = (e) => {
    e.preventDefault();
    if (e.target.warehouseName.value.trim() === "") {
      this.setState({ warehousecheck: true });
    }
    if (e.target.address.value.trim() === "") {
      this.setState({ addresscheck: true });
    }
    if (e.target.city.value.trim() === "") {
      this.setState({ citycheck: true });
    }
    if (e.target.country.value.trim() === "") {
      this.setState({ countrycheck: true });
    }
    if (e.target.contactName.value.trim() === "") {
      this.setState({ namecheck: true });
    }
    if (e.target.contactPosition.value.trim() === "") {
      this.setState({ positioncheck: true });
    }
    if (e.target.contactNumber.value.trim() === "") {
      this.setState({ numbercheck: true });
    }
    if (e.target.contactEmail.value.trim() === "") {
      this.setState({ emailcheck: true });
    }

    if (
      !this.state.warehousecheck &&
      !this.state.addresscheck &&
      !this.state.citycheck &&
      !this.state.countrycheck &&
      !this.state.namecheck &&
      !this.state.positioncheck &&
      !this.state.numbercheck &&
      !this.state.emailcheck &&
      e.target.warehouseName.value &&
      e.target.address.value &&
      e.target.city.value &&
      e.target.country.value &&
      e.target.contactName.value &&
      e.target.contactPosition.value &&
      e.target.contactNumber.value &&
      e.target.contactEmail.value
    ) {
      axios
        .post("http://localhost:8080/warehouse", {
          warehouseName: e.target.warehouseName.value,
          address: e.target.address.value,
          city: e.target.city.value,
          country: e.target.country.value,
          contactName: e.target.contactName.value,
          position: e.target.contactPosition.value,
          phoneNumber: e.target.contactNumber.value,
          email: e.target.contactEmail.value,
        })
        .catch((e) => {
          console.error(e);
          alert("something went wrong");
        });
      this.props.history.push("/warehouse");
    }
  };

  render() {
    return (
      <>
        <section className="newWarehouse">
          <div className="newWarehouse__header">
            <Link to="/warehouse">
              <img
                className="newWarehouse__header-back"
                src={BackIcon}
                alt="going back button"
              />
            </Link>
            <h2 className="newWarehouse__header-title">Add New Warehouse</h2>
          </div>

          <form className="newWarehouse__form" onSubmit={this.submitForm}>
            <div className="newWarehouse__form-container">
              <div className="newWarehouse__form-details">
                <h3 className="newWarehouse__details-title">
                  Warehouse Details
                </h3>
                <div className="newWarehouse__details-container">
                  <div className="newWarehouse__details-element">
                    <p className="newWarehouse__element-title">
                      Warehouse Name
                    </p>
                    <input
                      className="newWarehouse__details-input"
                      name="warehouseName"
                      placeholder="Warehouse Name"
                      onChange={this.handleCheckName}
                    ></input>
                    {this.state.warehousecheck && (
                      <div className="newWarehouse__warning">
                        <img
                          src={ErrorIcon}
                          alt="Error icon"
                          className="newWarehouse__warning-icon"
                        />
                        <p className="newWarehouse__warning-text">
                          This field is required
                        </p>
                      </div>
                    )}
                  </div>
                  <div className="newWarehouse__details-element">
                    <p className="newWarehouse__element-title">
                      Street Address
                    </p>
                    <input
                      className="newWarehouse__details-input"
                      name="address"
                      placeholder="Street Address"
                      onChange={this.handleAddressCheck}
                    ></input>
                    {this.state.addresscheck && (
                      <div className="newWarehouse__warning">
                        <img
                          src={ErrorIcon}
                          alt="Error icon"
                          className="newWarehouse__warning-icon"
                        />
                        <p className="newWarehouse__warning-text">
                          This field is required
                        </p>
                      </div>
                    )}
                  </div>
                  <div className="newWarehouse__details-element">
                    <p className="newWarehouse__element-title">City</p>
                    <input
                      className="newWarehouse__details-input"
                      name="city"
                      placeholder="City"
                      onChange={this.handleCityCheck}
                    ></input>
                    {this.state.citycheck && (
                      <div className="newWarehouse__warning">
                        <img
                          src={ErrorIcon}
                          alt="Error icon"
                          className="newWarehouse__warning-icon"
                        />
                        <p className="newWarehouse__warning-text">
                          This field is required
                        </p>
                      </div>
                    )}
                  </div>

                  <div className="newWarehouse__details-element">
                    <p className="newWarehouse__element-title">Country</p>
                    <input
                      className="newWarehouse__details-input"
                      name="country"
                      placeholder="Country"
                      onChange={this.handleCountryCheck}
                    ></input>
                    {this.state.countrycheck && (
                      <div className="newWarehouse__warning">
                        <img
                          src={ErrorIcon}
                          alt="Error icon"
                          className="newWarehouse__warning-icon"
                        />
                        <p className="newWarehouse__warning-text">
                          This field is required
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              <div className="newWarehouse__form-details newWarehouse__form-tablet">
                <h3 className="newWarehouse__details-title">Contact Details</h3>
                <div className="newWarehouse__details-container">
                  <div className="newWarehouse__details-element">
                    <p className="newWarehouse__element-title">Contact Name</p>
                    <input
                      className="newWarehouse__details-input"
                      name="contactName"
                      placeholder="Contact name"
                      onChange={this.handleNameCheck}
                    ></input>
                    {this.state.namecheck && (
                      <div className="newWarehouse__warning">
                        <img
                          src={ErrorIcon}
                          alt="Error icon"
                          className="newWarehouse__warning-icon"
                        />
                        <p className="newWarehouse__warning-text">
                          This field is required
                        </p>
                      </div>
                    )}
                  </div>
                  <div className="newWarehouse__details-element">
                    <p className="newWarehouse__element-title">Position</p>
                    <input
                      className="newWarehouse__details-input"
                      name="contactPosition"
                      placeholder="Position"
                      onChange={this.handlePositionCheck}
                    ></input>
                    {this.state.positioncheck && (
                      <div className="newWarehouse__warning">
                        <img
                          src={ErrorIcon}
                          alt="Error icon"
                          className="newWarehouse__warning-icon"
                        />
                        <p className="newWarehouse__warning-text">
                          This field is required
                        </p>
                      </div>
                    )}
                  </div>
                  <div className="newWarehouse__details-element">
                    <p className="newWarehouse__element-title">Phone Number</p>
                    <input
                      className="newWarehouse__details-input"
                      name="contactNumber"
                      placeholder="Phone Number"
                      onChange={this.handleNumberCheck}
                    ></input>
                    {this.state.numbercheck && (
                      <div className="newWarehouse__warning">
                        <img
                          src={ErrorIcon}
                          alt="Error icon"
                          className="newWarehouse__warning-icon"
                        />
                        <p className="newWarehouse__warning-text">
                          This field is required
                        </p>
                      </div>
                    )}
                    {this.state.numberStrcheck && (
                      <div className="newWarehouse__warning">
                        <img
                          src={ErrorIcon}
                          alt="Error icon"
                          className="newWarehouse__warning-icon"
                        />
                        <p className="newWarehouse__warning-text">
                          Valid Phone Number is required
                        </p>
                      </div>
                    )}
                  </div>
                  <div className="newWarehouse__details-element">
                    <p className="newWarehouse__element-title">Email</p>
                    <input
                      className="newWarehouse__details-input"
                      name="contactEmail"
                      placeholder="Email"
                      onChange={this.handleEmailCheck}
                    ></input>
                    {this.state.emailcheck && (
                      <div className="newWarehouse__warning">
                        <img
                          src={ErrorIcon}
                          alt="Error icon"
                          className="newWarehouse__warning-icon"
                        />
                        <p className="newWarehouse__warning-text">
                          This field is required
                        </p>
                      </div>
                    )}
                    {this.state.emailStrcheck && (
                      <div className="newWarehouse__warning">
                        <img
                          src={ErrorIcon}
                          alt="Error icon"
                          className="newWarehouse__warning-icon"
                        />
                        <p className="newWarehouse__warning-text">
                          Valid email address is required
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
            <div className="newWarehouse__buttons">
              <div className="newWarehouse__buttons-container">
                <button
                  className="newWarehouse__buttons-cancel"
                  onClick={this.handleCancel}
                >
                  Cancel
                </button>
                <button className="newWarehouse__buttons-add" type="submit">
                  + Add Warehouse
                </button>
              </div>
            </div>
          </form>
        </section>
      </>
    );
  }
}

export default AddWarehouse;
