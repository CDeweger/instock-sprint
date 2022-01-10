import React from "react";
import WarehouseList from "../../components/WarehouseList/WarehouseList";
import { Route } from "react-router-dom";
import axios from "axios";
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";
const { REACT_APP_API_URL } = process.env;

class WarehousePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      warehouseList: [],
    };
  }

  getWarehouseList = () => {
    axios
      .get("http://localhost:8080/warehouse")
      // .get(`${REACT_APP_API_URL}/warehouse`)

      .then((res) => {
        this.setState({
          warehouseList: res.data,
        });
      })
      .catch((e) => {
        console.error(e);
        alert("something went wrong");
      });
  };

  componentDidMount() {
    this.getWarehouseList();
  }

  render() {
    if (!this.state.warehouseList.length) {
      return <LoadingSpinner />;
    }

    return (
      <div>
        <Route
          path="/warehouse"
          exact
          render={(routeProps) => {
            return (
              <WarehouseList
                {...routeProps}
                warehouseList={this.state.warehouseList}
              />
            );
          }}
        />
      </div>
    );
  }
}

export default WarehousePage;
