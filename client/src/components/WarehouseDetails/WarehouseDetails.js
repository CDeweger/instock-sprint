import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";
import "./WarehouseDetails.scss";

export default class WarehouseDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      warehouseData: null,
    };
    /*  this.state = {
      warehouseData: {
        id: "2922c286-16cd-4d43-ab98-c79f698aeab0",
        name: "Manhattan",
        address: "503 Broadway",
        city: "New York",
        country: "USA",
        contact: {
          name: "Parmin Aujla",
          position: "Warehouse Manager",
          phone: "+1 (646) 123-1234",
          email: "paujla@instock.com",
        },
      },
    }; */
  }

  getWarehouseData = (warehouseId) => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/warehouse/${warehouseId}`)
      .then((res) => {
        //  console.log(res.data);
        this.setState({ warehouseData: res.data });
      })
      .catch((e) => {
        console.error(e);
        alert("something went wrong");
      });
  };

  handleGoback = () => {
    this.props.history.goBack();
  };

  handleGoToEdit = () => {};

  componentDidMount() {
    // data should be through props
    // this.getWarehouseData(this.props.warehouseData.id);
    // this.getWarehouseData(this.state.warehouseData.id);
    this.getWarehouseData(this.props.match.params.id);
  }

  render() {
    return (
      <>
        {!this.state.warehouseData && <LoadingSpinner />}
        {this.state.warehouseData && (
          <div className="whDetails-container">
            <section className="whDetails">
              <div className="whDetails__top">
                <div className="whDetails__headline">
                  <svg
                    width="24"
                    height="24"
                    onClick={this.handleGoback}
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M20 11H7.83L13.42 5.41L12 4L4 12L12 20L13.41 18.59L7.83 13H20V11Z"
                      fill="#2E66E6"
                    />
                  </svg>
                  <h1 className="whDetails__title">
                    {this.state.warehouseData.name}
                  </h1>
                </div>

                <Link to={`/warehouse/${this.state.warehouseData.id}/edit`}>
                  <button className="whDetails__edit-button">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M3 17.25V21H6.75L17.81 9.94L14.06 6.19L3 17.25ZM20.71 7.04C21.1 6.65 21.1 6.02 20.71 5.63L18.37 3.29C17.98 2.9 17.35 2.9 16.96 3.29L15.13 5.12L18.88 8.87L20.71 7.04V7.04Z"
                        fill="#ffffff"
                      />
                    </svg>
                    <span className="whDetails__edit-text">Edit</span>
                  </button>
                </Link>
              </div>
              <div className="whDetails__bottom">
                <div className="whDetails__address">
                  <p className="whDetails__subtitle">warehouse address</p>
                  <p className="whDetails__info">
                    {this.state.warehouseData.address}
                  </p>
                  <div>
                    <span className="whDetails__info">
                      {this.state.warehouseData.city},
                    </span>
                    <span className="whDetails__info">
                      {this.state.warehouseData.country}
                    </span>
                  </div>
                </div>

                <div className="whDetails__contact">
                  <div>
                    <p className="whDetails__subtitle">contact name</p>
                    <p className="whDetails__info">
                      {this.state.warehouseData.contact.name}
                    </p>
                    <p className="whDetails__info">
                      {this.state.warehouseData.contact.position}
                    </p>
                  </div>

                  <div>
                    <p className="whDetails__subtitle">contact information</p>
                    <p className="whDetails__info">
                      {this.state.warehouseData.contact.phone}
                    </p>
                    <p className="whDetails__info">
                      {this.state.warehouseData.contact.email}
                    </p>
                  </div>
                </div>
              </div>
            </section>
          </div>
        )}
      </>
    );
  }
}
