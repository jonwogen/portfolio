import {Col, Row} from 'react-bootstrap';
import WordCloud from 'react-d3-cloud';
import {wordCloud} from './SkillsData';

function Skills() {
	return (
		<Col >
			<h2>Skills</h2>
			<Row className="d-flex flex-row mt-2">
				<Col className="skills d-flex flex-column justify-content-between">
					<WordCloud data={wordCloud} width={500}
    height={500} padding={1}/>
				</Col>
			</Row>
		</Col>
	);
}
 
export default Skills;