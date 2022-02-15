import { useState } from "react";
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
import Cookies from "js-cookie";

import axios from "axios";

const CheckoutForm = ({ price, title }) => {
	const stripe = useStripe();
	const elements = useElements();

	const [completed, setCompleted] = useState(false);

	const handleSubmit = async (event) => {
		try {
			event.preventDefault();
			const cardElement = elements.getElement(CardElement);

			const stripeResponse = await stripe.createToken(cardElement, {
				name: `${Cookies.get("vinted-id")}`,
			});
			const stripeToken = stripeResponse.token.id;

			const response = await axios.post(
				"https://vinted-fullstack-app.herokuapp.com/payment",
				{
					token: stripeToken,
					title: title,
					amount: price,
				}
			);
			console.log(response.data);

			if (response.data.status === "succeeded") {
				setCompleted(true);
			}
		} catch (error) {}
	};

	return (
		<>
			{!completed ? (
				<form onSubmit={handleSubmit}>
					<CardElement />
					<button type="submit">Valider</button>
				</form>
			) : (
				<span>Paiement effectué ! </span>
			)}
		</>
	);
};

export default CheckoutForm;
