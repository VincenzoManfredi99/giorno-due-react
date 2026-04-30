import { Component } from "react";

class CommentArea extends Component {
    render() {
        return (
            <div className="mt-2 text-dark">
        <h6>Commenti per il libro:</h6>
        <p>Qui caricheremo i commenti per l'ASIN: {this.props.asin}</p>
      </div>
        )
    }
}