import { Component } from 'react';
import { Container, Row, Col, Form } from 'react-bootstrap';
import SingleBook from './SingleBook';

class BookList extends Component {
  state = {
    searchQuery: ''
  };

  render() {
    return (
      <Container>
        <Row className="justify-content-center my-4">
          <Col md={6}>
            <Form.Group>
              <Form.Label className="fw-bold">Cerca un libro:</Form.Label>
              <Form.Control
                type="text"
                placeholder="Esempio: The Witcher..."
                value={this.state.searchQuery}
                // Aggiorniamo lo stato mentre l'utente scrive
                onChange={(e) => this.setState({ searchQuery: e.target.value })}
              />
            </Form.Group>
          </Col>
        </Row>

        <Row className="g-3">
          {/* FILTRIAMO i libri prima di mapparli */}
          {this.props.books
            .filter((b) => 
              b.title.toLowerCase().includes(this.state.searchQuery.toLowerCase())
            )
            .map((b) => (
              // Passiamo ogni singolo libro al componente figlio come prop
              <SingleBook key={b.asin} libro={b} />
            ))
          }
        </Row>
      </Container>
    );
  }
}

export default BookList;