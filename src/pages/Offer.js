import React from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import OfferCarousel from "../components/OfferCarousel";
import OfferDetails from "../components/OfferDetails";

import "../styles/offer.css";

const Offer = () => {
	const [offer, setOffer] = useState({});
	const [isLoading, setIsLoading] = useState(true);

	const id = useParams().id;
	useEffect(() => {
		const fetchData = async () => {
			const response = await axios.get(
				"https://lereacteur-vinted-api.herokuapp.com/offers"
			);
			setOffer(response.data.offers.find((elem) => elem._id === id));
			setIsLoading(false);
		};
		fetchData();
	}, []);

	return (
		<div className="offer-body">
			{isLoading ? (
				<div>Loading</div>
			) : (
				<div className="container1280">
					<div className="offer-container">
						<OfferCarousel pictureArr={offer.product_pictures} />
						<OfferDetails offer={offer} />
					</div>
				</div>
			)}
		</div>
	);
};

export default Offer;
