import React, { useState } from 'react'
import CustomerList from './CustomerList'
import { OrderList } from './OrderList';
import ProductList from './ProductList';
import CustomerForm from './CustomerForm'; 

function App() {
  const [selectedCustomerID, setSelectedCustomerID] = useState(null)
  const [selectedOrderID, setSelectedOrderID] = useState(null)

  function handleCustomerSelect(customerID){
    setSelectedCustomerID(customerID); 
  }

  function onOrderSelect(orderID){
    setSelectedOrderID(orderID); 
    console.log("On order select ran")
  }


  return (
    <div className='app-container'>
      <h1>Our Customers</h1>
      <CustomerList handleCustomerSelect={handleCustomerSelect} defaultCustomerID={0}/>

      { selectedCustomerID && (
        <p>Selected Customer ID: {selectedCustomerID}</p>
      )}

      { selectedCustomerID && (
        <div>
          <h1>Selected Customer Orders</h1>
          <OrderList customerID={selectedCustomerID} onOrderSelect={onOrderSelect}/>
        </div>
      )}

      {selectedOrderID && (
        <ProductList orderID={selectedOrderID} />
      )}

      <CustomerForm />

    </div>
  )
}

export default App
