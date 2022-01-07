// import packages needed for routing
import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import InventoryPage from "./pages/InventoryPage/InventoryPage";
import EditWarehouse from "./pages/EditWarehouse/EditWarehouse";
import Footer from "./components/Footer/Footer";
import WarehouseList from "./components/WarehouseList/WarehouseList";
import AddWarehouse from "./components/AddWarehouse/AddWarehouse";

function App() {
  return (
    // define the routes here
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/inventory" component={InventoryPage} />
        <Route path="/warehouse/:id/edit" component={EditWarehouse} />
        <Route path="/warehouse" exact component={WarehouseList} />
        <Route path="/warehouse/add" component={AddWarehouse} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
