// import packages needed for routing
import React from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import InventoryPage from "./pages/InventoryPage/InventoryPage";
import EditWarehouse from "./pages/EditWarehouse/EditWarehouse";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import WarehouseDetails from "./components/WarehouseDetails/WarehouseDetails";
<<<<<<< HEAD
import WarehouseList from "./components/WarehouseList/WarehouseList";
//the routes  for DeleteModals is dummy route just to see the component, need to set up with relevant componet and toggle state to render it or not"
//thee route here for DeleteInventoryModal is dummy route just to see the component
import InventoryItemDetails from "./components/InventoryItemDetails/InventoryItemDetails";
=======
import WarehousePage from "./pages/WarehousePage/WarehousePage";
import DeleteWarehouseModal from "./components/DeleteWarehouseModal/DeleteWarehouseModal";
//the routes  for DeleteModals is dummy route just to see the component, need to set up with relevant componet and toggle state to render it or not"
import InventoryItemDetails from "./components/InventoryItemDetails/InventoryItemDetails";

>>>>>>> 7279d1aa06880de1e16466e60fbe27df238f4052

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
        <Route path="/warehouse/:id/edit" exact component={EditWarehouse} />
        <Route
          path="/warehouse/:id/delete"
          exact
          component={DeleteWarehouseModal}
        />
        <Route path="/test" component={InventoryItemDetails} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;