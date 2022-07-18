import React from 'react';
import {Container,Row,Col} from 'react-bootstrap';

const Footer = () => {
  return (
    <footer>
      <Container>
        <Row>
            <Col className='text-center py-3' >
                Copyright &copy; Beauty online store<br></br>
            </Col>
        </Row>
        <Row>
          <Col className='text-center py-3' >
          ❤️contact with us❤️<br></br>
                📱 076584527<br></br>
                🏠 Matara ,Morawaka, Sri Lanka

          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer
