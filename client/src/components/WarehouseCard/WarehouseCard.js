import React from "react";
import '../WarehouseCard/WarehouseCard.scss';
import DeleteIcon from '../../assets/icons/delete_outline-24px.svg';
import EditIcon from '../../assets/icons/edit-24px.svg';
import ChevronIcon from '../../assets/icons/chevron_right-24px.svg';

function WarehouseCard () {
    return (
        <>
        <div className="warehouseList__card">
            <div className="warehouseList__card-container">
                <div className="warehouseList__card-info">
                    <h3 className="warehouseList__card-title">WAREHOUSE</h3>
                    <div className="warehouseList__card-name">
                        <p className="warehouseList__card-text warehouseList__card-location">Name of warehouse</p>
                        <img className="warehouseList__icon" src={ChevronIcon} alt="chevron icon" />
                    </div>
                </div>

                <div className="warehouseList__card-info">
                    <h3 className="warehouseList__card-title">CONTACT ME</h3>
                    <p className="warehouseList__card-text">Name of contact</p> 
                </div>

                <div className="warehouseList__card-info">
                    <h3 className="warehouseList__card-title">ADDRESS</h3>
                    <p className="warehouseList__card-text">Address</p> 
                </div>

                <div className="warehouseList__card-info">
                    <h3 className="warehouseList__card-title">CONTACT INFORMATION</h3>
                    <p className="warehouseList__card-text">number</p>
                    <p className="warehouseList__card-text">email</p>
                </div>
            </div>

            <div className="warehouseList__card-action">
                <img className="warehouseList_card-delete" src={DeleteIcon} alt="delete icom" />
                <img className="warehouseList_card-edit" src={EditIcon} alt="edit icon" />
            </div>
        </div>
        
        </>
    )
}

export default WarehouseCard;