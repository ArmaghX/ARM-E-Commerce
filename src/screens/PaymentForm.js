import React, { useState } from "react";
import { useHistory } from "react-router";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import axios from "axios";

const CARD_OPTIONS = {
	iconStyle: "solid",
	style: {
		base: {
			iconColor: "#c4f0ff",
			color: "#fff",
			fontWeight: 500,
			fontFamily: "Roboto, Open Sans, Segoe UI, sans-serif",
			fontSize: "16px",
			fontSmoothing: "antialiased",
			":-webkit-autofill": { color: "#fce883" },
			"::placeholder": { color: "#87bbfd" },
		},
		invalid: {
			iconColor: "#ffc7ee",
			color: "#ffc7ee",
		},
	},
};

const PaymentForm = () => {
	const [success, setSuccess] = useState(false);
	const stripe = useStripe();
	const elements = useElements();
	let history = useHistory();

	const handleSubmit = async (event) => {
		event.preventDefault();

		if (!stripe || !elements) return;

		const { error, paymentMethod } = await stripe.createPaymentMethod({
			type: "card",
			card: elements.getElement(CardElement),
		});

		if (!error) {
			try {
				const { id } = paymentMethod;
				const response = await axios.post(
					"http://localhost:4000/api/stripe/payment",
					{
						amount: 1000,
						id,
					}
				);

				if (response.data.success) {
					console.log("Successful payment");
					setSuccess(true);
					history.push({
						pathname: "/success",
						data: response.data,
					});
				}
			} catch (error) {
				console.log("Error: ", error);
			}
		} else {
			console.log(error.message);
		}
	};

	return (
		<>
			{!success ? (
				<form onSubmit={handleSubmit}>
					<fieldset className="FormGroup">
						<div className="FormRow">
							<CardElement options={CARD_OPTIONS} />
						</div>
					</fieldset>
					<button>Pay</button>
				</form>
			) : (
				<center>Processing. Please wait...</center>
			)}
		</>
	);
};

export default PaymentForm;
