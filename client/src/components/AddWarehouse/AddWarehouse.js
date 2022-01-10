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

  submitForm = (e) => {
    e.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^\(?([0-9]{3})\)?[- ]?([0-9]{3})[- ]?([0-9]{4})$/;

    if (e.target.warehouseName.value === "") {
      this.setState({ warehousecheck: true });
    } else if (e.target.address.value === "") {
      this.setState({ addresscheck: true });
    } else if (e.target.city.value === "") {
      this.setState({ citycheck: true });
    } else if (e.target.country.value === "") {
      this.setState({ countrycheck: true });
    } else if (e.target.contactName.value === "") {
      this.setState({ namecheck: true });
    } else if (e.target.contactPosition.value === "") {
      this.setState({ positioncheck: true });
    } else if (e.target.contactNumber.value === "") {
      this.setState({ numbercheck: true, numberStrcheck: false });
    } else if (e.target.contactEmail.value === "") {
      this.setState({ emailcheck: true, emailStrcheck: false });
    } else if (!emailRegex.test(e.target.contactEmail.value)) {
      this.setState({ emailStrcheck: true, emailcheck: false });
    } else if (!phoneRegex.test(e.target.contactNumber.value)) {
      this.setState({ numberStrcheck: true, emailcheck: false });
    } else {
      console.log("it ran");

      this.setState({
        warehousecheck: false,
        addresscheck: false,
        citycheck: false,
        countrycheck: false,
        namecheck: false,
        positioncheck: false,
        numbercheck: false,
        emailcheck: false,
      });

      axios.post("http://localhost:8080/warehouse", {
        warehouseName: e.target.warehouseName.value,
        address: e.target.address.value,
        city: e.target.city.value,
        country: e.target.country.value,
        contactName: e.target.contactName.value,
        position: e.target.contactPosition.value,
        phoneNumber: e.target.contactNumber.value,
        email: e.target.contactEmail.value,
      });

      this.props.history.push("/warehouse");
      window.location.reload(true);
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
