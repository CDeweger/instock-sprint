// import packages needed for routing
import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import InventoryPage from "./pages/InventoryPage/InventoryPage";
import EditWarehouse from "./pages/EditWarehouse/EditWarehouse";
import Footer from "./components/Footer/Footer";
import DeleteInventoryModal from "./components/DeleteInventoryModal/DeleteInventoryModal";
import WarehouseDetails from "./components/WarehouseDetails/WarehouseDetails";
import WarehouseList from "./components/WarehouseList/WarehouseList";
import AddWarehouse from "./components/AddWarehouse/AddWarehouse";
//thee route here for DeleteInventoryModal is dummy route just to see the component

function App() {
  return (
    // define the routes here
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/inventory" component={InventoryPage} />
        <Route path="/warehouse" exact component={WarehouseList} />
        <Route path="/warehouse/add" exact component={AddWarehouse} />
        <Route path="/warehouse/:id/edit" component={EditWarehouse} />
        <Route
          path="/warehouse/:warehouseId/inventory/:inventoryId"
          component={DeleteInventoryModal}
        />
        <Route path="/warehouse/:id" exact component={WarehouseDetails} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
