// import packages needed for routing
import React from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import InventoryPage from "./pages/InventoryPage/InventoryPage";
import EditWarehouse from "./pages/EditWarehouse/EditWarehouse";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import DeleteInventoryModal from "./components/DeleteInventoryModal/DeleteInventoryModal";
import WarehouseDetails from "./components/WarehouseDetails/WarehouseDetails";
import WarehouseList from "./components/WarehouseList/WarehouseList";
import DeleteWarehouseModal from "./components/DeleteWarehouseModal/DeleteWarehouseModal";
//the routes  for DeleteModals is dummy route just to see the component, need to set up with relevant componet and toggle state to render it or not"

function App() {
  return (
    // define the routes here
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/" exact>
          <Redirect to="/warehouse" exact component={WarehouseList} />
        </Route>
        <Route path="/inventory" component={InventoryPage} />
        <Route path="/warehouse" exact component={WarehouseList} />
        <Route path="/warehouse/:id" exact component={WarehouseDetails} />
        <Route path="/warehouse/:id/edit" exact component={EditWarehouse} />
        <Route
          path="/warehouse/:id/delete"
          exact
          component={DeleteWarehouseModal}
        />
        <Route
          path="/warehouse/:warehouseId/inventory/:inventoryId"
          component={DeleteInventoryModal}
        />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
