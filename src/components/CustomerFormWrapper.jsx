import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import CustomerForm from "./CustomerForm";

function CustomerFormWrapper() {
  let params = useParams(); 
  let navigate = useNavigate(); 

  return (
    <CustomerForm params={useParams} navigate={useNavigate} />
  )
}

export default CustomerFormWrapper; 