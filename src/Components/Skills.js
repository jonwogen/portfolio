import {Col, Row} from 'react-bootstrap';
import { Image,} from 'react-bootstrap';
import logo from '../logo.svg';
import beardo1 from '../beardo-1.svg';
import beardo2 from '../beardo-2.svg';
import beardo3 from '../beardo-3.svg';
import beardo4 from '../beardo-4.svg';

function Skills() {
	return (
		<Col >
			<h2>Skills</h2>
			<Row className="d-flex flex-row mt-2">
			<Col xs sm={2} className="skills d-flex flex-column justify-content-between">
				<Image src={logo} height={35}/>
				<Image src={beardo4} height={35}/>
				<Image src={beardo3} height={35}/>
				<Image src={beardo2} height={35}/>
				<Image src={beardo1} height={35}/>
			</Col>
			<Col xs sm={10}className="skills d-flex flex-column justify-content-between">
			<ul>
				<li>HTML / CSS / SASS</li>
				<li>PHP / WORDPRESS</li>
				<li>JAVASCRIPT / JQUERY</li>
				<li>BOOTSTRAP / GIT</li>
				<li>MYSQL / MSSQL / MARIADB</li>
				<li>ADOBE CREATIVE SUITE</li>
				<li>RESPONSIVE / UX DESIGN</li>
				<li>SLACK API / TWILIO API</li>
				<li>REST API INTEGRATIONS, ETC</li>
				<li>SEO / ANALYTICS ETC.</li>
				<li>NODEJS</li>
				<li>REACTJS / TYPESCRIPT</li>
				<li>COBOL / JCL / DB2</li>
			</ul>
			</Col>
			</Row>
		</Col>
	);
}
 
export default Skills;