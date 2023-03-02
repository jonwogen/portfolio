import {React, useState} from "react";
import ListGroup from 'react-bootstrap/ListGroup';
import { Card, Button, Row, Col, Image } from "react-bootstrap";
import { workData } from "./data";
import tgsi from '../tgsinsurance-home.png';

function Works() {
  const initialShowState = Object.fromEntries(
    workData.map((data) => [data.projectTitle, false])
  );
  const [show, setShow] = useState(initialShowState);
  const toggleShow = (id) =>
    setShow((prev) => {
      return { ...prev, [id]: !prev[id] };
    });
  console.log({ show });
  return (
    <div className="work-container">
      <Row xs={1} md={2} lg={4} className="g-4">
        {workData.map((data, key) => {
          return (
            <div key={key}>
              <Col>
                <Card>
                  <Card.Img variant="top" src={data.projectImage} />
                  <Card.Body>
                    <Card.Title>{data.projectTitle}</Card.Title>
                    <Card.Text>with {data.projectTeam}</Card.Text>
                    <Button
                      variant="link"
                      onClick={() => toggleShow(data.projectTitle)}
                    >
                      {data.readMore}
                    </Button>
                  </Card.Body>
                  <Card.Footer>{data.tags}</Card.Footer>
                </Card>
              </Col>
        <Card show={show[data.projectTitle] ? show[data.projectTitle] : undefined}
                style={{ width: '18rem' }}>
          <Image variant="top" thumbnail src={tgsi} />
          <Card.Body>
            <Card.Title>{data.projectTitle}</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroup.Item>Cras justo odio</ListGroup.Item>
            <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
            <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
          </ListGroup>
          <Card.Body>
            <Card.Link href="#">Card Link</Card.Link>
            <Card.Link href="#">Another Link</Card.Link>
          </Card.Body>
        </Card>
            </div>
          );
        })}
      </Row>
    </div>
  );
};

export default Works;