// import React from "react";
// import "./AppStyles.css";
// import NavigationBar from "./NavigationBar";
// import Nav from "./Nav";


// export function Home() {
//   return (
//     <div className="home-page">
//       {/* <NavigationBar /> */}
//       <Nav/>
//       {/* <Jumbotron fluid>
//         <Container>
//           <h1>Fluid jumbotron !</h1>
//           <p>
//             This is a modified fluid jumbotron which stretches the whole
//             horizontal space.
//           </p>
//           <Button variant="primary">Primary Button</Button>
//         </Container>
//       </Jumbotron>
//       <h1> Welcome to our Super Cool Shopping App</h1>
//       <p>
//         {" "}
//         Where prices are fair and inflation hasnt hit us yet! You are welcome
//       </p> */}
//     </div>
//   );
// }

// export default Home;

import Footer from './Footer';
import React from "react";
import Nav from "./NavOne";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import {useNavigate} from 'react-router-dom';
import headphones from './wireless1.webp';
import smartWatch from './smartwatch.webp';
import laptop from './laptop.jpg'
import Testimonials from './testimonial';

export function Home() {
  const navigate = useNavigate();

  
const startShopping = () =>{
  navigate('/add-product');
};

  return (
    <div className="home-page">
      <Nav />
      <Container fluid>
        <Row className="my-5 bg-light">
          <Col>
            <h2 className="text-center text-bg-success">Super Cool Shopping App</h2>
            <p className="lead">
              Where prices are fair and inflation hasn't hit us yet! You are welcome.
            </p>
            <Button variant="primary" size="lg" onClick={startShopping}>Start Shopping</Button>
          </Col>
        </Row>

        <Row className="my-5 bg-light">
          <Col>
            <h2>Featured Products</h2>
          </Col>
        </Row>
        <Row className="my-3">
          <Col md={4}>
            <Card>
              <Card.Img variant="top" src={headphones} />
              <Card.Body>
                <Card.Title>Wireless Headphones</Card.Title>
                <Card.Text>
                  Experience high-quality sound without the wires. Perfect for music lovers on the go.
                </Card.Text>
                <Button variant="primary">Buy Now</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card>
              <Card.Img variant="top" src={smartWatch} />
              <Card.Body>
                <Card.Title>Smart Watch</Card.Title>
                <Card.Text>
                  Stay connected and track your fitness with this stylish and functional smart watch.
                </Card.Text>
                <Button variant="primary">Buy Now</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card>
              <Card.Img variant="top" src={laptop} />
              <Card.Body>
                <Card.Title>Gaming Laptop</Card.Title>
                <Card.Text>
                  Powerful gaming laptop with high-end specs for the ultimate gaming experience.
                </Card.Text>
                <Button variant="primary">Buy Now</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <div className="bg-light">
        <Testimonials/>
        </div>
        <Row className="my-5 bg-light">
          <Col>
            <h2>Why Shop With Us?</h2>
            <p>
              We offer the best products at unbeatable prices. Our customer service is top-notch and we guarantee satisfaction.
            </p>
          </Col>
        </Row>
        <Footer/>
      </Container>
    </div>
  );
}

export default Home;