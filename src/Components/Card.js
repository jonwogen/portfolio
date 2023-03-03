import {Row, Col, Image, Container, Card,ListGroup } from "react-bootstrap";
import { workData } from "./Data";

function CardSample(cardType) {
	let x = cardType.cardType;
	return (
		workData.map((data, index) => {
			return x === index ? 
			<Container key={index} className="work-container">
				<Row xs className="">
					<Card className="my-3 flex-column">
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
				</Row>
			</Container>
		: null
		}
	))
}
export default CardSample;