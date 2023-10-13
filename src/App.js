import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Heading from "./components/Heading";
import Subheading from "./components/Subheading";
import { Container } from "react-bootstrap";

function App() {
  return (
    <div>
      <Container>
        <Heading></Heading>
        <Subheading></Subheading>
      </Container>
    </div>
  );
}

export default App;
