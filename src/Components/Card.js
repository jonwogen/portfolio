
import ListGroup from 'react-bootstrap/ListGroup';
import {Row, Col, Image, Container, Card } from "react-bootstrap";

// import tgsi from '../tgsinsurance-home.png';
import { workData } from "./data";
// import { style } from '@mui/system';
// import { React, useState } from "react";




function CardSample() {
	// const initialShowState = Object.fromEntries(
	// 	workData.map((data) => [data.projectTitle, false])
	// );
	// const [show, setShow] = useState(initialShowState);

	return (
		<Container className="work-container">
			<Row xs className="">
				{workData.map((data, key) => {
					return (            
						<Card key={key} className="my-3 flex-column">
							<Row className='g-0 flex-row'>
								<Col xs={12} md={6} lg={5} className="g-0">
									<Image className="" src='http://via.placeholder.com/50X50' />
								</Col>
								<Col>
									<Card.Body>
										<Card.Title>{data.projectTitle}</Card.Title>

											<ListGroup className="list-group-flush">
											{Object.keys(data.listItems).map((items, key2) => (
													<ListGroup.Item key={key2}>{data.listItems[items]}</ListGroup.Item>
											))}
											</ListGroup>

										{Object.keys(data.links).map((subitems, key3) => (
												<Card.Link key={key3} className="card-links" href={data.links[subitems].link} target="_blank" rel="noopener noreferrer">{data.links[subitems].name}</Card.Link>
										))}
									</Card.Body>
								</Col>
							</Row>
						</Card>
					)
				})}
			</Row>
		</Container>
	);
}

export default CardSample;