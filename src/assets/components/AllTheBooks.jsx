import "bootstrap/dist/css/bootstrap.min.css";
import Card from 'react-bootstrap/Card';
import libriHorror from '../data/horror.json'
import { Row, Col } from "react-bootstrap";

function MyBooks() {
  return (
    <Row className='mb-3'>
        <Col className='text-center col-4'>
        <h1>La mia libreria:</h1>
    {
       libriHorror.map((libro)=>{
        return (
            <Card>
      <Card.Img variant="top" src={libro.img} />
      <Card.Body>
        <Card.Title>{libro.title}</Card.Title>
        <Card.Text>
          {libro.price}
        </Card.Text>
      </Card.Body>
    </Card>
        )
       })
    }
    </Col>
    </Row>
  );
}

export default MyBooks;