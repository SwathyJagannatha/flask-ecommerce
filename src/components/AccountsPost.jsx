import React, { useState } from 'react';
import axios from 'axios';
import { Modal, Button, Form, Container } from 'react-bootstrap';

function CreateCustomerAccount() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [customerId, setCustomerId] = useState('');
    const [modalMessage, setModalMessage] = useState('');
    const [showModal, setShowModal] = useState(false);

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await axios.post('http://127.0.0.1:5000/customeraccount', {
                username: username,
                password: password,
                customer_id: customerId
            });

            setModalMessage('Customer account created successfully!'); // Set the success message
            setShowModal(true); // Show the modal

            setUsername('');
            setPassword('');
            setCustomerId('');
        } catch (error) {
            setModalMessage('There was an error creating the customer account!');
            setShowModal(true); // Show the modal on error as well
        }
    };

    const handleClose = () => setShowModal(false);

    return (
        <Container className='col-6 p-5'>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                    <Form.Label>Username</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="Enter password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </Form.Group>

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

                <Button variant="primary" type="submit">
                    Create Account
                </Button>
            </Form>

            {/* Modal to display success/error messages */}
            <Modal show={showModal} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Success!</Modal.Title>
                </Modal.Header>
                <Modal.Body>{modalMessage}</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </Container>
    );
}

export default CreateCustomerAccount;