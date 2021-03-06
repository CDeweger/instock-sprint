import React from "react";
import "../WarehouseCard/WarehouseCard.scss";
import DeleteIcon from "../../assets/icons/delete_outline-24px.svg";
import EditIcon from "../../assets/icons/edit-24px.svg";
import ChevronIcon from "../../assets/icons/chevron_right-24px.svg";
import { Link } from "react-router-dom";
import DeleteWarehouseModal from "../DeleteWarehouseModal/DeleteWarehouseModal";

const { REACT_APP_API_URL } = process.env;

class WarehouseCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
    };
  }

  showModal = () => {
    this.setState({ showModal: true });
  };

  closeModal = () => {
    this.setState({ showModal: false });
  };

  render() {
    let modal = <></>;
    if (this.state.showModal) {
      modal = (
        <DeleteWarehouseModal
          warehouseName={this.props.warehouseName}
          warehouseId={this.props.warehouseId}
          closeModal={this.closeModal}
        />
      );
    }

    return (
      <>
        <div className="warehouseList__card">
          <div className="warehouseList__card-container">
            <div className="warehouseList__card-info">
              <h3 className="warehouseList__card-title">WAREHOUSE</h3>
              <Link
                to={`/warehouse/${this.props.warehouseId}`}
                className="warehouseList__link"
              >
                <div className="warehouseList__card-name">
                  <p className="warehouseList__card-text warehouseList__card-location">
                    {this.props.city}
                  </p>
                  <img
                    className="warehouseList__icon"
                    src={ChevronIcon}
                    alt="chevron icon"
                  />
                </div>
              </Link>
            </div>

            <div className="warehouseList__card-info">
              <h3 className="warehouseList__card-title">CONTACT NAME</h3>
              <p className="warehouseList__card-text warehouseList__card-mobile">
                {this.props.name}
              </p>
              <p className="warehouseList__card-text warehouseList__card-tablet">
                {this.props.address}
              </p>
            </div>

            <div className="warehouseList__card-info">
              <h3 className="warehouseList__card-title">ADDRESS</h3>
              <p className="warehouseList__card-text warehouseList__card-mobile">
                {this.props.address}
              </p>
              <p className="warehouseList__card-text warehouseList__card-tablet">
                {this.props.name}
              </p>
            </div>

            <div className="warehouseList__card-info">
              <h3 className="warehouseList__card-title">CONTACT INFORMATION</h3>
              <p className="warehouseList__card-text warehouseList__card-nowrap">
                {this.props.number}
              </p>
              <p className="warehouseList__card-text">{this.props.email}</p>
            </div>
          </div>

          <div className="warehouseList__card-action">
            <img
              className="warehouseList_card-delete"
              src={DeleteIcon}
              alt="delete icon"
              onClick={this.showModal}
            />
            <Link to={`/warehouse/${this.props.warehouseId}/edit`}>
              <img
                className="warehouseList_card-edit"
                src={EditIcon}
                alt="edit icon"
              />
            </Link>
          </div>
        </div>
        {modal}
      </>
    );
  }
}

export default WarehouseCard;
