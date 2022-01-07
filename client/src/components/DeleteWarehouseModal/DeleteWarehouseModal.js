import axios from 'axios';
import React from 'react';
import { Link } from "react-router-dom";
// Need to connect to delete icon on warehouse list 
function DeleteWarehouseModal() {
    // for now use one warehouse ID, for future this we get from props
    const ID ="2922c286-16cd-4d43-ab98-c79f698aeab0";
    const handleDelete=(ID)=>{
      axios.delete(`http://localhost:3000/warehouse/${ID}`)
      .then(resolve=>console.log(resolve.data))
      .catch(error=>error);

    }
    
    return (
      <article>
        <h1>Delete King West warehouse?</h1>
        <p>
          Please confirm that you'd like to delete the King West from list of
          warehouses. You wouldn't be able to undo this action.
        </p>
        <Link to="/">
          <button>Cancel</button>
        </Link>
        <button onClick={handleDelete(ID)}>Delete</button>
      </article>
    );
}

export default DeleteWarehouseModal;