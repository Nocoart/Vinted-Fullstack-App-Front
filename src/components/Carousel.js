import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Item from "../components/Item";

import "../styles/carousel.css";

const Carousel = ({ searchField }) => {
	const [dataCarousel, setDataCarousel] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		const fetchDataCarousel = async () => {
			console.log(searchField);
			try {
				const response = await axios.get(
					"https://lereacteur-vinted-api.herokuapp.com/offers"
				);
				let newDataCarousel;
				if (searchField === "") {
					newDataCarousel = response.data.offers;
				} else {
					newDataCarousel = response.data.offers.filter((elem) =>
						elem.product_name.toLowerCase().includes(searchField.toLowerCase())
					);
				}
				setDataCarousel(newDataCarousel);
				setIsLoading(false);
			} catch (error) {}
		};
		fetchDataCarousel();
	}, [searchField]);

	return (
		<div className="container1280">
			<div className="carousel-title">
				<h2>Articles populaires</h2>
				<span className="see-more-link">Voir tout</span>
			</div>
			<div className="carousel">
				{isLoading ? (
					<p>Loading</p>
				) : (
					dataCarousel.map((elem, index) => {
						return (
							<Item
								key={elem._id}
								image={elem.product_image.secure_url}
								price={elem.product_price.toFixed(2)}
								brand={elem.product_details[0].MARQUE}
								id={elem._id}
								avatar={elem.owner.account.avatar.secure_url}
								username={elem.owner.account.username}
							/>
						);
					})
				)}
			</div>
		</div>
	);
};

export default Carousel;
