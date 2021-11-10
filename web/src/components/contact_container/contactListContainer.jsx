import React from "react";
import ContactList from "../contact_list/contactList";
import { useState, useEffect } from "react";
import axios from "axios";
import './contactListContainer.css'
import { Link } from "react-router-dom";

function ContactContainer() {
  const [product, getProducts] = useState([]);
  let route = `http://localhost:4000/contacts`
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
    <h2 className="title">All Contacts</h2>
    <button className="button_header">
        <Link className="buttonLink" to="/edit_contact">
          Edit Contact
        </Link>
      </button>
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
              <ContactList
                rows={product}
              />
          </div>
        </>
      ) : (
        <p>Loading... </p>
      )}
    </div>
    </div>

    </>
  );
}

export default ContactContainer;