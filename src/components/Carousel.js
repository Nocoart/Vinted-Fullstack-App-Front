import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Item from "../components/Item";
import defaultAvatar from "../assets/img/default-avatar.svg";

import "../styles/carousel.css";
import ChoosePage from "./ChoosePage";

const Carousel = ({
	searchField,
	finalValues,
	checked,
	offerByPage,
	currentPage,
	setCurrentPage,
}) => {
	const [dataCarousel, setDataCarousel] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const [foundOfferCount, setFoundOfferCount] = useState();

	let sortingFilter;
	if (checked === false) sortingFilter = "price-desc";
	else sortingFilter = "price-asc";

	useEffect(() => {
		const fetchDataCarousel = async () => {
			console.log(searchField);
			try {
				const response = await axios.get(
					`https://lereacteur-vinted-api.herokuapp.com/offers?title=${searchField}&sort=${sortingFilter}&priceMin=${finalValues[0]}&priceMax=${finalValues[1]}&limit=${offerByPage}&page=${currentPage}`
				);

				const newDataCarousel = response.data.offers;
				setDataCarousel(newDataCarousel);
				setFoundOfferCount(response.data.count);
				setIsLoading(false);
			} catch (error) {}
		};
		fetchDataCarousel();
	}, [searchField, sortingFilter, finalValues, offerByPage, currentPage]);

	return (
		<div className="container1280">
			<div className="carousel-title">
				<h2>Articles populaires</h2>
				<ChoosePage
					currentPage={currentPage}
					setCurrentPage={setCurrentPage}
					offerByPage={offerByPage}
					foundOfferCount={foundOfferCount}
				/>
				<span className="see-more-link">Voir tout</span>
			</div>
			<div className="carousel">
				{isLoading ? (
					<p>Loading</p>
				) : (
					dataCarousel.map((elem) => {
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
			<ChoosePage
				currentPage={currentPage}
				setCurrentPage={setCurrentPage}
				offerByPage={offerByPage}
				foundOfferCount={foundOfferCount}
			/>
		</div>
	);
};

export default Carousel;
