import { React, useState } from "react";
import { Row, Col } from 'react-bootstrap';
import CardSample from "./Card";
import {GiBulletBill} from "react-icons/gi";

function Experience() {

	const [show, setShow] = useState(false);

	return (
		<>
			<Col xs className=""><h2>Experience</h2></Col>
			<article>
				<Row className="">
					<ul>THE GO SOLUTION - SENIOR WEB DEVELOPER
						<li>SEPTEMBER 2020 - FEBRUARY 2023
							<ul>
								<li className="pointer li-data" onClick={ () => setShow(!show) }><GiBulletBill className="bullet-bill engaged"/>Created an automated insurance quoting system with 5-10 insurance carriers issuing bindable quotes in less than 10 seconds, using PHP, JavaScript, MS SQL, REST API, GraphQL and other technologies</li>
								{show ? <CardSample cardType={0} /> : null}
								<li ><GiBulletBill className="bullet-bill"/>Integrated the quoting system with Twilio to send and receive texts to and from customers and prospects via the Slack API interface, displaying queues in auto-updating Node.js dashboards</li>
								<li><GiBulletBill className="bullet-bill"/>Mentored and led the development team and cooperated with sales, IT, and other departments to provide the best user experience, functionality, and customer service, allowing multiple business units to prosper</li>
								<li><GiBulletBill className="bullet-bill"/>Disrupted the insurance agency business with these tools growing in a few short years from onset to 18,000+ customers, $20+ million in premium, and more than $7 billion dollars in insured value</li>
							</ul>
						</li>
					</ul>
				</Row>
			</article>
			<article>
				<Row>	
					<ul>THE GO SOLUTION - WEB DEVELOPER
						<li>JULY 2016 - AUGUST 2020
							<ul>
							<li><GiBulletBill className="bullet-bill"/>Developed and maintained 15+ WordPress websites, using custom themes, connecting each to our CMS, Twilio texting system, MailChimp, analytics and other third party lead generating systems</li>
							<li><GiBulletBill className="bullet-bill"/>Utilized SASS, Bootstrap, PHP, JavaScript, jQuery, Node.js, MySQL, REST and other tools in development, UAT and live environments, using Git version control</li>
							<li><GiBulletBill className="bullet-bill"/>Exemplified strict attention to detail and strove for the cleanest most concise coding solutions when possible</li>
							<li><GiBulletBill className="bullet-bill"/>Engaged in marketing strategy and design on a creative team, with strong focus on SEO, optimization and user experience</li>
							</ul>
						</li>
					</ul>
				</Row>
			</article>
			<article>
				<Row>
					<ul>FREELANCE AND CONTRACT DEVELOPER
						<li>MARCH 2013 - PRESENT
							<ul>
							<li><GiBulletBill className="bullet-bill"/>Utilize Adobe Creative Suite, HTML5, CSS3, PHP, JavaScript and others in developing pixel-perfect pages and graphic designs</li>
							<li><GiBulletBill className="bullet-bill"/>Clean up code, markup and styling on websites and optimize pages for SEO standards</li>
							<li><GiBulletBill className="bullet-bill"/>Troubleshoot issues with websites in a variety of environments</li>
							<li><GiBulletBill className="bullet-bill"/>Worked with Valimail, Power Objects, ClickMD Marketing and other large and small businesses</li>
							</ul>
						</li>
					</ul>
				</Row>
			</article>
			<article>
				<Row>
				<ul>ELAVON - APPLICATION DEVELOPER 2
					<li>SEPTEMBER 2013 - MARCH 2015
						<ul>
						<li><GiBulletBill className="bullet-bill"/>Assisted in development, testing, implementation, and support of merchant payment and other application systems</li>
						<li><GiBulletBill className="bullet-bill"/>Wrote tech designs, coded in COBOL and JCL, and tested computer programs in unit, integration and UAT environments</li>
						<li><GiBulletBill className="bullet-bill"/>Worked with detailed program specifications using standard procedures and techniques to bring projects from conception to completion</li>
						</ul>
					</li>
				</ul>
			</Row>
		</article>
	</>
	);
}

export default Experience;