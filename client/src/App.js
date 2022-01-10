import React from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import InventoryPage from "./pages/InventoryPage/InventoryPage";
import EditWarehouse from "./pages/EditWarehouse/EditWarehouse";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import WarehouseDetails from "./components/WarehouseDetails/WarehouseDetails";
import InventoryItemDetails from "./components/InventoryItemDetails/InventoryItemDetails";

import AddInventory from "./components/AddInventory/AddInventory";
import DeleteInventoryModal from "./components/DeleteInventoryModal/DeleteInventoryModal";

import WarehousePage from "./pages/WarehousePage/WarehousePage";
import AddWarehouse from "./components/AddWarehouse/AddWarehouse";


function App() {
  return (
    // define the routes here
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/" exact>
          <Redirect to="/warehouse" exact component={WarehousePage} />
        </Route>
        <Route path="/warehouse" exact component={WarehousePage} />
        <Route path="/warehouse/:id" exact component={WarehouseDetails} />
        <Route path="/warehouse/:id/edit" exact component={EditWarehouse} />
        {/* <Route
          path="/warehouse/:id/delete"
          exact
          component={DeleteWarehouseModal}
        /> */}
        <Route path="/warehouse/:id/edit" component={EditWarehouse} />
        {/* routes for inventoryPage */}
        <Route path="/inventory" exact component={InventoryPage} />
        <Route
          path={"/inventory/:id/warehouse/:id/delete"}
          component={DeleteInventoryModal}
        />
        <Route path="/inventory/:id/details" component={InventoryItemDetails} />
        <Route path="/inventory/add" component={AddInventory} />

      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
