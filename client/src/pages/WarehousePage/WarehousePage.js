import React from "react";
import WarehouseList from "../../components/WarehouseList/WarehouseList";
import { Route } from "react-router-dom";
import axios from "axios";
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";
const { REACT_APP_API_URL} = process.env;

class WarehousePage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            warehouseList: []
        }

    }

    componentDidMount(){
        axios
        .get("http://localhost:8080/warehouse")
        // .get(`${REACT_APP_API_URL}/warehouse`)

        .then((res) => {
            this.setState({
                warehouseList: res.data,
            });
            console.log(this.state.warehouseList)
        })
        .catch((e) => {
            console.error(e)
            alert("something went wrong")
        });
    }


    render() {

        if(!this.state.warehouseList.length) {
            return <LoadingSpinner />
        }
        
        return(
        <div>
          <Route
            path="/warehouse"
            exact
            render={(routeProps) => {
              return (
                <WarehouseList {...routeProps} warehouseList={this.state.warehouseList} />
              );
            }}
          />
        </div>
        )
    }
}

export default WarehousePage;