import React from "react";
import { Formik } from "formik";
import axios from "axios";
import "./new_contact.css";

const NameForm = () => (
  <div className='form'>
    <h1 className="title_form">New Contact</h1>
    <Formik 
      initialValues={{
        first_name: "",
        last_name: "",
        email: "",
        phone_number: "",
      }}
      validate={(values) => {
        const errors = {};
        if (
          !values.email ||
          !values.first_name ||
          !values.last_name ||
          !values.phone_number
        ) {
          errors.email = "Required";
        }
        if (!values.first_name) {
          errors.first_name = "Required";
        }
        if (!values.last_name) {
          errors.last_name = "Required";
        }
        if (!values.phone_number) {
          errors.phone_number = "Required";
        }
        if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
          errors.email = "Invalid email address";
        }

        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          axios
            .post(`http://localhost:4000/contacts`, {
              first_name: values.first_name,
              last_name: values.last_name,
              email: values.email,
              phone_number: values.phone_number,
            })
            .then((res) => {
              if (res.data.code === "SUCCESS") {
                alert("Contact created succesfully");
                window.location.href = '/';
              }
            })
            .catch((err) => {
              if (err.response.status === 409) {
                alert("Invalid Data");
              }
              if (err.response.status === 500) {
                alert("Error");
              }
            });
          setSubmitting(false);
        }, 400);
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
        /* and other goodies */
      }) => (
        <form onSubmit={handleSubmit} className="form-data">
          <label className="labels">
            {" "}
            First Name
            </label>
            <input
              type="text"
              name="first_name"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.first_name}
              className="input"
            />
            {errors.first_name && touched.first_name && errors.first_name}
            <br></br>
          <label className="labels">
            {" "}
            Last Name
            </label>
            <input
              type="text"
              name="last_name"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.last_name}
              className="input"
            />
            {errors.last_name && touched.last_name && errors.last_name}
          
          <br></br>
          <label className="labels">
            {" "}
            Email
            </label>
            <input
              type="text"
              name="email"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
              className="input"
            />
            {errors.email && touched.email && errors.email}
          
            <br></br>
          <label className="labels">
            {" "}
            Phone Number
            </label>
            <input
              type="text"
              name="phone_number"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.phone_number}
              className="input"
            />
            {errors.phone_number && touched.phone_number && errors.phone_number}
          

          <br></br>
          <button type="submit" disabled={isSubmitting} className="button_form">
            Submit
          </button>
        </form>
      )}
    </Formik>
  </div>
);

export default NameForm;
