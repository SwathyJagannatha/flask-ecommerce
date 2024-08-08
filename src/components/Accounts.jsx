import React from "react";
import NavigationBar from "./NavigationBar";
import CustomerAccountList from "./GetAccounts";
import CreateCustomerAccount from "./AccountsPost";
// import "./AppStyles.css"; 

function Accounts(){
  return (
    <div className="account-page">
      <NavigationBar />
      <h1>Welcome to our Customer Accounts Page </h1>
      <CustomerAccountList/>
      <CreateCustomerAccount/>
    </div>
  )
}

export default Accounts;