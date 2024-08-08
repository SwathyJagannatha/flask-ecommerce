import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Container, Button, ListGroup } from "react-bootstrap";

const CustomerAccountList = () => {
  const [accounts, setAccounts] = useState([]); 

  // Fetch customer accounts function
  const fetchAccounts = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:5000/customeraccount'); 
      setAccounts(response.data);
      console.log(response.data);
    } catch (error)  {
      console.log("Error fetching accounts:", error);
    }
  }

  useEffect(() => {
    fetchAccounts(); 
  }, [])

  // Delete customer account function 
  const deleteAccount = async (account_id) => {
    const confirmed = window.confirm("Are you sure you want to delete this account?");
    if (!confirmed) return;
    try {
      await axios.delete(`http://127.0.0.1:5000/customeraccount/${account_id}`)
      fetchAccounts(); 
    } catch (error) {
      console.log(`Error deleting account ${account_id}:`, error);
    }
  }

  return (
    <Container className="account-list col-8 p-5">
      <h3>Customer Accounts</h3>
      <ListGroup>
        {accounts.map((account) => (
          <ListGroup.Item key={account.account_id} className="d-flex justify-content-between align-items-center">
            <div>
              <p className="mb-0">
                <strong>Username: {account.username}</strong>, Customer ID: {account.customer_id}
              </p>
            </div>
            <div>
              <Button variant="outline-primary" className="me-2">
                <Link to={`/edit-accounts/${account.account_id}`} style={{ color: 'inherit', textDecoration: 'none' }}>
                  Edit Account
                </Link>
              </Button>
              <Button variant="outline-danger" onClick={() => deleteAccount(account.account_id)}>
                Delete
              </Button>
            </div>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </Container>
  );
}

export default CustomerAccountList;