import React from "react";
import { Modal, Card, Button, Row, Col, Image } from "react-bootstrap";
import { workData } from "./data";
import tgsi from '../tgsinsurance-home.png';
import ListGroup from 'react-bootstrap/ListGroup';

export const Works = () => {
  const initialShowState = Object.fromEntries(
    workData.map((data) => [data.projectTitle, false])
  );
  const [show, setShow] = React.useState(initialShowState);
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
              <Modal
                show={show[data.projectTitle]}
                onHide={() => toggleShow(data.projectTitle)}
                dialogClassName="modal-95w"
              >
                <Modal.Header closeButton>
                  <Modal.Title>{data.projectTitle}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <Card>
                    <Image variant="top" thumbnail src={tgsi} />
                    <Card.Body>
                      <Card.Title>{data.projectTitle}</Card.Title>
                      <Card.Text>
                      {data.modalText}
                      </Card.Text>
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                      <ListGroup.Item>Cras justo odio</ListGroup.Item>
                      <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                      <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
                    </ListGroup>
                    <Card.Body>
                      <Card.Link href="#">Instant Homeowners Quote</Card.Link>
                      <Card.Link href="#">Another Link</Card.Link>
                    </Card.Body>
                  </Card>
                  <Image src={data.projectImage}></Image>
                  <p>{data.modalText}</p>
                  <Image src={data.modalImage}></Image>
                </Modal.Body>
              </Modal>
            </div>
          );
        })}
      </Row>
    </div>
  );
};