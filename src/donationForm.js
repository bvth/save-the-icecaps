import React, {useState} from "react";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/cjs/Button";
import Modal from "react-bootstrap/Modal";

export default function DonationForm(props) {
	const initialState = {
		name: "",
		address: "",
		gender: "male",
		birthday: "",
		income: 0,
		donation: 1,
		isSubscribed: true,
		gdpr: true
	};

	const [state, setState] = useState(initialState);
	const [modal, setModal] = useState(false);

	const date = new Date();

	const handleInputChange = e => {
		setState({
			...state,
			[e.target.name]: e.target.value
		});
	};

	const handleCheckChange = e => {
		setState({
			...state,
			[e.target.name]: e.target.checked
		});
	};

	const handleSubmit = e => {
		e.preventDefault();
		console.log(state);
		handleClose();
	};

	const handleClose = () => {
		setModal(false);
	};

	const showModal = e => {
		e.preventDefault();
		setModal(true);
	};

	return <>
		<Form onSubmit={showModal}>
			<Form.Group>
				<Form.Label>
					Name
				</Form.Label>
				<Form.Control value={state.name} name={"name"} onChange={handleInputChange}/>
			</Form.Group>
			<Form.Group>
				<Form.Label>
					Address
				</Form.Label>
				<Form.Control value={state.address} name={"address"} onChange={handleInputChange}/>
			</Form.Group>
			<Form.Row>
				<Col>
					<Form.Group>
						<Form.Label>
							Gender
						</Form.Label>
						<Form.Control as={"select"} name={"gender"} value={state.gender} onChange={handleInputChange}>
							<option value={"male"}>Male</option>
							<option value={"female"}>Female</option>
						</Form.Control>
					</Form.Group>
				</Col>
				<Col>
					<Form.Group>
						<Form.Label>
							Day of birth
						</Form.Label>
						<Form.Control
							type={"date"} name={"birthday"} value={state.birthday}
							onChange={handleInputChange}/>
					</Form.Group>
				</Col>
				<Col>
					<Form.Group>
						<Form.Label>
							Income
						</Form.Label>
						<Form.Control
							type={"number"} name={"income"} value={state.income}
							min={0} onChange={handleInputChange}/>
					</Form.Group>
				</Col>
			</Form.Row>
			<Form.Row>
				<Col>
					<Form.Group>
						<Form.Label>
							Donation
						</Form.Label>
						<Form.Control
							type={"number"} value={state.donation} name={"donation"}
							onChange={handleInputChange}
							min={1}/>
					</Form.Group>
				</Col>
				<Col>
					<Form.Group>
						<Form.Check
							checked={state.isSubscribed}
							name={"isSubscribed"}
							onChange={handleCheckChange}
							label={"Subscribe to our newsletter and make recurring donations (Uncheck this to show us that you hate polar bears and opt out recurring donation)"}/>
					</Form.Group>
				</Col>
			</Form.Row>
			<Form.Group>
				<Form.Check
					required
					checked={state.gdpr}
					name={"gdpr"}
					onChange={handleCheckChange}
					label="Agree to terms and conditions, GDPR and stuff"
					feedback="You must agree before submitting."/>
			</Form.Group>
			<Button type={"submit"}>Submit</Button>
		</Form>
		<Modal show={modal} onHide={handleClose}>
			<Modal.Header closeButton>
				<Modal.Title>Confirmation</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<p>{`Thank you ${state.name} for your generous donation!`}</p>
				<p>{`We will charge you ${state.donation}€`} {state.isSubscribed ? "monthly, starting from" : "on"} {`${date.getDate()}.${date.getMonth()}.${date.getFullYear()}`}</p>
			</Modal.Body>
			<Modal.Footer>
				<Button variant="secondary" onClick={handleClose}>
					Close
				</Button>
				<Button variant="primary" onClick={handleSubmit}>
					Donate
				</Button>
			</Modal.Footer>
		</Modal>
	</>;
}