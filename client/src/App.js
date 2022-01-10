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
import EditInventoryItem from "./components/EditIventoryItem/EditInventoryItem";


function App() {
  return (
    // define the routes here
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/" exact>
          <Redirect to="/warehouse" exact component={WarehousePage} />
        </Route>
        <Route path="/warehouse/:id/edit" component={EditWarehouse} />
        <Route path="/warehouse/add" exact component={AddWarehouse} />
        <Route path="/warehouse/:id" exact component={WarehouseDetails} />
        <Route path="/warehouse" exact component={WarehousePage} />


        <Route path="/inventory/:id/edit" exact component={EditInventoryItem} />
        <Route path="/inventory/add" exact component={AddInventory} />
        <Route path="/inventory/:id" exact component={InventoryItemDetails} />
        <Route path="/inventory" exact component={InventoryPage} />
        
        <Route path="*" exact>
          <Redirect to="/warehouse" exact component={WarehousePage} />
        </Route>

      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
