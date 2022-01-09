// import packages needed for routing
import React from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import InventoryPage from "./pages/InventoryPage/InventoryPage";
import EditWarehouse from "./pages/EditWarehouse/EditWarehouse";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import WarehouseDetails from "./components/WarehouseDetails/WarehouseDetails";
import WarehouseList from "./components/WarehouseList/WarehouseList";
//the routes  for DeleteModals is dummy route just to see the component, need to set up with relevant componet and toggle state to render it or not"
//thee route here for DeleteInventoryModal is dummy route just to see the component
import InventoryItemDetails from "./components/InventoryItemDetails/InventoryItemDetails";

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
        <Route path="/warehouse/:id/edit" component={EditWarehouse} />
        <Route path="/test" component={InventoryItemDetails} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
