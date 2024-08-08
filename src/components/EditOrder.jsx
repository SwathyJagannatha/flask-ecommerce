// import React, { useEffect, useState } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import { Form, Button, Container, Row, Col, Alert } from 'react-bootstrap';
// import axios from 'axios';
// import NavigationBar from './NavigationBar';
// import Footer from './Footer';

// const EditOrder = () => {
//   const { id: orderId } = useParams();
//   const [order, setOrder] = useState(null);
//   const [products, setProducts] = useState([]);
//   const [error, setError] = useState(null);
//   const [success, setSuccess] = useState(null);
//   const navigate = useNavigate();

//   const fetchOrder = async () => {
//     try {
//       const response = await axios.get(`http://127.0.0.1:5000/orders/${orderId}`);
//       setOrder(response.data);
//       setProducts(response.data.products);
//     } catch (error) {
//       console.error('Error fetching order:', error);
//       setError('Error fetching order. Please try again later.');
//     }
//   };

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setOrder((prevOrder) => ({ ...prevOrder, [name]: value }));
//   };

//   const handleProductChange = (index, e) => {
//     const { name, value } = e.target;
//     setProducts((prevProducts) => {
//       const newProducts = [...prevProducts];
//       newProducts[index] = { ...newProducts[index], [name]: value };
//       return newProducts;
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const updatedOrder = { ...order, products };
//       await axios.put(`http://127.0.0.1:5000/orders/${orderId}`, updatedOrder);
//       setSuccess('Order updated successfully!');
//       setTimeout(() => navigate('/orders'), 2000); // Redirect to order list after 2 seconds
//     } catch (error) {
//       console.error('Error updating order:', error);
//       setError('Error updating order. Please try again later.');
//     }
//   };

//   useEffect(() => {
//     fetchOrder();
//   }, [orderId]);

//   if (!order) return <div>Loading...</div>;

//   return (
//     <Container className="py-2">
//       <NavigationBar />
//       <Row className="py-2">
//         <Col>
//           <h3>Edit Order</h3>
//           {error && <Alert variant="danger">{error}</Alert>}
//           {success && <Alert variant="success">{success}</Alert>}
//           <Form onSubmit={handleSubmit}>
//             <Form.Group controlId="formOrderId">
//               <Form.Label>Order ID</Form.Label>
//               <Form.Control type="text" value={order.order_id} readOnly />
//             </Form.Group>
//             <Form.Group controlId="formCustomerId">
//               <Form.Label>Customer ID</Form.Label>
//               <Form.Control type="text" name="customer_id" value={order.customer_id} onChange={handleInputChange} />
//             </Form.Group>
//             <Form.Group controlId="formDate">
//               <Form.Label>Date</Form.Label>
//               <Form.Control type="date" name="date" value={order.date} onChange={handleInputChange} />
//             </Form.Group>
//             <h4>Products</h4>
//             {products.map((product, index) => (
//               <div key={product.product_id} className="mb-3">
//                 <Form.Group controlId={`formProductId-${product.product_id}`}>
//                   <Form.Label>Product ID</Form.Label>
//                   <Form.Control type="text" value={product.product_id} readOnly />
//                 </Form.Group>
//                 <Form.Group controlId={`formProductName-${product.product_id}`}>
//                   <Form.Label>Product Name</Form.Label>
//                   <Form.Control
//                     type="text"
//                     name="name"
//                     value={product.name}
//                     onChange={(e) => handleProductChange(index, e)}
//                   />
//                 </Form.Group>
//                 <Form.Group controlId={`formProductPrice-${product.product_id}`}>
//                   <Form.Label>Product Price</Form.Label>
//                   <Form.Control
//                     type="text"
//                     name="price"
//                     value={product.price}
//                     onChange={(e) => handleProductChange(index, e)}
//                   />
//                 </Form.Group>
//               </div>
//             ))}
//             <Button variant="primary" type="submit">
//               Update Order
//             </Button>
//           </Form>
//         </Col>
//       </Row>
//       <Footer />
//     </Container>
//   );
// };

// export default EditOrder;

import React, { useState } from 'react';
import { useParams } from "react-router-dom";
import axios from 'axios';
import { Form, Button, Container } from 'react-bootstrap';
import NavigationBar from './NavigationBar';

function EditOrder() {
    const { id } = useParams();
    const [customerId, setCustomerId] = useState('');
    const [date, setDate] = useState('');
    const [productIds, setProductIds] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await axios.put(`http://127.0.0.1:5000/orders/${id}`, {
                customer_id: customerId,
                date: date,
                product_id: productIds.split(',').map(id => id.trim())  // Assume productIds is a comma-separated list of product IDs
            });
            console.log('Order updated successfully:', response.data);

            setCustomerId('');
            setDate('');
            setProductIds('');
        } catch (error) {
            console.error('There was an error updating the order!', error);
        }
    };

    return (
        <>
        <NavigationBar/>
        <Container className='col-6 pt-5'>
        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
                <Form.Label>Customer ID</Form.Label>
                <Form.Control
                    type="number"
                    placeholder="Enter customer ID"
                    value={customerId}
                    onChange={(e) => setCustomerId(e.target.value)}
                    required
                />
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Order Date</Form.Label>
                <Form.Control
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    required
                />
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Product IDs (comma-separated)</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Enter product IDs"
                    value={productIds}
                    onChange={(e) => setProductIds(e.target.value)}
                    required
                />
            </Form.Group>

            <Button variant="primary" type="submit">
                Submit Change
            </Button>
        </Form>
        </Container>
     </>
    );
}

export default EditOrder;