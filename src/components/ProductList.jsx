import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button, ListGroup, Container, Row, Col, Alert } from "react-bootstrap";
import axios from "axios";
import NavigationBar from "./NavigationBar";
import Footer from './Footer';
import Testimonials from "./testimonial";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);  // State to manage error messages
  const navigate = useNavigate();

  const fetchProducts = async () => {
    try {
      const response = await axios.get("http://127.0.0.1:5000/products");
      setProducts(response.data);
    } catch (error) {
      console.error("Error fetching products:", error);
      setError("Failed to fetch products.");
    }
  };

  const deleteProduct = async (id) => {
    try {
      await axios.delete(`http://127.0.0.1:5000/products/${id}`);
      fetchProducts();
    } catch (error) {
      console.error("Error deleting product:", error);
      setError("Deletion failed due to foreign key constraint");
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <Container>
      <NavigationBar />
      <Row>
        <Col>
          <h3 style={{
            background: "linear-gradient(to right,orange,black)",
            padding: "20px",
            borderRadius: "10px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            marginTop: '20px',
            textAlign: 'center',
          }}>Products List</h3>
          {error && <Alert variant="danger">{error}</Alert>} {/* Display error */}
          <ListGroup
            style={{
              background: "linear-gradient(to right,brown,teal)",
              padding: "25px",
              borderRadius: "10px",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
              marginTop: "20px",
              fontFamily: "Times New Roman",
              fontSize: "20px",
            }}
          >
            {products.map((product) => (
              <ListGroup.Item style={{ fillOpacity: "7px" }}
                key={product.product_id}
                className="d-flex justify-content-between align-items-center shadow-sm p-3 mb-3 bg-orange rounded-5"
              >
                <ListGroup.Item style={{ color: "Teal", boxShadow: "5px 5px" }} key={product.name}>
                  #{product.product_id} - ({product.name}, ${product.price})
                </ListGroup.Item>
                <div>
                  <Button
                    variant="primary"
                    onClick={() =>
                      navigate(`/edit-product/${product.product_id}`)
                    }
                    className="me-2"
                  >
                    Edit
                  </Button>
                  <Button
                    variant="danger"
                    onClick={() => deleteProduct(product.product_id)}
                  >
                    Delete
                  </Button>
                </div>
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Col>
      </Row>
      <div className="bg-light">
        <Testimonials/>
        </div>
      <div className="footer py-5">
        <Footer />
      </div>
    </Container>
  );
};

export default ProductList;