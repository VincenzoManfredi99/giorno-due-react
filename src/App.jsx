import "bootstrap/dist/css/bootstrap.min.css";
import MyNavbar from "./assets/components/navbar";
import MyFooter from "./assets/components/footer";
import { Container } from "react-bootstrap";
// Importa i dati dei libri
import horrorBooks from "./assets/data/horror.json"; 

import BookList from "./assets/components/BookList";

function App() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <header>
        <MyNavbar />
      </header>

      <main className="flex-grow-1">
        <Container>
          {}
          <BookList books={horrorBooks} />
        </Container>
      </main>

      <footer>
        <MyFooter />
      </footer>
    </div>
  );
}

export default App;