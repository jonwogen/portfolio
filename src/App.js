import NavBarJw from './Components/NavBar';
import Objective from './Components/Objective';
import Experience from './Components/Experience';
import Education from './Components/Education';
import { Container, Row, Col } from "react-bootstrap";
import { Paper } from '@mui/material';

// import CardSample from './Components/Card';
import Skills from "./Components/Skills";


function App() {
  return (
    <Container className="">
      <header>
        <NavBarJw />
      </header>
      <section className="">
        <Row className="d-flex flex-row">
          <Col xxs={12} sm={12} md={9}>
            <Paper className="p-3 w-100 d-flex align-items-center" elevation={5}>
              <Objective />
            </Paper>
            <Paper className="p-3 w-100 mt-2" elevation={5}>
              <Education />
            </Paper>
          </Col>
          <Col className="order-3 mt-2 mt-md-0" xs sm={12} md={3}>
            <Paper className="p-3 w-100 h-100" elevation={5}>
              <Skills />
            </Paper>
          </Col>
        </Row>
      </section>
      <section className="">
        {/* <Container className=""> */}
          <Row className="d-flex m-0">
            <Paper className="p-3 w-100 mt-2" elevation={5}>
              <Experience />
            </Paper>
          </Row>
        {/* </Container> */}
      </section>
      <section className="">
        {/* <Container className=""> */}
          {/* <Row className="d-flex m-0">
            <Paper className="p-3 w-100 mt-2" elevation={5}>
              <Education />
            </Paper>
          </Row> */}
        {/* </Container> */}
      </section>
      {/* <CardSample /> */}
    </Container>
  );
}

export default App;
