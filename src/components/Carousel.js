import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Item from "../components/Item";
import defaultAvatar from "../assets/img/default-avatar.svg";

import "../styles/carousel.css";

const Carousel = ({ searchField, values, checked }) => {
	const [dataCarousel, setDataCarousel] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	let sortingFilter;
	if (checked === false) sortingFilter = "price-desc";
	else sortingFilter = "price-asc";

	useEffect(() => {
		const fetchDataCarousel = async () => {
			console.log(searchField);
			try {
				const response = await axios.get(
					`https://lereacteur-vinted-api.herokuapp.com/offers?title=${searchField}&sort=${sortingFilter}&priceMin=${values[0]}&priceMax=${values[1]}`
				);

				const newDataCarousel = response.data.offers;
				setDataCarousel(newDataCarousel);
				setIsLoading(false);
			} catch (error) {}
		};
		fetchDataCarousel();
	}, [searchField, sortingFilter, values]);

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
								avatar={
									elem.owner.account.avatar
										? elem.owner.account.avatar.secure_url
										: defaultAvatar
								}
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
