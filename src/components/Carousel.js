import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Item from "../components/Item";

import "../styles/carousel.css";

const Carousel = () => {
	const [dataCarousel, setDataCarousel] = useState([]);

	useEffect(() => {
		const fetchDataCarousel = async () => {
			try {
				const response = await axios.get(
					"https://lereacteur-vinted-api.herokuapp.com/offers"
				);
				const newDataCarousel = response.data.offers;
				setDataCarousel(newDataCarousel);
			} catch (error) {}
		};
		fetchDataCarousel();
	}, []);

	return (
		<div className="container1280">
			<div className="carousel-title">
				<h2>Articles populaires</h2>
				<span className="see-more-link">Voir tout</span>
			</div>
			<div className="carousel">
				{dataCarousel.map((elem, index) => {
					return (
						<Item
							key={elem._id}
							image={elem.product_image.secure_url}
							price={elem.product_price.toFixed(2)}
							brand={elem.product_details[0].MARQUE}
							id={elem._id}
						/>
					);
				})}
			</div>
		</div>
	);
};

export default Carousel;
