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
                        <p className="warehouseList__card-text warehouseList__card-location">Manhattan</p>
                        <img className="warehouseList__icon" src={ChevronIcon} alt="chevron icon" />
                    </div>
                </div>

                <div className="warehouseList__card-info">
<<<<<<< HEAD
                    <h3 className="warehouseList__card-title">CONTACT NAME</h3>
=======
                    <h3 className="warehouseList__card-title">CONTACT ME</h3>
>>>>>>> O21DM2-6-AddWarehouseComponent
                    <p className="warehouseList__card-text">Parmin Aujla</p> 
                </div>

                <div className="warehouseList__card-info">
                    <h3 className="warehouseList__card-title">ADDRESS</h3>
<<<<<<< HEAD
                    <p className="warehouseList__card-text">503 Broadway</p> 
=======
                    <p className="warehouseList__card-text">503 Broadway, New York USA"</p> 
>>>>>>> O21DM2-6-AddWarehouseComponent
                </div>

                <div className="warehouseList__card-info">
                    <h3 className="warehouseList__card-title">CONTACT INFORMATION</h3>
                    <p className="warehouseList__card-text">+1 (646) 123-1234</p>
                    <p className="warehouseList__card-text">paujla@instock.com</p>
                </div>
            </div>

            <div className="warehouseList__card-action">
                <img className="warehouseList_card-delete" src={DeleteIcon} alt="delete icon" />
                <img className="warehouseList_card-edit" src={EditIcon} alt="edit icon" />
            </div>
        </div>
        
        </>
    )
}

export default WarehouseCard;