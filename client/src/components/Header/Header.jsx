import React from "react";
import "./Header.scss";
import inStockLogo1x from "../../assets/logo/inStockLogo1x.png";

const Header = () => {
  return (
    <div className="header">
      <img className="header__logo" src={inStockLogo1x} alt="logo" />
      <div className="header__nav">
        <h3 className="header__nav-warehouses">Warehouses</h3>
        <h3 className="header__nav-inventory">Inventory</h3>
      </div>
    </div>
  );
};

export default Header;
