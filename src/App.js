import Container from "react-bootstrap/Container";
import 'bootstrap/dist/css/bootstrap.min.css';
import Tabs from './Components/Tabs/Tabs';

function App() {
  return (
    <Container fluid className="h-100 d-flex">
      <Tabs />
    </Container>
  );
}

export default App;
