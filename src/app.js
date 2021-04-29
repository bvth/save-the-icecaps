import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import DonationForm from "./donationForm";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function App(props) {
	return <Container>
		<Row className="justify-content-md-center">
			<Col md>
				<DonationForm/>
			</Col>
		</Row>
	</Container>;
}