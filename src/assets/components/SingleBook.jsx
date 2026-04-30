import { Component } from 'react'
import { Card, Col } from 'react-bootstrap'

class SingleBook extends Component {
  state = {
    selected: false
  }

  render() {
    const { libro } = this.props 

    return (
      <Col xs={12} md={4} lg={3}>
        <Card
          className="h-100 shadow-sm"
 
          style={{ 
            border: this.state.selected ? '3px solid red' : 'none',
            cursor: 'pointer' 
          }}

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