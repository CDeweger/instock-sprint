import React from "react";
import WarehouseCard from "../WarehouseCard/WarehouseCard";
import "../WarehouseList/WarehouseList.scss";
import SortIcon from "../../assets/icons/sort-24px.svg";
import { Link } from "react-router-dom";

function WarehouseList(props) {
  return (
    <div className="container">
      <section className="warehouseList">
        <div className="warehouseList__header">
          <h2 className="warehouseList__title">Warehouses</h2>
          <div className="warehouseList__header-container">
            <input
              className="warehouseList__search-bar"
              placeholder="Search..."
            ></input>
            <Link to="/warehouse/add">
              <button className="warehouseList__addButton">
                + Add New Warehouse
              </button>
            </Link>
          </div>
        </div>

        <div className="warehouseList__container">
          <div className="warehouseList__head">
            <div className="warehouseList__head-warehouse">
              <h3 className="warehouseList__head-title">WAREHOUSE</h3>
              <img
                className="warehouseList__sortingImg"
                src={SortIcon}
                alt="sort icon"
              />
            </div>

            <div className="warehouseList__head-warehouse">
              <h3 className="warehouseList__head-title">ADDRESS</h3>
              <img
                className="warehouseList__sortingImg"
                src={SortIcon}
                alt="sort icon"
              />
            </div>

            <div className="warehouseList__head-warehouse">
              <h3 className="warehouseList__head-title">CONTACT NAME</h3>
              <img
                className="warehouseList__sortingImg"
                src={SortIcon}
                alt="sort icon"
              />
            </div>

            <div className="warehouseList__head-warehouse">
              <h3 className="warehouseList__head-title">CONTACT INFORMATION</h3>
              <img
                className="warehouseList__sortingImg"
                src={SortIcon}
                alt="sort icon"
              />
            </div>
          </div>

          <div className="warehouseList__head-action">
            <h3 className="warehouseList__head-title">ACTIONS</h3>
          </div>
        </div>

        <div className="warehouseList__warehouse-cards">
          {props.warehouseList.map((warehouse) => 
            <WarehouseCard
              key={warehouse.id}
              warehouseId={warehouse.id}
              city={warehouse.name}
              address={
                warehouse.address +
                "," +
                warehouse.city +
                "," +
                warehouse.country
              }
              name={warehouse.contact.name}
              number={warehouse.contact.phone}
              email={warehouse.contact.email}
              warehouseModal={props.warehouseModal}
              showModal={props.showModal}
              closeModal={props.closeModal}
            />
          )}

        </div>
      </section>
    </div>
  )
}

export default WarehouseList;
