// // src/components/CustomerList.jsx
// import React, { Component } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import {
//   ListGroup,
//   Button,
//   Container,
//   Alert,
//   Row,
//   Col,
//   Modal,
//   Form,
// } from "react-bootstrap";

// import axios from "axios";
// import NavigationBar from "./NavigationBar";
// import ImageCarousel from "./ImageCarousel";
// import Footer from "./Footer";
// import Testimonials from "./testimonial";

// // const [showSuccessModal, setShowSuccessModal] = useState(false);

// class CustomerList extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       customers: [],
//       selectedCustomerId: null,
//       selectCustomer: null,
//       showModal: false,
//       error: null,
//       formData:{
//         name:'',
//         email:'',
//         phone:''
//       }
//     };
//   }

//   componentDidMount() {
//     this.fetchCustomers();
//   }

//   fetchCustomers = () => {
//     axios
//       .get("http://127.0.0.1:5000/customers")
//       .then((response) => {
//         this.setState({ customers: response.data });
//       })
//       .catch((error) => {
//         console.error("Error fetching data:", error);
//         this.setState({
//           error: "Error fetching customers. Please try again later.",
//         });
//       });
//   };

//   handleClose = () => {
//     this.setState({ showModal: false, selectCustomer: null });
//   };

//   selectCustomer = (id) => {
//     this.setState({ selectedCustomerId: id });
//     this.props.onCustomerSelect(id);
//   };

//   displayCustomer = (customer_id) => {
//     axios
//       .get(`http://127.0.0.1:5000/customers/${customer_id}`)
//       .then((response) => {
//         this.setState({ selectCustomer: response.data, showModal: true });
//         console.log(response.data);
//       })
//       .catch((error) => {
//         console.error("Error fetching data:", error);
//         this.setState({
//           error: "Error fetching customers. Please try again later.",
//         });
//       });
//   };

//     updateCustomer = (customerId,formData) => {
//     axios
//       .put(`http://127.0.0.1:5000/customers/${customerId}`,formData)
//       .then((response) => {
//         this.fetchCustomers();
//         console.log(response.data);
//         this.handleClose();
//       })
//       .catch((error) => {
//         console.error("Error updating customer details:", error);
//         this.setState({
//           error:
//             "Error updating customer details!!",
//         });
//       });
//   };

//   deleteCustomer = (customerId) => {
//     axios
//       .delete(`http://127.0.0.1:5000/customers/${customerId}`)
//       .then((response) => {
//         this.fetchCustomers();
//       })
//       .catch((error) => {
//         console.error("Error deleting customer:", error);
//         this.setState({
//           error:
//             "Error deleting customer.The customer might be having related orders!!",
//         });
//       });
//   };

//   showUpdateModal = (customer) => {
//     this.setState({
//       formData: { name: customer.name, email: customer.email, phone: customer.phone },
//       selectedCustomerId: customer.customer_id,
//       showUpdateModal: true,
//     });
//   };

//   render() {
//     const { customers, selectCustomer, error, showModal,showUpdateModal,formData} = this.state;
//     return (
//       <div className="home-page">
//         <NavigationBar />
//         <ImageCarousel />
//         <Container>
//           <Row>
//             <Col>
//               {error && <Alert variant="danger">{error}</Alert>}
//               <h3
//                 style={{
//                   background: "linear-gradient(to right,pink,yellow)",
//                 }}
//                 className="mt-3 mb-3 text-center bg-warning"
//               >
//                 Customers
//               </h3>
//               <ListGroup
//                 style={{
//                   background: "linear-gradient(to right,brown,teal)",
//                   padding: "25px",
//                   borderRadius: "10px",
//                   boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
//                   marginTop: "20px",
//                   fontFamily: "Times New Roman",
//                   fontSize: "20px",
//                 }}
//               >
//                 <>
//                   {customers.map((customer) => (
//                     <ListGroup.Item
//                       key={customer.customer_id}
//                       className="d-flex justify-content-between py-3 alert-success align-items-center shadow-sm p-3 mb-3 bg-light rounded-6"
//                     >
//                       <Link
//                         to={`/edit-customer/${customer.customer_id}`}
//                         className="text-success"
//                       >
//                         {customer.name}
//                       </Link>

//                       <ListGroup.Item
//                         style={{ color: "DarkBlue", boxShadow: "7px 7px" }}
//                         key={customer.name}
//                       >
//                         #{customer.customer_id} - ({customer.name} ,{" "}
//                         {customer.phone} , {customer.email} )
//                       </ListGroup.Item>

//                       <div>
//                         <Button
//                           variant="primary"
//                           onClick={() =>
//                             this.displayCustomer(customer.customer_id)
//                           }
//                           className="me-2"
//                         >
//                           Display Details
//                         </Button>
//                         <Button
//                           variant="primary"
//                           onClick={() =>
//                             this.showUpdateModal(customer)
//                           }
//                           className="me-2"
//                         >
//                           Update Details
//                         </Button>
//                         <Button
//                           variant="outline-danger"
//                           size="sm"
//                           onClick={() =>
//                             this.deleteCustomer(customer.customer_id)
//                           }
//                         >
//                           Delete
//                         </Button>
//                       </div>
//                     </ListGroup.Item>
//                   ))}
//                 </>
//               </ListGroup>

//               {/* Render selected customer details */}
//               {/* Modal to display customer details */}
//               <Modal
//                 show={showModal}
//                 onHide={this.handleClose}
//                 style={{
//                   backgroundColor: "orange",
//                   fontFamily: "Times New Roman",
//                 }}
//               >
//                 <Modal.Header closeButton>
//                   <Modal.Title
//                     style={{ color: "Brown", fontFamily: "Times New Roman" }}
//                   >
//                     Customer Details
//                   </Modal.Title>
//                 </Modal.Header>
//                 <Modal.Body
//                   style={{ color: "Purple", fontFamily: "Times New Roman" }}
//                 >
//                   {selectCustomer && (
//                     <>
//                       <p>
//                         <strong>ID:</strong> {selectCustomer.customer_id}
//                       </p>
//                       <p>
//                         <strong>Name:</strong> {selectCustomer.name}
//                       </p>
//                       <p>
//                         <strong>Email:</strong> {selectCustomer.email}
//                       </p>
//                       <p>
//                         <strong>Phone:</strong> {selectCustomer.phone}
//                       </p>
//                       {/* Add more fields as necessary */}
//                     </>
//                   )}
//                 </Modal.Body>
//               </Modal>
//             </Col>
//           </Row>
//           <Testimonials />
//           <Footer />
//         </Container>
//       </div>
//     );
//   }
// }

// export default CustomerList;


import React, { Component } from "react";
import { Link } from "react-router-dom";
import { useParams, useNavigate } from "react-router-dom";
import {
  ListGroup,
  Button,
  Container,
  Alert,
  Row,
  Col,
  Modal,
  Form,
} from "react-bootstrap";
import axios from "axios";
import NavigationBar from "./NavigationBar";
import ImageCarousel from "./ImageCarousel";
import Footer from "./Footer";
import Testimonials from "./testimonial";


class CustomerList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      customers: [],
      selectedCustomerId: null,
      selectCustomer: null,
      showModal: false,
      showUpdateModal: false,
      error: null,
      formData: {
        name: '',
        email: '',
        phone: ''
      }
    };
  }

  componentDidMount() {
    this.fetchCustomers();
  }

  fetchCustomers = () => {
    axios
      .get("http://127.0.0.1:5000/customers")
      .then((response) => {
        this.setState({ customers: response.data });
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        this.setState({
          error: "Error fetching customers. Please try again later.",
        });
      });
  };

  handleClose = () => {
    this.setState({ showModal: false, showUpdateModal: false, selectCustomer: null });
  };

  displayCustomer = (customer_id) => {
    axios
      .get(`http://127.0.0.1:5000/customers/${customer_id}`)
      .then((response) => {
        this.setState({ selectCustomer: response.data, showModal: true });
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        this.setState({
          error: "Error fetching customers. Please try again later.",
        });
      });
  };

  handleInputChange = (e) => {
    const { name, value } = e.target;
    this.setState((prevState) => ({
      formData: {
        ...prevState.formData,
        [name]: value,
      },
    }));
  };

  showUpdateModal = (customer) => {
    this.setState({
      formData: { name: customer.name, email: customer.email, phone: customer.phone },
      selectedCustomerId: customer.customer_id,
      showUpdateModal: true,
    });
  };

  updateCustomer = () => {
    const { selectedCustomerId, formData } = this.state;
    axios
      .put(`http://127.0.0.1:5000/customers/${selectedCustomerId}`, formData)
      .then((response) => {
        this.fetchCustomers();
        this.handleClose();
      })
      .catch((error) => {
        console.error("Error updating customer details:", error);
        this.setState({
          error: "Error updating customer details!!",
        });
      });
  };

  deleteCustomer = (customerId) => {
    axios
      .delete(`http://127.0.0.1:5000/customers/${customerId}`)
      .then((response) => {
        this.fetchCustomers();
      })
      .catch((error) => {
        console.error("Error deleting customer:", error);
        this.setState({
          error:
            "Error deleting customer. The customer might be having related orders!!",
        });
      });
  };

  render() {
    const { customers, selectCustomer, error, showModal, showUpdateModal, formData } = this.state;
    return (
      <div className="home-page">
        <NavigationBar />
        <ImageCarousel />
        <Container>
          <Row>
            <Col>
              {error && <Alert variant="danger">{error}</Alert>}
              <h3
                style={{
                  background: "linear-gradient(to right,pink,yellow)",
                }}
                className="mt-3 mb-3 text-center bg-warning"
              >
                Customers
              </h3>
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
                {customers.map((customer) => (
                  <ListGroup.Item
                    key={customer.customer_id}
                    className="d-flex justify-content-between py-3 alert-success align-items-center shadow-sm p-3 mb-3 bg-light rounded-6"
                  >
                    <Link
                      to={`/edit-customer/${customer.customer_id}`}
                      className="text-success"
                    >
                      {customer.name}
                    </Link>

                    <ListGroup.Item
                      style={{ color: "DarkBlue", boxShadow: "7px 7px" }}
                      key={customer.name}
                    >
                      #{customer.customer_id} - ({customer.name}, {customer.phone}, {customer.email})
                    </ListGroup.Item>

                    <div>
                      <Button
                        variant="primary"
                        onClick={() =>
                          this.displayCustomer(customer.customer_id)
                        }
                        className="me-2"
                      >
                        Display Details
                      </Button>
                      <Button
                        variant="primary"
                        onClick={() =>
                          this.showUpdateModal(customer)
                        }
                        className="me-2"
                      >
                        Update Details
                      </Button>
                      <Button
                        variant="outline-danger"
                        size="sm"
                        onClick={() =>
                          this.deleteCustomer(customer.customer_id)
                        }
                      >
                        Delete
                      </Button>
                    </div>
                  </ListGroup.Item>
                ))}
              </ListGroup>

              {/* Modal to display customer details */}
              <Modal
                show={showModal}
                onHide={this.handleClose}
                style={{
                  backgroundColor: "orange",
                  fontFamily: "Times New Roman",
                }}
              >
                <Modal.Header closeButton>
                  <Modal.Title
                    style={{ color: "Brown", fontFamily: "Times New Roman" }}
                  >
                    Customer Details
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body
                  style={{ color: "Purple", fontFamily: "Times New Roman" }}
                >
                  {selectCustomer && (
                    <>
                      <p>
                        <strong>ID:</strong> {selectCustomer.customer_id}
                      </p>
                      <p>
                        <strong>Name:</strong> {selectCustomer.name}
                      </p>
                      <p>
                        <strong>Email:</strong> {selectCustomer.email}
                      </p>
                      <p>
                        <strong>Phone:</strong> {selectCustomer.phone}
                      </p>
                      {/* Add more fields as necessary */}
                    </>
                  )}
                </Modal.Body>
              </Modal>

              {/* Modal to update customer details */}
              <Modal
                show={showUpdateModal}
                onHide={this.handleClose}
                style={{
                  backgroundColor: "orange",
                  fontFamily: "Times New Roman",
                }}
              >
                <Modal.Header closeButton>
                  <Modal.Title
                    style={{ color: "Brown", fontFamily: "Times New Roman" }}
                  >
                    Update Customer Details
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body
                  style={{ color: "Purple", fontFamily: "Times New Roman" }}
                >
                  <Form>
                    <Form.Group controlId="formName">
                      <Form.Label>Name</Form.Label>
                      <Form.Control
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={this.handleInputChange}
                      />
                    </Form.Group>
                    <Form.Group controlId="formEmail">
                      <Form.Label>Email</Form.Label>
                      <Form.Control
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={this.handleInputChange}
                      />
                    </Form.Group>
                    <Form.Group controlId="formPhone">
                      <Form.Label>Phone</Form.Label>
                      <Form.Control
                        type="text"
                        name="phone"
                        value={formData.phone}
                        onChange={this.handleInputChange}
                      />
                    </Form.Group>
                    <Button
                      variant="primary"
                      onClick={this.updateCustomer}
                      className="mt-3"
                    >
                      Update
                    </Button>
                  </Form>
                </Modal.Body>
              </Modal>
              </Col>
          </Row>
          <Testimonials />
           <Footer />
        </Container>
       </div>
     );
   }
  }

  export default CustomerList;