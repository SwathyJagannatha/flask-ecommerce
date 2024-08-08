import React, { useState } from 'react';
import { useParams } from "react-router-dom";
import axios from 'axios';
import { Form, Button, Container } from 'react-bootstrap';
import NavigationBar from './NavigationBar';

function ChangeCustomerAccount() {
    const { id } = useParams();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [customerId, setCustomerId] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await axios.put(`http://127.0.0.1:5000/customeraccount/${id}`, {
                username: username,
                password: password,
                customer_id: customerId
            });
            console.log('Customer account updated successfully:', response.data);

            setUsername('');
            setPassword('');
            setCustomerId('');
        } catch (error) {
            console.error('There was an error updating the customer account!', error);
        }
    };

    return (
        <>
        <NavigationBar/>
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
                Submit Change
            </Button>
        </Form>
        </Container>
        </>
    );
}

export default ChangeCustomerAccount;