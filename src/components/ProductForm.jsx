// import React, {useState} from "react";
// import axios from "axios";
// import NavigationBar from "./NavigationBar";

// function ProductForm(){
//   const [customerData, setCustomerData] = useState({
//     name: '',
//     phone: '',
//     email: ''
//   })

//   // const customer = {name: "", phone: "", email: ""}
//   // customerData = customer

//   const formStyles = {
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'start',
//     justifyContent: 'space-between',
//     height: '250px'
//   }

//   // Write a function to handle form submission
//   const handleSubmit = async (event) => {
//     event.preventDefault();

//     const response = await axios.post(`https://httpbin.org/post`, {
//       body: customerData
//     })

//     console.log(response.data)
//   }

//   // Write a function to handle change of form
//   // const handleChange = (event) => {
//   //   // event = {
//   //   //   name: "name",
//   //   //   value: "Katelyn Mehner"
//   //   // }

//   //   event.preventDefault();

//   //   let {name, value} = event.target; // Grabbing the name and value attribute and setting these variable names using the spread operator
//   //   // let name = event.target.name
//   //   // let value = event.target.value

//   //   const newData = {...customerData};

//   //   for (let [key, val] of Object.entries(newData)){
//   //     console.log(`The key is ${key}`);
//   //     console.log(`The value is ${val}`)

//   //     if (key==name){
//   //       newData[key] = value

//   //       console.log(`Key ${key} == name ${name}`)
//   //     }
//   //   }
//   //   console.log(newData);
//   //   setCustomerData(newData);

//   // }

//   const handleChange = (event) => {
//     // Phone number input event
//     // event = { name: "phone", value: "(805) 333-4343" }
//     event.preventDefault();

//     let { name, value } = event.target;
//     // let name = "phone"
//     // let value = "(805) 333-4343"

//     const newData = { ...customerData };

//     if (customerData.hasOwnProperty(name)) {
//       newData[name] = value;
//     }

//     setCustomerData(newData);

//   };

//   return (
//     <div>
//       <NavigationBar />
//       <form style={formStyles} onSubmit={handleSubmit}>
//         <h3>Add/Edit Customer</h3>

//         <label htmlFor="name">Name:</label>
//         <input type="text" name="name" value={customerData.name} onChange={handleChange}/>

//         <label htmlFor="phone">Phone:</label>
//         <input type="text" name="phone" value={customerData.phone} onChange={handleChange}/>

//         <label htmlFor="email">Email:</label>
//         <input type="text" name="email" value={customerData.email} onChange={handleChange}/>

//         <button type="submit">Submit</button>
//       </form>
//     </div>
//   )
// }

// export default ProductForm;

//today's coe commented
// import React, {useState, useEffect} from "react";
// import axios from "axios";
// import NavigationBar from "./NavigationBar";
// import { useParams, useNavigate } from "react-router-dom";

// function ProductForm( {onProductUpdated} ){
//   const [name, setName] = useState('');
//   const [price, setPrice] = useState('');
//   const [errors, setErrors] = useState({});
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [error, setError] = useState('');
//   const { id } = useParams(); // We want to get the product ID from the URL
//   //const navigate = useNavigate();

//   const fetchProductDetails2 = async () => {
//     try {
//       //const response = await axios.get(`http://127.0.0.1:5000/product-details/${id}`);
//       const response = await axios.get(`http://127.0.0.1:5000/products/${id}`);
//       console.log(response.data);
//       setName(response.data.name);
//       setPrice(response.data.price);
//     } catch (error) {
//       console.error(`Error fetching product details: ${error}`);
//       setError(error.toString());
//     }
//   }

//   useEffect(() => {
//     // Update a product
//     const fetchProductDetails = async () => {
//       try {
//         //const response = await axios.get(`http://127.0.0.1:5000/product-details/${id}`);
//         const response = await axios.get(`http://127.0.0.1:5000/products/${id}`);
//         console.log(response.data);
//         setName(response.data.name);
//         setPrice(response.data.price);
//       } catch (error) {
//         console.error(`Error fetching product details: ${error}`);
//         setError(error.toString());
//       }
//     }
//     if (id) {
//       fetchProductDetails();
//     }
//   }, [id])

//   // Function to validate the form
//   const validateForm = () => {
//     const errors = { name: "", price: ""};

//     if (!name) {
//       errors.name = 'Product name is required';
//     }

//     if (!price || price <= 0){
//       errors.price = 'Price must be a positive number';
//     }

//     // console.log("Error name:", errors.name);
//     // console.log("Error price:", errors.price)

//     return errors
//   }

//   // Function to handle user submitting the form
//   const handleSubmit = async (event) => {

//     // Prevent the form from glitching
//     event.preventDefault();

//     // Validate the form
//     const errors = validateForm();

//     //console.log("Errors length", Object.keys(errors) === 0);

//     // Check if the form has any errors - proceed if all values are good
//     if (Object.keys(errors).length === 0){

//       // Signal that we are doing something with the data (ie. loading wheel)
//       setIsSubmitting(true);

//       // Set error to null - we got the data from the API
//       setError(null);

//       const productData = {name, price};

//       try {
//         // Update existing product
//         if (id) {
//           await axios.put(`http://127.0.0.1:5000/products/${id}`, productData)
//           console.log(productData);
//         }

//         // Create new product
//         else {
//           await axios.post('http://127.0.0.1:5000/products', productData);
//           console.log(productData);
//         }

//         // Reset the form after updating/creating the product
//         setName('');
//         setPrice('');

//         // Finish loading wheel
//         setIsSubmitting(false);
//         fetchProductDetails2();
//         //cal fetchprod details func --> reload info

//       } catch (error) {
//         console.error("Error submitting the product:", error);
//         setError(error.toString());
//         setIsSubmitting(false);
//       }

//     } else {
//       setErrors(errors)
//     }

//   };

//   if (isSubmitting) return <p>Submitting product data...</p>
//   if (error) return <p>Error submitting product data: {error}</p>

//   return (
//     <div className="product-form">
//       <NavigationBar />
//       <form onSubmit={handleSubmit}>
//         <h3>{id ? `Edit` : `Add`} Products</h3>
//         <label>
//           Name:
//           <input type="text" value={name} onChange={(e) => setName(e.target.value)}/>
//           {errors && <div style={{color: 'red'}}>{errors.name}</div>}
//         </label>

//         <br />

//         <label>
//           Price:
//           <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} />
//           {errors && <div style={{color: 'red'}}>{errors.price}</div>}
//         </label>

//         <br />

//         <button type="submit">Submit</button>

//       </form>
//     </div>
//   )

// }

// export default ProductForm;

// src/components/ProductForm.jsx
/*import React, { useRef, useState } from 'react';

const ProductForm = () => {
    const nameRef = useRef(null);
    const priceRef = useRef(null);
    const [errors, setErrors] = useState({});

    const validateForm = () => {
        const errors = {};
        const name = nameRef.current.value;
        const price = priceRef.current.value;
        if (!name) errors.name = 'Product name is required';
        if (!price || price <= 0) errors.price = 'Price must be a positive number';
        return errors;
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const errors = validateForm();
        if (Object.keys(errors).length === 0) {
            const name = nameRef.current.value;
            const price = priceRef.current.value;
            console.log('Submitted product:', { name, price });
            // Handle valid form submission here
        } else {
            setErrors(errors);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h3>Add/Edit Product</h3>
            <label>
                Name:
                <input type="text" ref={nameRef} />
                {errors.name && <div style={{ color: 'red' }}>{errors.name}</div>}
            </label>
            <br />
            <label>
                Price:
                <input type="number" ref={priceRef} />
                {errors.price && <div style={{ color: 'red' }}>{errors.price}</div>}
            </label>
            <br />
            <button type="submit">Submit</button>
        </form>
    );
};

export default ProductForm;
*/

import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Form, Button, Alert, Modal, Spinner } from "react-bootstrap";
import axios from "axios";
import NavigationBar from "./NavigationBar";
import Footer from './Footer';
import Testimonials from './testimonial';

const ProductForm = ({ onProductUpdated }) => {
  const [product, setProduct] = useState({ name: "", price: "" });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const { id } = useParams(); // Get the product ID from the URL
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      const fetchProductDetails = async () => {
        try {
          const response = await axios.get(
            `http://127.0.0.1:5000/products/${id}`
          );
          setProduct(response.data);
        } catch (error) {
          console.error("Error fetching product details:", error);
          setError(error.toString());
        }
      };
      fetchProductDetails();
    }
  }, [id]);

  const validateForm = () => {
    const errors = {};
    if (!product.name) errors.name = "Product name is required";
    if (!product.price || product.price <= 0)
      errors.price = "Price must be a positive number";
    setErrors(errors);
    return errors;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const errors = validateForm();
    if (Object.keys(errors).length === 0) {
      setSubmitting(true);
      setError(null);
      try {
        if (id) {
          await axios.put(`http://127.0.0.1:5000/products/${id}`, product);
        } else {
          await axios.post("http://127.0.0.1:5000/products", product);
        }
        setShowSuccessModal(true);
      } catch (error) {
        console.error("Error submitting the product:", error);
        setError(error.toString());
        setSubmitting(false);
      }
    } else {
      setErrors(errors);
    }
  };

  const handleClose = () => {
    setShowSuccessModal(false);
    setProduct({ name: "", price: "" });
    setSubmitting(false);
    navigate("/products"); // Use navigate for redirection
  };


  const handleChange = (event) => {
    const { name, value } = event.target;
    setProduct((prevProduct) => ({
      ...prevProduct,
      [name]: value,
    }));
  };

  //if (isSubmitting) return <p>Submitting product data...</p>;
  //if (error) return <p>Error submitting product data: {error}</p>;

  return (
    <div className="product-form">
      <NavigationBar />
      <Form 
        style={{
          background: "linear-gradient(to right,pink,blue)",
          padding: "20px",
          borderRadius: "10px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          marginTop : '20px',
          marginBottom:'24px'
        }}
        onSubmit={handleSubmit}
      >
        <h3>{id ? "Edit" : "Add"} Product</h3>
        {error && <Alert variant="danger">{error}</Alert>}
        <Form.Group controlId="productName">
          <Form.Label>Name:</Form.Label>
          <Form.Control
            type="text"
            name="name"
            value={product.name}
            onChange={handleChange}
            isInvalid={!!errors.name}
            style={{ marginBottom: '10px' }}
            
          />
          <Form.Control.Feedback type="invalid">
            {errors.name}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group controlId="productPrice">
          <Form.Label>Price:</Form.Label>
          <Form.Control
            type="number"
            name="price"
            value={product.price}
            onChange={handleChange}
            isInvalid={!!errors.price}
            style={{ marginBottom: '20px' }}
          />
          <Form.Control.Feedback type="invalid">
            {errors.price}
          </Form.Control.Feedback>
        </Form.Group>

        <Button variant="success" type="submit" disabled={isSubmitting}  style={{ width: '100%', padding: '10px' }}>
          {isSubmitting ? (
            <Spinner as="span" animation="border" size="sm" />
          ) : (
            "Submit"
          )}
        </Button>
      </Form>

      <Modal show={showSuccessModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title style={{color: "maroon"}}>Success</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ 
          background: "linear-gradient(to right, teal, #fad0c4)", 
          padding: '20px', 
          borderRadius: '10px', 
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' 
        }}>
          Product has been successfully {id ? "updated" : "added"}!
        </Modal.Body>
        <Modal.Footer style={{ justifyContent: 'center' , color: 'greenyellow'}}>
          <Button style={{ justifyContent: 'center' , color: 'yellow'}} variant="success" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      <div className="bg-warning">
        <Testimonials/>
        </div>
      <div className="py-5 mt-5 mb-5 p-5">
      <Footer/>
      </div>
    </div>
  );
};

export default ProductForm;
