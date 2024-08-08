import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Form, Button, Alert, Modal, Spinner } from 'react-bootstrap';
import axios from 'axios';
import NavigationBar from "./NavigationBar";
import Footer from './Footer';
import Testimonials from './testimonial';

const OrderForm = ({ onOrderUpdated }) => {
    const [order, setOrder] = useState({ customer_id: '', date: '' ,products:['']});
    const [errors, setErrors] = useState({});
    const [isSubmitting, setSubmitting] = useState(false);
    const [error, setError] = useState('');
    const [showSuccessModal, setShowSuccessModal] = useState(false);
    const { id } = useParams(); // Get the product ID from the URL
    const navigate = useNavigate();

    useEffect(() => {
        if (id) {
            const fetchOrderDetails = async () => {
                try {
                    const response = await axios.get(`http://127.0.0.1:5000/orders/${id}`);
                    setOrder(response.data);
                } catch (error) {
                    console.error('Error fetching order details:', error);
                    setError(error.toString());
                }
            };
            fetchOrderDetails();
        }
    }, [id]);

    const validateForm = () => {
        const errors = {};
        if (!order.date) errors.date = 'Order date is required';
        //if (!order.products || !order.customer_id) errors.products = 'Products info should be updated for order';
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
                    await axios.put(`http://127.0.0.1:5000/orders/${id}`, order);
                } else {
                    await axios.post('http://127.0.0.1:5000/orders', order);
                }
                setShowSuccessModal(true);
                
            } catch (error) {
                console.error('Error submitting the order details:', error);
                setError(error.toString());
                setSubmitting(false);
            }
        } else {
            setErrors(errors);
        }
    };

    const handleClose = () => {
        setShowSuccessModal(false);
        setOrder({ customer_id: '', date: '' , products:['']});        
        setSubmitting(false);
        navigate('/orders'); // Use navigate for redirection        
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setOrder(prevOrder => ({
            ...prevOrder,
            [name]: value
        }));
    };

    //if (isSubmitting) return <p>Submitting product data...</p>;
    //if (error) return <p>Error submitting product data: {error}</p>;

    return (
        <div className='container py-5 mt-12 bg-light'>
        <div className="order-page">
            <NavigationBar/>
            <Form className="py-4 mt-4" onSubmit={handleSubmit}>
                <h3>{id ? 'Edit' : 'Add'} Order</h3>
                {error && <Alert variant="danger">{error}</Alert>}
                <Form.Group controlId="orderid">
                <Form.Label>customer_id:</Form.Label> 
                <Form.Control
                    type="number"
                    name="customer_id"
                    value={order.customer_id}
                    onChange={handleChange}
                    isInvalid={!!errors.customer_id}
                /> 
                 <Form.Control.Feedback type="invalid">
                    {errors.customer_id}
                </Form.Control.Feedback>
                </Form.Group>

                <Form.Group controlId="orderdate">
                <Form.Label>Order Date:</Form.Label>
                <Form.Control
                    type="date"
                    name="date"
                    value={order.date}
                    onChange={handleChange}
                    isInvalid={!!errors.date}
                />
                <Form.Control.Feedback type="invalid">
                    {errors.date}
                </Form.Control.Feedback>
                </Form.Group>

                <Form.Group controlId="productid">
                <Form.Label>products:</Form.Label> 
                <Form.Control
                    type="number"
                    name="products"
                    value={order.products}
                    onChange={handleChange}
                    isInvalid={!!errors.products}
                /> 
                 <Form.Control.Feedback type="invalid">
                    {errors.products}
                </Form.Control.Feedback>
                </Form.Group>

                <Button variant="primary" type="submit" disabled={isSubmitting}>
                {isSubmitting ? <Spinner as="span" animation="border" size="sm" /> : 'Submit'}
                </Button>
            </Form>

            <Modal show={showSuccessModal} onHide={handleClose}>
                <Modal.Header closeButton>
                <Modal.Title>Success</Modal.Title>
                </Modal.Header>
                <Modal.Body>Order has been successfully {id ? 'updated' : 'added'}!</Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                </Modal.Footer>
            </Modal>
            <Testimonials/>
        </div>
        <div className='py-5 mt-4 mb-4'>
            <Footer/>
        </div>
        </div>
    );
};

export default OrderForm;

// import React, { useState } from 'react';
// import axios from 'axios';
// import { Modal, Button, Form, Container } from 'react-bootstrap';

// function CreateOrder() {
//     const [customerId, setCustomerId] = useState('');
//     const [date, setDate] = useState('');
//     const [productIds, setProductIds] = useState('');
//     const [modalMessage, setModalMessage] = useState('');
//     const [showModal, setShowModal] = useState(false);

//     const handleSubmit = async (event) => {
//         event.preventDefault();

//         try {
//             const response = await axios.post('http://127.0.0.1:5000/orders', {
//                 customer_id: customerId,
//                 date: date,
//                 product_id: productIds.split(',').map(id => id.trim())  // Assume productIds is a comma-separated list of product IDs
//             });

//             setModalMessage('Order created successfully!'); // Set the success message
//             setShowModal(true); // Show the modal

//             setCustomerId('');
//             setDate('');
//             setProductIds('');
//         } catch (error) {
//             setModalMessage('There was an error creating the order!');
//             setShowModal(true); // Show the modal on error as well
//         }
//     };

//     const handleClose = () => setShowModal(false);

//     return (
//         <Container className='col-6'>
//             <Form onSubmit={handleSubmit}>
//                 <Form.Group className="mb-3">
//                     <Form.Label>Customer ID</Form.Label>
//                     <Form.Control
//                         type="number"
//                         placeholder="Enter customer ID"
//                         value={customerId}
//                         onChange={(e) => setCustomerId(e.target.value)}
//                         required
//                     />
//                 </Form.Group>

//                 <Form.Group className="mb-3">
//                     <Form.Label>Order Date</Form.Label>
//                     <Form.Control
//                         type="date"
//                         value={date}
//                         onChange={(e) => setDate(e.target.value)}
//                         required
//                     />
//                 </Form.Group>

//                 <Form.Group className="mb-3">
//                     <Form.Label>Product IDs (comma-separated)</Form.Label>
//                     <Form.Control
//                         type="text"
//                         placeholder="Enter product IDs"
//                         value={productIds}
//                         onChange={(e) => setProductIds(e.target.value)}
//                         required
//                     />
//                 </Form.Group>

//                 <Button variant="primary" type="submit">
//                     Create Order
//                 </Button>
//             </Form>

//             {/* Modal to display success/error messages */}
//             <Modal show={showModal} onHide={handleClose}>
//                 <Modal.Header closeButton>
//                     <Modal.Title>Success!</Modal.Title>
//                 </Modal.Header>
//                 <Modal.Body>{modalMessage}</Modal.Body>
//                 <Modal.Footer>
//                     <Button variant="secondary" onClick={handleClose}>
//                         Close
//                     </Button>
//                 </Modal.Footer>
//             </Modal>
//         </Container>
//     );
// }

// export default CreateOrder;