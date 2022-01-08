import React from "react";
import "../WarehouseCard/WarehouseCard.scss";
import DeleteIcon from "../../assets/icons/delete_outline-24px.svg";
import EditIcon from "../../assets/icons/edit-24px.svg";
import ChevronIcon from "../../assets/icons/chevron_right-24px.svg";
import axios from "axios";
import { Link } from "react-router-dom";
// import DeleteWarehouseModal from "../DeleteWarehouseModal/DeleteWarehouseModal";
const { REACT_APP_API_URL } = process.env;

class WarehouseCard extends React.Component {
  state = {
    showModal: false,
  };

  showModal = () => {
    this.setState({ showModal: true });
  };

  closeModal = () => {
    this.setState({ showModal: false });
  };

  handleDelete() {
    axios
      .delete(`${REACT_APP_API_URL}/warehouse/${this.props.id}`)
      .then((res) => {
        this.setState({
          showModal: false,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    let modal = <></>;

    // if (this.state.showModal) {
    //   modal = (
    //     <DeleteWarehouseModal
    //       closeModal={this.closeModal}
    //       delete={() => this.handleDelete()}
    //     />
    //   );
    // }

    return (
      <>
        <div className="warehouseList__card">
          <div className="warehouseList__card-container">
            <div className="warehouseList__card-info">
              <h3 className="warehouseList__card-title">WAREHOUSE</h3>
              <Link
                to={`/warehouse/${this.props.id}`}
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
              <p className="warehouseList__card-text">{this.props.name}</p>
            </div>

            <div className="warehouseList__card-info">
              <h3 className="warehouseList__card-title">ADDRESS</h3>
              <p className="warehouseList__card-text">
                {this.props.address}
              </p>
            </div>

            <div className="warehouseList__card-info">
              <h3 className="warehouseList__card-title">CONTACT INFORMATION</h3>
              <p className="warehouseList__card-text">{this.props.number}</p>
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
            <Link to={`/warehouse/${this.props.id}/edit`} ><img
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
