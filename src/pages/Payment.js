import React from "react";
import { useLocation } from "react-router-dom";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "../components/CheckoutForm";

import "../styles/payment.css";

const Payment = () => {
	const stripePromise = loadStripe(
		"pk_test_51KTXtXFglrGLcARct8NbG4L162zYtczAbmrFd6ncb9WOBrtHnrjdR3A5mA78OjpXbMmE5NYVXvSepmmWdzoOuwts00LYD7tiSx"
	);
	const location = useLocation();
	const { title, price } = location.state;

	const protectionFee = (4).toFixed(2);
	const deliveryFee = (8).toFixed(2);
	return (
		<div className="payment-body">
			<div className="payment-container">
				<div className="payment-card summary">
					<div className="title">Résumé de la commande</div>
					<div className="content">
						<ul>
							<li>
								Commande <span>{price} €</span>
							</li>
							<li>
								Frais de protection des acheteurs
								<span>{protectionFee} €</span>
							</li>
							<li>
								Frais de port <span>{deliveryFee} €</span>
							</li>
						</ul>
					</div>
					<div className="divider"></div>
					<div className="content">
						<ul>
							<li className="bold">
								Total{" "}
								<span>
									{(
										Number(price) +
										Number(protectionFee) +
										Number(deliveryFee)
									).toFixed(2)}{" "}
									€
								</span>
							</li>
						</ul>
					</div>
				</div>
				<div className="payment-card">
					<div className="content">
						Il ne vous reste plus qu'une étape pour vous offrir{" "}
						<span className="bold">{title}</span>. Vous allez payer{" "}
						<span className="bold">
							{(
								Number(price) +
								Number(protectionFee) +
								Number(deliveryFee)
							).toFixed(2)}{" "}
							€
						</span>{" "}
						(frais de protection et frais de port inclus)
						<div className="divider"></div>
						<Elements stripe={stripePromise}>
							<CheckoutForm price={price} title={title} />
						</Elements>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Payment;
