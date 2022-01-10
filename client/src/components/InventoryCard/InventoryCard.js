import React from "react";
import deleteIcon from "../../assets/icons/delete_outline-24px.svg";
import editIcon from "../../assets/icons/edit-24px.svg";
import ChevronIcon from "../../assets/icons/chevron_right-24px.svg";
import DeleteInventoryModal from "../DeleteInventoryModal/DeleteInventoryModal";
import "./InventoryCard.scss";
import { Link } from "react-router-dom";

class InventoryCard extends React.Component {
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
        <DeleteInventoryModal
          itemName={this.props.itemName}
          inventoryId={this.props.id}
          closeModal={this.closeModal}
        />
      );
    }

    return (
      <>
        {modal}
        <div className="inventory__card">
          <div className="inventory__card-container">
            <div className="inventory__card-info">
              <h3 className="inventory__card-title">INVENTORY ITEM</h3>
              <Link
                to={{
                  pathname: `/inventory/${this.props.id}`,
                  state: {},
                }}
                className="inventory__link"
              >
                <div className="inventory__card-name">
                  <p className="inventory__card-text">{this.props.itemName}</p>
                  <img
                    className="inventory__icon"
                    src={ChevronIcon}
                    alt="chevron icon"
                  />
                </div>
              </Link>
            </div>

            <div className="inventory__card-info">
              <h3 className="inventory__card-title">CATEGORY</h3>
              <div className="inventory__card-name">
                <p className="inventory__card-text">{this.props.category}</p>
              </div>
            </div>

            <div
              className={
                this.props.status === "Out of Stock"
                  ? "out-of-stock"
                  : "in-stock"
              }
            >
              <h3 className="inventory__card-title">Status</h3>
              <div className="inventory__card-name">
                <p className="inventory__card-text">{this.props.status}</p>
              </div>
            </div>

            <div className="inventory__card-info">
              <h3 className="inventory__card-title inventory__card-quantity">
                QTY
              </h3>
              <div className="inventory__card-name">
                <p className="inventory__card-text">{this.props.quantity}</p>
              </div>
            </div>

            <div className="inventory__card-info">
              <h3 className="inventory__card-title">WAREHOUSE</h3>
              <p className="inventory__card-text">{this.props.warehouseName}</p>
            </div>
          </div>
          <div>
            <img src={deleteIcon} alt="Delete icon" onClick={this.showModal} />
            {/* Please add pathname: "./inventory/:id/warehouse/:id/edit" ones edit inventory component is setup*/}
            <Link
              to={{
                pathname: `/inventory/${this.props.id}/edit`,
                state: {},
              }}
            >
              <img src={editIcon} alt="Edit icon" />
            </Link>
          </div>
        </div>
      </>
    );
  }
}

export default InventoryCard;
