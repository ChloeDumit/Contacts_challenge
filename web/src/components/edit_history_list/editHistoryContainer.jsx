import React from "react";
import EditList from "./editList";
import { useState, useEffect } from "react";
import axios from "axios";
import '../contact_container/contactListContainer.css'
import { Link } from "react-router-dom";

function EditContainer() {
  const [product, getProducts] = useState([]);
  let route = `http://localhost:4000/contacts/edit_history`
  const getallProducts = () => {
    axios
      .get(route)
      .then((res) => {
        const products = res.data.data;
        getProducts(products);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getallProducts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
    <h2 className="title">Edit Historial</h2>
    <button className="button_header">
        <Link className="buttonLink" to="/new_contact">
          New Contact
        </Link>
      </button>
    <div className="container">
    <div className="contact_container" id="ItemDetailContainer">
      {product.length ? (
        <>
          <div className="Row">
              <EditList
                rows={product}
              />
          </div>
        </>
      ) : (
        <p>No updates </p>
      )}
    </div>
    </div>

    </>
  );
}

export default EditContainer;