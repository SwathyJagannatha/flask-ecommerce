import React, { useEffect, useState } from "react";
import { useNavigate, useLocation,useParams} from 'react-router-dom';
import { Button, ListGroup, Container, Row, Col } from 'react-bootstrap';
import axios from 'axios';
import NavigationBar from "./NavigationBar";
import Footer from './Footer';

import Testimonials from './testimonial';

const OrderList = ({onOrderSelect }) => {
  const [orders, setOrders] = useState([]);
  const [error, setError] = useState(null);

  const navigate = useNavigate();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const customerId = queryParams.get('customerId');
  const { id: orderId } = useParams(); // Get orderId from route parameters


  const fetchOrders = async () => {
    try {
      let response;
      if (orderId) {
        response = await axios.get(`http://127.0.0.1:5000/orders/${orderId}`);
        setOrders(response.data ? [response.data] : []);
      } else if (customerId) {
        response = await axios.get(`http://127.0.0.1:5000/orders?customerId=${customerId}`);
        setOrders(response.data);
      } else {
        response = await axios.get('http://127.0.0.1:5000/orders');
        setOrders(response.data);
      }
    } catch (error) {
      console.error('Error fetching orders:', error);
      setError('Error fetching orders. Please try again later.');
      setOrders([]);
    }
  };

  const deleteOrders = async (id) => {
    const confirmed = window.confirm("Are you sure you want to delete this order?");
    if (!confirmed) return;
    try {
      await axios.delete(`http://127.0.0.1:5000/orders/${id}`);
      fetchOrders();
    } catch (error) {
      console.error('Error deleting orders:Due to the presence of related records', error);
      setError("Deletion failed due to the presence of related records!!");
      console.log('Error state set:', 'Deletion failed due to the presence of related records!!'); 
    }
  };

  useEffect(() => {
    fetchOrders();
  }, [customerId, orderId]);

  return (
    <Container className="py-2">
      <NavigationBar />
      <Row className="py-2">
        <Col>
          <h3 style={{
            background: "linear-gradient(to right, pink, red)",
            padding: "20px",
            borderRadius: "10px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            marginTop: '20px',
            textAlign: 'center',
          }}>Orders Placed:</h3>

          <ListGroup style={{
            background: "linear-gradient(to left, teal, yellow)",
            padding: "21px",
            borderRadius: "10px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            marginTop: '20px',
            textAlign: 'center',
          }}>
            {orders.map(order => (
              <ListGroup.Item key={order.order_id} className="d-flex flex-column shadow-sm p-3 mb-3 bg-white rounded">
                <div>ID: {order.order_id}, Customer ID: {order.customer_id}, Date: {order.date}</div>
                <div>Products:</div>
                <ListGroup variant="flush">
                  {order.products.map(product => (
                    <ListGroup.Item key={product.product_id} className="d-flex justify-content-between align-items-center">
                      <span>ID: {product.product_id}, Name: {product.name}, Price: {product.price}</span>
                    </ListGroup.Item>
                  ))}
                </ListGroup>
                <div className="mt-2">
                  {/* <Button variant="primary" className="mt-1 py-1" onClick={() => navigate(`/edit-order/${order.order_id}`)}>Edit</Button> */}
                  <Button
                    variant="primary"
                    onClick={() =>
                      navigate(`/edit-order/${order.order_id}`)
                    }
                    className="me-2"
                  >
                    Edit
                  </Button>
                  <Button variant="warning" className="mt-1 py-1" onClick={() => deleteOrders(order.order_id)}>Delete</Button>
                </div>
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Col>
      </Row>
      <Testimonials/>
      <Footer/>
    </Container>
  );
};

export default OrderList;





// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { Link } from "react-router-dom";
// import { ListGroup, Button, Container } from "react-bootstrap";

// const OrderList = () => {
//   const [orders, setOrders] = useState([]); 

//   // Fetch orders function
//   const fetchOrders = async () => {
//     try {
//       const response = await axios.get('http://127.0.0.1:5000/orders'); 
//       setOrders(response.data);
//     } catch (error)  {
//       console.log("Error fetching orders:", error);
//     }
//   }

//   useEffect(() => {
//     fetchOrders(); 
//   }, [])

//   // Delete order function 
//   const deleteOrder = async (order_id) => {
//     const confirmed = window.confirm("Are you sure you want to delete this order?");
//     if (!confirmed) return;
//     try {
//       await axios.delete(`http://127.0.0.1:5000/orders/${order_id}`)
//       fetchOrders(); 
//     } catch (error) {
//       console.log(`Error deleting order ${order_id}:`, error);
//     }
//   }

//   return (
//     <Container className="col-8 p-5">

//       <h3>Orders</h3>
//       <ListGroup>
//         {orders.map((order) => (
//           <ListGroup.Item key={order.order_id} className="d-flex justify-content-between align-items-center">
//             <div>
//               <p className="mb-0">
//                 <strong>Order ID: {order.order_id}</strong>, Date: {order.date}
//               </p>
//             </div>
//             <div>
//               <Button variant="outline-primary" className="me-2">
//                 <Link to={`/order-edit/${order.order_id}`} style={{ color: 'inherit', textDecoration: 'none' }}>
//                   Details
//                 </Link>
//               </Button>
//               <Button variant="outline-danger" onClick={() => deleteOrder(order.order_id)}>
//                 Delete
//               </Button>
//             </div>
//           </ListGroup.Item>
//         ))}
//       </ListGroup>

//     </Container>
//   );
// }

// export default OrderList;