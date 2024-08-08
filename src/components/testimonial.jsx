import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

// Example images for testimonials
const testimonialImages = {
  jane: 'https://via.placeholder.com/50x50.png?text=Jane',
  john: 'https://via.placeholder.com/50x50.png?text=John',
  emily: 'https://via.placeholder.com/50x50.png?text=Emily',
};

const testimonials = [
  {
    text: "Great selection and fast shipping! I love my new headphones.",
    name: "Jane Doe",
    image: testimonialImages.jane,
  },
  {
    text: "The smart watch exceeded my expectations. Highly recommend!",
    name: "John Smith",
    image: testimonialImages.john,
  },
  {
    text: "Fantastic service and quality products. Will shop again!",
    name: "Emily Johnson",
    image: testimonialImages.emily,
  },
];

const Testimonials = () => {
  return (
    <Container className="my-5">
      <h2 className="text-center mb-4">What Our Customers Say</h2>
      <Row>
        {testimonials.map((testimonial, index) => (
          <Col md={4} key={index} className="mb-4">
            <Card>
              <Card.Body>
                <div className="d-flex align-items-center">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="rounded-circle me-3" // Circle shape for the image
                    style={{ width: '50px', height: '50px' }} // Small size
                  />
                  <div>
                    <Card.Text>{testimonial.text}</Card.Text>
                    <footer className="blockquote-footer">{testimonial.name}</footer>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Testimonials;