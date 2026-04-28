import "bootstrap/dist/css/bootstrap.min.css";
import MyNavbar from "./assets/components/navbar";
import MyFooter from "./assets/components/footer";
import { Container, Row, Col } from "react-bootstrap";
import MyBooks from "./assets/components/AllTheBooks";

function App() {
  return (
    <>
     <div className="d-flex flex-column min-vh-100">
       <header>
         <MyNavbar />
       </header>
       
       <main className="flex-grow-1">
         <Container>
           <Row className="mt-5">
             <Col xs= {12} md={6}>
             <MyBooks />
             </Col>
           </Row>
         </Container>
       </main>
       <footer>
         <MyFooter />
       </footer>
     </div>
    </>
  );
}

export default App;
