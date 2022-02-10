import React from "react";
import { Link } from "react-router-dom";

const Item = ({ image, price, brand, id }) => {
	return (
		<Link to={`/offer/${id}`} className="carousel-link">
			<div className="carousel-item">
				<img className="carousel-item-image" src={image} alt="" />
				<p className="carousel-item-price">{price} €</p>
				<p className="carousel-item-brand">{brand}</p>
			</div>
		</Link>
	);
};

export default Item;
