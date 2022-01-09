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
import WarehousePage from "./pages/WarehousePage/WarehousePage";
//thee route here for DeleteInventoryModal is dummy route just to see the component
import InventoryItemDetails from "./components/InventoryItemDetails/InventoryItemDetails";

function App() {
  return (
    // define the routes here
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/" exact>
          <Redirect to="/warehouse" exact component={WarehousePage} />
        </Route>
        <Route path="/inventory" component={InventoryPage} />
        <Route path="/warehouse" exact component={WarehousePage} />
        <Route path="/warehouse/:id" exact component={WarehouseDetails} />
        <Route path="/warehouse/:id/edit" component={EditWarehouse} />
        <Route path="/test" component={InventoryItemDetails} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;