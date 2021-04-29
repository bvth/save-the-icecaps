import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/cjs/Button";
import PropTypes from "prop-types";

;

export default function FormModal({modal, handleClose, handleSubmit, detail}) {
	const date = new Date();

	return <Modal show={modal} onHide={handleClose}>
		<Modal.Header closeButton>
			<Modal.Title>Confirmation</Modal.Title>
		</Modal.Header>
		<Modal.Body>
			<p>{`Thank you ${detail.name} for your generous donation!`}</p>
			<p>{`We will charge you ${detail.donation}€`} {detail.isSubscribed ? "monthly, starting from" : "on"} {`${date.getDate()}.${date.getMonth()}.${date.getFullYear()}`}</p>
		</Modal.Body>
		<Modal.Footer>
			<Button variant="secondary" onClick={handleClose}>
				Close
			</Button>
			<Button variant="primary" onClick={handleSubmit}>
				Donate
			</Button>
		</Modal.Footer>
	</Modal>;
}

FormModal.propTypes = {
	modal: PropTypes.bool.isRequired,
	handleClose: PropTypes.func.isRequired,
	handleSubmit: PropTypes.func.isRequired,
	detail: PropTypes.object
};