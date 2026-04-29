import { Component } from 'react' // 1. Deve essere Component (singolare)
import { Card, Col } from 'react-bootstrap'

class SingleBook extends Component {
  // Tappa 1: Lo Stato
  state = {
    selected: false
  }

  render() { // 2. CONTROLLA QUI: Deve avere le tonde () e poi la graffa {
    // Tappa 2: Le Props
    // Se questa riga manca o il nome è diverso da quello in BookList, crasha!
    const { libro } = this.props 

    return (
      <Col xs={12} md={4} lg={3}>
        <Card
          className="h-100 shadow-sm"
          // Tappa 3: Lo stile dinamico
          // Se scrivi "style={...}" con una sola graffa invece di due, si rompe.
          style={{ 
            border: this.state.selected ? '3px solid red' : 'none',
            cursor: 'pointer' 
          }}
          // Tappa 4: L'aggiornamento
          onClick={() => this.setState({ selected: !this.state.selected })}
        >
          <Card.Img variant="top" src={libro.img} />
          <Card.Body>
            <Card.Title className="text-dark">{libro.title}</Card.Title>
          </Card.Body>
        </Card>
      </Col>
    )
  }
}

export default SingleBook