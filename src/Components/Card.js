import {Row, Col, Image, Container, Card, ListGroup } from "react-bootstrap";
import { workData } from "./Data";
import { GiBulletBill } from "react-icons/gi";

function CardSample(cardType) {
	let x = cardType.cardType;
	return (
		workData.map((data, index) => {
			return x === index ? 
			<Container key={index} className="card-container">
				<Row xs className="">
					<Card className="my-3 flex-column">
						<Row className='g-0 flex-row'>
							<Col xs={12} md={6} lg={5} className={data.bgImage}>
								<Image className="img-hide-lg w-100" fluid src={data.projectImage} />
							</Col>
							<Col>
								<Card.Body>
									<Card.Title>{data.projectTitle}</Card.Title>
										<p>{data.projectDescription}</p>
										<ListGroup className="">
											{Object.keys(data.listItems).map((items, key2) => (
												<ListGroup.Item key={key2}>{data.listItems[items]}</ListGroup.Item>
											))}
										</ListGroup>
										<div>
										{Object.keys(data.links).map((subitems, key3) => (
												<Card.Link key={key3} className="card-links card-link" href={data.links[subitems].link} target="_blank" rel="noopener noreferrer"><GiBulletBill className="bullet-bill-inner"/>{data.links[subitems].name}</Card.Link>
										))}
										</div>
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