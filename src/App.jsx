import React,{useState} from 'react'
import {Routes, Route} from 'react-router-dom'
import CustomerList from './components/CustomerList'
import CustomerForm from './components/CustomerForm'; 
import EditOrder from './components/EditOrder'
import ProductList from './components/ProductList'
import ProductForm from './components/ProductForm';
import OrderList from './components/OrderList'
import OrderForm from './components/OrderForm';
import "./AppStyles.css"; 
import { Home } from './components/Home';
import { NotFound } from './components/Notfound';
import CustomerFormWrapper from './components/CustomerFormWrapper';
import Accounts from './components/Accounts';
import AccountsPut from './components/AccountsPut';
const App = () => {

  // PATH: the url you want the user to enter to get to another page (in addition to our main URL)
    // route for customer page -> /add-customer/
    // main url -> localhost:5173
    // complete path -> localhost:5173/add-customer/ 

  const [customerId, setCustomerId] = useState(null);
  return (
    <div className='app-container'>
      <Routes>
        {/* Add home page */}
        <Route path='/' element={ <Home/> } />

        {/* Customer related routes  */}

        {/* Add customer - CustomerForm element */}
        <Route path='/add-customer/' element={ <CustomerFormWrapper /> }/>
        {/* Edit customer - CustomerForm */}
        <Route path='/edit-customer/:id/' element={ <CustomerFormWrapper /> }/> 
        {/* Look at customer list (aka customers) - CustomerList */}
        {/* <Route path='/customers' element={ <CustomerList setCustomerId={setCustomerId}/> } /> */}
        <Route path='/customers' element={ <CustomerList/> } />

        <Route path='/accounts' element={<Accounts/>} />
        <Route path='/edit-accounts/:id' element={<AccountsPut/>} />
        
        {/* Product related routes */}
        {/* Add a product */}
        <Route path="/add-product" element={<ProductForm />} />
        {/* Edit a product(productID) */}
        <Route path="/edit-product/:id" element={<ProductForm />} />
        {/* List all products */}
        <Route path="/products" element={<ProductList />} />

        {/* Order related routes */}
        {/* Add an order */}
        <Route path="/add-order" element={<OrderForm />} />
        {/* Edit a product(productID) */}
        <Route path="/edit-order/:id" element={<EditOrder />} />
        
        <Route path="/orders" element={<OrderList/>} />  
        <Route path="/orders/:id" element={<OrderList />} />
        
        {/* Setting a default page if the path doesn't match anything */}
        <Route path="*" element={<NotFound />}/>

      </Routes>
      
    </div>
  )
}

export default App
