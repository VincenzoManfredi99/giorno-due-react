import "bootstrap/dist/css/bootstrap.min.css";
import { Row, Col, Card } from "react-bootstrap";
import libriHorror from '../data/horror.json';

function MyBooks() {
  return (
    <Row className='mb-3 g-3'>
        <Col className='text-center col-12'>
        <h1>La mia libreria:</h1>
        </Col>
    {
       libriHorror.map((libro)=>{
        return (
        <Col className="col-4" key={libro.asin}>
            <Card>
            <Card.Img variant="top" src={libro.img} />
            <Card.Body>
            <Card.Title>{libro.title}</Card.Title>
            <Card.Text>
          {libro.price}
        </Card.Text>
      </Card.Body>
    </Card>
    </Col>
        )
       })
    }
    
    </Row>
  );
}

export default MyBooks;