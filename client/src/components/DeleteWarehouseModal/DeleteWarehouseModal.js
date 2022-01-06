import axios from 'axios';
import React from 'react';
import { Link } from "react-router-dom";
// Need to connect to delete icon on warehouse list and also add onclick functionality to delete button.
function DeleteWarehouseModal() {
    // for now use one warehouse ID
    const ID ="2922c286-16cd-4d43-ab98-c79f698aeab0";
    
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
        <button >Delete</button>
      </article>
    );
}

export default DeleteWarehouseModal;