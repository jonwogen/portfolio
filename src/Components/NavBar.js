import Container from 'react-bootstrap/Container';
import logo from '../logo.svg';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../Main.scss';
import { MdLocalPhone } from 'react-icons/md';
import { MdOutlineEmail } from 'react-icons/md';

function NavBarJw() {
  return (
		<>
			<Container className="header-container">
				<Row className="header-row">
					<Col xs className="logo-col">
						<a href="#home">
							<img src={logo} width={90} className="" alt="My Logo" />
						</a>
					</Col>
					<Col xs className="">
						<h2>Jonathan Wogen</h2>
						<Row className="contact-row">
							<div className="contact-col">
								<a href="tel:+16125484942">
									<span className="d-none d-lg-flex">612-LIV-4WEB</span>
									<MdLocalPhone className="phone-icon d-lg-none"/>
								</a>
								<a href="tel:+16125484942">
									<span className="d-none d-lg-flex">548-4942</span>
								</a>
							</div>
							<div className="contact-col">
								<a href="mailto:connect@jonwogen.com">
									<span className="d-none d-lg-flex">connect@jonwogen.com</span>
									<MdOutlineEmail className="mail-icon d-lg-none"/>
								</a>
								<a href="#home">
									<span className="d-none d-lg-flex">jonwogen.com</span>
								</a>
							</div>
						</Row>
					</Col>
				</Row>
			</Container>
			</>
			

  );
}

export default NavBarJw;