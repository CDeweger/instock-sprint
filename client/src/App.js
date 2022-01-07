<<<<<<< HEAD
import Header from './components/Header/Header';
import React from 'react';
function App() {
  return (
    <div className="App">
      <Header/>
    </div>
=======
// import packages needed for routing
import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import InventoryPage from "./pages/InventoryPage/InventoryPage";
import EditWarehouse from "./pages/EditWarehouse/EditWarehouse";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    // define the routes here
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/inventory" component={InventoryPage} />
        <Route path="/warehouse/:id/edit" component={EditWarehouse} />
      </Switch>
      <Footer />
    </BrowserRouter>
>>>>>>> dd4163d00a4764a06e9c328c8b0509a8b925a30e
  );
}

export default App;
